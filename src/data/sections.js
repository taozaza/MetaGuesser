import GenerateID from '../components/GenerateID';

export const blogData = [
	{
		id: 1,
		title: '1. Introduction / イントロダクション / การแนะนำ',
		content: `If you haven't watched the tutorial video before, please watch
    this video.<br /><br />
    もしこれまでにチュートリアルビデオを見たことがなければ、このビデオをご覧ください。<br /><br />
    ถ้าหากยังไม่เคยดูวิดีโอวิธีการเล่นมาก่อนโปรดดูให้จบ<br /><br />
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
                หลังจากที่คุณดูวิดีโอเสร็จโปรดกรอกแบบฟอร์มการยินยอม<br /><br />
<a href="https://www.surveymonkey.com/r/NZXVNPL" target="_blank" rel="noopener noreferrer" style="color: red; text-decoration: underline;">Consent Form</a>`,
		isPartiallyProtected: false,
	},
	{
		id: 2,
		title: '2. Assigning Roblox account / Roblox アカウントの割り当て / รับรหัส Roblox',
		content: `{{protected:48821:x}}Please use the ID and password to login at the following link / 以下のリンクでIDとパスワードを使用してログインしてください / หลังจากนั้นนำรหัสที่ได้มาใช้กับเว็บไซด์โรบล็อก: <a href="https://www.roblox.com/Login" target="_blank" rel="noopener noreferrer" style="color: red; text-decoration: underline;">Roblox website</a>`,
		Component: GenerateID,
		isPartiallyProtected: true,
	},
	{
		id: 3,
		title: '3. Pre-game-test / ゲームプレイ前のテスト  / การทดสอบก่อนเล่นเกม',
		content: `Please wait until we tell you to do the pre-test and enter this
    link.<br/>{{protected:74225:<a href="https://www.surveymonkey.com/r/W5QGQV3" target="_blank" rel="noopener noreferrer" style="color: red; text-decoration: underline;">Pre-game-test</a>}}事前テストを行い、このリンクに入るようお伝えするまでお待ちください。<br/> / โปรดรอจนกว่าเราจะบอกให้ทำการทดสอบก่อนเล่นเกมและเข้าลิงก์นี้<br/>`,
		isPartiallyProtected: true,
	},
	{
		id: 4,
		title: '4. Let’s play Roblox / Robloxをやろう / เรามาเล่น Roblox กัน',
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
    <br/>全員が事前テストを終えた後、Zoomでブレイクアウトセッションを作成します。その間に、与えられたRobloxアカウントを使用して<span class="font-bold dark:text-red-300 text-red-600">Roblox
      ウェブサイト
    </span>
    にログインしてください。
  </p>
  <p>
    <br/>หลังจากที่ทุกคนทำการทดสอบก่อนเล่นเกมเสร็จเราจะสร้างห้อง breakout ใน Zoom ในขณะที่เรากำลังทำนี้โปรดใช้รหัส Roblox ที่ได้รับเพื่อเข้าสู่เว็บไซต์ Roblox
  </p>
  <p>
  <br/>After joining the game, please don't do anything yet and <span class="font-bold dark:text-red-300 text-red-600">wait</span> until there are the same number of students in the Roblox server and the breakout session.<br/>
  </p>
  <p>
  <br/>ゲームに参加した後、まだ何もせず、Robloxサーバーとブレイクアウトセッションの学生の数が同じになるまで<span class="font-bold dark:text-red-300 text-red-600">待ってください。</span>
  </p>
  <p>
  <br/>หลังจากเข้าเกมโปรดอย่าทำอะไรเลยและ<span class="font-bold dark:text-red-300 text-red-600">รอ</span>จนกว่าจะมีนักเรียนจำนวนเท่ากันในเซิร์ฟเวอร์ Roblox และห้อง breakout
  </p>
  <p>
  <br/>After there are the same number of students in the Roblox server and the breakout session please walk to blue circle and hold "E" button to ready and playing the game for 10 matchs (each matchs have maximum of 4 round).</span>
  </p>
  <p>
  <br/>Robloxサーバーとブレイクアウトセッションの学生数が同じになったら、青い円に歩いて行き、「E」ボタンを押し続けて準備し、10試合（各試合は最大4ラウンド）ゲームをプレイしてください。</span>
  </p>
  <p>
  <br/>หลังจากที่มีนักเรียนจำนวนเท่ากันในเซิร์ฟเวอร์ Roblox และห้อง breakout โปรดเดินไปที่วงกลมสีน้ำเงินและกดปุ่ม "E" เพื่อเตรียมพร้อมและเล่นเกม 10 รอบ (แต่ละรอบมีสูงสุด 4 รอบ)
  </p>
  `,
		isPartiallyProtected: false,
	},
	{
		id: 5,
		title: '5. Post-game-test / ゲームプレイ後のテスト / การทดสอบหลังเล่นเกม',
		content: `Please wait until we tell you to do the post-test and enter this
    link.<br/>{{protected:87992:<a href="https://www.surveymonkey.com/r/W52P6KN" target="_blank" rel="noopener noreferrer" style="color: red; text-decoration: underline;">Post-game-test</a>}}以下のゲームプレイ後のテストを7分30秒以内に行ってください。<br/>/ โปรดรอจนกว่าเราจะบอกให้ทำการทดสอบหลังเล่นเกมและเข้าลิงก์นี้<br/>`,
		isPartiallyProtected: true,
	},
	{
		id: 6,
		title: '6. Questionnaire / アンケート / แบบสอบถาม',
		content: `After you finish questionnaire feel free to leave. Thank you so
    much for your time.<br/>{{protected:92154:<a href="https://www.surveymonkey.com/r/NZLMFLC" target="_blank" rel="noopener noreferrer" style="color: red; text-decoration: underline;">Questionnaire</a>}}アンケートが終わりましたら、お帰りいただいて結構です。お時間をいただき、誠にありがとうございました。<br/> / หลังจากที่คุณทำแบบสอบถามเสร็จโปรดออกจากห้องได้เลย ขอบคุณมากที่ให้เวลา<br/>`,
		isPartiallyProtected: true,
	},
];
