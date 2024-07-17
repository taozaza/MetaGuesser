import React, { useState, useEffect } from "react";
import { Lock, X, Sun, Moon, Eye, EyeOff } from "lucide-react";
import ac1Image from "./images/ac1.png";
import ac2Image from "./images/ac2.png";
import ac3Image from "./images/ac3.png";
import ac4Image from "./images/ac4.png";

// Updated mock data with partially protected content
const blogData = [
  {
    id: 1,
    title: "1. Introduction / イントロダクション",
    content: `If you haven't watched the tutorial video before, please watch
    this video.<br /><br />
    もしこれまでにチュートリアルビデオを見たことがなければ、このビデオをご覧ください。<br /><br />
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/kEmzmEp0OZE"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe><br /><br />
(Subtitle EN/JP)<br /><br />
After you have watched the video, please fill out the consent
                form.<br /><br />
                ビデオを見た後、同意書にご記入ください。<br /><br />
<a href="https://www.surveymonkey.com/r/2B66F6N" target="_blank" rel="noopener noreferrer" style="color: red; text-decoration: underline;">Consent Form</a>`,
    isPartiallyProtected: false,
  },
  {
    id: 2,
    title: "2. Assigning Roblox account / Roblox アカウントの割り当て",
    content: `Input your assigned number to get Roblox account.<br/><br/>割り当てられた番号を入力してRobloxアカウントを取得してください。`,
    isPartiallyProtected: true,
  },
  {
    id: 3,
    title: "3. Pre-game-test / ゲームプレイ前のテスト",
    content: `Please wait until we tell you to do the pre-test and enter this
    link.<br/>{{protected:74225:<a href="https://www.surveymonkey.com/r/QGTGSL8" target="_blank" rel="noopener noreferrer" style="color: red; text-decoration: underline;">Pre-game-test</a>}}事前テストを行い、このリンクに入るようお伝えするまでお待ちください。<br/>`,
    isPartiallyProtected: true,
  },
  {
    id: 4,
    title: "4. Let’s play Roblox",
    content: `<p>
    After everyone has finished the pre-test, we will create
    breakout sessions in Zoom. While we are doing this, please use
    the given Roblox account to login to
    <span style={{ color: "red", fontWeight: "bold" }}>
    Roblox website
    </span>
    .
  </p>
  <p>
    全員が事前テストを終えた後、Zoomでブレイクアウトセッションを作成します。その間に、与えられたRobloxアカウントを使用してRoblox
    <span style={{ color: "red", fontWeight: "bold" }}>
      ウェブサイト
    </span>
    にログインしてください。
  </p>`,
    isPartiallyProtected: false,
  },
  {
    id: 5,
    title: "5. Post-game-test / ゲームプレイ後のテスト",
    content: `Please wait until we tell you to do the post-test and enter this
    link.<br/>{{protected:87992:<a href="https://www.surveymonkey.com/r/Q68FLKP" target="_blank" rel="noopener noreferrer" style="color: red; text-decoration: underline;">Post-game-test</a>}}以下のゲームプレイ後のテストを7分30秒以内に行ってください。<br/>`,
    isPartiallyProtected: true,
  },
  {
    id: 6,
    title: "6. Questionnaire / アンケート",
    content: `After you finish questionnaire feel free to leave. Thank you so
    much for your time.<br/>{{protected:92154:<a href="https://www.surveymonkey.com/r/XWH3ZC6" target="_blank" rel="noopener noreferrer" style="color: red; text-decoration: underline;">Questionnaire</a>}}アンケートが終わりましたら、お帰りいただいて結構です。お時間をいただき、誠にありがとうございました。<br/>`,
    isPartiallyProtected: true,
  },
];

const Toast = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-red-500 dark:bg-red-600 text-white px-4 py-2 rounded shadow-lg flex items-center">
      <span>{message}</span>
      <button onClick={onClose} className="ml-2">
        <X size={18} />
      </button>
    </div>
  );
};

const Header = ({ darkMode, toggleDarkMode }) => (
  <header className="bg-blue-600 dark:bg-blue-800 text-white p-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold">Roblox Experiment</h1>
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-900"
    >
      {darkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  </header>
);

const Footer = () => (
  <footer className="bg-gray-200 dark:bg-gray-800 dark:text-white p-4 mt-8 text-center">
    <p></p>
  </footer>
);

const PasswordPrompt = ({ onSubmit }) => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(password);
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        className="border rounded px-2 py-1 mr-2 dark:bg-gray-700 dark:text-white dark:border-gray-600"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        Unlock
      </button>
    </form>
  );
};

