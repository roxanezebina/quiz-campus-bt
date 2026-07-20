const DATA_ENDPOINT = "https://script.google.com/macros/s/AKfycbwlJxiRPaPSCCA6YNe1sTy2_9tYrDgEuvfwQUB4SbuzFyFrYUQRCXgfjykNHezrQa9l/exec";
const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/F7yrRukPSyhCHwSkdSdQDN";

const defaultSchools = ['3iS Bordeaux',
'ACFA Multimédia Bordeaux',
'AMOS Sport Business School Bordeaux',
'Arts et Métiers – campus de Bordeaux-Talence',
'Atelier Chardon Savard Bordeaux',
'Audencia SciencesCom – campus Bordeaux',
'Bachelor Institute Bordeaux',
'Bordeaux INP – ENSEIRB-MATMECA',
'Bordeaux INP – ENSC',
'Bordeaux INP – ENSCBP',
'Bordeaux INP – ENSEGID',
'Bordeaux INP – ENSMAC',
'Bordeaux Sciences Agro',
'Brassart Bordeaux',
'CESI École d’Ingénieurs – campus Bordeaux',
'CNAM Nouvelle-Aquitaine – centre de Bordeaux',
'Conservatoire de Bordeaux Jacques-Thibaud',
'Digital College Bordeaux',
'ECV Bordeaux',
'EFAP Bordeaux',
'EFJ Bordeaux',
'École 42 Bordeaux',
'École de Condé Bordeaux',
'École nationale de la magistrature (ENM)',
'École nationale supérieure d’architecture et de paysage de Bordeaux (ENSAPBx)',
'École supérieure des Beaux-Arts de Bordeaux (ebabx)',
'École supérieure de théâtre Bordeaux Aquitaine (ESTBA)',
'EDC Paris Business School – campus Bordeaux',
'Epitech Bordeaux',
'ESARC Evolution Bordeaux',
'ESG Bordeaux',
'ESME Bordeaux',
'ESSCA – campus Bordeaux',
'Formasup Campus Bordeaux',
'IAE Bordeaux',
'ICART Bordeaux',
'IDRAC Business School Bordeaux',
'IFAG Bordeaux',
'Institut Culinaire de France',
'Institut de journalisme Bordeaux Aquitaine (IJBA)',
'Institut des métiers de la santé – CHU de Bordeaux',
'INSEEC Grande École Bordeaux',
'INSEEC Bachelor Bordeaux',
'INSEEC MSc Bordeaux',
'IRTS Nouvelle-Aquitaine – site de Talence',
'ISCOM Bordeaux',
'ISEG Bordeaux',
'ISEGCOM Bordeaux',
'ISFJ Bordeaux',
'IUT Bordeaux Montaigne',
'IUT de Bordeaux – site de Bordeaux-Bastide',
'IUT de Bordeaux – site de Gradignan',
'IUT de Bordeaux – site de Périgueux',
'IUT de Bordeaux – site d’Agen',
'KEDGE Business School Bordeaux',
'La Fabrique – École de production Bordeaux',
'MODART International Bordeaux',
'MyDigitalSchool Bordeaux',
'Pigier Bordeaux',
'Rocket School Bordeaux',
'SAE Institute Bordeaux',
'Sciences Po Bordeaux',
'Sup de Pub Bordeaux',
'SUP’DE COM Bordeaux',
'Université de Bordeaux',
'Université Bordeaux Montaigne',
'Université de Bordeaux – Collège Droit, science politique, économie et gestion',
'Université de Bordeaux – Collège Sciences de la santé',
'Université de Bordeaux – Collège Sciences de l’Homme',
'Université de Bordeaux – Collège Sciences et technologies',
'Université de Bordeaux – INSPE de l’académie de Bordeaux',
'Université de Bordeaux – Institut d’odontologie',
'Université de Bordeaux – Institut de la vigne et du vin',
'Université Bordeaux Montaigne – UFR Humanités',
'Université Bordeaux Montaigne – UFR Langues et civilisations',
'Université Bordeaux Montaigne – UFR Sciences des territoires et de la communication',
'Ynov Campus Bordeaux',
'Autre établissement'];


