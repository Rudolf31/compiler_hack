import React, { useEffect, useState } from "react";
import CodeEditorWindow from "./CodeEditorWindow";
import axios from "axios";
import { languageOptions } from "../constants/languageOptions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useKeyPress from "../hooks/useKeyPress";
import OutputWindow from "./OutputWindow";
import OutputDetails from "./OutputDetails";
import LanguagesDropdown from "./LanguagesDropdown";
import AnonymityButton from "./AnonymityButton";
import HeaderComponent from "./Header"


axios.post('http://localhost:8080/api/predict/getSample', {
  name: "user",
  data: "public static void helloWorld()",
  isSaveMode: false
})
  .then(response => {
    // Handle success
    console.log(response.data);
  })
  .catch(error => {
    // Handle error
    console.error(error);
  });


const javascriptDefault = `/**
* Problem: Binary Search: Search a sorted array for a target value.
*/

// Time: O(log n)
const binarySearch = (arr, target) => {
 return binarySearchHelper(arr, target, 0, arr.length - 1);
};

const binarySearchHelper = (arr, target, start, end) => {
 if (start > end) {
   return false;
 }
 let mid = Math.floor((start + end) / 2);
 if (arr[mid] === target) {
   return mid;
 }
 if (arr[mid] < target) {
   return binarySearchHelper(arr, target, mid + 1, end);
 }
 if (arr[mid] > target) {
   return binarySearchHelper(arr, target, start, mid - 1);
 }
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
console.log(binarySearch(arr, target));
`;

const Landing = () => {
  const [code, setCode] = useState(javascriptDefault);
  const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [language, setLanguage] = useState(languageOptions[0]);
  const [isAnonymous, setIsAnonymous] = useState(false);

  const enterPress = useKeyPress("Enter");
  const ctrlPress = useKeyPress("Control");

  const onSelectChange = (sl) => {
    console.log("selected Option...", sl);
    setLanguage(sl);
  };

  useEffect(() => {
    if (enterPress && ctrlPress) {
      console.log("enterPress", enterPress);
      console.log("ctrlPress", ctrlPress);
    }
  }, [ctrlPress, enterPress]);
  const onChange = (action, data) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };

  const showErrorToast = (msg, timer) => {
    toast.error(msg || `Something went wrong! Please try again.`, {
      position: "top-right",
      autoClose: timer ? timer : 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const [Msg, setMsg] = useState('');

  useEffect(() => {
    let ws = new WebSocket('ws://localhost:8080'); // Подключение к WebSocket серверу

    ws.onopen = () => {
        console.log('WebSocket соединение установлено');
    };

    ws.onmessage = (event) => {
        const message = event.data;
        setMsg(message);
    };

    ws.onclose = () => {
        console.log('WebSocket соединение закрыто');
    };

    ws.onerror = (error) => {
        console.error('WebSocket ошибка:', error);
    };

    return () => {
        ws.close(); // Закрытие WebSocket соединения при размонтировании компонента
    };
}, []); // Пустой массив зависимостей для запуска useEffect только один раз


    server.on('error', (err) => {
        console.error('Server error:', err);
    });

    server.listen(PORT, () => {
        console.log('Server listening on port ${PORT}');
    });
})




  return (
    <div className={`${isAnonymous ? 'bg-gray-300' : 'bg-gray-50'} h-screen`}>
      <HeaderComponent isAnonymous={isAnonymous} />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="flex flex-row">
        <div className="px-4 py-2">
          <LanguagesDropdown onSelectChange={onSelectChange} />
        </div>
        <div className="px-4 py-2 flex flex-col justify-center">
          <AnonymityButton isAnonymous={isAnonymous} setIsAnonymous={setIsAnonymous}/>
        </div>
      </div>
      <div className="flex flex-row space-x-4 items-start px-4 py-4">
        <div className="flex h-full w-full justify-start items-end gap-4">
          <CodeEditorWindow isAnonymous={isAnonymous}
            code={code}
            onChange={onChange}
            language={language?.value}
          />
          <CodeEditorWindow isAnonymous={isAnonymous}
            
            onChange={onChange}
            language={language?.value}
            />
        </div>

        <div className="right-container flex flex-shrink-0 w-[30%] flex-col">
          <OutputWindow outputDetails={outputDetails} isAnonymous={isAnonymous}/>
          <div className="flex flex-col items-end">
            <button
              disabled={!code}
              className={(
                "mt-4 border-2 border-gray-500 z-10 rounded-md px-4 py-2 hover:shadow transition duration-200 flex-shrink-0" +
                (!code ? " opacity-50" : "") + `${isAnonymous ? ' bg-slate-800 text-white' : ' bg-slate-100 text-black'}`
              )}
            >
              {processing ? "Processing..." : " Lets compile!"}
            </button>
          </div>
          {outputDetails && <OutputDetails outputDetails={outputDetails} />}
        </div>
      </div>
    </div>
  );
};
export default Landing;