const PasswordProtectedContent = () => {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [content, setContent] = useState("");

  const handlePasswordSubmit = (password) => {
    const passwordContentMap = {
      Meta1: `ID : MetaGuesserExp1 <br/> Password : V8#pL9$r<br/>After got your Roblox account please login roblox website.<br/>Robloxアカウントを取得した後、Robloxウェブサイトにログインしてください。<a href="https://www.roblox.com/login" target="_blank" rel="noopener noreferrer" style="color: red; text-decoration: underline;">Roblox Website</a>`,
      Meta2: `ID : MetaGuesserExp2 <br/> Password : bR4@Qz5!`,
      Meta3: `ID : MetaGuesserExp3 <br/> Password : gH7&Tk2%`,
      Meta4: `ID : MetaGuesserExp4 <br/> Password : Y1#fUx8&`,
      Meta5: `ID : MetaGuesserExp5 <br/> Password : D9@kMz6!`,
      Meta6: `ID : MetaGuesserExp6 <br/> Password : qW3*Cv4#`,
      Meta7: `ID : MetaGuesserExp7 <br/> Password : L5!jHs7@`,
      Meta8: `ID : MetaGuesserExp8 <br/> Password : P2$gBt1&`,
      Meta9: `ID : MetaGuesserExp9 <br/> Password : PineApple`,
      Meta10: `ID : MetaGuesserExp10 <br/> Password : F4!mDj6@`,
      Meta11: `ID : MetaGuesserExp11 <br/> Password : zV7$Qw2%`,
      Meta12: `ID : MetaGuesserExp12 <br/> Password : T5#kHl9&`,
      Meta13: `ID : MetaGuesserExp13 <br/> Password : rY1!Pn8@`,
      Meta14: `ID : MetaGuesserExp14 <br/> Password : N3$gWz4%`,
      Meta15: `ID : MetaGuesserExp15 <br/> Password : bM6@Jt5#`,
      Meta16: `ID : MetaGuesserExp16 <br/> Password : H2!kXv7&`,
      Meta17: `ID : MetaGuesserExp17 <br/> Password : C9%qPl1$`,
      Meta18: `ID : MetaGuesserExp18 <br/> Password : G4@jTy6#`,
      Meta19: `ID : MetaGuesserExp19 <br/> Password : L5#dMw3&`,
      Meta20: `ID : MetaGuesserExp20 <br/> Password : pR8$Fz7!`,

      // Add more passwords and corresponding content as needed
    };

    if (passwordContentMap[password]) {
      setContent(passwordContentMap[password]);
    } else {
      setContent("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="dark:text-gray-300">
      <p>
        Input your assigned number to get Roblox account.
        <br />
        <br />
        割り当てられた番号を入力してRobloxアカウントを取得してください。
      </p>
      <PasswordPrompt onSubmit={handlePasswordSubmit} />
      {content && (
        <div className="mt-4" dangerouslySetInnerHTML={{ __html: content }} />
      )}
    </div>
  );
};

const ProtectedContent = ({ content, isUnlocked, onPasswordSubmit }) => {
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);

  if (isUnlocked) {
    return (
      <span
        className="text-green-600 dark:text-green-400"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  return (
    <span className="inline-block">
      <button
        onClick={() => setShowPasswordPrompt(!showPasswordPrompt)}
        className="text-blue-500 dark:text-blue-400 hover:underline flex items-center"
      >
        {showPasswordPrompt ? (
          <EyeOff size={16} className="mr-1" />
        ) : (
          <Eye size={16} className="mr-1" />
        )}
        {showPasswordPrompt ? "Hide" : "Show"} protected content
      </button>
      {showPasswordPrompt && <PasswordPrompt onSubmit={onPasswordSubmit} />}
    </span>
  );
};

const ContentPart = ({ part, onIncorrectPassword }) => {
  const [unlockedPasswords, setUnlockedPasswords] = useState(new Set());

  const handlePasswordSubmit = (password) => {
    const protectedRegex = /{{protected:([^:]+):([^}]+)}}/g;
    let match;
    let correctPassword = false;

    while ((match = protectedRegex.exec(part.content)) !== null) {
      if (password === match[1]) {
        setUnlockedPasswords((prev) => new Set(prev).add(password));
        correctPassword = true;
        break;
      }
    }

    if (!correctPassword) {
      onIncorrectPassword();
    }
  };

  const renderContent = () => {
    if (!part.isPartiallyProtected) {
      return (
        <div
          className="dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: part.content }}
        />
      );
    } else if (part.id === 2) {
      return <PasswordProtectedContent />;
    }

    const protectedRegex = /{{protected:([^:]+):([^}]+)}}/g;
    const segments = [];
    let lastIndex = 0;
    let match;

    while ((match = protectedRegex.exec(part.content)) !== null) {
      segments.push(part.content.slice(lastIndex, match.index));
      segments.push(
        <ProtectedContent
          key={match.index}
          content={match[2]}
          isUnlocked={unlockedPasswords.has(match[1])}
          onPasswordSubmit={handlePasswordSubmit}
        />
      );
      lastIndex = protectedRegex.lastIndex;
    }

    segments.push(part.content.slice(lastIndex));

    return segments.map((segment, index) => {
      if (typeof segment === "string") {
        return (
          <div
            key={index}
            className="dark:text-gray-300"
            dangerouslySetInnerHTML={{ __html: segment }}
          />
        );
      }
      return segment;
    });
  };

  return (
    <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">
        {part.title}
      </h2>
      {renderContent()}
    </div>
  );
};

const BlogPost = ({ onIncorrectPassword }) => (
  <article className="max-w-3xl mx-auto mt-8">
    {blogData.map((part) => (
      <ContentPart
        key={part.id}
        part={part}
        onIncorrectPassword={onIncorrectPassword}
      />
    ))}
  </article>
);

const App = () => {
  const [toastVisible, setToastVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(prefersDarkMode);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => setDarkMode(e.matches);
    mediaQuery.addListener(handleChange);

    return () => mediaQuery.removeListener(handleChange);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const showToast = () => {
    setToastVisible(true);
  };

  const hideToast = () => {
    setToastVisible(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col transition-colors duration-200`}
    >
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <BlogPost onIncorrectPassword={showToast} />
      </main>
      <Footer />
      <Toast
        message="Incorrect password. Please try again."
        isVisible={toastVisible}
        onClose={hideToast}
      />
    </div>
  );
};

export default App;
