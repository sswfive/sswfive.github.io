"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2522],{6033:(n,l,e)=>{e.r(l),e.d(l,{assets:()=>t,contentTitle:()=>c,default:()=>o,frontMatter:()=>r,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"skill/modelops/ml_basic/ml-work-flow","title":"\u673a\u5668\u5b66\u4e60\u7684\u901a\u7528\u6d41\u7a0b","description":"\u673a\u5668\u5b66\u4e60\u7684\u80cc\u666f","source":"@site/docs/skill/modelops/ml_basic/ml_work_flow.md","sourceDirName":"skill/modelops/ml_basic","slug":"/skill/modelops/ml_basic/ml-work-flow","permalink":"/docs/skill/modelops/ml_basic/ml-work-flow","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"\u673a\u5668\u5b66\u4e60","permalink":"/docs/tags/\u673a\u5668\u5b66\u4e60"}],"version":"current","lastUpdatedAt":1692174221000,"frontMatter":{"id":"ml-work-flow","slug":"ml-work-flow","title":"\u673a\u5668\u5b66\u4e60\u7684\u901a\u7528\u6d41\u7a0b","tags":["\u673a\u5668\u5b66\u4e60"],"keywords":["\u673a\u5668\u5b66\u4e60"],"last_update":{"date":"2023-08-16T08:23:41.000Z"}},"sidebar":"skill","previous":{"title":"\u673a\u5668\u5b66\u4e60\u7684\u5e38\u89c1\u672f\u8bed","permalink":"/docs/skill/modelops/ml_basic/ml-basic"},"next":{"title":"\u673a\u5668\u5b66\u4e60\u6a21\u578b\u7684\u8bc4\u4f30\u65b9\u6cd5","permalink":"/docs/skill/modelops/ml_basic/model-evalution"}}');var i=e(6070),d=e(7092);const r={id:"ml-work-flow",slug:"ml-work-flow",title:"\u673a\u5668\u5b66\u4e60\u7684\u901a\u7528\u6d41\u7a0b",tags:["\u673a\u5668\u5b66\u4e60"],keywords:["\u673a\u5668\u5b66\u4e60"],last_update:{date:new Date("2023-08-16T08:23:41.000Z")}},c=void 0,t={},h=[{value:"\u673a\u5668\u5b66\u4e60\u7684\u80cc\u666f",id:"\u673a\u5668\u5b66\u4e60\u7684\u80cc\u666f",level:2},{value:"\u673a\u5668\u5b66\u4e60\u7684\u6982\u8ff0",id:"\u673a\u5668\u5b66\u4e60\u7684\u6982\u8ff0",level:2},{value:"\u7edf\u8ba1\u673a\u5668\u5b66\u4e60\u6838\u5fc3",id:"\u7edf\u8ba1\u673a\u5668\u5b66\u4e60\u6838\u5fc3",level:2},{value:"\u673a\u5668\u5b66\u4e60\u901a\u7528\u6d41\u7a0b",id:"\u673a\u5668\u5b66\u4e60\u901a\u7528\u6d41\u7a0b",level:3},{value:"step1: \u83b7\u53d6\u6570\u636e",id:"step1-\u83b7\u53d6\u6570\u636e",level:4},{value:"step2:\u6570\u636e\u57fa\u672c\u5904\u7406",id:"step2\u6570\u636e\u57fa\u672c\u5904\u7406",level:4},{value:"step3:\u7279\u5f81\u5de5\u7a0b",id:"step3\u7279\u5f81\u5de5\u7a0b",level:4},{value:"step4:\u673a\u5668\u5b66\u4e60\uff08\u6a21\u578b\u8bad\u7ec3\uff09",id:"step4\u673a\u5668\u5b66\u4e60\u6a21\u578b\u8bad\u7ec3",level:4},{value:"step5:\u6a21\u578b\u8bc4\u4f30",id:"step5\u6a21\u578b\u8bc4\u4f30",level:4},{value:"\u673a\u5668\u5b66\u4e60\u7684\u5b8c\u6574\u6d41\u7a0b",id:"\u673a\u5668\u5b66\u4e60\u7684\u5b8c\u6574\u6d41\u7a0b",level:3},{value:"step1:\u62bd\u8c61\u6210\u6570\u636e\u95ee\u9898",id:"step1\u62bd\u8c61\u6210\u6570\u636e\u95ee\u9898",level:4},{value:"step2:\u83b7\u53d6\u6570\u636e",id:"step2\u83b7\u53d6\u6570\u636e",level:4},{value:"step3:\u7279\u5f81\u9884\u5904\u7406\u4e0e\u7279\u5f81\u9009\u62e9",id:"step3\u7279\u5f81\u9884\u5904\u7406\u4e0e\u7279\u5f81\u9009\u62e9",level:4},{value:"step4:\u8bad\u7ec3\u6a21\u578b\u4e0e\u8c03\u4f18",id:"step4\u8bad\u7ec3\u6a21\u578b\u4e0e\u8c03\u4f18",level:4},{value:"step5:\u6a21\u578b\u8bca\u65ad",id:"step5\u6a21\u578b\u8bca\u65ad",level:4},{value:"step6:\u6a21\u578b\u878d\u5408",id:"step6\u6a21\u578b\u878d\u5408",level:4},{value:"step7:\u4e0a\u7ebf\u8fd0\u884c",id:"step7\u4e0a\u7ebf\u8fd0\u884c",level:4}];function x(n){const l={blockquote:"blockquote",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,d.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.h2,{id:"\u673a\u5668\u5b66\u4e60\u7684\u80cc\u666f",children:"\u673a\u5668\u5b66\u4e60\u7684\u80cc\u666f"}),"\n",(0,i.jsx)(l.p,{children:"\u5728\u673a\u5668\u5b66\u4e60\u9886\u57df\u6709\u4e24\u5927\u5b66\u6d3e\uff1a\u9891\u7387\u5b66\u6d3e\u548c\u8d1d\u53f6\u65af\u5b66\u6d3e\uff0c\u800c\u6982\u7387\u53c8\u662f\u673a\u5668\u5b66\u4e60\u7684\u6838\u5fc3\u89d2\u8272\uff0c\u6b63\u662f\u56e0\u4e3a\u8fd9\u4e24\u4e2a\u5b66\u6d3e\u7684\u5bf9\u6982\u7387\u7684\u8ba4\u77e5\u4e0d\u540c\uff0c\u4e8e\u662f\u4ea7\u751f\u4e86\u7edf\u8ba1\u673a\u5668\u5b66\u4e60\u548c\u6982\u7387\u56fe\u6a21\u578b\uff08\u7b26\u53f7\u5b66\u4e60\uff09\uff1a"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:["\u7edf\u8ba1\u673a\u5668\u5b66\u4e60\uff08\u57fa\u4e8e\u6570\u636e\uff09\uff1a","\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:"\u6838\u5fc3\u662f\u6570\u636e\uff0c\u5229\u7528\u4e0d\u540c\u7684\u6a21\u578b\u53bb\u62df\u5408\u6570\u636e\u80cc\u540e\u7684\u89c4\u5f8b\uff0c\u5e76\u7528\u62df\u5408\u51fa\u6765\u7684\u89c4\u5f8b\u53bb\u5224\u65ad\u548c\u9884\u6d4b\u672a\u77e5\u7684\u7ed3\u679c\u3002"}),"\n",(0,i.jsx)(l.li,{children:"\u7edf\u8ba1\u673a\u5668\u5b66\u4e60\u4e2d\u6700\u57fa\u7840\u7684\u6a21\u578b\u5c31\u662f\u7ebf\u6027\u56de\u5f52\uff0c\u51e0\u4e4e\u6240\u6709\u5176\u4ed6\u6a21\u578b\u90fd\u662f\u4ece\u4e0d\u540c\u7684\u89d2\u5ea6\u5bf9\u7ebf\u6027\u56de\u5f52\u6a21\u578b\u505a\u51fa\u6269\u5c55\u548c\u4fee\u6b63\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(l.li,{children:["\u6982\u7387\u56fe\u6a21\u578b\uff08\u57fa\u4e8e\u5173\u7cfb\uff09\uff1a","\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:"\u548c\u57fa\u4e8e\u6570\u636e\u7684\u7edf\u8ba1\u5b66\u4e60\u76f8\u6bd4\uff0c\u57fa\u4e8e\u5173\u7cfb\u7684\u56fe\u6a21\u578b\u66f4\u591a\u7684\u4ee3\u8868\u4e86\u56e0\u679c\u63a8\u7406\u7684\u53d1\u5c55\u65b9\u5411\u3002"}),"\n",(0,i.jsx)(l.li,{children:"\u8d1d\u53f6\u65af\u6ce8\u610f\u5230\u4e5f\u9700\u8981\u8ba1\u7b97\u5f85\u5b66\u4e60\u5bf9\u8c61\u7684\u6982\u7387\u5206\u5e03\uff0c\u4f46\u5b83\u5229\u7528\u7684\u4e0d\u662f\u6d77\u91cf\u7684\u5177\u4f53\u6570\u636e\uff0c\u800c\u662f\u53d8\u91cf\u4e4b\u95f4\u7684\u76f8\u4e92\u5173\u7cfb\uff0c\u6bcf\u4e2a\u53d8\u91cf\u7684\u5148\u9a8c\u5206\u5e03\u548c\u5927\u91cf\u590d\u6742\u7684\u79ef\u5206\u6280\u5de7\u3002"}),"\n",(0,i.jsx)(l.li,{children:"\u56fe\u6a21\u578b\u7684\u5b66\u4e60\u65b9\u6848\u662f\u4ece \u8868\u793a\u3001\u63a8\u65ad\u3001\u5b66\u4e60 \u4e09\u5927\u65b9\u5411\u8fdb\u884c\u5f00\u5c55\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(l.p,{children:"\u7edf\u8ba1\u673a\u5668\u5b66\u4e60\u662f\u9891\u7387\u5b66\u6d3e\u7684\u6838\u5fc3\u89c2\u70b9\uff0c\u5176\u89e3\u51b3\u95ee\u9898\u7684\u601d\u8def\u662f\uff1a\u53c2\u6570\u662f\u786e\u5b9a\u7684\uff0c\u6570\u636e\u662f\u968f\u673a\u7684\uff0c\u5229\u7528\u968f\u673a\u7684\u6570\u636e\u63a8\u65ad\u786e\u5b9a\u7684\u53c2\u6570\uff0c\u5f97\u5230\u7684\u7ed3\u679c\u4e5f\u662f\u968f\u673a\u7684\uff1b"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:"\u6982\u7387\u8868\u793a\u7684\u662f\u4e8b\u4ef6\u53d1\u751f\u9891\u7387\u7684\u6781\u9650\u503c\uff0c\u5373\u5f53\u91cd\u590d\u8bd5\u9a8c\u7684\u6b21\u6570\u8d8b\u8fd1\u4e8e\u65e0\u7a77\u5927\u65f6\uff0c\u4e8b\u4ef6\u53d1\u751f\u7684\u9891\u7387\u4f1a\u6536\u655b\u5230\u771f\u5b9e\u7684\u6982\u7387\u4e4b\u4e0a\uff08\u8fd9\u79cd\u89c2\u70b9\u7684\u524d\u63d0\u662f\uff1a\u6982\u7387\u662f\u4e00\u4e2a\u786e\u5b9a\u7684\u503c\uff0c\u5e76\u4e0d\u4f1a\u53d7\u5230\u5355\u6b21\u89c2\u5bdf\u7ed3\u679c\u7684\u5f71\u54cd\uff09"}),"\n",(0,i.jsx)(l.li,{children:"\u9891\u7387\u7edf\u8ba1\u7406\u8bba\u7684\u6838\u5fc3\u5728\u4e8e\u8ba4\u5b9a\u5f85\u4f30\u8ba1\u7684\u53c2\u6570\u662f\u56fa\u5b9a\u4e0d\u53d8\u7684\u5e38\u91cf\uff0c\u8ba8\u8bba\u53c2\u6570\u7684\u6982\u7387\u5206\u5e03\u662f\u6ca1\u6709\u610f\u4e49\u7684\uff1b\u800c\u7528\u6765\u4f30\u8ba1\u53c2\u6570\u7684\u6570\u636e\u662f\u968f\u673a\u7684\u53d8\u91cf\uff0c\u6bcf\u4e2a\u6570\u636e\u90fd\u662f\u53c2\u6570\u652f\u914d\u4e0b\u4e00\u6b21\u72ec\u7acb\u91cd\u590d\u8bd5\u9a8c\u7684\u7ed3\u679c\u3002\u7531\u4e8e\u53c2\u6570\u672c\u8eab\u662f\u786e\u5b9a\u7684\uff0c\u90a3\u9891\u7387\u7684\u6ce2\u52a8\u5c31\u5e76\u975e\u6765\u6e90\u4e8e\u53c2\u6570\u672c\u8eab\u7684\u4e0d\u786e\u5b9a\u6027\uff0c\u800c\u662f\u7531\u6709\u9650\u6b21\u89c2\u5bdf\u9020\u6210\u7684\u5e72\u6270\u800c\u5bfc\u81f4"}),"\n"]}),"\n",(0,i.jsxs)(l.p,{children:["\u9891\u7387\u5b66\u6d3e\u8ba4\u4e3a\u6982\u7387\u662f\u968f\u673a\u4e8b\u4ef6\u53d1\u751f\u9891\u7387\u7684\u6781\u9650\u503c\uff0c\u5728\u6267\u884c\u53c2\u6570\u4f30\u8ba1\u65f6\uff0c",(0,i.jsx)(l.strong,{children:"\u89c6\u53c2\u6570\u4e3a\u786e\u5b9a\u53d6\u503c\uff0c\u89c6\u6570\u636e\u4e3a\u968f\u673a\u53d8\u91cf"}),"\uff0c\u4e3b\u8981\u91c7\u7528 ",(0,i.jsx)(l.strong,{children:"\u6700\u5927\u4f3c\u7136\u4f30\u8ba1\u6cd5\uff0c\u8ba9\u6570\u636e\u5728\u7ed9\u5b9a\u53c2\u6570\u4e0b\u7684\u4f3c\u7136\u6982\u7387\u6700\u5927\u5316\uff0c"}),"\n",(0,i.jsx)(l.strong,{children:"\u9891\u7387\u5b66\u6d3e\u5bf9\u5e94\u673a\u5668\u5b66\u4e60\u4e2d\u7684\u7edf\u8ba1\u5b66\u4e60\uff0c\u4ee5\u7ecf\u9a8c\u98ce\u9669\u6700\u5c0f\u5316\u4f5c\u4e3a\u6a21\u578b\u9009\u62e9\u7684\u51c6\u5219\u3002"})]}),"\n",(0,i.jsx)(l.h2,{id:"\u673a\u5668\u5b66\u4e60\u7684\u6982\u8ff0",children:"\u673a\u5668\u5b66\u4e60\u7684\u6982\u8ff0"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:["\u5b9a\u4e49\uff1a","\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:"\u673a\u5668\u5b66\u4e60\u7684\u5b9a\u4e49\uff1a\u673a\u5668\u5b66\u4e60\u662f\u4e00\u95e8\u7814\u7a76\u901a\u8fc7\u8ba1\u7b97\u7684\u624b\u6bb5\u5229\u7528\u7ecf\u9a8c\u6765\u6539\u5584\u7cfb\u7edf\u81ea\u8eab\u6027\u80fd\u7684\u5b66\u79d1\uff08\u6e90\u81ea\uff1a\u673a\u5668\u5b66\u4e60\u9886\u57df\u5143\u8001-\u6c64\u59c6\xb7\u7c73\u5207\u5c14(Tom M. Mitchell)\u4e4b\u53e3\uff09"}),"\n",(0,i.jsxs)(l.li,{children:["\u7edf\u8ba1\u673a\u5668\u5b66\u4e60\u7684\u5b9a\u4e49\uff1a\u901a\u8fc7\u5bf9\u7ed9\u5b9a\u7684\u6307\u6807\uff08\u6bd4\u5982\u4f3c\u7136\u51fd\u6570\u6216\u8005\u5747\u65b9\u8bef\u5dee\uff09\u8fdb\u884c\u6700\u4f18\u5316\uff0c\u6765\u4f30\u8ba1\u6a21\u578b\u4e2d\u53c2\u6570\u7684\u53d6\u503c\uff0c\u4f30\u8ba1\u662f\u5e76\u4e0d\u8003\u8651\u53c2\u6570\u7684\u4e0d\u786e\u5b9a\u6027\uff0c\u4e5f\u5c31\u662f\u4e0d\u8003\u8651\u672a\u77e5\u53c2\u6570\u7684\u5148\u9a8c\u5206\u5e03\u3002",(0,i.jsx)(l.strong,{children:"\u548c\u53c2\u6570\u76f8\u5173\u7684\u4fe1\u606f\u5168\u90e8\u6765\u6e90\u4e8e\u6570\u636e\uff0c\u8f93\u51fa\u7684\u5219\u662f\u672a\u77e5\u53c2\u6570\u552f\u4e00\u7684\u4f30\u8ba1\u7ed3\u679c\uff0c\u8fd9\u662f\u7edf\u8ba1\u673a\u5668\u5b66\u4e60\u7684\u6838\u5fc3\u7279\u5f81"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(l.li,{children:["\u673a\u5668\u5b66\u4e60\u7684\u4efb\u52a1\uff1a","\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:"\u57fa\u4e8e\u5bf9\u5df2\u77e5\u6570\u636e\u6784\u9020\u6982\u7387\u6a21\u578b\uff0c\u518d\u8fd0\u7528\u6982\u7387\u6a21\u578b\u5bf9\u672a\u77e5\u6570\u636e\u8fdb\u884c\u9884\u6d4b\u4e0e\u5206\u6790"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(l.li,{children:["\u7edf\u8ba1\u673a\u5668\u5b66\u4e60\u7684\u7cbe\u5ea6\u5982\u4f55\u8861\u91cf\uff1f","\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:["\u5f15\u5165\u7ecf\u9a8c\u98ce\u9669\u6765\u89e3\u51b3\uff0c\u7528\u8bad\u7ec3\u6570\u636e\u7684\u7ecf\u9a8c\u5206\u5e03\u66ff\u6362\u6389\u539f\u59cb\u8868\u8fbe\u5f0f\u4e2d\u6570\u636e\u7684\u771f\u5b9e\u5206\u5e03\uff0c\u501f\u6b64\u5c06\u98ce\u9669\u51fd\u6570\u8f6c\u5316\u6210\u53ef\u8ba1\u7b97\u7684\u6570\u503c\uff08",(0,i.jsx)(l.strong,{children:"\u635f\u5931\u51fd\u6570\uff08loss funciton"}),"\uff09\u76f4\u63a5\u5b9a\u4e49\u4e86\u6a21\u578b\u6027\u80fd\u7684\u5ea6\u91cf\u65b9\u5f0f\uff0c\u5176\u6570\u5b66\u671f\u671b\u88ab\u79f0\u4e3a\u98ce\u9669\uff08risk\uff09,\u98ce\u9669\u6700\u5c0f\u5316\u5c31\u662f\u53c2\u6570\u4f30\u8ba1\u7684\u4f9d\u636e\u548c\u51c6\u6d4b"]}),"\n",(0,i.jsx)(l.li,{children:"\u6240\u8c13\u7684\u6700\u4f18\u6a21\u578b\u4e5f\u5c31\u662f\u4f7f\u7ecf\u9a8c\u98ce\u9669\u6700\u5c0f\u5316\uff08empirical risk minimization\uff09\u7684\u90a3\u4e2a\u6a21\u578b"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(l.h2,{id:"\u7edf\u8ba1\u673a\u5668\u5b66\u4e60\u6838\u5fc3",children:"\u7edf\u8ba1\u673a\u5668\u5b66\u4e60\u6838\u5fc3"}),"\n",(0,i.jsxs)(l.blockquote,{children:["\n",(0,i.jsx)(l.p,{children:"\u4e0b\u6587\u5173\u4e8e\u673a\u5668\u5b66\u4e60\u7684\u8868\u8fbe\u5747\u6307\u7edf\u8ba1\u673a\u5668\u5b66\u4e60\uff0c\u7b80\u79f0\uff1a\u673a\u5668\u5b66\u4e60"}),"\n"]}),"\n",(0,i.jsx)(l.p,{children:"\u4ece\u5386\u53f2\u6570\u636e\u4e2d\u81ea\u52a8\u5206\u6790\u83b7\u53d6\u6a21\u578b\uff0c\u5e76\u5229\u7528\u6a21\u578b\u5bf9\u672a\u77e5\u6570\u636e\u8fdb\u884c\u9884\u6d4b"}),"\n",(0,i.jsx)(l.h3,{id:"\u673a\u5668\u5b66\u4e60\u901a\u7528\u6d41\u7a0b",children:"\u673a\u5668\u5b66\u4e60\u901a\u7528\u6d41\u7a0b"}),"\n",(0,i.jsx)(l.h4,{id:"step1-\u83b7\u53d6\u6570\u636e",children:"step1: \u83b7\u53d6\u6570\u636e"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:"\u83b7\u53d6\u6570\u636e\u7684\u65b9\u5f0f\u6709\uff1a\u722c\u866b\u3001\u7269\u8054\u7f51\u8bbe\u5907\u3001\u6570\u636e\u5e93\u3001\u6587\u4ef6\u7b49\u7b49"}),"\n"]}),"\n",(0,i.jsx)(l.h4,{id:"step2\u6570\u636e\u57fa\u672c\u5904\u7406",children:"step2:\u6570\u636e\u57fa\u672c\u5904\u7406"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:"\u5bf9\u6570\u636e\u8fdb\u884c\u7f3a\u5931\u503c\u3001\u53bb\u9664\u5f02\u5e38\u503c\u7b49\u5904\u7406"}),"\n"]}),"\n",(0,i.jsx)(l.h4,{id:"step3\u7279\u5f81\u5de5\u7a0b",children:"step3:\u7279\u5f81\u5de5\u7a0b"}),"\n",(0,i.jsxs)(l.blockquote,{children:["\n",(0,i.jsx)(l.p,{children:"\u6570\u636e\u548c\u7279\u5f81\u51b3\u5b9a\u4e86\u673a\u5668\u5b66\u4e60\u7684\u4e0a\u9650\uff0c\u800c\u6a21\u578b\u548c\u7b97\u6cd5\u53ea\u662f\u903c\u8fd1\u8fd9\u4e2a\u4e0a\u9650\u800c\u5df2\u3002"}),"\n"]}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:["\u6982\u5ff5\uff1a","\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:"\u7279\u5f81\u5de5\u7a0b\u662f\u6307\u4f7f\u7528\u4e13\u4e1a\u80cc\u666f\u77e5\u8bc6\u548c\u6280\u5de7\u5904\u7406\u6570\u636e\uff0c\u4f7f\u5f97\u7279\u5f81\u80fd\u5728\u51e0\u533a\u5b66\u4e60\u7b97\u6cd5\u4e0a\u53d1\u6325\u66f4\u597d\u7684\u4f5c\u7528\u7684\u8fc7\u7a0b"}),"\n",(0,i.jsx)(l.li,{children:"\u7279\u5f81\u5de5\u7a0b\u7684\u610f\u4e49\uff1a\u4f1a\u76f4\u63a5\u5f71\u54cd\u6280\u673a\u5668\u5b66\u4e60\u7684\u6548\u679c"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(l.li,{children:["\u65b9\u6cd5\uff1a","\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.strong,{children:"\u7279\u5f81\u63d0\u53d6"}),"\uff1a\u5c06\u4efb\u610f\u6570\u636e\uff08\u6587\u672c\u6216\u56fe\u50cf\uff09\u8f6c\u6362\u4e3a\u53ef\u7528\u673a\u5668\u5b66\u4e60\u7684\u6570\u5b57\u7279\u5f81\u3002"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.strong,{children:"\u7279\u5f81\u9884\u5904\u7406"}),"\uff1a\u901a\u8fc7\u4e00\u4e9b\u8f6c\u6362\u51fd\u6570\u5c06\u7279\u5f81\u6570\u636e\u8f6c\u6362\u6210\u66f4\u9002\u5408\u7b97\u6cd5\u6a21\u578b\u7684\u7279\u5f81\u6570\u636e\u8fc7\u7a0b\u3002"]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.strong,{children:"\u7279\u5f81\u964d\u7ef4"}),"\uff1a\u6307\u5728\u67d0\u4e9b\u9650\u5b9a\u6761\u4ef6\u4e0b\uff0c\u964d\u4f4e\u968f\u673a\u53d8\u91cf(\u7279\u5f81)\u7684\u4e2a\u6570\uff0c\u5f97\u5230\u4e00\u7ec4\u201c\u4e0d\u76f8\u5173\u201d\u4e3b\u53d8\u91cf\u989d\u8fc7\u7a0b"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(l.h4,{id:"step4\u673a\u5668\u5b66\u4e60\u6a21\u578b\u8bad\u7ec3",children:"step4:\u673a\u5668\u5b66\u4e60\uff08\u6a21\u578b\u8bad\u7ec3\uff09"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:"\u9009\u62e9\u5408\u9002\u7684\u7b97\u6cd5\u5bf9\u6a21\u578b\u8fdb\u884c\u8bad\u7ec3"}),"\n"]}),"\n",(0,i.jsx)(l.h4,{id:"step5\u6a21\u578b\u8bc4\u4f30",children:"step5:\u6a21\u578b\u8bc4\u4f30"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:["\u6982\u5ff5\uff1a","\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:"\u5bf9\u8bad\u7ec3\u597d\u7684\u6a21\u578b\u8fdb\u884c\u8bc4\u4f30"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(l.li,{children:["\u65b9\u6cd5\uff1a","\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:["\u5206\u7c7b\u6a21\u578b\u8bc4\u4f30","\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:"\u51c6\u786e\u7387"}),"\n",(0,i.jsx)(l.li,{children:"\u7cbe\u786e\u7387"}),"\n",(0,i.jsx)(l.li,{children:"\u53ec\u56de\u7387"}),"\n",(0,i.jsx)(l.li,{children:"Fl-score"}),"\n",(0,i.jsx)(l.li,{children:"AUC\u6307\u6807"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(l.li,{children:["\u56de\u5f52\u6a21\u578b\u8bc4\u4f30","\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:"\u5747\u65b9\u6839\u8bef\u5dee"}),"\n",(0,i.jsx)(l.li,{children:"\u76f8\u5bf9\u5e73\u65b9\u8bef\u5dee"}),"\n",(0,i.jsx)(l.li,{children:"\u5e73\u5747\u7edd\u5bf9\u8bef\u5dee"}),"\n",(0,i.jsx)(l.li,{children:"\u76f8\u5bf9\u7edd\u5bf9\u8bef\u5dee"}),"\n",(0,i.jsx)(l.li,{children:"\u51b3\u5b9a\u7cfb\u6570"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(l.h3,{id:"\u673a\u5668\u5b66\u4e60\u7684\u5b8c\u6574\u6d41\u7a0b",children:"\u673a\u5668\u5b66\u4e60\u7684\u5b8c\u6574\u6d41\u7a0b"}),"\n",(0,i.jsx)(l.h4,{id:"step1\u62bd\u8c61\u6210\u6570\u636e\u95ee\u9898",children:"step1:\u62bd\u8c61\u6210\u6570\u636e\u95ee\u9898"}),"\n",(0,i.jsx)(l.p,{children:"\u660e\u786e\u95ee\u9898\u662f\u8fdb\u884c\u673a\u5668\u5b66\u4e60\u7684\u7b2c\u4e00\u6b65\u3002\u673a\u5668\u5b66\u4e60\u7684\u8bad\u7ec3\u8fc7\u7a0b\u901a\u5e38\u90fd\u662f\u4e00\u4ef6\u975e\u5e38\u8017\u65f6\u7684\u4e8b\u60c5\uff0c\u80e1\u4e71\u5c1d\u8bd5\u65f6\u95f4\u6210\u672c\u662f\u975e\u5e38\u9ad8\u7684\u3002\u8fd9\u91cc\u7684\u62bd\u8c61\u6210\u6570\u5b66\u95ee\u9898\uff0c\u6307\u7684\u660e\u786e\u6211\u4eec\u53ef\u4ee5\u83b7\u5f97\u4ec0\u4e48\u6837\u7684\u6570\u636e\uff0c\u62bd\u8c61\u51fa\u7684\u95ee\u9898\uff0c\u662f\u4e00\u4e2a\u5206\u7c7b\u8fd8\u662f\u56de\u5f52\u6216\u8005\u662f\u805a\u7c7b\u7684\u95ee\u9898\u3002"}),"\n",(0,i.jsx)(l.h4,{id:"step2\u83b7\u53d6\u6570\u636e",children:"step2:\u83b7\u53d6\u6570\u636e"}),"\n",(0,i.jsx)(l.p,{children:"\u6570\u636e\u8981\u6709\u4ee3\u8868\u6027\uff0c\u5426\u5219\u5fc5\u7136\u4f1a\u8fc7\u62df\u5408\u3002\u5bf9\u4e8e\u5206\u7c7b\u95ee\u9898\uff0c\u6570\u636e\u504f\u659c\u4e0d\u80fd\u8fc7\u4e8e\u4e25\u91cd\uff0c\u4e0d\u540c\u7c7b\u522b\u7684\u6570\u636e\u6570\u91cf\u4e0d\u8981\u6709\u6570\u91cf\u7ea7\u7684\u5dee\u8ddd\u3002\n\u800c\u4e14\u8fd8\u8981\u5bf9\u6570\u636e\u7684\u91cf\u7ea7\u6709\u4e00\u4e2a\u8bc4\u4f30\uff0c\u591a\u5c11\u4e2a\u6837\u672c\uff0c\u591a\u5c11\u4e2a\u7279\u5f81\uff0c\u53ef\u4ee5\u4f30\u7b97\u51fa\u5176\u5bf9\u5185\u5b58\u7684\u6d88\u8017\u7a0b\u5ea6\uff0c\u5224\u65ad\u8bad\u7ec3\u8fc7\u7a0b\u4e2d\u5185\u5b58\u662f\u5426\u80fd\u591f\u653e\u5f97\u4e0b\u3002\u5982\u679c\u653e\u4e0d\u4e0b\u5c31\u5f97\u8003\u8651\u6539\u8fdb\u7b97\u6cd5\u6216\u8005\u4f7f\u7528\u4e00\u4e9b\u964d\u7ef4\u7684\u6280\u5de7\u4e86\u3002\u5982\u679c\u6570\u636e\u91cf\u5b9e\u5728\u592a\u5927\uff0c\u90a3\u5c31\u8981\u8003\u8651\u5206\u5e03\u5f0f\u4e86\u3002"}),"\n",(0,i.jsx)(l.h4,{id:"step3\u7279\u5f81\u9884\u5904\u7406\u4e0e\u7279\u5f81\u9009\u62e9",children:"step3:\u7279\u5f81\u9884\u5904\u7406\u4e0e\u7279\u5f81\u9009\u62e9"}),"\n",(0,i.jsx)(l.p,{children:"\u826f\u597d\u7684\u6570\u636e\u8981\u80fd\u591f\u63d0\u53d6\u51fa\u826f\u597d\u7684\u7279\u5f81\u624d\u80fd\u771f\u6b63\u53d1\u6325\u4f5c\u7528\u3002\n\u7279\u5f81\u9884\u5904\u7406\u3001\u6570\u636e\u6e05\u6d17\u662f\u5f88\u5173\u952e\u7684\u6b65\u9aa4\uff0c\u5f80\u5f80\u80fd\u591f\u4f7f\u5f97\u7b97\u6cd5\u7684\u6548\u679c\u548c\u6027\u80fd\u5f97\u5230\u663e\u8457\u63d0\u9ad8\u3002\n\u5f52\u4e00\u5316\u3001\u79bb\u6563\u5316\u3001\u56e0\u5b50\u5316\u3001\u7f3a\u5931\u503c\u5904\u7406\u3001\u53bb\u9664\u5171\u7ebf\u6027\u7b49\uff0c\u6570\u636e\u6316\u6398\u8fc7\u7a0b\u4e2d\u5f88\u591a\u65f6\u95f4\u5c31\u82b1\u5728\u5b83\u4eec\u4e0a\u9762\u3002\u8fd9\u4e9b\u5de5\u4f5c\u7b80\u5355\u53ef\u590d\u5236\uff0c\u6536\u76ca\u7a33\u5b9a\u53ef\u9884\u671f\uff0c\u662f\u673a\u5668\u5b66\u4e60\u7684\u57fa\u7840\u5fc5\u5907\u6b65\u9aa4\u3002\n\u7b5b\u9009\u51fa\u663e\u8457\u7279\u5f81\u3001\u6452\u5f03\u975e\u663e\u8457\u7279\u5f81\uff0c\u9700\u8981\u673a\u5668\u5b66\u4e60\u5de5\u7a0b\u5e08\u53cd\u590d\u7406\u89e3\u4e1a\u52a1\u3002\u8fd9\u5bf9\u5f88\u591a\u7ed3\u679c\u6709\u51b3\u5b9a\u6027\u7684\u5f71\u54cd\u3002\u7279\u5f81\u9009\u62e9\u597d\u4e86\uff0c\u975e\u5e38\u7b80\u5355\u7684\u7b97\u6cd5\u4e5f\u80fd\u5f97\u51fa\u826f\u597d\u3001\u7a33\u5b9a\u7684\u7ed3\u679c\u3002\u8fd9\u9700\u8981\u8fd0\u7528\u7279\u5f81\u6709\u6548\u6027\u5206\u6790\u7684\u76f8\u5173\u6280\u672f\uff0c\u5982\u76f8\u5173\u7cfb\u6570\u3001\u5361\u65b9\u68c0\u9a8c\u3001\u5e73\u5747\u4e92\u4fe1\u606f\u3001\u6761\u4ef6\u71b5\u3001\u540e\u9a8c\u6982\u7387\u3001\u903b\u8f91\u56de\u5f52\u6743\u91cd\u7b49\u65b9\u6cd5\u3002"}),"\n",(0,i.jsx)(l.h4,{id:"step4\u8bad\u7ec3\u6a21\u578b\u4e0e\u8c03\u4f18",children:"step4:\u8bad\u7ec3\u6a21\u578b\u4e0e\u8c03\u4f18"}),"\n",(0,i.jsx)(l.p,{children:"\u76f4\u5230\u8fd9\u4e00\u6b65\u624d\u7528\u5230\u6211\u4eec\u4e0a\u9762\u8bf4\u7684\u7b97\u6cd5\u8fdb\u884c\u8bad\u7ec3\u3002\u73b0\u5728\u5f88\u591a\u7b97\u6cd5\u90fd\u80fd\u591f\u5c01\u88c5\u6210\u9ed1\u76d2\u4f9b\u4eba\u4f7f\u7528\u3002\u4f46\u662f\u771f\u6b63\u8003\u9a8c\u6c34\u5e73\u7684\u662f\u8c03\u6574\u8fd9\u4e9b\u7b97\u6cd5\u7684\uff08\u8d85\uff09\u53c2\u6570\uff0c\u4f7f\u5f97\u7ed3\u679c\u53d8\u5f97\u66f4\u52a0\u4f18\u826f\u3002\u8fd9\u9700\u8981\u6211\u4eec\u5bf9\u7b97\u6cd5\u7684\u539f\u7406\u6709\u6df1\u5165\u7684\u7406\u89e3\u3002\u7406\u89e3\u8d8a\u6df1\u5165\uff0c\u5c31\u8d8a\u80fd\u53d1\u73b0\u95ee\u9898\u7684\u75c7\u7ed3\uff0c\u63d0\u51fa\u826f\u597d\u7684\u8c03\u4f18\u65b9\u6848\u3002"}),"\n",(0,i.jsx)(l.h4,{id:"step5\u6a21\u578b\u8bca\u65ad",children:"step5:\u6a21\u578b\u8bca\u65ad"}),"\n",(0,i.jsx)(l.p,{children:"\u5982\u4f55\u786e\u5b9a\u6a21\u578b\u8c03\u4f18\u7684\u65b9\u5411\u4e0e\u601d\u8def\u5462\uff1f\u8fd9\u5c31\u9700\u8981\u5bf9\u6a21\u578b\u8fdb\u884c\u8bca\u65ad\u7684\u6280\u672f\u3002\n\u8fc7\u62df\u5408\u3001\u6b20\u62df\u5408 \u5224\u65ad\u662f\u6a21\u578b\u8bca\u65ad\u4e2d\u81f3\u5173\u91cd\u8981\u7684\u4e00\u6b65\u3002\u5e38\u89c1\u7684\u65b9\u6cd5\u5982\u4ea4\u53c9\u9a8c\u8bc1\uff0c\u7ed8\u5236\u5b66\u4e60\u66f2\u7ebf\u7b49\u3002\u8fc7\u62df\u5408\u7684\u57fa\u672c\u8c03\u4f18\u601d\u8def\u662f\u589e\u52a0\u6570\u636e\u91cf\uff0c\u964d\u4f4e\u6a21\u578b\u590d\u6742\u5ea6\u3002\u6b20\u62df\u5408\u7684\u57fa\u672c\u8c03\u4f18\u601d\u8def\u662f\u63d0\u9ad8\u7279\u5f81\u6570\u91cf\u548c\u8d28\u91cf\uff0c\u589e\u52a0\u6a21\u578b\u590d\u6742\u5ea6\u3002\n\u8bef\u5dee\u5206\u6790 \u4e5f\u662f\u673a\u5668\u5b66\u4e60\u81f3\u5173\u91cd\u8981\u7684\u6b65\u9aa4\u3002\u901a\u8fc7\u89c2\u5bdf\u8bef\u5dee\u6837\u672c\u5168\u9762\u5206\u6790\u4ea7\u751f\u8bef\u5dee\u7684\u539f\u56e0:\u662f\u53c2\u6570\u7684\u95ee\u9898\u8fd8\u662f\u7b97\u6cd5\u9009\u62e9\u7684\u95ee\u9898\uff0c\u662f\u7279\u5f81\u7684\u95ee\u9898\u8fd8\u662f\u6570\u636e\u672c\u8eab\u7684\u95ee\u9898\u2026\u2026\n\u8bca\u65ad\u540e\u7684\u6a21\u578b\u9700\u8981\u8fdb\u884c\u8c03\u4f18\uff0c\u8c03\u4f18\u540e\u7684\u65b0\u6a21\u578b\u9700\u8981\u91cd\u65b0\u8fdb\u884c\u8bca\u65ad\uff0c\u8fd9\u662f\u4e00\u4e2a\u53cd\u590d\u8fed\u4ee3\u4e0d\u65ad\u903c\u8fd1\u7684\u8fc7\u7a0b\uff0c\u9700\u8981\u4e0d\u65ad\u5730\u5c1d\u8bd5\uff0c \u8fdb\u800c\u8fbe\u5230\u6700\u4f18\u72b6\u6001\u3002"}),"\n",(0,i.jsx)(l.h4,{id:"step6\u6a21\u578b\u878d\u5408",children:"step6:\u6a21\u578b\u878d\u5408"}),"\n",(0,i.jsx)(l.p,{children:"\u4e00\u822c\u6765\u8bf4\uff0c\u6a21\u578b\u878d\u5408\u540e\u90fd\u80fd\u4f7f\u5f97\u6548\u679c\u6709\u4e00\u5b9a\u63d0\u5347\u3002\u800c\u4e14\u6548\u679c\u5f88\u597d\u3002\n\u5de5\u7a0b\u4e0a\uff0c\u4e3b\u8981\u63d0\u5347\u7b97\u6cd5\u51c6\u786e\u5ea6\u7684\u65b9\u6cd5\u662f\u5206\u522b\u5728\u6a21\u578b\u7684\u524d\u7aef\uff08\u7279\u5f81\u6e05\u6d17\u548c\u9884\u5904\u7406\uff0c\u4e0d\u540c\u7684\u91c7\u6837\u6a21\u5f0f\uff09\u4e0e\u540e\u7aef\uff08\u6a21\u578b\u878d\u5408\uff09\u4e0a\u4e0b\u529f\u592b\u3002\u56e0\u4e3a\u4ed6\u4eec\u6bd4\u8f83\u6807\u51c6\u53ef\u590d\u5236\uff0c\u6548\u679c\u6bd4\u8f83\u7a33\u5b9a\u3002\u800c\u76f4\u63a5\u8c03\u53c2\u7684\u5de5\u4f5c\u4e0d\u4f1a\u5f88\u591a\uff0c\u6bd5\u7adf\u5927\u91cf\u6570\u636e\u8bad\u7ec3\u8d77\u6765\u592a\u6162\u4e86\uff0c\u800c\u4e14\u6548\u679c\u96be\u4ee5\u4fdd\u8bc1\u3002"}),"\n",(0,i.jsx)(l.h4,{id:"step7\u4e0a\u7ebf\u8fd0\u884c",children:"step7:\u4e0a\u7ebf\u8fd0\u884c"}),"\n",(0,i.jsx)(l.p,{children:"\u8fd9\u4e00\u90e8\u5206\u5185\u5bb9\u4e3b\u8981\u8ddf\u5de5\u7a0b\u5b9e\u73b0\u7684\u76f8\u5173\u6027\u6bd4\u8f83\u5927\u3002\u5de5\u7a0b\u4e0a\u662f\u7ed3\u679c\u5bfc\u5411\uff0c\u6a21\u578b\u5728\u7ebf\u4e0a\u8fd0\u884c\u7684\u6548\u679c\u76f4\u63a5\u51b3\u5b9a\u6a21\u578b\u7684\u6210\u8d25\u3002 \u4e0d\u5355\u7eaf\u5305\u62ec\u5176\u51c6\u786e\u7a0b\u5ea6\u3001\u8bef\u5dee\u7b49\u60c5\u51b5\uff0c\u8fd8\u5305\u62ec\u5176\u8fd0\u884c\u7684\u901f\u5ea6(\u65f6\u95f4\u590d\u6742\u5ea6)\u3001\u8d44\u6e90\u6d88\u8017\u7a0b\u5ea6\uff08\u7a7a\u95f4\u590d\u6742\u5ea6\uff09\u3001\u7a33\u5b9a\u6027\u662f\u5426\u53ef\u63a5\u53d7\u3002\n\u8fd9\u4e9b\u5de5\u4f5c\u6d41\u7a0b\u4e3b\u8981\u662f\u5de5\u7a0b\u5b9e\u8df5\u4e0a\u603b\u7ed3\u51fa\u7684\u4e00\u4e9b\u7ecf\u9a8c\u3002\u5e76\u4e0d\u662f\u6bcf\u4e2a\u9879\u76ee\u90fd\u5305\u542b\u5b8c\u6574\u7684\u4e00\u4e2a\u6d41\u7a0b\u3002"})]})}function o(n={}){const{wrapper:l}={...(0,d.R)(),...n.components};return l?(0,i.jsx)(l,{...n,children:(0,i.jsx)(x,{...n})}):x(n)}},7092:(n,l,e)=>{e.d(l,{R:()=>r,x:()=>c});var s=e(758);const i={},d=s.createContext(i);function r(n){const l=s.useContext(d);return s.useMemo((function(){return"function"==typeof n?n(l):{...l,...n}}),[l,n])}function c(n){let l;return l=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(d.Provider,{value:l},n.children)}}}]);