const questions = [
{
text:"Ton samedi parfait à Bordeaux, c'est plutôt…",
answers:[
{emoji:"🎨",label:"Une expo, une friperie et un café bien caché",profile:"culture"},
{emoji:"🌿",label:"Une balade, un pique-nique et un grand bol d'air",profile:"nature"},
{emoji:"🍷",label:"Un marché, une terrasse et un coucher de soleil entre amis",profile:"epicure"},
{emoji:"🍜",label:"Tester LE restaurant dont tout le monde parle",profile:"foodie"}
]},
{
text:"Quand tu découvres une ville, tu cherches d'abord…",
answers:[
{emoji:"📸",label:"Ses lieux les plus créatifs et photogéniques",profile:"culture"},
{emoji:"🚲",label:"Ses coins tranquilles et ses itinéraires à explorer",profile:"nature"},
{emoji:"🍹",label:"Les endroits où l'on aime se retrouver",profile:"epicure"},
{emoji:"🥐",label:"Ses meilleures spécialités et bonnes adresses",profile:"foodie"}
]},
{
text:"Ton budget étudiant part le plus facilement dans…",
answers:[
{emoji:"🎟️",label:"Des concerts, du cinéma ou des spectacles",profile:"culture"},
{emoji:"🧺",label:"Des escapades et des activités en plein air",profile:"nature"},
{emoji:"🍸",label:"Des terrasses et des sorties entre amis",profile:"epicure"},
{emoji:"🍣",label:"Des restos, des brunchs et des cafés",profile:"foodie"}
]},
{
text:"Dans ton groupe, tu es la personne qui…",
answers:[
{emoji:"💡",label:"Trouve toujours l'événement dont personne n'a entendu parler",profile:"culture"},
{emoji:"🗺️",label:"Propose de sortir de la ville et d'aller voir ailleurs",profile:"nature"},
{emoji:"🎉",label:"Lance les soirées et rassemble tout le monde",profile:"epicure"},
{emoji:"📍",label:"Connaît les meilleures adresses où manger",profile:"foodie"}
]},
{
text:"Ton dimanche idéal ressemble à…",
answers:[
{emoji:"📚",label:"Un musée, une librairie ou un lieu insolite",profile:"culture"},
{emoji:"☀️",label:"Une plage, un parc ou une virée à vélo",profile:"nature"},
{emoji:"🧺",label:"Une terrasse qui s'éternise avec les copains",profile:"epicure"},
{emoji:"🥞",label:"Un brunch suivi d'une pâtisserie incontournable",profile:"foodie"}
]},
{
text:"Le mot qui te ressemble le plus…",
answers:[
{emoji:"✨",label:"Curieux",profile:"culture"},
{emoji:"🌱",label:"Libre",profile:"nature"},
{emoji:"🥂",label:"Bon vivant",profile:"epicure"},
{emoji:"😋",label:"Gourmand",profile:"foodie"}
]}
];

