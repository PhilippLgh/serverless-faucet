(this.webpackJsonplanding=this.webpackJsonplanding||[]).push([[0],{10:function(e,t,n){e.exports=n(20)},15:function(e,t,n){},17:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(5),A=n.n(l),c=(n(15),n(1)),o=n.n(c),i=n(3),s=n(6),u=n(7),g=n(8),d=n(9),E=(n(17),n(18),n(2));function m(e){var t=e.children;return r.a.createElement("pre",{style:{display:"inline",borderLeft:"none"}},t)}var p=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={balance:""},e.componentDidMount=function(){e.interval=setInterval(e.getBalance,6e4),e.getBalance()},e.componentWillUnmount=function(){clearInterval(e.interval)},e.getBalance=Object(i.a)(o.a.mark((function t(){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=E.ethers.getDefaultProvider("goerli"),t.next=3,n.getBalance("0x0A7e8bdB873a624faB464c39D965329f825FBA4D");case 3:a=t.sent,e.setState({balance:E.ethers.utils.formatEther(a)});case 5:case"end":return t.stop()}}),t)}))),e.donate=Object(i.a)(o.a.mark((function e(){var t,n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.web3){e.next=2;break}return e.abrupt("return",alert("No web3 provider detected"));case 2:return t=new E.ethers.providers.Web3Provider(window.web3.currentProvider),e.next=5,t.getNetwork();case 5:if(!(n=e.sent)||5===n.chainId){e.next=8;break}return e.abrupt("return",alert("Please connect your provider to the goerli network first"));case 8:return a=t.getSigner(),r={to:"0x0A7e8bdB873a624faB464c39D965329f825FBA4D",value:E.ethers.utils.parseEther("100.0")},e.next=12,a.sendTransaction(r);case 12:e.sent,alert("Thank you for your donation");case 14:case"end":return e.stop()}}),e)}))),e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state.balance;return r.a.createElement("div",{className:"App",style:{margin:50}},r.a.createElement("nav",{class:"navigation"},r.a.createElement("h2",null,"ethfaucet.org")),r.a.createElement("div",null,"Address: ",r.a.createElement(m,null,"0x0A7e8bdB873a624faB464c39D965329f825FBA4D")),r.a.createElement("div",null,"Balance: ",r.a.createElement(m,null," ",t," ")," G\xf6Eth  ",r.a.createElement("button",{className:"button button-outline",onClick:function(){return e.donate()}},"Donate")," "),r.a.createElement("p",null,"This faucet helps to programmatically distribute test Ether for experiments and to try out Ethereum functionality without spending real money."),r.a.createElement("h3",null,"API"),r.a.createElement("div",null,r.a.createElement("p",null,"The ",r.a.createElement(m,null,"/faucet")," and ",r.a.createElement(m,null,"/validator")," endpoints are captcha protected."),r.a.createElement("p",null,"In order to call them one first needs to acquire and solve a captcha challenge using the ",r.a.createElement(m,null,"/captcha")," endpoint"),r.a.createElement("pre",null,r.a.createElement("code",null,"/captcha/:columns/:rows")),r.a.createElement("p",null,"These two endpoints provide funding:"),r.a.createElement("p",null,"The ",r.a.createElement(m,null,"/faucet")," endpoint sends ",r.a.createElement(m,null,"1.0 G\xf6ETH")," to ",r.a.createElement(m,null,":address"),"."),r.a.createElement("pre",null,r.a.createElement("code",null,"/faucet/:network/:address")),r.a.createElement("p",null,"The ",r.a.createElement(m,null,"/validator")," endpoint sends ",r.a.createElement(m,null,"32.5 G\xf6ETH")," to ",r.a.createElement(m,null,":address"),"."),r.a.createElement("p",null,"This endpoint is additionally IP protected and has a cooldown of 24 hours."),r.a.createElement("pre",null,r.a.createElement("code",null,"/validator/:network/:address"))),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("span",null,"Contact:"),r.a.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAAAYCAYAAACbfz1xAAABQWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSCwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAxsDEIMLAyWCUmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsgsyyN1dX4NrjmML5WyJqUJP8FUjwK4UlKLk4H0HyBOSi4oKmFgYEwAspXLSwpA7BYgW6QI6CggewaInQ5hrwGxkyDsA2A1IUHOQPYVIFsgOSMxBcgG2a2ThCSejsSG2gsCHKFGFq6mlgYEnEo6KEmtKAHRzvkFlUWZ6RklCo7AEEpV8MxL1tNRMDIwAloJCm+I6s9i4HBkFDuFEMt+xMBgac3AwPQZIZYQysCwNYaBgVcbIaY1n4FBMJOB4TB/QWJRItwBjN9YitOMjSBsniIGBtYf//9/lmVgYN/FwPC36P//33P///+7hIGB+SYDw4FCACQUXGCSnQQYAAAAVmVYSWZNTQAqAAAACAABh2kABAAAAAEAAAAaAAAAAAADkoYABwAAABIAAABEoAIABAAAAAEAAACloAMABAAAAAEAAAAYAAAAAEFTQ0lJAAAAU2NyZWVuc2hvdLL7s+sAAAHVaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjE2NTwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlVzZXJDb21tZW50PlNjcmVlbnNob3Q8L2V4aWY6VXNlckNvbW1lbnQ+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4yNDwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgqs/0ObAAALTUlEQVRoBe1ZBYwUSxMu3N0dgru7HcHd3S1IkODuGjQ4BDk0OITg7gGCu7u7u9Srr/6/JzN7u9zthXu5F7aS3Znurrbq6qqvasKwEPnIJ4FQJIGwoWgtvqX4JKAS8CmlTxFCnQS8VsrXr1/T1KlT6cWLFx438+vXLxo/fjydP39eeS5cuEBz5syx+FetWkUbN260yv/lF9e9/Zf3EmrWDkzpDV2+fBkYlE+fPu2x24MHDzhMmDDcq1cv5Zk1axbHihXL4s+QIQPnz5/fKofEy48fP3j69Olcv359zpIlC2fOnJnbtGnD/v7+/PTp02BNefPmTd60aZOjr+veHI2+QrAkED4kbkeyZMnUSqZNm9bt8Lt376YIESK4bfsTlQ8fPqTGjRvTy5cvSRSRunfvTl+/fqV9+/bRvHnzaNiwYXTw4EFKnjy5V9Nt2bKFhg4d+lsv4dWAPma3EggRpcRMWbNmdTshKr1VBo8DuWn4/v07lSlThnLkyEGbN2+maNGiWVzFixenQYMGUZcuXah06dJ04MABSpQokdXuewkdEnBgylatWtG4ceMU72XPnp3ixYtHDRo0oLNnzwZYLSxP27ZtCVYRSjZkyBASW23x5c2bl9asWWOV7S8dOnSg3r17W1XZsmWjvXv30pgxYyhFihSUKlUq6tSpEwG/Gpo9ezbVqVOHBD6o0gkcoLJly9L69esNiz6Bd8OGDUvLli1Thfz27RsdPnxYx8J4Ai0UExctWtSxBnTGGmrXrk3x48cnKLC4ZmtsyGHkyJH05s0bEiiga7Ea5eXOnTtUpUoVihMnjravW7fO3qyWul+/fpQzZ06VWYsWLejWrVsWj9nftm3bqECBAo7LMnfuXCpVqpSeR/Xq1QmextD79+91vkOHDpkqfU6ZMoWqVatm1UHG6AfZ4yJmzJiRtm7dqt6kYcOGFDt2bBKYQwsWLLD6uHvBuWMfefLk0XEEHql8De+pU6d0PRcvXqQKFSroGQB3g6APMAYxY8YkPz8/EgiocsTeHWR3+tKBCxUqxMB8EydO5JkzZ7IIkVOmTMkS2CirwZTAhN26deOlS5eyHKTiTHGJ1nBioViEqWVX3FW5cmUW92rxhgsXjkUJ9CdCYTl8TpAgAcshswRNyjdixAhOnTo1izBZhMKLFy9mEToLDGBROuUBrygFb9++XcuXLl3iuHHj6k8EwU2bNmXsEXTs2DGWC6Dv+JOLx1gzeER4PHDgQMa6sB7Qzp07uWXLlhwjRgxesWIF79ixQ+uxt8iRI3OJEiV47Nixuud8+fJx9OjR+fPnz8qDP4wrl5enTZvGS5Ys4YIFC7J4E3737p3yYH+iLJwuXToeMGCAYl80zJ8/X/c4ePBgXZcokK7z3Llz2k8umspeFEzL5g9jYHxD2EuuXLlYvISOXbhwYd1LsWLF9BwXLVqkspELzWZs09f+xLnhbLBe9BHF03gBsgZBB0TBFMPLBWBROH7+/DkLdOLw4cNzzZo1df/9+/fnNGnSqEwwlp1g3SzCgUHAouVW3ePHj1ksB2MQkFFKKIadoMhQUkPeKiUCkY8fP5ruqgTYnDl8LBxloyRg/PnzpypDkSJFtN/du3c5UqRIjCAHBMGLRVI+CBr7MEoJHijqjRs3lFcsEdeqVUvfzd/w4cNVyU0ZCiXewxT1CaXEusxFQKVgWq3bsGGD8uzfv1/LUHxDr1690rHEommV2Z9YGsPCYpX0PMT6W3W4eNgDDhfkjVLaDcHt27c1GG3SpIk1NgJAKCUUyR1BsbDXXbt2Wc3iiTRohQEBGaWcNGmSxYMXsf66bmNkUIfLifFcldLhvoWBxAKqGcc7KHHixOo6zpw587+K//+XK1fOURZBKUZzVHpRgGuOGjWq1QO4UG4k2eeVm6YBjGGCm4b7EIVT6ACXIZeDxCoQ3PbJkyc10AEf4AjciSHwiAega9euaV+4HbEaJBG29QMuhsu/d++e6eb2iaAN7tVQ0qRJ1YUBs4KwDkAS4FszviglwaXa94d+uXPnNsMQ9vPlyxcCFDL94PJRtvezOgTyApdpSLyOumxABUMJEybUdYplM1WOJ/YBHpy1Iey9bt26ukdThyegjCExHhr44qwkK2Oq9ezcBbwBAp306dNbncyLuBRCbtFOwCB2Ak4Q62Ov8urd07xXr161xoESRYwY0SrjBWv78OEDIeIG3jGbhFIi6IkSJYrFD7wnll/LWOv169e1/6NHj+jt27capSNSd6UrV66oArvWmzIuk5nX1NnlIa6NxIrrXKbdPLFOQ/a1og79QMC/roTDhcJ6Q+IFA7DjctoJF9gTAc+7y6igDnKFDA3Z94I2gTKq8KYdT8gMMYkrBVjB/fv3XXk0OMBND0kKyrxQHjH/jmUgcIGiwqIjAIHV/PTpEwmmUyUQ96/8UFgAe3NxwAfBCa5RwC5un5YvX67jYw77z9UrOBYQhAJklylTJseYZnwEYZ7IyByHavjNE9YHSmYsj125MZ63CutpDfZ6WFdcfldCHS48gk93BA9gvIS9HWeC83OlAEp5/PhxsptvaDgiO6RYQpKgMAIzrClwK6Go9nkhaHvkCWYoHaJGuHbcWNz0EydO6DijRo3SrAAiarRVrFiRsD/kGps1a0aTJ0/WfugLVyrBjB4yDho/uO49e/ZYBwyrAnlAIbwhCTAIFh8wwIyNJ9whrLAnQqQOPtd1wYUfOXJEu8EiS/BFErg5hsE+/zQBWmAPrmvGGWCPnghngnbBkJZRAC8ifWMk7H0DKCUGwCEiPXL06FFq1KiRpg06duxo7/fH3+Gq2rVrp2kC5BeBMSGE8uXLW3PBTbZv355Wr15NSDNIhEwrV66kvn37Kg+UC2NMmDBBNwusI6BclVa+7mgqaOHChbof8LSQtIwhjIU2pKWA3wTUEyykBHhqkcAHNworLJkJTQGZvoE9kbqSaJtq1Kih40pwpZ9hgeeQSvJEULauXbtS586ddc+AAGvXrlXcL0GUdoPSIg7AgUs0rFizZ8+eARTH0xy/q8eZwANJpkPZgCUhA5yNfNlSr4S5kMaCnH5HSFEhBQRZ4B3niJQbMGoAQhRkCFFd69atNeUiLlEjI7FULEpiWKzo2/UzY58+fTR9ZBi9jb6RfkKqSBaoKRA/Pz8Wi2CG0whNrB0LttUoGnxIsYgSWTx4EVzD4i7086LcQkdbYAWsAVkEswasB59M7YRPlSJIRtoH5JruMrxI+YhCmSI/efKEK1WqpOkcjC+Hrekew4AIFPtzJewBqRWki9APckWWw55uEsVmsfTaDp569erx6NGjA6SEEO3aCemzGTNm2Kt0DSYaRiYAqS3IxRDSO1WrVtV0klwIndc+rom+xcuZLtZTvA43b95c+yDqx7qxZzOfYQyQEoJSgsRV8rNnzwxfiD7FLWp6AJNAqUzuzj6p/dCQChJ8aW92vIt74ZIlS7JE3KoYYln1Wz2EYhego5OtgH0LRrPVOF8F12m6xlkbtBLSPMGRK+YUbGnlbd3NJp9VWZLp7pqCXefpYksQyZgvqIRzlYDUwQ4FRwoSuVg7BXDfctOUAPyRkvm3yWCk380LiJEkSRKPLPhaAfgB7IggyN/fX79kAMPgi0xghH27RtP2PnCZrlkAe/vv3tEvOHLFnHCleHoi+VCgAZ6n9uDUu0bnZgxAJcwXVAK+x5c/saSaFQE06NGjh+JzO0TDeI6UENIriJT+bQIIDmyDOBAENEElHJ4kw/UX1D4+vpCTADAnonTxYBqMIlhMLdE8AlfXtFAYmM2QW4pvZJ8EnBJAoIj8MDyd2yBH2H1K6ZSZrxQKJOARU4aCtfmW8JdKwKeUf+nBh+Zt+5QyNJ/OX7q2fwCyLJiVmlJmQAAAAABJRU5ErkJggg=="})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));A.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.7352f37f.chunk.js.map