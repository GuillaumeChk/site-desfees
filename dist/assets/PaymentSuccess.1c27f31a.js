import{_ as d}from"./F\xE9e__gros_plan_hiver_compressed60_014.f578b636.js";import{l as _,h as u,a as n,o as m,c as h,w as i,b as e,d as c,t as l,C as g}from"./index.0680094b.js";import{d as q,e as y,m as f,s as v,b as p}from"./index.df056616.js";const x={class:"section-video"},b={class:"video-container"},S={class:"absolute-center bg-transparent text-h4 text-uppercase text-center text-weight-light",style:{"letter-spacing":"4px"}},w={class:"wrapper"},C={class:"q-pa-md"},D={class:"q-py-xl text-uppercase text-green text-weight-light"},M=["innerHTML"],H=["innerHTML"],I={__name:"PaymentSuccess",setup(L){return _(async()=>{const o=u().query.session_id;if(o){let s="";(await q(y(p,"calendar"))).forEach(a=>{a.data().stripeSessionID===o&&(s=a.id)}),await f(v(p,"calendar",s),{paid:!0},{merge:!0})}else console.log("reservation is undefined")}),(t,o)=>{const s=n("q-img"),r=n("q-btn"),a=n("q-page");return m(),h(a,{class:"q-mb-xl"},{default:i(()=>[e("section",x,[e("div",b,[c(s,{src:d,class:"carousel"},{default:i(()=>[e("div",S,l(t.$t("paymentSuccess.titre")),1)]),_:1})])]),e("div",w,[e("div",C,[e("h4",D,l(t.$t("paymentSuccess.titre2")),1),e("p",{innerHTML:t.$t("paymentSuccess.texte")},null,8,M),e("p",{innerHTML:t.$t("paymentSuccess.texte2")},null,8,H),c(r,{rounded:"",unelevated:"",label:"Contact",color:"orange",to:"/contact"}),c(g)])])]),_:1})}}};export{I as default};