const profiles={
culture:{icon:"🎭",title:"L'Explorateur urbain",tagline:"Tu aimes les lieux qui ont une histoire, une ambiance et ce petit détail que tout le monde ne connaît pas.",description:"Ton Bordeaux se vit entre expos, patrimoine, concerts, street art et adresses créatives.",ideas:["Découvrir les musées gratuits ou à petit prix","Repérer les concerts, festivals et événements étudiants","Explorer le street art et les quartiers en mutation"],guide:"guide-culture.pdf"},
nature:{icon:"🌿",title:"Le fan de nature",tagline:"Tu respires mieux dès que tu vois un parc, une piste cyclable ou un bout de Garonne.",description:"Ton Bordeaux ne s'arrête pas aux quais. Tu veux des balades, des coins verts et de bonnes raisons de sortir du centre.",ideas:["Tester les parcs et balades de la métropole","Partir à la plage ou en escapade sans voiture","Découvrir Bordeaux et ses alentours à vélo"],guide:"guide-nature.pdf"},
epicure:{icon:"🍽️",title:"Le Bon Vivant",tagline:"Pour toi, une ville se découvre aussi autour d'une table, d'un marché ou d'un verre partagé.",description:"Tu cherches les bonnes adresses, les lieux conviviaux et les plans qui permettent de profiter sans exploser ton budget étudiant.",ideas:["Les événements insolites et éphémères","Profiter des marchés, guinguettes et terrasses","Repérer les bons plans pour sortir entre amis"],guide:"guide-epicurien.pdf"},
foodie:{icon:"🍽️",title:"Le Foodie",tagline:"Pour toi, découvrir une ville passe d'abord par son assiette.",description:"Tu es toujours partant pour tester une nouvelle adresse, dénicher un coffee shop caché, partager un brunch entre amis ou goûter les spécialités locales. Pour toi, un bon repas est souvent le point de départ d'une belle journée.",ideas:["Trouver des restos et bars adaptés aux petits budgets","Tester les meilleures adresses gourmandes de Bordeaux","Découvrir les coffee shops où réviser ou se détendre"],guide:"guide-foodie.pdf"}
};

let currentQuestion=0,scores={culture:0,nature:0,epicure:0,foodie:0},selectedAnswers=[],startedAt=null,identityData={};
const $=id=>document.getElementById(id);
const sections={intro:$("intro"),identity:$("identity"),quiz:$("quiz"),result:$("result")};

function showSection(name){Object.values(sections).forEach(s=>s.classList.add("hidden"));sections[name].classList.remove("hidden");}
$("openFormBtn").onclick=()=>showSection("identity");
$("backBtn").onclick=()=>showSection("intro");
$("restartBtn").onclick=()=>{showSection("identity");};
$("retryBtn").onclick=()=>showSection("identity");

function getCustomSchools(){
  try{return JSON.parse(localStorage.getItem("campusCustomSchools")||"[]");}catch{return [];}
}
function allSchools(){return [...new Set([...defaultSchools,...getCustomSchools()])].sort((a,b)=>a.localeCompare(b,"fr"));}

const schoolSearch=$("schoolSearch"), optionsBox=$("schoolOptions"), otherWrap=$("otherSchoolWrap"), otherInput=$("otherSchool");
let selectedSchool="";

function renderSchoolOptions(query=""){
 const q=query.trim().toLocaleLowerCase("fr");
 const matches=allSchools().filter(s=>s.toLocaleLowerCase("fr").includes(q)).slice(0,40);
 optionsBox.innerHTML=matches.length?matches.map(s=>`<button type="button" class="option" role="option" data-school="${s.replace(/"/g,"&quot;")}">${s}</button>`).join(""):`<button type="button" class="option" data-school="Autre établissement">Aucun résultat — ajouter un établissement</button>`;
 optionsBox.classList.remove("hidden");schoolSearch.setAttribute("aria-expanded","true");
 optionsBox.querySelectorAll(".option").forEach(btn=>btn.onclick=()=>selectSchool(btn.dataset.school));
}
function selectSchool(school){
 selectedSchool=school;schoolSearch.value=school;optionsBox.classList.add("hidden");schoolSearch.setAttribute("aria-expanded","false");
 const isOther=school==="Autre établissement";
 otherWrap.classList.toggle("hidden",!isOther);otherInput.required=isOther;if(isOther)otherInput.focus();
}
schoolSearch.addEventListener("focus",()=>renderSchoolOptions(schoolSearch.value));
schoolSearch.addEventListener("input",()=>{selectedSchool="";renderSchoolOptions(schoolSearch.value);});
document.addEventListener("click",e=>{if(!$("schoolCombobox").contains(e.target))optionsBox.classList.add("hidden");});

