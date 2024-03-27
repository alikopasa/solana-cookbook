import{_ as r,r as a,o as l,c as i,a as e,b as t,w as c,F as d,d as o,e as h}from"./app.31cab234.js";const _={},p=e("h1",{id:"\u4EA4\u6613",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4EA4\u6613","aria-hidden":"true"},"#"),o(" \u4EA4\u6613")],-1),u=o("\u5BA2\u6237\u7AEF\u53EF\u4EE5\u901A\u8FC7\u5411\u4E00\u4E2A\u96C6\u7FA4\u63D0\u4EA4\u4EA4\u6613\u6765\u8C03\u7528"),m=o("\u7A0B\u5E8F"),f=o("\u3002\u4E00\u4E2A\u4EA4\u6613\u53EF\u4EE5\u5305\u542B\u591A\u4E2A\u6307\u4EE4\uFF0C\u6BCF\u4E2A\u6307\u4EE4\u53EF\u4EE5\u9488\u5BF9\u4E0D\u540C\u7684\u7A0B\u5E8F\u3002 \u4EA4\u6613\u63D0\u4EA4\u65F6\uFF0CSolana"),b={href:"https://docs.solana.com/developing/programming-model/runtime",target:"_blank",rel:"noopener noreferrer"},g=o("\u8FD0\u884C\u5E93"),k=o("\u4F1A\u81EA\u52A8\u7684\u6309\u987A\u5E8F\u5904\u7406\u8FD9\u4E9B\u6307\u4EE4\u3002 \u5982\u679C\u67D0\u4E00\u4E2A\u6307\u4EE4\u4E2D\u7684\u4EFB\u4F55\u4E00\u4E2A\u90E8\u5206\u5931\u8D25\uFF0C\u6574\u4E2A\u4EA4\u6613\u5C31\u4F1A\u5931\u8D25\u3002"),x=h('<h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><div class="custom-container tip"><p class="custom-container-title">\u8981\u70B9</p><ul><li>\u6307\u4EE4\u662FSolana\u4E0A\u6700\u57FA\u672C\u7684\u64CD\u4F5C\u5355\u5143</li><li>\u6BCF\u4E2A\u6307\u4EE4\u90FD\u5305\u542B\uFF1A <ul><li><code>program_id</code>\uFF1A\u6240\u9488\u5BF9\u7684\u7A0B\u5E8F\u7684id</li><li><code>accounts</code>\uFF1A\u9700\u8981\u8BFB\u6216\u5199\u7684\u5168\u90E8\u8D26\u6237\u7EC4\u6210\u7684\u6570\u7EC4</li><li><code>instruction_data</code>\uFF1A\u5411\u6307\u5B9A\u7A0B\u5E8F\u6240\u4F20\u8F93\u7684\u6570\u636E\u7684\u5B57\u8282\u7801</li></ul></li><li>\u591A\u4E2A\u6307\u4EE4\u53EF\u4EE5\u88AB\u6253\u5305\u8FDB\u5165\u540C\u4E00\u4E2A\u4EA4\u6613\u5F53\u4E2D</li><li>\u6BCF\u4E2A\u4EA4\u6613\u90FD\u5305\u542B\uFF1A <ul><li><code>instructions</code>\uFF1A\u4E00\u4E2A\u6216\u591A\u4E2A\u6307\u4EE4</li><li><code>blockhash</code>\uFF1A\u6700\u65B0\u7684\u5757\u54C8\u5E0C\u503C</li><li><code>signatures</code>\uFF1A\u4E00\u4E2A\u6216\u591A\u4E2A\u7B7E\u540D</li></ul></li><li>\u6307\u4EE4\u4F1A\u88AB\u81EA\u52A8\u7684\u6309\u987A\u5E8F\u6267\u884C</li><li>\u5982\u679C\u4E00\u4E2A\u6307\u4EE4\u7684\u4EFB\u4F55\u4E00\u90E8\u5206\u5931\u8D25\uFF0C\u6574\u4E2A\u4EA4\u6613\u5C31\u4F1A\u5931\u8D25</li><li>\u4EA4\u6613\u7684\u5927\u5C0F\u9650\u5236\u57281232\u5B57\u8282\u4EE5\u5185</li></ul></div><h2 id="\u6DF1\u5165" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u5165" aria-hidden="true">#</a> \u6DF1\u5165</h2><p>\u5728Solana\u8FD0\u884C\u5E93\u4E2D\uFF0C\u6307\u4EE4\u548C\u4EA4\u6613\u90FD\u9700\u8981\u5148\u6307\u5B9A\u5168\u90E8\u9700\u8981\u8BFB\u5199\u8BBF\u95EE\u7684\u8D26\u6237\u5217\u8868\u3002 \u901A\u8FC7\u4E8B\u5148\u6307\u5B9A\u8D26\u6237\u5217\u8868\uFF0C\u8FD0\u884C\u5E93\u53EF\u4EE5\u5BF9\u4EA4\u6613\u7684\u6267\u884C\u505A\u5E76\u884C\u5316\u5904\u7406\u3002</p><p>\u5F53\u4EA4\u6613\u88AB\u63D0\u4EA4\u5230\u96C6\u7FA4\u65F6\uFF0C\u8FD0\u884C\u5E93\u4F1A\u81EA\u52A8\u7684\u6309\u7167\u987A\u5E8F\u5904\u7406\u8FD9\u4E9B\u6307\u4EE4\u3002\u5BF9\u4E8E\u6BCF\u4E2A\u6307\u4EE4\uFF0C\u63A5\u6536\u8FD9\u4E2A\u6307\u4EE4\u7684\u7A0B\u5E8F\u4F1A\u89E3\u6790\u6307\u4EE4\u4E2D\u7684\u6570\u636E\u5B57\u6BB5\uFF0C\u5728\u6307\u5B9A\u7684\u8D26\u6237\u4E0A\u8FDB\u884C\u64CD\u4F5C\u3002 \u7A0B\u5E8F\u8981\u4E48\u6267\u884C\u6210\u529F\uFF0C\u8981\u4E48\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u9519\u8BEF\u7801\u3002\u5982\u679C\u8FD4\u56DE\u4E86\u4E00\u4E2A\u9519\u8BEF\u7801\uFF0C\u6574\u4E2A\u4EA4\u6613\u90FD\u4F1A\u7ACB\u5373\u5931\u8D25\u3002</p><p>\u4EFB\u4F55\u4EA4\u6613\uFF0C\u53EA\u8981\u9488\u5BF9\u4E00\u4E2A\u8D26\u6237\u6263\u9664SOL\uFF0C\u6216\u8005\u4FEE\u6539\u5176\u4E2D\u7684\u6570\u636E\uFF0C\u90FD\u9700\u8981\u8FD9\u4E2A\u8D26\u6237\u62E5\u6709\u8005\u7684\u7B7E\u540D\u3002 \u5728\u4EA4\u6613\u4E2D\uFF0C\u4F1A\u88AB\u4FEE\u6539\u7684\u8D26\u6237\u90FD\u4F1A\u88AB\u6807\u8BB0\u4E3A<code>writable</code>\uFF08\u53EF\u5199\uFF09\u3002 \u5F53\u4EA4\u6613\u7684\u4ED8\u8D39\u8005\u652F\u4ED8\u4E86\u8DB3\u591F\u7684\u79DF\u91D1\u548C\u4EA4\u6613\u8D39\u7528\u65F6\uFF0C\u4E00\u4E2A\u8D26\u6237\u53EF\u4EE5\u88AB\u5B58\u5165SOL\u800C\u4E0D\u7528\u8FD9\u4E2A\u8D26\u6237\u62E5\u6709\u8005\u7684\u8BB8\u53EF\u3002</p>',6),S=o("\u63D0\u4EA4\u4E4B\u524D\uFF0C\u6BCF\u4E2A\u4EA4\u6613\u9700\u8981\u5F15\u7528\u4E00\u4E2A"),v={href:"https://docs.solana.com/developing/programming-model/transactions#recent-blockhash",target:"_blank",rel:"noopener noreferrer"},y=o("recent blockhash\uFF08\u6700\u65B0\u5757\u54C8\u5E0C\uFF09"),L=o("\u3002 \u5757\u54C8\u5E0C\u88AB\u7528\u4E8E\u53BB\u91CD\uFF0C\u4EE5\u53CA\u79FB\u9664\u8FC7\u671F\u4EA4\u6613\u3002\u4E00\u4E2A\u5757\u54C8\u5E0C\u7684\u6700\u5927\u5BFF\u547D\u662F150\u4E2A\u533A\u5757\uFF0C\u6210\u6587\u65F6\u8FD9\u4E2A\u65F6\u95F4\u5927\u7EA6\u662F1\u5206\u949F19\u79D2\u3002"),w=e("h3",{id:"\u8D39\u7528",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u8D39\u7528","aria-hidden":"true"},"#"),o(" \u8D39\u7528")],-1),T=e("p",null,"Solana\u7F51\u7EDC\u6536\u53D6\u4E24\u79CD\u8D39\u7528\uFF1A",-1),F={href:"https://docs.solana.com/transaction_fees",target:"_blank",rel:"noopener noreferrer"},N=o("\u4EA4\u6613\u8D39"),V=o("\uFF0C\u7528\u4E8E\u5411\u7F51\u7EDC\u5E7F\u64AD\u6D88\u606F\uFF08\u4EA6\u5373gas\u8D39\uFF09"),B={href:"https://docs.solana.com/developing/programming-model/accounts#rent",target:"_blank",rel:"noopener noreferrer"},E=o("\u79DF\u91D1"),I=o("\uFF0C\u7528\u4E8E\u5411\u533A\u5757\u94FE\u4E0A\u5B58\u50A8\u6570\u636E"),O=e("p",null,[o("\u5728Solana\u4E2D\uFF0C\u4EA4\u6613\u8D39\u662F\u786E\u5B9A\u7684\u3002\u5E76\u6CA1\u6709\u8D39\u7387\u7ADE\u4EF7\u7684\u6982\u5FF5\uFF0C\u7528\u6237\u65E0\u6CD5\u901A\u8FC7\u589E\u52A0\u4EA4\u6613\u8D39\u7684\u65B9\u5F0F\u589E\u52A0\u81EA\u5DF1\u7684\u4EA4\u6613\u88AB\u6253\u5305\u8FDB\u4E0B\u4E00\u4E2A\u533A\u5757\u7684\u6982\u7387\u3002 \u5728\u6210\u6587\u65F6\uFF0C\u4EA4\u6613\u8D39\u53EA\u4E0E\u4EA4\u6613\u6240\u9700\u7684\u7B7E\u540D\u6570\u91CF\u76F8\u5173\uFF08\u53C2\u89C1"),e("code",null,"lamports_per_signature"),o("\uFF09\uFF0C\u4E0E\u4EA4\u6613\u6240\u4F7F\u7528\u7684\u8D44\u6E90\u65E0\u5173\u3002 \u8FD9\u662F\u56E0\u4E3A\u76EE\u524D\u6240\u6709\u4EA4\u6613\u90FD\u6709\u4E00\u4E2A\u4E25\u683C\u76841232\u5B57\u8282\u7684\u9650\u5236\u3002")],-1),R=e("p",null,[o("\u6BCF\u4E2A\u4EA4\u6613\u90FD\u9700\u8981\u81F3\u5C11\u6709\u4E00\u4E2A"),e("code",null,"writable"),o("\uFF08\u53EF\u5199\uFF09\u7684\u8D26\u6237\uFF0C\u7528\u4E8E\u4E3A\u4EA4\u6613\u7B7E\u540D\u3002\u8FD9\u4E2A\u8D26\u6237\u65E0\u8BBA\u4EA4\u6613\u6210\u529F\u4E0E\u5426\u90FD\u9700\u8981\u4E3A\u4EA4\u6613\u6210\u672C\u4ED8\u8D39\u3002 \u5982\u679C\u4ED8\u8D39\u8005\u6CA1\u6709\u8DB3\u591F\u4E3A\u4EA4\u6613\u4ED8\u8D39\u7684\u4F59\u989D\uFF0C\u8FD9\u4E2A\u4EA4\u6613\u5C31\u4F1A\u88AB\u4E22\u5F03\u3002")],-1),j=e("p",null,"\u6210\u6587\u65F6\uFF0C50%\u7684\u4EA4\u6613\u8D39\u88AB\u51FA\u5757\u7684\u9A8C\u8BC1\u8282\u70B9\u6536\u53D6\uFF0C\u5269\u4E0B\u768450%\u88AB\u71C3\u70E7\u6389\u3002\u8FD9\u6837\u7684\u7ED3\u6784\u4F1A\u6FC0\u52B1\u9A8C\u8BC1\u8282\u70B9\u5728leader schedule\uFF08\u9886\u5BFC\u65F6\u95F4\u8868\uFF09\u89C4\u5B9A\u7684\u5C5E\u4E8E\u81EA\u5DF1\u7684slot\uFF08\u63D2\u69FD\uFF09\u4E2D\u5904\u7406\u5C3D\u53EF\u80FD\u591A\u7684\u4EA4\u6613\u3002",-1),A=e("h2",{id:"other-resources",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#other-resources","aria-hidden":"true"},"#"),o(" Other Resources")],-1),C={href:"https://docs.solana.com/developing/programming-model/transactions",target:"_blank",rel:"noopener noreferrer"},J=o("\u5B98\u65B9\u6587\u6863"),z={href:"https://solana.wiki/docs/solidity-guide/transactions/#solana-transaction-structure",target:"_blank",rel:"noopener noreferrer"},D=o("\u4EA4\u6613\u7684\u7ED3\u6784"),H={href:"https://jstarry.notion.site/Transaction-Fees-f09387e6a8d84287aa16a34ecb58e239",target:"_blank",rel:"noopener noreferrer"},M=o("Transaction Fees by Justin Starry"),P={href:"https://2501babe.github.io/posts/solana101.html",target:"_blank",rel:"noopener noreferrer"},q=o("An Introduction to Solana by Hana"),G={href:"https://jito-labs.medium.com/solana-validator-101-transaction-processing-90bcdc271143",target:"_blank",rel:"noopener noreferrer"},K=o("Transaction Processing by Jito Labs"),Q={href:"https://medium.com/@asmiller1989/solana-transactions-in-depth-1f7f7fe06ac2",target:"_blank",rel:"noopener noreferrer"},U=o("Solana Transaction in Depth by Alex Miller");function W(X,Y){const s=a("RouterLink"),n=a("ExternalLinkIcon");return l(),i(d,null,[p,e("p",null,[u,t(s,{to:"/zh/core-concepts/programs.html"},{default:c(()=>[m]),_:1}),f,e("a",b,[g,t(n)]),k]),x,e("p",null,[S,e("a",v,[y,t(n)]),L]),w,T,e("ul",null,[e("li",null,[e("a",F,[N,t(n)]),V]),e("li",null,[e("a",B,[E,t(n)]),I])]),O,R,j,A,e("ul",null,[e("li",null,[e("a",C,[J,t(n)])]),e("li",null,[e("a",z,[D,t(n)])]),e("li",null,[e("a",H,[M,t(n)])]),e("li",null,[e("a",P,[q,t(n)])]),e("li",null,[e("a",G,[K,t(n)])]),e("li",null,[e("a",Q,[U,t(n)])])])],64)}var $=r(_,[["render",W]]);export{$ as default};