var decodeMmtf=function(){"use strict";function r(r){function t(r){for(var t={},e=0;r>e;e++){var n=o();t[n]=o()}return t}function e(t){var e=r.subarray(i,i+t);return i+=t,e}function n(t){var e=r.subarray(i,i+t),n=String.fromCharCode.apply(null,e);return i+=t,n}function a(r){for(var t=new Array(r),e=0;r>e;e++)t[e]=o();return t}function o(){var o,s,f,c=r[i];if(0===(128&c))return i++,c;if(128===(240&c))return s=15&c,i++,t(s);if(144===(240&c))return s=15&c,i++,a(s);if(160===(224&c))return s=31&c,i++,n(s);if(224===(224&c))return o=u.getInt8(i),i++,o;switch(c){case 192:return i++,null;case 194:return i++,!1;case 195:return i++,!0;case 196:return s=u.getUint8(i+1),i+=2,e(s);case 197:return s=u.getUint16(i+1),i+=3,e(s);case 198:return s=u.getUint32(i+1),i+=5,e(s);case 199:return s=u.getUint8(i+1),f=u.getUint8(i+2),i+=3,[f,e(s)];case 200:return s=u.getUint16(i+1),f=u.getUint8(i+3),i+=4,[f,e(s)];case 201:return s=u.getUint32(i+1),f=u.getUint8(i+5),i+=6,[f,e(s)];case 202:return o=u.getFloat32(i+1),i+=5,o;case 203:return o=u.getFloat64(i+1),i+=9,o;case 204:return o=r[i+1],i+=2,o;case 205:return o=u.getUint16(i+1),i+=3,o;case 206:return o=u.getUint32(i+1),i+=5,o;case 207:return i+=9,0;case 208:return o=u.getInt8(i+1),i+=2,o;case 209:return o=u.getInt16(i+1),i+=3,o;case 210:return o=u.getInt32(i+1),i+=5,o;case 211:return i+=9,0;case 212:return f=u.getUint8(i+1),i+=2,[f,e(1)];case 213:return f=u.getUint8(i+1),i+=2,[f,e(2)];case 214:return f=u.getUint8(i+1),i+=2,[f,e(4)];case 215:return f=u.getUint8(i+1),i+=2,[f,e(8)];case 216:return f=u.getUint8(i+1),i+=2,[f,e(16)];case 217:return s=u.getUint8(i+1),i+=2,n(s);case 218:return s=u.getUint16(i+1),i+=3,n(s);case 219:return s=u.getUint32(i+1),i+=5,n(s);case 220:return s=u.getUint16(i+1),i+=3,a(s);case 221:return s=u.getUint32(i+1),i+=5,a(s);case 222:return s=u.getUint16(i+1),i+=3,t(s);case 223:return s=u.getUint32(i+1),i+=5,t(s)}throw new Error("Unknown type 0x"+c.toString(16))}var i=0,u=new DataView(r.buffer);return o()}function t(r){return new Uint8Array(r.buffer,r.byteOffset,r.byteLength)}function e(r){return new Int8Array(r.buffer,r.byteOffset,r.byteLength)}function n(r,t,e){var n=r.byteOffset,a=r.byteLength;if(t||(t=new Int16Array(a/2)),e)for(var o=new DataView(r.buffer),i=0,u=0,s=a/2;s>i;++i,u+=2)t[i]=o.getInt16(n+u,e);else for(var i=0,u=0,s=a/2;s>i;++i,u+=2)t[i]=r[u]<<8^r[u+1]<<0;return t}function a(r,t,e){var n=r.byteOffset,a=r.byteLength;if(t||(t=new Int32Array(a/4)),e)for(var o=new DataView(r.buffer),i=0,u=0,s=a/4;s>i;++i,u+=4)t[i]=o.getInt32(n+u,e);else for(var i=0,u=0,s=a/4;s>i;++i,u+=4)t[i]=r[u]<<24^r[u+1]<<16^r[u+2]<<8^r[u+3]<<0;return t}function o(r){return new Int32Array(r.buffer,r.byteOffset,r.byteLength/4)}function i(r,t,e){var n=r.length,a=1/t;e||(e=new Float32Array(n));for(var o=0;n>o;++o)e[o]=r[o]*a;return e}function u(r,t){var e,n;if(!t){var a=0;for(e=0,n=r.length;n>e;e+=2)a+=r[e+1];t=new r.constructor(a)}var o=0;for(e=0,n=r.length;n>e;e+=2)for(var i=r[e],u=r[e+1],s=0;u>s;++s)t[o]=i,o+=1;return t}function s(r){for(var t=1,e=r.length;e>t;++t)r[t]+=r[t-1];return r}function f(r,t,e){var n=r.length/2+t.length;e||(e=new Int32Array(n));for(var a=0,o=0,i=0,u=r.length;u>i;i+=2){var s=r[i],f=r[i+1];e[a]=s,0!==i&&(e[a]+=e[a-1]),a+=1;for(var c=0;f>c;++c)e[a]=e[a-1]+t[o],a+=1,o+=1}return e}function c(r,t,e,u,s){var c=u?o(u):void 0,g=f(a(r,void 0,s),n(t,void 0,s),c);return i(g,e,u)}function g(r,t,e,n){var s=e?o(e):void 0,f=u(a(r,void 0,n),s);return i(f,t,e)}function d(n,o){n instanceof ArrayBuffer&&(n=new Uint8Array(n));var i;i=n instanceof Uint8Array?r(n):n;var f,d,l,y,v=i.numBonds||0,w=i.numAtoms||0,U=i.groupTypeList.length/4,A=i.chainIdList.length/4,b=i.chainsPerModel.length,h=i.groupMap,m=new Uint32Array(v+U),I=new Uint32Array(v+U),p=new Uint8Array(v+U),L=new Uint32Array(w),C=new Float32Array(w),S=new Float32Array(w),F=new Float32Array(w),O=new Float32Array(w),x=new Int32Array(w),B=new Uint8Array(w),M=new Uint8Array(w),z=new Float32Array(w),D=new Uint32Array(U),G=new Uint32Array(U),P=new Uint16Array(U),T=new Uint16Array(U),V=new Int32Array(U),k=e(i.secStructList),E=new Uint16Array(A),N=new Uint32Array(A),j=new Uint32Array(A),q=t(i.chainIdList),H=new Uint32Array(b),J=new Uint32Array(b);if(c(i.xCoordBig,i.xCoordSmall,1e3,C,o),c(i.yCoordBig,i.yCoordSmall,1e3,S,o),c(i.zCoordBig,i.zCoordSmall,1e3,F,o),i.bFactorBig&&i.bFactorSmall&&c(i.bFactorBig,i.bFactorSmall,100,O,o),i.atomIdList&&s(u(a(i.atomIdList,void 0,o),x)),i.altLabelList){var K=i.altLabelList;for(f=0,d=K.length;d>f;f+=2){var Q=K[f];"?"===Q?K[f]=0:K[f]=K[f].charCodeAt(0),K[f+1]=parseInt(K[f+1])}u(K,B)}if(i.insCodeList){var R=i.insCodeList;for(f=0,d=R.length;d>f;f+=2){var Q=R[f];null===Q?R[f]=0:R[f]=R[f].charCodeAt(0),R[f+1]=parseInt(R[f+1])}u(R,M)}i.occList&&g(i.occList,100,z,o);var W,X=i.chainsPerModel,Y=0;for(f=0;b>f;++f){for(W=X[f],H[f]=Y,J[f]=W,l=0;W>l;++l)E[l+Y]=f;Y+=W}var Z,$=i.groupsPerChain,_=0;for(f=0;A>f;++f){for(Z=$[f],N[f]=_,j[f]=Z,l=0;Z>l;++l)D[l+_]=f;_+=Z}s(u(a(i.groupIdList,void 0,o),V)),a(i.groupTypeList,T,o);var rr=0,tr=0;for(f=0;U>f;++f){var er=h[T[f]],nr=er.atomInfo,ar=nr.length/2,or=er.bondIndices,ir=er.bondOrders;for(l=0,y=ir.length;y>l;++l)m[tr]=rr+or[2*l],I[tr]=rr+or[2*l+1],p[tr]=ir[l],tr+=1;for(G[f]=rr,P[f]=ar,l=0;ar>l;++l)L[rr]=f,rr+=1}if(i.bondAtomList){if(i.bondOrderList){var ur=i.bondOrderList;p.set(ur,tr)}var sr=a(i.bondAtomList,void 0,o);for(f=0,d=sr.length;d>f;f+=2)m[tr]=sr[f],I[tr]=sr[f+1],tr+=1}return{bondStore:{atomIndex1:m,atomIndex2:I,bondOrder:p},atomStore:{groupIndex:L,xCoord:C,yCoord:S,zCoord:F,bFactor:O,atomId:x,altLabel:B,insCode:M,occupancy:z},groupStore:{chainIndex:D,atomOffset:G,atomCount:P,groupTypeId:T,groupId:V,secStruct:k},chainStore:{modelIndex:E,groupOffset:N,groupCount:j,chainName:q},modelStore:{chainOffset:H,chainCount:J},groupMap:h,unitCell:i.unitCell,spaceGroup:i.spaceGroup,bioAssembly:i.bioAssembly,pdbId:i.pdbId,title:i.title,numBonds:v,numAtoms:w,numGroups:U,numChains:A,numModels:b}}return d}();