$("identityForm").addEventListener("submit",e=>{
 e.preventDefault();
 if(!selectedSchool && allSchools().includes(schoolSearch.value))selectedSchool=schoolSearch.value;
 if(!selectedSchool){schoolSearch.setCustomValidity("Choisis un établissement dans la liste ou sélectionne « Autre établissement ».");schoolSearch.reportValidity();return;}
 schoolSearch.setCustomValidity("");
 let finalSchool=selectedSchool;
 if(selectedSchool==="Autre établissement"){
   finalSchool=otherInput.value.trim();
   if(!finalSchool){otherInput.reportValidity();return;}
   const custom=getCustomSchools();
   if(!custom.some(s=>s.toLocaleLowerCase("fr")===finalSchool.toLocaleLowerCase("fr"))){
     custom.push(finalSchool);localStorage.setItem("campusCustomSchools",JSON.stringify(custom));
   }
 }
 identityData={firstName:$("firstName").value.trim(),lastName:$("lastName").value.trim(),email:$("email").value.trim(),school:finalSchool,birthYear:Number($("birthYear").value),createdAt:new Date().toISOString()};
 startQuiz();
});

function startQuiz(){
 currentQuestion=0;scores={culture:0,nature:0,epicure:0,foodie:0};selectedAnswers=[];startedAt=new Date();showSection("quiz");renderQuestion();
}
function renderQuestion(){
 const q=questions[currentQuestion];$("questionCount").textContent=`Question ${currentQuestion+1} sur ${questions.length}`;$("progressFill").style.width=`${((currentQuestion+1)/questions.length)*100}%`;
 $("questionArea").innerHTML=`<h2 class="question-title">${q.text}</h2><div class="answers">${q.answers.map((a,i)=>`<button class="answer" data-index="${i}"><span class="answer-emoji">${a.emoji}</span><span>${a.label}</span></button>`).join("")}</div>`;
 document.querySelectorAll(".answer").forEach(btn=>btn.onclick=()=>{const a=q.answers[Number(btn.dataset.index)];scores[a.profile]++;selectedAnswers.push({questionNumber:currentQuestion+1,question:q.text,answer:a.label,profile:a.profile});currentQuestion++;currentQuestion<questions.length?renderQuestion():showResult();});
}
function getWinner(){const max=Math.max(...Object.values(scores));const winners=Object.keys(scores).filter(k=>scores[k]===max);return winners[Math.floor(Math.random()*winners.length)];}
async function sendQuizData(winner) {
  if (!DATA_ENDPOINT) {
    console.info("Suivi désactivé : DATA_ENDPOINT est vide.");
    return;
  }

  const params = new URLSearchParams(location.search);

  const payload = {
    responseId:
      crypto.randomUUID?.() ||
      `${Date.now()}-${Math.random()}`,

    submittedAt: new Date().toISOString(),

    ...identityData,

    campus: params.get("campus") || "non précisé",
    event: params.get("event") || "non précisé",
    source: params.get("source") || "qr-code",

    profile: profiles[winner].title,
    profileCode: winner,

    scoreCulture: scores.culture,
    scoreNature: scores.nature,
    scoreEpicure: scores.epicure,
    scoreFoodie: scores.foodie,

    durationSeconds: startedAt
      ? Math.round((Date.now() - startedAt.getTime()) / 1000)
      : null,

    answers: selectedAnswers
  };

  try {
    await fetch(DATA_ENDPOINT,{
      method:"POST",
      mode:"no-cors",
      headers:{
        "Content-Type":"text/plain;charset=utf-8"
      },
      body:JSON.stringify(payload),
      keepalive:true
    });

    console.info("Envoi déclenché vers Google Sheets.");
  } catch (error) {
    console.error("Envoi impossible :", error);
  }
}


function showResult(){
 const winner=getWinner(),p=profiles[winner];$("resultIcon").textContent=p.icon;$("resultTitle").textContent=p.title;$("resultTagline").textContent=p.tagline;$("resultDescription").textContent=p.description;$("resultIdeas").innerHTML=p.ideas.map(x=>`<li>${x}</li>`).join("");
 const link=$("guideLink");link.href=p.guide;link.onclick=e=>{if(link.href.endsWith(".pdf")){e.preventDefault();alert("À remplacer par le lien du guide PDF correspondant.");}};
 showSection("result");sendQuizData(winner);
}
