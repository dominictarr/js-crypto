md5=function(g,j,r){function o(d,c,a){c="";for(a=0;a<=3;)c+=(256|d>>a++*8&511).toString(g).slice(1);return c}function h(d,c){var a=(d&j)+(c&j);return(d>>g)+(c>>g)+(a>>g)<<g|a&j}for(var s=[],i=0,t=[7,12,17,22,5,9,14,20,4,11,g,23,6,10,15,21];i<64;)s[i]=~~(Math.abs(Math.sin(++i))*4294967296);return function(d){var c,a,b=0,k,j,i=0,f,l,e=unescape(encodeURIComponent(d)),k=e[r];for(d=[];b<k;)d[b>>2]|=e.charCodeAt(b)<<b++%4*8;d[b>>2]|=128<<b%4*8;d[(k+8>>6)*g+14]=k*8;for(var m=1732584193,n=-271733879,p=~m,q=~n;i<d[r];i+=g){c=m;a=n;e=p;b=q;for(f=0;f<64;f++)j=[a&e|~a&b,b&a|~b&e,a^e^b,e^(a|~b)][l=f>>4],k=b,b=e,e=a,c=h(h(c,j),h(s[f],d[[f,5*f+1,3*f+5,7*f][l]%g+i])),l=t[4*l+f%4],a=h(a,c<<l|c>>>32-l),c=k;m=h(m,c);n=h(n,a);p=h(p,e);q=h(q,b)}return o(m)+o(n)+o(p)+o(q)}}(16,65535,"length");