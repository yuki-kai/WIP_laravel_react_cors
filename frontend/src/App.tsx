import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

// メモ
// - sanctum/csrf-cookieで取得したトークンが使えず、api/testでLaravel側でcsrf_token()で生成したもののみOK

function App() {
  const axiosInstance = axios.create({
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    }
  })
  // axiosInstance.defaults.headers['X-CSRF-TOKEN'] = "U1ReFgCWfnXgJVj8d0uWN1CmlBYS0I2bKEtiXSUO";
  
  const handleTest = async () => {
    const res = await axiosInstance.get("http://localhost/api/test");
    console.log(res.data);
  };
  
  const handleClick = async () => {
    axiosInstance.get("http://localhost/sanctum/csrf-cookie")
    .then((res) => {
      console.log(res);
      if (res.status === 204)
        console.log("=====ok");
        const cookies = document.cookie.split("; ");
        const cookie = cookies.find((_) => _.startsWith("XSRF-TOKEN")) || "";
        const csrfToken = decodeURIComponent(cookie.split("=")[1]);
        axiosInstance.defaults.headers['X-XSRF-TOKEN'] = csrfToken;
    })
  };

  const handleLogin = async () => {
    axiosInstance.post("http://localhost/login", {
      email: "test1@gmail.com",
      password: "zaq12wsx"
    }, { withCredentials: true })
    .then((res) => {
      console.log("ログイン");
      console.log(res);
      console.log(axiosInstance.defaults.headers['X-XSRF-TOKEN'] );
    })
    .catch((e) => {
      console.log("ログイン失敗");
      console.log(e);
      console.log(axiosInstance.defaults.headers['X-XSRF-TOKEN'] );
    })
  };

  const handleAuth = async () => {
    axiosInstance.get("http://localhost/api/user")
    .then((res) => {
      console.log("ユーザ取得");
      console.log(res);
    })
    .catch((e) => {
      console.log("ユーザ取得失敗");
      console.log(e);
    })
  };

  const handleLogout = async () => {
    axiosInstance.defaults.headers['X-XSRF-TOKEN'] = "eyJpdiI6InBhcWFQSGFpNlcwamtNR2xTWWZQK2c9PSIsInZhbHVlIjoic2R6N2NlcTJ6ZmtCYnNFSFk1SmQ1cStUZkVTOS8xeklHZWpFaDlPZjdPZk9LVmMzMkFBNTBWMmcwaHdmakRyd1FCN0JCV05VV0pzK0FvL0tvODhyQ3I3Vy85YlZvNXRBdlAxNldZWEhMN1NQNmFMK25RQWdDRk9zanpxMUUzNVoiLCJtYWMiOiI3ODZlOTc4ZWEyMzAxZmZkNjM1Zjk5ZDNjODExNGIyYTFlMTc5ODcwYzY2MDUxOTNhNWU4NjA2NzU5ZTNmNWQyIiwidGFnIjoiIn0=";
    axiosInstance.post("http://localhost/logout", { withCredentials: true })
    .then((res) => {
      console.log("ログアウト");
      console.log(res);
      console.log(axiosInstance.defaults.headers['X-XSRF-TOKEN'] );
    })
    .catch((e) => {
      console.log("ログアウト失敗");
      console.log(e);
      console.log(axiosInstance.defaults.headers['X-XSRF-TOKEN'] );
    })
  };

  const handleCheck = async () => {
    axiosInstance.get("http://localhost/api/check")
    .then((res) => {
      console.log("確認");
      console.log(res.data);
    })
    .catch((e) => {
      console.log("確認失敗");
      console.log(e);
    })
  };

  return (
    <>
      <button onClick={handleTest}>test</button>
      <button onClick={handleClick}>CSRF</button>
      <button onClick={handleLogin}>ログイン</button>
      <button onClick={handleAuth}>ログイン状態に実行可能</button>
      <button onClick={handleLogout}>ログアウト</button>
      <button onClick={handleCheck}>チェック</button>
    </>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
