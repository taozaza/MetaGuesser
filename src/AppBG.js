import React, { useState } from "react";
import { Lock, Unlock, Calendar, User } from "lucide-react";
import ac1Image from "./images/ac1.png";
import ac2Image from "./images/ac2.png";
import ac3Image from "./images/ac3.png";
import ac4Image from "./images/ac4.png";
import prt1Image from "./images/pret1.png";

const ProtectedContent = ({ password, children }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [inputPassword, setInputPassword] = useState("");

  const handleUnlock = () => {
    if (inputPassword === password) {
      setIsUnlocked(true);
    } else {
      alert("Incorrect password");
    }
  };

  if (isUnlocked) {
    return <div className="mt-6">{children}</div>;
  }

  return (
    <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="flex items-center space-x-3">
        <Lock className="text-gray-600" />
        <input
          type="password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          className="flex-grow border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter password"
        />
        <button
          onClick={handleUnlock}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Unlock
        </button>
      </div>
    </div>
  );
};

const BlogPost = ({
  title,
  author,
  date,
  content,
  protectedContent,
  password,
}) => {
  return (
    <article className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <div className="prose max-w-none">{content}</div>
        {protectedContent && (
          <ProtectedContent password={password}>
            <div className="prose max-w-none mt-4">{protectedContent}</div>
          </ProtectedContent>
        )}
      </div>
    </article>
  );
};

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Roblox Experiment
          </h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <BlogPost
          title="1. Introduction / イントロダクション"
          content={
            <>
              <p>
                If you haven't watched the tutorial video before, please watch
                this video.
              </p>
              <p>
                もしこれまでにチュートリアルビデオを見たことがなければ、このビデオをご覧ください。
              </p>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/kEmzmEp0OZE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>(Subtitle EN/JP)</p>
              <p>
                After you have watched the video, please fill out the consent
                form.
              </p>
              <p>ビデオを見た後、同意書にご記入ください。</p>
              <p>
                <a
                  href="https://www.surveymonkey.com/r/8SL83VQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  https://www.surveymonkey.com/r/8SL83VQ
                </a>
              </p>
            </>
          }
        />

        <BlogPost
          title="2. Assigning Roblox account / Roblox アカウントの割り当て"
          content={
            <>
              <p>
                After clicking the account distribution link, please select your
                account and press next.
              </p>
              <p>
                アカウント配布リンクをクリックした後、アカウントを選択して次へを押してください。
              </p>
              <img
                src={ac1Image}
                alt="Account assignment"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <p>
                After pressing next, ID and Password will show up. Please{" "}
                <span style={{ color: "red", fontWeight: "bold" }}>
                  remember
                </span>{" "}
                it (copy/screenshot) before pressing{" "}
                <span style={{ color: "red", fontWeight: "bold" }}>submit</span>
                .
              </p>
              <p>
                次へを押した後、IDとパスワードが表示されます。提出を押す前に、それを
                <span style={{ color: "red", fontWeight: "bold" }}>
                  覚えておいてください
                </span>
                （コピー/スクリーンショット）。
              </p>
              <img
                src={ac2Image}
                alt="Account assignment2"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <p>After pressing submit, the result will show up.</p>
              <p>提出を押した後、結果が表示されます。</p>
              <p>
                This is{" "}
                <span style={{ color: "red", fontWeight: "bold" }}>
                  Success.
                </span>
                You can use this account.
              </p>
              <p>
                これは
                <span style={{ color: "red", fontWeight: "bold" }}>成功</span>
                です。このアカウントを使用できます。
              </p>
              <img
                src={ac3Image}
                alt="Account assignment3"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <p>
                This is{" "}
                <span style={{ color: "red", fontWeight: "bold" }}>failed</span>
                . Please press back and choose a new account.
              </p>
              <p>
                これは
                <span style={{ color: "red", fontWeight: "bold" }}>失敗</span>
                です。戻るボタンを押して新しいアカウントを選択してください。
              </p>
              <img
                src={ac4Image}
                alt="Account assignment4"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </>
          }
          protectedContent={
            <>
              <p>
                <a
                  href="https://form.everestwebdeals.co/?form=6af8673cdfd7033add8c09e352b00ed8"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  Get Roblox account / Robloxアカウントを取得する
                </a>
              </p>
              <p>You can login into Roblox website after got Roblox account.</p>
              <p>
                Robloxアカウントを取得した後、Robloxウェブサイトにログインできます。
              </p>
            </>
          }
          password="73326"
        />
        <BlogPost
          title="3. Pre-game-test / ゲームプレイ前のテスト"
          content={
            <>
              <p>
                Please wait until we tell you to do the pre-test and enter this
                link.
              </p>
              <p>
                事前テストを行い、このリンクに入るようお伝えするまでお待ちください。
              </p>
            </>
          }
          protectedContent={
            <>
              <p>
                <a
                  href="https://www.surveymonkey.com/r/GVM7XX5"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  Pre-game-test / ゲームプレイ前のテスト
                </a>
              </p>
            </>
          }
          password="24538"
        />

        <BlogPost
          title="4. Let’s play Roblox"
          content={
            <>
              <p>
                After everyone has finished the pre-test, we will create
                breakout sessions in Zoom. While we are doing this, please use
                the given Roblox account to log in to Roblox{" "}
                <span style={{ color: "red", fontWeight: "bold" }}>
                  website
                </span>
                .
              </p>
              <p>
                全員が事前テストを終えた後、Zoomでブレイクアウトセッションを作成します。その間に、与えられたRobloxアカウントを使用してRoblox
                <span style={{ color: "red", fontWeight: "bold" }}>
                  ウェブサイト
                </span>
                にログインしてください。
              </p>
            </>
          }
        />

        <BlogPost
          title="5. Post-game-test / ゲームプレイ後のテスト"
          content={
            <>
              <p>
                Please wait until we tell you to do the post-test and enter this
                link.
              </p>
              <p>以下のゲームプレイ後のテストを7分30秒以内に行ってください</p>
            </>
          }
          protectedContent={
            <p>
              <a
                href="https://www.surveymonkey.com/r/GVTJYRK"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                Pre-game-test / ゲームプレイ前のテスト
              </a>
            </p>
          }
          password="98953"
        />

        <BlogPost
          title="6. Questionnaire / アンケート"
          content={
            <>
              <p>
                After you finish questionnaire feel free to leave. Thank you so
                much for your time.
              </p>
              <p>
                アンケートが終わりましたら、お帰りいただいて結構です。お時間をいただき、誠にありがとうございました。
              </p>
            </>
          }
          protectedContent={
            <p>
              <a
                href="https://www.surveymonkey.com/r/8SVNWQC "
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                Pre-game-test / ゲームプレイ前のテスト
              </a>
            </p>
          }
          password="43522"
        />
      </main>
    </div>
  );
};

export default App;
