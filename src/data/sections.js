import GenerateID from '../components/GenerateID';

export const blogData = [
	{
		id: 1,
		title: '1. Introduction / イントロダクション',
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
		title: '2. Assigning Roblox account / Roblox アカウントの割り当て',
		content: `{{protected:48821:x}}Please use the ID and password to login at the following link / 以下のリンクでIDとパスワードを使用してログインしてください: <a href="https://www.roblox.com/Login" target="_blank" rel="noopener noreferrer" style="color: red; text-decoration: underline;">Roblox website</a>`,
		Component: GenerateID,
		isPartiallyProtected: true,
	},
	{
		id: 3,
		title: '3. Pre-game-test / ゲームプレイ前のテスト',
		content: `Please wait until we tell you to do the pre-test and enter this
    link.<br/>{{protected:74225:<a href="https://www.surveymonkey.com/r/QGTGSL8" target="_blank" rel="noopener noreferrer" style="color: red; text-decoration: underline;">Pre-game-test</a>}}事前テストを行い、このリンクに入るようお伝えするまでお待ちください。<br/>`,
		isPartiallyProtected: true,
	},
	{
		id: 4,
		title: '4. Let’s play Roblox / Robloxをやろう',
		content: `<p>
    After everyone has finished the pre-test, we will create
    breakout sessions in Zoom. While we are doing this, please use
    the given Roblox account to login to
    <span class="font-bold dark:text-red-300 text-red-600">
    Roblox website
    </span>
    .
  </p>
  <p>
    全員が事前テストを終えた後、Zoomでブレイクアウトセッションを作成します。その間に、与えられたRobloxアカウントを使用して<span class="font-bold dark:text-red-300 text-red-600">Roblox
      ウェブサイト
    </span>
    にログインしてください。
  </p>`,
		isPartiallyProtected: false,
	},
	{
		id: 5,
		title: '5. Post-game-test / ゲームプレイ後のテスト',
		content: `Please wait until we tell you to do the post-test and enter this
    link.<br/>{{protected:87992:<a href="https://www.surveymonkey.com/r/Q68FLKP" target="_blank" rel="noopener noreferrer" style="color: red; text-decoration: underline;">Post-game-test</a>}}以下のゲームプレイ後のテストを7分30秒以内に行ってください。<br/>`,
		isPartiallyProtected: true,
	},
	{
		id: 6,
		title: '6. Questionnaire / アンケート',
		content: `After you finish questionnaire feel free to leave. Thank you so
    much for your time.<br/>{{protected:92154:<a href="https://www.surveymonkey.com/r/XWH3ZC6" target="_blank" rel="noopener noreferrer" style="color: red; text-decoration: underline;">Questionnaire</a>}}アンケートが終わりましたら、お帰りいただいて結構です。お時間をいただき、誠にありがとうございました。<br/>`,
		isPartiallyProtected: true,
	},
];
