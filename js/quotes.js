const quotes = [
{
    quote: "여성들이여, 국가의 영혼을 구해야 한다면, 나는 여러분이 국가의 영혼이 되어야 한다고 믿는다.",
    author: "코레타 스콧 킹",
},
{
    quote: "당신이 어떤 운동이 참여했는데 유색 인종 여성을 따르고 있지 않다면, 그 운동은 잘못된 것이다.",
    author: "린다 사르수르",
},
{
    quote: "절대적인 것은 없다. 모든 것은 바뀌고, 모든 것은 움직이고, 모든 것은 회전하고, 모든 것은 떠오르고 사라진다.",
    author: "프리다 칼로",
},
{
    quote: "나는 깊이 숨을 쉬고, 예전 같은 심장 박동 소리에 귀 기울였다. 나는 살아있다, 나는 살아있다, 나는 살아있다.",
    author: "실비아 플라스",
},
{
    quote: "이걸 지켜보는 모든 소녀들이여, 여러분이 가치 있고 강력하다는 걸, 꿈을 이루기 위해 노력할 기회를 얻을 자격이 있다는 걸 결코 의심하지 말라.",
    author: "힐러리 클린턴",
},
{
    quote: "한명의 아이, 한명의 선생님, 한권의 책이 세상을 바꿀 수 있다.",
    author: "말랄라 유사프자이",
},
{
    quote: "그 누구도 당신의 동의 없이 당신이 열등하다고 느끼게 만들 수 없다.",
    author: "엘레노어 루즈벨트",
},
{
    quote: "사람들이 자신의 지도자는 자기 자신임을 깨닫는 것이 바로 자유의 정의다.",
    author: "다이앤 내시",
},
{
    quote: "진실은 결국 당신을 자유롭게 할 것이다. 그러나 처음엔 당신을 분노하게 만들 것이다.",
    author: "글로리아 스타이넘",
},
{
    quote: "우리의 생식 운명을 통제하지 못한다면, 여성을 위한 다른 모든 것도 시야 밖으로 사라져간다.",
    author: "일리즈 호그",
},
{
    quote: "남성에겐 그들의 권리를. 그 이상은 안 된다. 여성에겐 그들의 권리를. 그 이하는 안된다.",
    author: "수전 B. 앤서니",
},
{
    quote: "말은 실제로 중요하다. 큰 의미가 있다. 우리의 상상력을 바꾸고 열어줄 수 있다.",
    author: "오팔 토메티",
},
{
    quote: "여성들에 대한 적의가 얼마나 강한지, 시계를 거꾸로 돌리고 싶어 하는 사람들이 얼마나 많은지 과소평가하지 말라.",
    author: "노라 에프런",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;