var qy=Object.defineProperty;var Fy=(e,t,r)=>t in e?qy(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Zo=(e,t,r)=>Fy(e,typeof t!="symbol"?t+"":t,r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();/*!
 * ONNX Runtime Web v1.21.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var on=Object.defineProperty,Gy=Object.getOwnPropertyDescriptor,Hy=Object.getOwnPropertyNames,jy=Object.prototype.hasOwnProperty,Ky=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),L=(e,t)=>()=>(e&&(t=e(e=0)),t),Nr=(e,t)=>{for(var r in t)on(e,r,{get:t[r],enumerable:!0})},Zy=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Hy(t))!jy.call(e,n)&&n!==r&&on(e,n,{get:()=>t[n],enumerable:!(a=Gy(t,n))||a.enumerable});return e},hi=e=>Zy(on({},"__esModule",{value:!0}),e),mr,$t,Ut,Qo,Mp,Rp=L(()=>{mr=new Map,$t=[],Ut=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let a=mr.get(e);if(a===void 0)mr.set(e,{backend:t,priority:r});else{if(a.priority>r)return;if(a.priority===r&&a.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let n=$t.indexOf(e);n!==-1&&$t.splice(n,1);for(let i=0;i<$t.length;i++)if(mr.get($t[i]).priority<=r){$t.splice(i,0,e);return}$t.push(e)}return}throw new TypeError("not a valid backend")},Qo=async e=>{let t=mr.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(a){return r||(t.error=`${a}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Mp=async e=>{let t=e.executionProviders||[],r=t.map(d=>typeof d=="string"?d:d.name),a=r.length===0?$t:r,n,i=[],o=new Set;for(let d of a){let p=await Qo(d);typeof p=="string"?i.push({name:d,err:p}):(n||(n=p),n===p&&o.add(d))}if(!n)throw new Error(`no available backend found. ERR: ${i.map(d=>`[${d.name}] ${d.err}`).join(", ")}`);for(let{name:d,err:p}of i)r.includes(d)&&console.warn(`removing requested execution provider "${d}" from session options because it is not available: ${p}`);let l=t.filter(d=>o.has(typeof d=="string"?d:d.name));return[n,new Proxy(e,{get:(d,p)=>p==="executionProviders"?l:Reflect.get(d,p)})]}}),Qy=L(()=>{Rp()}),Bp,Xy=L(()=>{Bp="1.21.0"}),Ki,je,Np=L(()=>{Xy(),Ki="warning",je={wasm:{},webgl:{},webgpu:{},versions:{common:Bp},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Ki=e}},get logLevel(){return Ki}},Object.defineProperty(je,"logLevel",{enumerable:!0})}),$e,Jy=L(()=>{Np(),$e=je}),Dp,Pp,Yy=L(()=>{Dp=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let a=r.getContext("2d");if(a!=null){let n,i;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],i=e.dims[3]):(n=e.dims[3],i=e.dims[2]);let o=(t==null?void 0:t.format)!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,d,p;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],0],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?p=[0,0,0,0]:typeof l.bias=="number"?p=[l.bias,l.bias,l.bias,l.bias]:(p=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(p[3]=l.bias[3]));let f=i*n,m=0,g=f,_=f*2,w=-1;o==="RGBA"?(m=0,g=f,_=f*2,w=f*3):o==="RGB"?(m=0,g=f,_=f*2):o==="RBG"&&(m=0,_=f,g=f*2);for(let b=0;b<i;b++)for(let x=0;x<n;x++){let v=(e.data[m++]-p[0])*d[0],$=(e.data[g++]-p[1])*d[1],T=(e.data[_++]-p[2])*d[2],k=w===-1?255:(e.data[w++]-p[3])*d[3];a.fillStyle="rgba("+v+","+$+","+T+","+k+")",a.fillRect(x,b,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Pp=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),a;if(r!=null){let n,i,o;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],i=e.dims[1],o=e.dims[3]):(n=e.dims[3],i=e.dims[2],o=e.dims[1]);let l=t!==void 0&&t.format!==void 0?t.format:"RGB",d=t==null?void 0:t.norm,p,f;d===void 0||d.mean===void 0?p=[255,255,255,255]:typeof d.mean=="number"?p=[d.mean,d.mean,d.mean,d.mean]:(p=[d.mean[0],d.mean[1],d.mean[2],255],d.mean[3]!==void 0&&(p[3]=d.mean[3])),d===void 0||d.bias===void 0?f=[0,0,0,0]:typeof d.bias=="number"?f=[d.bias,d.bias,d.bias,d.bias]:(f=[d.bias[0],d.bias[1],d.bias[2],0],d.bias[3]!==void 0&&(f[3]=d.bias[3]));let m=i*n;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!=="RGBA"||o===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let g=4,_=0,w=1,b=2,x=3,v=0,$=m,T=m*2,k=-1;l==="RGBA"?(v=0,$=m,T=m*2,k=m*3):l==="RGB"?(v=0,$=m,T=m*2):l==="RBG"&&(v=0,T=m,$=m*2),a=r.createImageData(n,i);for(let C=0;C<i*n;_+=g,w+=g,b+=g,x+=g,C++)a.data[_]=(e.data[v++]-f[0])*p[0],a.data[w]=(e.data[$++]-f[1])*p[1],a.data[b]=(e.data[T++]-f[2])*p[2],a.data[x]=k===-1?255:(e.data[k++]-f[3])*p[3]}else throw new Error("Can not access image data");return a}}),Kr,Up,Wp,Lp,Vp,qp,e0=L(()=>{un(),Kr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:a}=t,n=t.norm??{mean:255,bias:0},i,o;typeof n.mean=="number"?i=[n.mean,n.mean,n.mean,n.mean]:i=[n.mean[0],n.mean[1],n.mean[2],n.mean[3]??255],typeof n.bias=="number"?o=[n.bias,n.bias,n.bias,n.bias]:o=[n.bias[0],n.bias[1],n.bias[2],n.bias[3]??0];let l=t.format!==void 0?t.format:"RGBA",d=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",p=r*a,f=d==="RGBA"?new Float32Array(p*4):new Float32Array(p*3),m=4,g=0,_=1,w=2,b=3,x=0,v=p,$=p*2,T=-1;l==="RGB"&&(m=3,g=0,_=1,w=2,b=-1),d==="RGBA"?T=p*3:d==="RBG"?(x=0,$=p,v=p*2):d==="BGR"&&($=0,v=p,x=p*2);for(let k=0;k<p;k++,g+=m,w+=m,_+=m,b+=m)f[x++]=(e[g]+o[0])/i[0],f[v++]=(e[_]+o[1])/i[1],f[$++]=(e[w]+o[2])/i[2],T!==-1&&b!==-1&&(f[T++]=(e[b]+o[3])/i[3]);return d==="RGBA"?new Ve("float32",f,[1,4,r,a]):new Ve("float32",f,[1,3,r,a])},Up=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,a=typeof ImageData<"u"&&e instanceof ImageData,n=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,i=typeof e=="string",o,l=t??{},d=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},p=f=>typeof HTMLCanvasElement<"u"&&f instanceof HTMLCanvasElement||f instanceof OffscreenCanvas?f.getContext("2d"):null;if(r){let f=d();f.width=e.width,f.height=e.height;let m=p(f);if(m!=null){let g=e.height,_=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(g=t.resizedHeight,_=t.resizedWidth),t!==void 0){if(l=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");l.tensorFormat="RGBA",l.height=g,l.width=_}else l.tensorFormat="RGBA",l.height=g,l.width=_;m.drawImage(e,0,0),o=m.getImageData(0,0,_,g).data}else throw new Error("Can not access image data")}else if(a){let f,m;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(f=t.resizedHeight,m=t.resizedWidth):(f=e.height,m=e.width),t!==void 0&&(l=t),l.format="RGBA",l.height=f,l.width=m,t!==void 0){let g=d();g.width=m,g.height=f;let _=p(g);if(_!=null)_.putImageData(e,0,0),o=_.getImageData(0,0,m,f).data;else throw new Error("Can not access image data")}else o=e.data}else if(n){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let f=d();f.width=e.width,f.height=e.height;let m=p(f);if(m!=null){let g=e.height,_=e.width;return m.drawImage(e,0,0,_,g),o=m.getImageData(0,0,_,g).data,l.height=g,l.width=_,Kr(o,l)}else throw new Error("Can not access image data")}else{if(i)return new Promise((f,m)=>{let g=d(),_=p(g);if(!e||!_)return m();let w=new Image;w.crossOrigin="Anonymous",w.src=e,w.onload=()=>{g.width=w.width,g.height=w.height,_.drawImage(w,0,0,g.width,g.height);let b=_.getImageData(0,0,g.width,g.height);l.height=g.height,l.width=g.width,f(Kr(b.data,l))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(o!==void 0)return Kr(o,l);throw new Error("Input data provided is not supported - aborted tensor creation")},Wp=(e,t)=>{let{width:r,height:a,download:n,dispose:i}=t,o=[1,a,r,4];return new Ve({location:"texture",type:"float32",texture:e,dims:o,download:n,dispose:i})},Lp=(e,t)=>{let{dataType:r,dims:a,download:n,dispose:i}=t;return new Ve({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:a,download:n,dispose:i})},Vp=(e,t)=>{let{dataType:r,dims:a,download:n,dispose:i}=t;return new Ve({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:a,download:n,dispose:i})},qp=(e,t,r)=>new Ve({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Nt,kr,Zi,Fp,t0=L(()=>{Nt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),kr=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Zi=!1,Fp=()=>{if(!Zi){Zi=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,a=typeof r<"u"&&r.from;e&&(Nt.set("int64",BigInt64Array),kr.set(BigInt64Array,"int64")),t&&(Nt.set("uint64",BigUint64Array),kr.set(BigUint64Array,"uint64")),a?(Nt.set("float16",r),kr.set(r,"float16")):Nt.set("float16",Uint16Array)}}}),Gp,Hp,r0=L(()=>{un(),Gp=e=>{let t=1;for(let r=0;r<e.length;r++){let a=e[r];if(typeof a!="number"||!Number.isSafeInteger(a))throw new TypeError(`dims[${r}] must be an integer, got: ${a}`);if(a<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${a}`);t*=a}return t},Hp=(e,t)=>{switch(e.location){case"cpu":return new Ve(e.type,e.data,t);case"cpu-pinned":return new Ve({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Ve({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Ve({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Ve({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Ve,un=L(()=>{Yy(),e0(),t0(),r0(),Ve=class{constructor(e,t,r){Fp();let a,n;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,a=e.type,n=e.dims,e.location){case"cpu-pinned":{let o=Nt.get(a);if(!o)throw new TypeError(`unsupported type "${a}" to create tensor from pinned buffer`);if(!(e.data instanceof o))throw new TypeError(`buffer should be of type ${o.name}`);this.cpuData=e.data;break}case"texture":{if(a!=="float32")throw new TypeError(`unsupported type "${a}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint64"&&a!=="int8"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let o,l;if(typeof e=="string")if(a=e,l=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");o=t}else{let d=Nt.get(e);if(d===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&d===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${d.name} as data.`);e==="uint64"||e==="int64"?o=d.from(t,BigInt):o=d.from(t)}else if(t instanceof d)o=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")o=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&d!==Uint16Array)o=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${a} tensor's data must be type of ${d}`)}else if(l=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let d=typeof e[0];if(d==="string")a="string",o=e;else if(d==="boolean")a="bool",o=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${d}.`)}else if(e instanceof Uint8ClampedArray)a="uint8",o=Uint8Array.from(e);else{let d=kr.get(e.constructor);if(d===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);a=d,o=e}if(l===void 0)l=[o.length];else if(!Array.isArray(l))throw new TypeError("A tensor's dims must be a number array");n=l,this.cpuData=o,this.dataLocation="cpu"}let i=Gp(n);if(this.cpuData&&i!==this.cpuData.length&&!((a==="uint4"||a==="int4")&&Math.ceil(i/2)===this.cpuData.length))throw new Error(`Tensor's size(${i}) does not match data length(${this.cpuData.length}).`);this.type=a,this.dims=n,this.size=i}static async fromImage(e,t){return Up(e,t)}static fromTexture(e,t){return Wp(e,t)}static fromGpuBuffer(e,t){return Lp(e,t)}static fromMLTensor(e,t){return Vp(e,t)}static fromPinnedBuffer(e,t,r){return qp(e,t,r)}toDataURL(e){return Dp(this,e)}toImageData(e){return Pp(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Hp(this,e)}}}),tt,jp=L(()=>{un(),tt=Ve}),Mr,Qi,rt,Ke,Kp=L(()=>{Np(),Mr=(e,t)=>{(typeof je.trace>"u"?!je.wasm.trace:!je.trace)||console.timeStamp(`${e}::ORT::${t}`)},Qi=(e,t)=>{var n;let r=((n=new Error().stack)==null?void 0:n.split(/\r\n|\r|\n/g))||[],a=!1;for(let i=0;i<r.length;i++){if(a&&!r[i].includes("TRACE_FUNC")){let o=`FUNC_${e}::${r[i].trim().split(" ")[1]}`;t&&(o+=`::${t}`),Mr("CPU",o);return}r[i].includes("TRACE_FUNC")&&(a=!0)}},rt=e=>{(typeof je.trace>"u"?!je.wasm.trace:!je.trace)||Qi("BEGIN",e)},Ke=e=>{(typeof je.trace>"u"?!je.wasm.trace:!je.trace)||Qi("END",e)}}),Zp,i0=L(()=>{Rp(),jp(),Kp(),Zp=class Qp{constructor(t){this.handler=t}async run(t,r,a){rt();let n={},i={};if(typeof t!="object"||t===null||t instanceof tt||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let o=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof tt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");o=!1;for(let p of r){if(typeof p!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(p)===-1)throw new RangeError(`'fetches' contains invalid output name: ${p}.`);n[p]=null}if(typeof a=="object"&&a!==null)i=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else{let p=!1,f=Object.getOwnPropertyNames(r);for(let m of this.outputNames)if(f.indexOf(m)!==-1){let g=r[m];(g===null||g instanceof tt)&&(p=!0,o=!1,n[m]=g)}if(p){if(typeof a=="object"&&a!==null)i=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else i=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let p of this.inputNames)if(typeof t[p]>"u")throw new Error(`input '${p}' is missing in 'feeds'.`);if(o)for(let p of this.outputNames)n[p]=null;let l=await this.handler.run(t,n,i),d={};for(let p in l)if(Object.hasOwnProperty.call(l,p)){let f=l[p];f instanceof tt?d[p]=f:d[p]=new tt(f.type,f.data,f.dims)}return Ke(),d}async release(){return this.handler.dispose()}static async create(t,r,a,n){rt();let i,o={};if(typeof t=="string"){if(i=t,typeof r=="object"&&r!==null)o=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(i=t,typeof r=="object"&&r!==null)o=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let f=t,m=0,g=t.byteLength;if(typeof r=="object"&&r!==null)o=r;else if(typeof r=="number"){if(m=r,!Number.isSafeInteger(m))throw new RangeError("'byteOffset' must be an integer.");if(m<0||m>=f.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${f.byteLength}).`);if(g=t.byteLength-m,typeof a=="number"){if(g=a,!Number.isSafeInteger(g))throw new RangeError("'byteLength' must be an integer.");if(g<=0||m+g>f.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${f.byteLength-m}].`);if(typeof n=="object"&&n!==null)o=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(typeof a<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");i=new Uint8Array(f,m,g)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[l,d]=await Mp(o),p=await l.createInferenceSessionHandler(i,d);return Ke(),new Qp(p)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),ln,a0=L(()=>{i0(),ln=Zp}),n0=L(()=>{}),s0=L(()=>{}),o0=L(()=>{}),u0=L(()=>{}),Xp={};Nr(Xp,{InferenceSession:()=>ln,TRACE:()=>Mr,TRACE_FUNC_BEGIN:()=>rt,TRACE_FUNC_END:()=>Ke,Tensor:()=>tt,env:()=>$e,registerBackend:()=>Ut});var at=L(()=>{Qy(),Jy(),a0(),jp(),n0(),s0(),Kp(),o0(),u0()}),dn=L(()=>{}),Jp={};Nr(Jp,{default:()=>Yp});var Xi,Ji,Yp,l0=L(()=>{var e;im(),Ht(),pn(),Xi="ort-wasm-proxy-worker",Ji=((e=globalThis.self)==null?void 0:e.name)===Xi,Ji&&(self.onmessage=t=>{let{type:r,in:a}=t.data;try{switch(r){case"init-wasm":cn(a.wasm).then(()=>{zn(a).then(()=>{postMessage({type:r})},n=>{postMessage({type:r,err:n})})},n=>{postMessage({type:r,err:n})});break;case"init-ep":{let{epName:n,env:i}=a;An(i,n).then(()=>{postMessage({type:r})},o=>{postMessage({type:r,err:o})});break}case"copy-from":{let{buffer:n}=a,i=wi(n);postMessage({type:r,out:i});break}case"create":{let{model:n,options:i}=a;On(n,i).then(o=>{postMessage({type:r,out:o})},o=>{postMessage({type:r,err:o})});break}case"release":Mn(a),postMessage({type:r});break;case"run":{let{sessionId:n,inputIndices:i,inputs:o,outputIndices:l,options:d}=a;Rn(n,i,o,l,new Array(l.length).fill(null),d).then(p=>{p.some(f=>f[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:p},Nn([...o,...p]))},p=>{postMessage({type:r,err:p})});break}case"end-profiling":Bn(a),postMessage({type:r});break;default:}}catch(n){postMessage({type:r,err:n})}}),Yp=Ji?null:t=>new Worker(t??We,{type:"module",name:Xi})}),ec={};Nr(ec,{default:()=>tc});var Yi,ea,tc,Xo,d0=L(()=>{var e,t;ea=(Yi=import.meta.url,async function(r={}){var Ko;var a,n,i=r,o=new Promise((s,u)=>{a=s,n=u}),l=typeof window=="object",d=typeof WorkerGlobalScope<"u",p=d&&((Ko=self.name)==null?void 0:Ko.startsWith("em-pthread"));i.mountExternalData=(s,u)=>{s.startsWith("./")&&(s=s.substring(2)),(i.Bd||(i.Bd=new Map)).set(s,u)},i.unmountExternalData=()=>{delete i.Bd};var f=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let m=()=>{let s=(c,h,y)=>(...S)=>{let I=st,A=h==null?void 0:h();S=c(...S);let R=h==null?void 0:h();return A!==R&&(c=R,y(A),h=y=null),st!=I?new Promise((W,Z)=>{Wi={resolve:W,reject:Z}}):S},u=c=>async(...h)=>{var y;try{if(i.Cd)throw Error("Session already started");let S=i.Cd={be:h[0],errors:[]},I=await c(...h);if(i.Cd!==S)throw Error("Session mismatch");(y=i.Dd)==null||y.flush();let A=S.errors;if(0<A.length){let R=await Promise.all(A);if(R=R.filter(W=>W),0<R.length)throw Error(R.join(`
`))}return I}finally{i.Cd=null}};i._OrtCreateSession=s(i._OrtCreateSession,()=>i._OrtCreateSession,c=>i._OrtCreateSession=c),i._OrtRun=u(s(i._OrtRun,()=>i._OrtRun,c=>i._OrtRun=c)),i._OrtRunWithBinding=u(s(i._OrtRunWithBinding,()=>i._OrtRunWithBinding,c=>i._OrtRunWithBinding=c)),i._OrtBindInput=s(i._OrtBindInput,()=>i._OrtBindInput,c=>i._OrtBindInput=c),m=void 0};i.jsepInit=(s,u)=>{if(m==null||m(),s==="webgpu"){[i.Dd,i.Rd,i.Vd,i.Hd,i.Ud,i.hc,i.Wd,i.Zd,i.Sd,i.Td,i.Xd]=u;let c=i.Dd;i.jsepRegisterBuffer=(h,y,S,I)=>c.registerBuffer(h,y,S,I),i.jsepGetBuffer=h=>c.getBuffer(h),i.jsepCreateDownloader=(h,y,S)=>c.createDownloader(h,y,S),i.jsepOnCreateSession=h=>{c.onCreateSession(h)},i.jsepOnReleaseSession=h=>{c.onReleaseSession(h)},i.jsepOnRunStart=h=>c.onRunStart(h),i.$d=(h,y)=>{c.upload(h,y)}}else if(s==="webnn"){[i.Dd,i.Yd,i.Id,i.jsepEnsureTensor,i.Jd,i.jsepDownloadTensor]=u,i.jsepReleaseTensorId=i.Id,i.jsepUploadTensor=i.Jd;let c=i.Dd;i.jsepOnRunStart=h=>c.onRunStart(h),i.jsepOnRunEnd=c.onRunEnd.bind(c),i.jsepRegisterMLContext=(h,y)=>{c.registerMLContext(h,y)},i.jsepOnReleaseSession=h=>{c.onReleaseSession(h)},i.jsepCreateMLTensorDownloader=(h,y)=>c.createMLTensorDownloader(h,y),i.jsepRegisterMLTensor=(h,y,S,I)=>c.registerMLTensor(h,y,S,I),i.jsepCreateMLContext=h=>c.createMLContext(h),i.jsepRegisterMLConstant=(h,y,S,I,A)=>c.registerMLConstant(h,y,S,I,A,i.Bd),i.jsepRegisterGraphInput=c.registerGraphInput.bind(c),i.jsepIsGraphInput=c.isGraphInput.bind(c),i.jsepCreateTemporaryTensor=c.createTemporaryTensor.bind(c)}};var g,_,w=Object.assign({},i),b=(s,u)=>{throw u},x="";(l||d)&&(d?x=self.location.href:typeof document<"u"&&document.currentScript&&(x=document.currentScript.src),Yi&&(x=Yi),x=x.startsWith("blob:")?"":x.slice(0,x.replace(/[?#].*/,"").lastIndexOf("/")+1),d&&(_=s=>{var u=new XMLHttpRequest;return u.open("GET",s,!1),u.responseType="arraybuffer",u.send(null),new Uint8Array(u.response)}),g=async s=>{if(ye(s))return new Promise((c,h)=>{var y=new XMLHttpRequest;y.open("GET",s,!0),y.responseType="arraybuffer",y.onload=()=>{y.status==200||y.status==0&&y.response?c(y.response):h(y.status)},y.onerror=h,y.send(null)});var u=await fetch(s,{credentials:"same-origin"});if(u.ok)return u.arrayBuffer();throw Error(u.status+" : "+u.url)});var v=console.log.bind(console),$=console.error.bind(console),T=v,k=$;Object.assign(i,w),w=null;var C,E,z,M,U,H,j,K,Q,re,J,F,de,he=i.wasmBinary,G=!1,ye=s=>s.startsWith("file://");function N(){return C.buffer!=M.buffer&&_e(),M}function V(){return C.buffer!=M.buffer&&_e(),U}function pe(){return C.buffer!=M.buffer&&_e(),H}function ve(){return C.buffer!=M.buffer&&_e(),j}function D(){return C.buffer!=M.buffer&&_e(),K}function fe(){return C.buffer!=M.buffer&&_e(),Q}function Fe(){return C.buffer!=M.buffer&&_e(),re}function Ne(){return C.buffer!=M.buffer&&_e(),de}if(p){let s=function(u){try{var c=u.data,h=c.yd;if(h==="load"){let y=[];self.onmessage=S=>y.push(S),self.startWorker=()=>{postMessage({yd:"loaded"});for(let S of y)s(S);self.onmessage=s};for(let S of c.Od)i[S]&&!i[S].proxy||(i[S]=(...I)=>{postMessage({yd:"callHandler",Nd:S,args:I})},S=="print"&&(T=i[S]),S=="printErr"&&(k=i[S]));C=c.he,_e(),Et(c.ie)}else if(h==="run"){Em(c.xd),Fi(c.xd,0,0,1,0,0),Kn(),Pi(c.xd),Ce||(Vs(),Ce=!0);try{zm(c.de,c.Fd)}catch(y){if(y!="unwind")throw y}}else c.target!=="setimmediate"&&(h==="checkMailbox"?Ce&&Pr():h&&(k(`worker: received unknown command ${h}`),k(c)))}catch(y){throw qs(),y}};var Et,Ce=!1;k=function(...u){u=u.join(" "),console.error(u)},self.alert=function(...u){postMessage({yd:"alert",text:u.join(" "),fe:Hr()})},self.onunhandledrejection=u=>{throw u.reason||u},self.onmessage=s}function _e(){var s=C.buffer;i.HEAP8=M=new Int8Array(s),i.HEAP16=H=new Int16Array(s),i.HEAPU8=U=new Uint8Array(s),i.HEAPU16=j=new Uint16Array(s),i.HEAP32=K=new Int32Array(s),i.HEAPU32=Q=new Uint32Array(s),i.HEAPF32=re=new Float32Array(s),i.HEAPF64=de=new Float64Array(s),i.HEAP64=J=new BigInt64Array(s),i.HEAPU64=F=new BigUint64Array(s)}function mt(){p?startWorker(i):P.Bb()}p||(C=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),_e());var ur,zt=0,lr=null;function Ln(){if(--zt==0&&lr){var s=lr;lr=null,s()}}function dt(s){throw k(s="Aborted("+s+")"),G=!0,s=new WebAssembly.RuntimeError(s+". Build with -sASSERTIONS for more info."),n(s),s}function Vn(){return{a:{Ta:Im,Va:Cm,W:Am,la:Om,b:Rm,u:Bm,R:Nm,Za:Dm,d:Pm,pb:Jn,g:Mm,T:ts,Ga:rs,lb:as,nb:ns,Ha:ss,Ea:os,wb:us,Da:ls,pa:ds,mb:ps,jb:cs,Fa:hs,kb:fs,Ma:Um,za:Wm,eb:Lm,cb:qm,ya:Gm,V:Hm,N:jm,db:Km,ma:tg,fb:rg,zb:ig,hb:ag,qb:ng,ab:sg,Aa:og,yb:Pi,Ja:ug,S:lg,Wa:dg,$:hg,G:fg,E:gg,m:Bi,H:yg,B:bg,X:$g,J:vg,v:xg,O:Sg,D:kg,t:Tg,A:Cg,z:Ig,w:Eg,r:zg,tb:Ag,ub:Og,vb:Mg,rb:Is,sb:Es,bb:zs,Oa:Bg,La:Dg,y:Pg,ja:Ug,Ba:Wg,Ka:Ng,qa:Lg,Ia:Vg,ib:qg,U:Rg,fa:Fg,Sa:Gg,gb:Hg,Qa:jg,Pa:Kg,Ab:Rs,Ca:Bs,ob:Ei,aa:Ns,oa:Ds,xb:Ps,na:Us,$a:$y,ia:Ry,sa:Uy,ga:wy,da:Cy,ua:Dy,p:yy,e:ty,c:Yg,ea:ky,f:ry,n:ay,k:hy,Y:sy,ka:fy,j:_y,wa:Sy,Ra:Vy,ca:Oy,Ua:Ly,P:Ty,K:uy,_:Ay,Q:by,Z:By,x:oy,l:ey,va:zy,i:Jg,h:ny,ra:Wy,ta:Py,o:iy,q:ly,s:py,I:cy,C:gy,L:my,xa:xy,_a:vy,F:My,Ya:Iy,ba:Ny,M:dy,Xa:Ey,ha:Qg,a:C,Na:Ii}}}var ki={1319426:()=>typeof wasmOffsetConverter<"u",1319483:(s,u,c,h,y)=>{if(i===void 0||!i.Bd)return 1;if((s=Te(Number(s>>>0))).startsWith("./")&&(s=s.substring(2)),!(s=i.Bd.get(s)))return 2;if(u=Number(u>>>0),c=Number(c>>>0),h=Number(h>>>0),u+c>s.byteLength)return 3;try{let S=s.subarray(u,u+c);switch(y){case 0:V().set(S,h>>>0);break;case 1:i.$d(h,S);break;default:return 4}return 0}catch{return 4}},1320198:(s,u,c)=>{i.Jd(s,V().subarray(u>>>0,u+c>>>0))},1320261:()=>i.Yd(),1320302:s=>{i.Id(s)},1320338:()=>{i.Sd()},1320369:()=>{i.Td()},1320398:()=>{i.Xd()},1320423:s=>i.Rd(s),1320456:s=>i.Vd(s),1320488:(s,u,c)=>{i.Hd(Number(s),Number(u),Number(c),!0)},1320551:(s,u,c)=>{i.Hd(Number(s),Number(u),Number(c))},1320608:s=>{i.hc("Abs",s,void 0)},1320659:s=>{i.hc("Neg",s,void 0)},1320710:s=>{i.hc("Floor",s,void 0)},1320763:s=>{i.hc("Ceil",s,void 0)},1320815:s=>{i.hc("Reciprocal",s,void 0)},1320873:s=>{i.hc("Sqrt",s,void 0)},1320925:s=>{i.hc("Exp",s,void 0)},1320976:s=>{i.hc("Erf",s,void 0)},1321027:s=>{i.hc("Sigmoid",s,void 0)},1321082:(s,u,c)=>{i.hc("HardSigmoid",s,{alpha:u,beta:c})},1321161:s=>{i.hc("Log",s,void 0)},1321212:s=>{i.hc("Sin",s,void 0)},1321263:s=>{i.hc("Cos",s,void 0)},1321314:s=>{i.hc("Tan",s,void 0)},1321365:s=>{i.hc("Asin",s,void 0)},1321417:s=>{i.hc("Acos",s,void 0)},1321469:s=>{i.hc("Atan",s,void 0)},1321521:s=>{i.hc("Sinh",s,void 0)},1321573:s=>{i.hc("Cosh",s,void 0)},1321625:s=>{i.hc("Asinh",s,void 0)},1321678:s=>{i.hc("Acosh",s,void 0)},1321731:s=>{i.hc("Atanh",s,void 0)},1321784:s=>{i.hc("Tanh",s,void 0)},1321836:s=>{i.hc("Not",s,void 0)},1321887:(s,u,c)=>{i.hc("Clip",s,{min:u,max:c})},1321956:s=>{i.hc("Clip",s,void 0)},1322008:(s,u)=>{i.hc("Elu",s,{alpha:u})},1322066:s=>{i.hc("Gelu",s,void 0)},1322118:s=>{i.hc("Relu",s,void 0)},1322170:(s,u)=>{i.hc("LeakyRelu",s,{alpha:u})},1322234:(s,u)=>{i.hc("ThresholdedRelu",s,{alpha:u})},1322304:(s,u)=>{i.hc("Cast",s,{to:u})},1322362:s=>{i.hc("Add",s,void 0)},1322413:s=>{i.hc("Sub",s,void 0)},1322464:s=>{i.hc("Mul",s,void 0)},1322515:s=>{i.hc("Div",s,void 0)},1322566:s=>{i.hc("Pow",s,void 0)},1322617:s=>{i.hc("Equal",s,void 0)},1322670:s=>{i.hc("Greater",s,void 0)},1322725:s=>{i.hc("GreaterOrEqual",s,void 0)},1322787:s=>{i.hc("Less",s,void 0)},1322839:s=>{i.hc("LessOrEqual",s,void 0)},1322898:(s,u,c,h,y)=>{i.hc("ReduceMean",s,{keepDims:!!u,noopWithEmptyAxes:!!c,axes:h?Array.from(D().subarray(Number(h)>>>0,Number(y)>>>0)):[]})},1323073:(s,u,c,h,y)=>{i.hc("ReduceMax",s,{keepDims:!!u,noopWithEmptyAxes:!!c,axes:h?Array.from(D().subarray(Number(h)>>>0,Number(y)>>>0)):[]})},1323247:(s,u,c,h,y)=>{i.hc("ReduceMin",s,{keepDims:!!u,noopWithEmptyAxes:!!c,axes:h?Array.from(D().subarray(Number(h)>>>0,Number(y)>>>0)):[]})},1323421:(s,u,c,h,y)=>{i.hc("ReduceProd",s,{keepDims:!!u,noopWithEmptyAxes:!!c,axes:h?Array.from(D().subarray(Number(h)>>>0,Number(y)>>>0)):[]})},1323596:(s,u,c,h,y)=>{i.hc("ReduceSum",s,{keepDims:!!u,noopWithEmptyAxes:!!c,axes:h?Array.from(D().subarray(Number(h)>>>0,Number(y)>>>0)):[]})},1323770:(s,u,c,h,y)=>{i.hc("ReduceL1",s,{keepDims:!!u,noopWithEmptyAxes:!!c,axes:h?Array.from(D().subarray(Number(h)>>>0,Number(y)>>>0)):[]})},1323943:(s,u,c,h,y)=>{i.hc("ReduceL2",s,{keepDims:!!u,noopWithEmptyAxes:!!c,axes:h?Array.from(D().subarray(Number(h)>>>0,Number(y)>>>0)):[]})},1324116:(s,u,c,h,y)=>{i.hc("ReduceLogSum",s,{keepDims:!!u,noopWithEmptyAxes:!!c,axes:h?Array.from(D().subarray(Number(h)>>>0,Number(y)>>>0)):[]})},1324293:(s,u,c,h,y)=>{i.hc("ReduceSumSquare",s,{keepDims:!!u,noopWithEmptyAxes:!!c,axes:h?Array.from(D().subarray(Number(h)>>>0,Number(y)>>>0)):[]})},1324473:(s,u,c,h,y)=>{i.hc("ReduceLogSumExp",s,{keepDims:!!u,noopWithEmptyAxes:!!c,axes:h?Array.from(D().subarray(Number(h)>>>0,Number(y)>>>0)):[]})},1324653:s=>{i.hc("Where",s,void 0)},1324706:(s,u,c)=>{i.hc("Transpose",s,{perm:u?Array.from(D().subarray(Number(u)>>>0,Number(c)>>>0)):[]})},1324830:(s,u,c,h)=>{i.hc("DepthToSpace",s,{blocksize:u,mode:Te(c),format:h?"NHWC":"NCHW"})},1324963:(s,u,c,h)=>{i.hc("DepthToSpace",s,{blocksize:u,mode:Te(c),format:h?"NHWC":"NCHW"})},1325096:(s,u,c,h,y,S,I,A,R,W,Z,te,oe,be,He)=>{i.hc("ConvTranspose",s,{format:R?"NHWC":"NCHW",autoPad:u,dilations:[c],group:h,kernelShape:[y],pads:[S,I],strides:[A],wIsConst:()=>!!N()[W>>>0],outputPadding:Z?Array.from(D().subarray(Number(Z)>>>0,Number(te)>>>0)):[],outputShape:oe?Array.from(D().subarray(Number(oe)>>>0,Number(be)>>>0)):[],activation:Te(He)})},1325529:(s,u,c,h,y,S,I,A,R,W,Z,te,oe,be)=>{i.hc("ConvTranspose",s,{format:A?"NHWC":"NCHW",autoPad:u,dilations:Array.from(D().subarray(Number(c)>>>0,2+(Number(c)>>>0)>>>0)),group:h,kernelShape:Array.from(D().subarray(Number(y)>>>0,2+(Number(y)>>>0)>>>0)),pads:Array.from(D().subarray(Number(S)>>>0,4+(Number(S)>>>0)>>>0)),strides:Array.from(D().subarray(Number(I)>>>0,2+(Number(I)>>>0)>>>0)),wIsConst:()=>!!N()[R>>>0],outputPadding:W?Array.from(D().subarray(Number(W)>>>0,Number(Z)>>>0)):[],outputShape:te?Array.from(D().subarray(Number(te)>>>0,Number(oe)>>>0)):[],activation:Te(be)})},1326190:(s,u,c,h,y,S,I,A,R,W,Z,te,oe,be,He)=>{i.hc("ConvTranspose",s,{format:R?"NHWC":"NCHW",autoPad:u,dilations:[c],group:h,kernelShape:[y],pads:[S,I],strides:[A],wIsConst:()=>!!N()[W>>>0],outputPadding:Z?Array.from(D().subarray(Number(Z)>>>0,Number(te)>>>0)):[],outputShape:oe?Array.from(D().subarray(Number(oe)>>>0,Number(be)>>>0)):[],activation:Te(He)})},1326623:(s,u,c,h,y,S,I,A,R,W,Z,te,oe,be)=>{i.hc("ConvTranspose",s,{format:A?"NHWC":"NCHW",autoPad:u,dilations:Array.from(D().subarray(Number(c)>>>0,2+(Number(c)>>>0)>>>0)),group:h,kernelShape:Array.from(D().subarray(Number(y)>>>0,2+(Number(y)>>>0)>>>0)),pads:Array.from(D().subarray(Number(S)>>>0,4+(Number(S)>>>0)>>>0)),strides:Array.from(D().subarray(Number(I)>>>0,2+(Number(I)>>>0)>>>0)),wIsConst:()=>!!N()[R>>>0],outputPadding:W?Array.from(D().subarray(Number(W)>>>0,Number(Z)>>>0)):[],outputShape:te?Array.from(D().subarray(Number(te)>>>0,Number(oe)>>>0)):[],activation:Te(be)})},1327284:(s,u)=>{i.hc("GlobalAveragePool",s,{format:u?"NHWC":"NCHW"})},1327375:(s,u,c,h,y,S,I,A,R,W,Z,te,oe,be)=>{i.hc("AveragePool",s,{format:be?"NHWC":"NCHW",auto_pad:u,ceil_mode:c,count_include_pad:h,storage_order:y,dilations:S?Array.from(D().subarray(Number(S)>>>0,Number(I)>>>0)):[],kernel_shape:A?Array.from(D().subarray(Number(A)>>>0,Number(R)>>>0)):[],pads:W?Array.from(D().subarray(Number(W)>>>0,Number(Z)>>>0)):[],strides:te?Array.from(D().subarray(Number(te)>>>0,Number(oe)>>>0)):[]})},1327854:(s,u)=>{i.hc("GlobalAveragePool",s,{format:u?"NHWC":"NCHW"})},1327945:(s,u,c,h,y,S,I,A,R,W,Z,te,oe,be)=>{i.hc("AveragePool",s,{format:be?"NHWC":"NCHW",auto_pad:u,ceil_mode:c,count_include_pad:h,storage_order:y,dilations:S?Array.from(D().subarray(Number(S)>>>0,Number(I)>>>0)):[],kernel_shape:A?Array.from(D().subarray(Number(A)>>>0,Number(R)>>>0)):[],pads:W?Array.from(D().subarray(Number(W)>>>0,Number(Z)>>>0)):[],strides:te?Array.from(D().subarray(Number(te)>>>0,Number(oe)>>>0)):[]})},1328424:(s,u)=>{i.hc("GlobalMaxPool",s,{format:u?"NHWC":"NCHW"})},1328511:(s,u,c,h,y,S,I,A,R,W,Z,te,oe,be)=>{i.hc("MaxPool",s,{format:be?"NHWC":"NCHW",auto_pad:u,ceil_mode:c,count_include_pad:h,storage_order:y,dilations:S?Array.from(D().subarray(Number(S)>>>0,Number(I)>>>0)):[],kernel_shape:A?Array.from(D().subarray(Number(A)>>>0,Number(R)>>>0)):[],pads:W?Array.from(D().subarray(Number(W)>>>0,Number(Z)>>>0)):[],strides:te?Array.from(D().subarray(Number(te)>>>0,Number(oe)>>>0)):[]})},1328986:(s,u)=>{i.hc("GlobalMaxPool",s,{format:u?"NHWC":"NCHW"})},1329073:(s,u,c,h,y,S,I,A,R,W,Z,te,oe,be)=>{i.hc("MaxPool",s,{format:be?"NHWC":"NCHW",auto_pad:u,ceil_mode:c,count_include_pad:h,storage_order:y,dilations:S?Array.from(D().subarray(Number(S)>>>0,Number(I)>>>0)):[],kernel_shape:A?Array.from(D().subarray(Number(A)>>>0,Number(R)>>>0)):[],pads:W?Array.from(D().subarray(Number(W)>>>0,Number(Z)>>>0)):[],strides:te?Array.from(D().subarray(Number(te)>>>0,Number(oe)>>>0)):[]})},1329548:(s,u,c,h,y)=>{i.hc("Gemm",s,{alpha:u,beta:c,transA:h,transB:y})},1329652:s=>{i.hc("MatMul",s,void 0)},1329706:(s,u,c,h)=>{i.hc("ArgMax",s,{keepDims:!!u,selectLastIndex:!!c,axis:h})},1329814:(s,u,c,h)=>{i.hc("ArgMin",s,{keepDims:!!u,selectLastIndex:!!c,axis:h})},1329922:(s,u)=>{i.hc("Softmax",s,{axis:u})},1329985:(s,u)=>{i.hc("Concat",s,{axis:u})},1330045:(s,u,c,h,y)=>{i.hc("Split",s,{axis:u,numOutputs:c,splitSizes:h?Array.from(D().subarray(Number(h)>>>0,Number(y)>>>0)):[]})},1330201:s=>{i.hc("Expand",s,void 0)},1330255:(s,u)=>{i.hc("Gather",s,{axis:Number(u)})},1330326:(s,u)=>{i.hc("GatherElements",s,{axis:Number(u)})},1330405:(s,u)=>{i.hc("GatherND",s,{batch_dims:Number(u)})},1330484:(s,u,c,h,y,S,I,A,R,W,Z)=>{i.hc("Resize",s,{antialias:u,axes:c?Array.from(D().subarray(Number(c)>>>0,Number(h)>>>0)):[],coordinateTransformMode:Te(y),cubicCoeffA:S,excludeOutside:I,extrapolationValue:A,keepAspectRatioPolicy:Te(R),mode:Te(W),nearestMode:Te(Z)})},1330846:(s,u,c,h,y,S,I)=>{i.hc("Slice",s,{starts:u?Array.from(D().subarray(Number(u)>>>0,Number(c)>>>0)):[],ends:h?Array.from(D().subarray(Number(h)>>>0,Number(y)>>>0)):[],axes:S?Array.from(D().subarray(Number(S)>>>0,Number(I)>>>0)):[]})},1331110:s=>{i.hc("Tile",s,void 0)},1331162:(s,u,c)=>{i.hc("InstanceNormalization",s,{epsilon:u,format:c?"NHWC":"NCHW"})},1331276:(s,u,c)=>{i.hc("InstanceNormalization",s,{epsilon:u,format:c?"NHWC":"NCHW"})},1331390:s=>{i.hc("Range",s,void 0)},1331443:(s,u)=>{i.hc("Einsum",s,{equation:Te(u)})},1331524:(s,u,c,h,y)=>{i.hc("Pad",s,{mode:u,value:c,pads:h?Array.from(D().subarray(Number(h)>>>0,Number(y)>>>0)):[]})},1331667:(s,u,c,h,y,S)=>{i.hc("BatchNormalization",s,{epsilon:u,momentum:c,spatial:!!y,trainingMode:!!h,format:S?"NHWC":"NCHW"})},1331836:(s,u,c,h,y,S)=>{i.hc("BatchNormalization",s,{epsilon:u,momentum:c,spatial:!!y,trainingMode:!!h,format:S?"NHWC":"NCHW"})},1332005:(s,u,c)=>{i.hc("CumSum",s,{exclusive:Number(u),reverse:Number(c)})},1332102:(s,u,c)=>{i.hc("DequantizeLinear",s,{axis:u,blockSize:c})},1332192:(s,u,c,h,y)=>{i.hc("GridSample",s,{align_corners:u,mode:Te(c),padding_mode:Te(h),format:y?"NHWC":"NCHW"})},1332362:(s,u,c,h,y)=>{i.hc("GridSample",s,{align_corners:u,mode:Te(c),padding_mode:Te(h),format:y?"NHWC":"NCHW"})},1332532:(s,u)=>{i.hc("ScatterND",s,{reduction:Te(u)})},1332617:(s,u,c,h,y,S,I,A,R)=>{i.hc("Attention",s,{numHeads:u,isUnidirectional:c,maskFilterValue:h,scale:y,doRotary:S,qkvHiddenSizes:I?Array.from(D().subarray(Number(A)>>>0,Number(A)+I>>>0)):[],pastPresentShareBuffer:!!R})},1332889:s=>{i.hc("BiasAdd",s,void 0)},1332944:s=>{i.hc("BiasSplitGelu",s,void 0)},1333005:s=>{i.hc("FastGelu",s,void 0)},1333061:(s,u,c,h,y,S,I,A,R,W,Z,te,oe,be,He,fr)=>{i.hc("Conv",s,{format:te?"NHWC":"NCHW",auto_pad:u,dilations:c?Array.from(D().subarray(Number(c)>>>0,Number(h)>>>0)):[],group:y,kernel_shape:S?Array.from(D().subarray(Number(S)>>>0,Number(I)>>>0)):[],pads:A?Array.from(D().subarray(Number(A)>>>0,Number(R)>>>0)):[],strides:W?Array.from(D().subarray(Number(W)>>>0,Number(Z)>>>0)):[],w_is_const:()=>!!N()[Number(oe)>>>0],activation:Te(be),activation_params:He?Array.from(Fe().subarray(Number(He)>>>0,Number(fr)>>>0)):[]})},1333645:s=>{i.hc("Gelu",s,void 0)},1333697:(s,u,c,h,y,S,I,A,R)=>{i.hc("GroupQueryAttention",s,{numHeads:u,kvNumHeads:c,scale:h,softcap:y,doRotary:S,rotaryInterleaved:I,smoothSoftmax:A,localWindowSize:R})},1333914:(s,u,c,h)=>{i.hc("LayerNormalization",s,{axis:u,epsilon:c,simplified:!!h})},1334025:(s,u,c,h)=>{i.hc("LayerNormalization",s,{axis:u,epsilon:c,simplified:!!h})},1334136:(s,u,c,h,y,S)=>{i.hc("MatMulNBits",s,{k:u,n:c,accuracyLevel:h,bits:y,blockSize:S})},1334263:(s,u,c,h,y,S)=>{i.hc("MultiHeadAttention",s,{numHeads:u,isUnidirectional:c,maskFilterValue:h,scale:y,doRotary:S})},1334422:(s,u)=>{i.hc("QuickGelu",s,{alpha:u})},1334486:(s,u,c,h,y)=>{i.hc("RotaryEmbedding",s,{interleaved:!!u,numHeads:c,rotaryEmbeddingDim:h,scale:y})},1334625:(s,u,c)=>{i.hc("SkipLayerNormalization",s,{epsilon:u,simplified:!!c})},1334727:(s,u,c)=>{i.hc("SkipLayerNormalization",s,{epsilon:u,simplified:!!c})},1334829:(s,u,c,h)=>{i.hc("GatherBlockQuantized",s,{gatherAxis:u,quantizeAxis:c,blockSize:h})},1334950:s=>{i.Wd(s)},1334984:(s,u)=>i.Zd(Number(s),Number(u),i.Cd.be,i.Cd.errors)};function Cm(s,u,c){return vs(async()=>{await i.Ud(Number(s),Number(u),Number(c))})}function Im(){return typeof wasmOffsetConverter<"u"}class Ti{constructor(u){Zo(this,"name","ExitStatus");this.message=`Program terminated with exit(${u})`,this.status=u}}var qn=s=>{s.terminate(),s.onmessage=()=>{}},Ci=[],Fn=s=>{yt.length==0&&(Qn(),Zn(yt[0]));var u=yt.pop();if(!u)return 6;dr.push(u),At[s.xd]=u,u.xd=s.xd;var c={yd:"run",de:s.ce,Fd:s.Fd,xd:s.xd};return u.postMessage(c,s.Ld),0},gt=0,xe=(s,u,...c)=>{for(var h=2*c.length,y=ne(),S=Hi(8*h),I=S>>>3,A=0;A<c.length;A++){var R=c[A];typeof R=="bigint"?(J[I+2*A]=1n,J[I+2*A+1]=R):(J[I+2*A]=0n,Ne()[I+2*A+1>>>0]=R)}return s=Fs(s,0,h,S,u),ae(y),s};function Ii(s){if(p)return xe(0,1,s);if(z=s,!(0<gt)){for(var u of dr)qn(u);for(u of yt)qn(u);yt=[],dr=[],At={},G=!0}b(0,new Ti(s))}function Gn(s){if(p)return xe(1,0,s);Ei(s)}var Ei=s=>{if(z=s,p)throw Gn(s),"unwind";Ii(s)},yt=[],dr=[],Hn=[],At={},jn=s=>{var u=s.xd;delete At[u],yt.push(s),dr.splice(dr.indexOf(s),1),s.xd=0,Gs(u)};function Kn(){Hn.forEach(s=>s())}var Zn=s=>new Promise(u=>{s.onmessage=y=>{var S=(y=y.data).yd;if(y.Ed&&y.Ed!=Hr()){var I=At[y.Ed];I?I.postMessage(y,y.Ld):k(`Internal error! Worker sent a message "${S}" to target pthread ${y.Ed}, but that thread no longer exists!`)}else S==="checkMailbox"?Pr():S==="spawnThread"?Fn(y):S==="cleanupThread"?jn(At[y.ee]):S==="loaded"?(s.loaded=!0,u(s)):S==="alert"?alert(`Thread ${y.fe}: ${y.text}`):y.target==="setimmediate"?s.postMessage(y):S==="callHandler"?i[y.Nd](...y.args):S&&k(`worker sent an unknown command ${S}`)},s.onerror=y=>{throw k(`worker sent an error! ${y.filename}:${y.lineno}: ${y.message}`),y};var c,h=[];for(c of[])i.propertyIsEnumerable(c)&&h.push(c);s.postMessage({yd:"load",Od:h,he:C,ie:E})});function Qn(){var s=new Worker(import.meta.url.startsWith("file:")?new URL(""+new URL("ort.bundle.min-OfoG_cy9.mjs",import.meta.url).href,import.meta.url):new URL(import.meta.url),{type:"module",workerData:"em-pthread",name:"em-pthread"});yt.push(s)}var Em=s=>{_e();var u=fe()[s+52>>>2>>>0];s=fe()[s+56>>>2>>>0],Ks(u,u-s),ae(u)},zm=(s,u)=>{gt=0,s=ji(s,u),0<gt?z=s:Gi(s)},Dr=[];function Am(s){var u=new zi(s>>>=0);if(N()[u.wd+12>>>0]==0){var c=1;N()[u.wd+12>>>0]=c}return c=0,N()[u.wd+13>>>0]=c,Dr.push(u),Qs(s),Js(s)}var Kt=0,Om=()=>{se(0,0);var s=Dr.pop();Zs(s.Gd),Kt=0};class zi{constructor(u){this.Gd=u,this.wd=u-24}}function Mm(s){throw Kt||(Kt=s>>>0),Kt}var Ai=s=>{var u=Kt;if(!u)return hr(0),0;var c=new zi(u);fe()[c.wd+16>>>2>>>0]=u;var h=fe()[c.wd+4>>>2>>>0];if(!h)return hr(0),u;for(var y of s){if(y===0||y===h)break;if(Xs(y,h,c.wd+16))return hr(y),u}return hr(h),u};function Rm(){return Ai([])}function Bm(s){return Ai([s>>>0])}function Nm(s,u){return Ai([s>>>0,u>>>0])}var Dm=()=>{var s=Dr.pop();s||dt("no exception to throw");var u=s.Gd;if(N()[s.wd+13>>>0]==0){Dr.push(s);var c=1;N()[s.wd+13>>>0]=c,c=0,N()[s.wd+12>>>0]=c}throw Kt=u};function Pm(s,u,c){var h=new zi(s>>>=0);throw u>>>=0,c>>>=0,fe()[h.wd+16>>>2>>>0]=0,fe()[h.wd+4>>>2>>>0]=u,fe()[h.wd+8>>>2>>>0]=c,Kt=s}function Xn(s,u,c,h){return p?xe(2,1,s,u,c,h):Jn(s,u,c,h)}function Jn(s,u,c,h){if(s>>>=0,c>>>=0,h>>>=0,f===void 0)return 6;var y=[];return p&&y.length===0?Xn(s,u>>>=0,c,h):(s={ce:c,xd:s,Fd:h,Ld:y},p?(s.yd="spawnThread",postMessage(s,y),0):Fn(s))}var Yn=typeof TextDecoder<"u"?new TextDecoder:void 0,es=(s,u=0,c=NaN)=>{var h=(u>>>=0)+c;for(c=u;s[c]&&!(c>=h);)++c;if(16<c-u&&s.buffer&&Yn)return Yn.decode(s.buffer instanceof ArrayBuffer?s.subarray(u,c):s.slice(u,c));for(h="";u<c;){var y=s[u++];if(128&y){var S=63&s[u++];if((224&y)==192)h+=String.fromCharCode((31&y)<<6|S);else{var I=63&s[u++];65536>(y=(240&y)==224?(15&y)<<12|S<<6|I:(7&y)<<18|S<<12|I<<6|63&s[u++])?h+=String.fromCharCode(y):(y-=65536,h+=String.fromCharCode(55296|y>>10,56320|1023&y))}}else h+=String.fromCharCode(y)}return h},Te=(s,u)=>(s>>>=0)?es(V(),s,u):"";function ts(s,u,c){return p?xe(3,1,s,u,c):0}function rs(s,u){if(p)return xe(4,1,s,u)}var is=s=>{for(var u=0,c=0;c<s.length;++c){var h=s.charCodeAt(c);127>=h?u++:2047>=h?u+=2:55296<=h&&57343>=h?(u+=4,++c):u+=3}return u},Zt=(s,u,c)=>{var h=V();if(u>>>=0,0<c){var y=u;c=u+c-1;for(var S=0;S<s.length;++S){var I=s.charCodeAt(S);if(55296<=I&&57343>=I&&(I=65536+((1023&I)<<10)|1023&s.charCodeAt(++S)),127>=I){if(u>=c)break;h[u++>>>0]=I}else{if(2047>=I){if(u+1>=c)break;h[u++>>>0]=192|I>>6}else{if(65535>=I){if(u+2>=c)break;h[u++>>>0]=224|I>>12}else{if(u+3>=c)break;h[u++>>>0]=240|I>>18,h[u++>>>0]=128|I>>12&63}h[u++>>>0]=128|I>>6&63}h[u++>>>0]=128|63&I}}h[u>>>0]=0,s=u-y}else s=0;return s};function as(s,u){if(p)return xe(5,1,s,u)}function ns(s,u,c){if(p)return xe(6,1,s,u,c)}function ss(s,u,c){return p?xe(7,1,s,u,c):0}function os(s,u){if(p)return xe(8,1,s,u)}function us(s,u,c){if(p)return xe(9,1,s,u,c)}function ls(s,u,c,h){if(p)return xe(10,1,s,u,c,h)}function ds(s,u,c,h){if(p)return xe(11,1,s,u,c,h)}function ps(s,u,c,h){if(p)return xe(12,1,s,u,c,h)}function cs(s){if(p)return xe(13,1,s)}function hs(s,u){if(p)return xe(14,1,s,u)}function fs(s,u,c){if(p)return xe(15,1,s,u,c)}var ms,_t,Um=()=>dt(""),nt=s=>{for(var u="";V()[s>>>0];)u+=ms[V()[s++>>>0]];return u},Oi={},Mi={};function pt(s,u,c={}){return(function(h,y,S={}){var I=y.name;if(!h)throw new _t(`type "${I}" must have a positive integer typeid pointer`);if(Mi.hasOwnProperty(h)){if(S.Pd)return;throw new _t(`Cannot register type '${I}' twice`)}Mi[h]=y,Oi.hasOwnProperty(h)&&(y=Oi[h],delete Oi[h],y.forEach(A=>A()))})(s,u,c)}var gs=(s,u,c)=>{switch(u){case 1:return c?h=>N()[h>>>0]:h=>V()[h>>>0];case 2:return c?h=>pe()[h>>>1>>>0]:h=>ve()[h>>>1>>>0];case 4:return c?h=>D()[h>>>2>>>0]:h=>fe()[h>>>2>>>0];case 8:return c?h=>J[h>>>3]:h=>F[h>>>3];default:throw new TypeError(`invalid integer width (${u}): ${s}`)}};function Wm(s,u,c){c>>>=0,pt(s>>>=0,{name:u=nt(u>>>0),fromWireType:h=>h,toWireType:function(h,y){if(typeof y!="bigint"&&typeof y!="number")throw y=y===null?"null":(h=typeof y)=="object"||h==="array"||h==="function"?y.toString():""+y,new TypeError(`Cannot convert "${y}" to ${this.name}`);return typeof y=="number"&&(y=BigInt(y)),y},zd:wt,readValueFromPointer:gs(u,c,u.indexOf("u")==-1),Ad:null})}var wt=8;function Lm(s,u,c,h){pt(s>>>=0,{name:u=nt(u>>>0),fromWireType:function(y){return!!y},toWireType:function(y,S){return S?c:h},zd:wt,readValueFromPointer:function(y){return this.fromWireType(V()[y>>>0])},Ad:null})}var Ri=[],ct=[];function Bi(s){9<(s>>>=0)&&--ct[s+1]==0&&(ct[s]=void 0,Ri.push(s))}var Ue=s=>{if(!s)throw new _t("Cannot use deleted val. handle = "+s);return ct[s]},Ge=s=>{switch(s){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let u=Ri.pop()||ct.length;return ct[u]=s,ct[u+1]=1,u}};function Ni(s){return this.fromWireType(fe()[s>>>2>>>0])}var Vm={name:"emscripten::val",fromWireType:s=>{var u=Ue(s);return Bi(s),u},toWireType:(s,u)=>Ge(u),zd:wt,readValueFromPointer:Ni,Ad:null};function qm(s){return pt(s>>>0,Vm)}var Fm=(s,u)=>{switch(u){case 4:return function(c){return this.fromWireType(Fe()[c>>>2>>>0])};case 8:return function(c){return this.fromWireType(Ne()[c>>>3>>>0])};default:throw new TypeError(`invalid float width (${u}): ${s}`)}};function Gm(s,u,c){c>>>=0,pt(s>>>=0,{name:u=nt(u>>>0),fromWireType:h=>h,toWireType:(h,y)=>y,zd:wt,readValueFromPointer:Fm(u,c),Ad:null})}function Hm(s,u,c,h,y){if(s>>>=0,c>>>=0,u=nt(u>>>0),y===-1&&(y=4294967295),y=A=>A,h===0){var S=32-8*c;y=A=>A<<S>>>S}var I=u.includes("unsigned")?function(A,R){return R>>>0}:function(A,R){return R};pt(s,{name:u,fromWireType:y,toWireType:I,zd:wt,readValueFromPointer:gs(u,c,h!==0),Ad:null})}function jm(s,u,c){function h(S){var I=fe()[S>>>2>>>0];return S=fe()[S+4>>>2>>>0],new y(N().buffer,S,I)}var y=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][u];pt(s>>>=0,{name:c=nt(c>>>0),fromWireType:h,zd:wt,readValueFromPointer:h},{Pd:!0})}function Km(s,u){pt(s>>>=0,{name:u=nt(u>>>0),fromWireType:function(c){for(var h,y=fe()[c>>>2>>>0],S=c+4,I=S,A=0;A<=y;++A){var R=S+A;A!=y&&V()[R>>>0]!=0||(I=Te(I,R-I),h===void 0?h=I:(h+="\0",h+=I),I=R+1)}return ot(c),h},toWireType:function(c,h){h instanceof ArrayBuffer&&(h=new Uint8Array(h));var y=typeof h=="string";if(!(y||h instanceof Uint8Array||h instanceof Uint8ClampedArray||h instanceof Int8Array))throw new _t("Cannot pass non-string to std::string");var S=y?is(h):h.length,I=jr(4+S+1),A=I+4;if(fe()[I>>>2>>>0]=S,y)Zt(h,A,S+1);else if(y)for(y=0;y<S;++y){var R=h.charCodeAt(y);if(255<R)throw ot(I),new _t("String has UTF-16 code units that do not fit in 8 bits");V()[A+y>>>0]=R}else for(y=0;y<S;++y)V()[A+y>>>0]=h[y];return c!==null&&c.push(ot,I),I},zd:wt,readValueFromPointer:Ni,Ad(c){ot(c)}})}var ys=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Zm=(s,u)=>{for(var c=s>>1,h=c+u/2;!(c>=h)&&ve()[c>>>0];)++c;if(32<(c<<=1)-s&&ys)return ys.decode(V().slice(s,c));for(c="",h=0;!(h>=u/2);++h){var y=pe()[s+2*h>>>1>>>0];if(y==0)break;c+=String.fromCharCode(y)}return c},Qm=(s,u,c)=>{if(c??(c=2147483647),2>c)return 0;var h=u;c=(c-=2)<2*s.length?c/2:s.length;for(var y=0;y<c;++y){var S=s.charCodeAt(y);pe()[u>>>1>>>0]=S,u+=2}return pe()[u>>>1>>>0]=0,u-h},Xm=s=>2*s.length,Jm=(s,u)=>{for(var c=0,h="";!(c>=u/4);){var y=D()[s+4*c>>>2>>>0];if(y==0)break;++c,65536<=y?(y-=65536,h+=String.fromCharCode(55296|y>>10,56320|1023&y)):h+=String.fromCharCode(y)}return h},Ym=(s,u,c)=>{if(u>>>=0,c??(c=2147483647),4>c)return 0;var h=u;c=h+c-4;for(var y=0;y<s.length;++y){var S=s.charCodeAt(y);if(55296<=S&&57343>=S&&(S=65536+((1023&S)<<10)|1023&s.charCodeAt(++y)),D()[u>>>2>>>0]=S,(u+=4)+4>c)break}return D()[u>>>2>>>0]=0,u-h},eg=s=>{for(var u=0,c=0;c<s.length;++c){var h=s.charCodeAt(c);55296<=h&&57343>=h&&++c,u+=4}return u};function tg(s,u,c){if(s>>>=0,u>>>=0,c=nt(c>>>=0),u===2)var h=Zm,y=Qm,S=Xm,I=A=>ve()[A>>>1>>>0];else u===4&&(h=Jm,y=Ym,S=eg,I=A=>fe()[A>>>2>>>0]);pt(s,{name:c,fromWireType:A=>{for(var R,W=fe()[A>>>2>>>0],Z=A+4,te=0;te<=W;++te){var oe=A+4+te*u;te!=W&&I(oe)!=0||(Z=h(Z,oe-Z),R===void 0?R=Z:(R+="\0",R+=Z),Z=oe+u)}return ot(A),R},toWireType:(A,R)=>{if(typeof R!="string")throw new _t(`Cannot pass non-string to C++ string type ${c}`);var W=S(R),Z=jr(4+W+u);return fe()[Z>>>2>>>0]=W/u,y(R,Z+4,W+u),A!==null&&A.push(ot,Z),Z},zd:wt,readValueFromPointer:Ni,Ad(A){ot(A)}})}function rg(s,u){pt(s>>>=0,{Qd:!0,name:u=nt(u>>>0),zd:0,fromWireType:()=>{},toWireType:()=>{}})}function ig(s){Fi(s>>>0,!d,1,!l,131072,!1),Kn()}var Di=s=>{if(!G)try{if(s(),!(0<gt))try{p?Gi(z):Ei(z)}catch(u){u instanceof Ti||u=="unwind"||b(0,u)}}catch(u){u instanceof Ti||u=="unwind"||b(0,u)}};function Pi(s){s>>>=0,typeof Atomics.ge=="function"&&(Atomics.ge(D(),s>>>2,s).value.then(Pr),s+=128,Atomics.store(D(),s>>>2,1))}var Pr=()=>{var s=Hr();s&&(Pi(s),Di(js))};function ag(s,u){(s>>>=0)==u>>>0?setTimeout(Pr):p?postMessage({Ed:s,yd:"checkMailbox"}):(s=At[s])&&s.postMessage({yd:"checkMailbox"})}var Ui=[];function ng(s,u,c,h,y){for(u>>>=0,h/=2,Ui.length=h,c=y>>>0>>>3,y=0;y<h;y++)Ui[y]=J[c+2*y]?J[c+2*y+1]:Ne()[c+2*y+1>>>0];return(u?ki[u]:Xg[s])(...Ui)}var sg=()=>{gt=0};function og(s){s>>>=0,p?postMessage({yd:"cleanupThread",ee:s}):jn(At[s])}function ug(s){}var Ur=(s,u)=>{var c=Mi[s];if(c===void 0)throw s=Ls(s),c=nt(s),ot(s),new _t(`${u} has unknown type ${c}`);return c},_s=(s,u,c)=>{var h=[];return s=s.toWireType(h,c),h.length&&(fe()[u>>>2>>>0]=Ge(h)),s};function lg(s,u,c){return u>>>=0,c>>>=0,s=Ue(s>>>0),u=Ur(u,"emval::as"),_s(u,c,s)}function dg(s,u){return u>>>=0,s=Ue(s>>>0),(u=Ur(u,"emval::as")).toWireType(null,s)}var Wr=s=>{try{s()}catch(u){dt(u)}},bt=0,st=null,ws=0,Lr=[],bs={},$s={},pg=0,Wi=null,cg=[];function vs(s){return(function(u){if(!G){if(bt===0){var c=!1,h=!1;u((y=0)=>{if(!G&&(ws=y,c=!0,h)){bt=2,Wr(()=>Ho(st)),typeof MainLoop<"u"&&MainLoop.Md&&MainLoop.resume(),y=!1;try{var S=(function(){var R=D()[st+8>>>2>>>0];return R=P[$s[R]],--gt,R()})()}catch(R){S=R,y=!0}var I=!1;if(!st){var A=Wi;A&&(Wi=null,(y?A.reject:A.resolve)(S),I=!0)}if(y&&!I)throw S}}),h=!0,c||(bt=1,st=(function(){var y=jr(65548),S=y+12;fe()[y>>>2>>>0]=S,fe()[y+4>>>2>>>0]=S+65536,S=Lr[0];var I=bs[S];return I===void 0&&(I=pg++,bs[S]=I,$s[I]=S),S=I,D()[y+8>>>2>>>0]=S,y})(),typeof MainLoop<"u"&&MainLoop.Md&&MainLoop.pause(),Wr(()=>Fo(st)))}else bt===2?(bt=0,Wr(jo),ot(st),st=null,cg.forEach(Di)):dt(`invalid state: ${bt}`);return ws}})(u=>{s().then(u)})}function hg(s){return s>>>=0,vs(async()=>{var u=await Ue(s);return Ge(u)})}var Vr=[];function fg(s,u,c,h){return c>>>=0,h>>>=0,(s=Vr[s>>>0])(null,u=Ue(u>>>0),c,h)}var mg={},qr=s=>{var u=mg[s];return u===void 0?nt(s):u};function gg(s,u,c,h,y){return c>>>=0,h>>>=0,y>>>=0,(s=Vr[s>>>0])(u=Ue(u>>>0),u[c=qr(c)],h,y)}var xs=()=>typeof globalThis=="object"?globalThis:Function("return this")();function yg(s){return(s>>>=0)==0?Ge(xs()):(s=qr(s),Ge(xs()[s]))}var _g=s=>{var u=Vr.length;return Vr.push(s),u},wg=(s,u)=>{for(var c=Array(s),h=0;h<s;++h)c[h]=Ur(fe()[u+4*h>>>2>>>0],"parameter "+h);return c},Ss=(s,u)=>Object.defineProperty(u,"name",{value:s});function bg(s,u,c){var h=(u=wg(s,u>>>0)).shift();s--;var y=`return function (obj, func, destructorsRef, args) {
`,S=0,I=[];c===0&&I.push("obj");for(var A=["retType"],R=[h],W=0;W<s;++W)I.push("arg"+W),A.push("argType"+W),R.push(u[W]),y+=`  var arg${W} = argType${W}.readValueFromPointer(args${S?"+"+S:""});
`,S+=u[W].zd;return y+=`  var rv = ${c===1?"new func":"func.call"}(${I.join(", ")});
`,h.Qd||(A.push("emval_returnValue"),R.push(_s),y+=`  return emval_returnValue(retType, destructorsRef, rv);
`),A.push(y+`};
`),s=(function(Z){var te=Function;if(!(te instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof te} which is not a function`);var oe=Ss(te.name||"unknownFunctionName",function(){});return oe.prototype=te.prototype,oe=new oe,(Z=te.apply(oe,Z))instanceof Object?Z:oe})(A)(...R),c=`methodCaller<(${u.map(Z=>Z.name).join(", ")}) => ${h.name}>`,_g(Ss(c,s))}function $g(s){return s=qr(s>>>0),Ge(i[s])}function vg(s,u){return u>>>=0,s=Ue(s>>>0),u=Ue(u),Ge(s[u])}function xg(s){9<(s>>>=0)&&(ct[s+1]+=1)}function Sg(){return Ge([])}function kg(s){s=Ue(s>>>0);for(var u=Array(s.length),c=0;c<s.length;c++)u[c]=s[c];return Ge(u)}function Tg(s){return Ge(qr(s>>>0))}function Cg(){return Ge({})}function Ig(s){for(var u=Ue(s>>>=0);u.length;){var c=u.pop();u.pop()(c)}Bi(s)}function Eg(s,u,c){u>>>=0,c>>>=0,s=Ue(s>>>0),u=Ue(u),c=Ue(c),s[u]=c}function zg(s,u){return u>>>=0,s=(s=Ur(s>>>0,"_emval_take_value")).readValueFromPointer(u),Ge(s)}function Ag(s,u){s=-9007199254740992>s||9007199254740992<s?NaN:Number(s),u>>>=0,s=new Date(1e3*s),D()[u>>>2>>>0]=s.getUTCSeconds(),D()[u+4>>>2>>>0]=s.getUTCMinutes(),D()[u+8>>>2>>>0]=s.getUTCHours(),D()[u+12>>>2>>>0]=s.getUTCDate(),D()[u+16>>>2>>>0]=s.getUTCMonth(),D()[u+20>>>2>>>0]=s.getUTCFullYear()-1900,D()[u+24>>>2>>>0]=s.getUTCDay(),s=(s.getTime()-Date.UTC(s.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,D()[u+28>>>2>>>0]=s}var ks=s=>s%4==0&&(s%100!=0||s%400==0),Ts=[0,31,60,91,121,152,182,213,244,274,305,335],Cs=[0,31,59,90,120,151,181,212,243,273,304,334];function Og(s,u){s=-9007199254740992>s||9007199254740992<s?NaN:Number(s),u>>>=0,s=new Date(1e3*s),D()[u>>>2>>>0]=s.getSeconds(),D()[u+4>>>2>>>0]=s.getMinutes(),D()[u+8>>>2>>>0]=s.getHours(),D()[u+12>>>2>>>0]=s.getDate(),D()[u+16>>>2>>>0]=s.getMonth(),D()[u+20>>>2>>>0]=s.getFullYear()-1900,D()[u+24>>>2>>>0]=s.getDay();var c=(ks(s.getFullYear())?Ts:Cs)[s.getMonth()]+s.getDate()-1|0;D()[u+28>>>2>>>0]=c,D()[u+36>>>2>>>0]=-60*s.getTimezoneOffset(),c=new Date(s.getFullYear(),6,1).getTimezoneOffset();var h=new Date(s.getFullYear(),0,1).getTimezoneOffset();s=0|(c!=h&&s.getTimezoneOffset()==Math.min(h,c)),D()[u+32>>>2>>>0]=s}function Mg(s){s>>>=0;var u=new Date(D()[s+20>>>2>>>0]+1900,D()[s+16>>>2>>>0],D()[s+12>>>2>>>0],D()[s+8>>>2>>>0],D()[s+4>>>2>>>0],D()[s>>>2>>>0],0),c=D()[s+32>>>2>>>0],h=u.getTimezoneOffset(),y=new Date(u.getFullYear(),6,1).getTimezoneOffset(),S=new Date(u.getFullYear(),0,1).getTimezoneOffset(),I=Math.min(S,y);return 0>c?D()[s+32>>>2>>>0]=+(y!=S&&I==h):0<c!=(I==h)&&(y=Math.max(S,y),u.setTime(u.getTime()+6e4*((0<c?I:y)-h))),D()[s+24>>>2>>>0]=u.getDay(),c=(ks(u.getFullYear())?Ts:Cs)[u.getMonth()]+u.getDate()-1|0,D()[s+28>>>2>>>0]=c,D()[s>>>2>>>0]=u.getSeconds(),D()[s+4>>>2>>>0]=u.getMinutes(),D()[s+8>>>2>>>0]=u.getHours(),D()[s+12>>>2>>>0]=u.getDate(),D()[s+16>>>2>>>0]=u.getMonth(),D()[s+20>>>2>>>0]=u.getYear(),s=u.getTime(),BigInt(isNaN(s)?-1:s/1e3)}function Is(s,u,c,h,y,S,I){return p?xe(16,1,s,u,c,h,y,S,I):-52}function Es(s,u,c,h,y,S){if(p)return xe(17,1,s,u,c,h,y,S)}var pr={},Rg=()=>performance.timeOrigin+performance.now();function zs(s,u){if(p)return xe(18,1,s,u);if(pr[s]&&(clearTimeout(pr[s].id),delete pr[s]),!u)return 0;var c=setTimeout(()=>{delete pr[s],Di(()=>Hs(s,performance.timeOrigin+performance.now()))},u);return pr[s]={id:c,ke:u},0}function Bg(s,u,c,h){s>>>=0,u>>>=0,c>>>=0,h>>>=0;var y=new Date().getFullYear(),S=new Date(y,0,1).getTimezoneOffset();y=new Date(y,6,1).getTimezoneOffset();var I=Math.max(S,y);fe()[s>>>2>>>0]=60*I,D()[u>>>2>>>0]=+(S!=y),s=(u=A=>{var R=Math.abs(A);return`UTC${0<=A?"-":"+"}${String(Math.floor(R/60)).padStart(2,"0")}${String(R%60).padStart(2,"0")}`})(S),u=u(y),y<S?(Zt(s,c,17),Zt(u,h,17)):(Zt(s,h,17),Zt(u,c,17))}var Ng=()=>Date.now();function Dg(s,u,c){return 0<=s&&3>=s?(s===0?s=Date.now():s=performance.timeOrigin+performance.now(),J[c>>>0>>>3]=BigInt(Math.round(1e6*s)),0):28}var Li=[],As=(s,u)=>{Li.length=0;for(var c;c=V()[s++>>>0];){var h=c!=105;u+=(h&=c!=112)&&u%8?4:0,Li.push(c==112?fe()[u>>>2>>>0]:c==106?J[u>>>3]:c==105?D()[u>>>2>>>0]:Ne()[u>>>3>>>0]),u+=h?8:4}return Li};function Pg(s,u,c){return s>>>=0,u=As(u>>>0,c>>>0),ki[s](...u)}function Ug(s,u,c){return s>>>=0,u=As(u>>>0,c>>>0),ki[s](...u)}var Wg=()=>{};function Lg(s,u){return k(Te(s>>>0,u>>>0))}var Vg=()=>{throw gt+=1,"unwind"};function qg(){return 4294901760}var Fg=()=>navigator.hardwareConcurrency;function Gg(){return dt("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function Hg(s){s>>>=0;var u=V().length;if(s<=u||4294901760<s)return!1;for(var c=1;4>=c;c*=2){var h=u*(1+.2/c);h=Math.min(h,s+100663296);e:{h=(Math.min(4294901760,65536*Math.ceil(Math.max(s,h)/65536))-C.buffer.byteLength+65535)/65536|0;try{C.grow(h),_e();var y=1;break e}catch{}y=void 0}if(y)return!0}return!1}var Fr=()=>(dt("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),cr={},Os=s=>{s.forEach(u=>{Fr()})};function jg(){var s=Error().stack.toString().split(`
`);return s[0]=="Error"&&s.shift(),Os(s),cr.Kd=Fr(),cr.ae=s,cr.Kd}function Kg(s,u,c){if(s>>>=0,u>>>=0,cr.Kd==s)var h=cr.ae;else(h=Error().stack.toString().split(`
`))[0]=="Error"&&h.shift(),Os(h);for(var y=3;h[y]&&Fr()!=s;)++y;for(s=0;s<c&&h[s+y];++s)D()[u+4*s>>>2>>>0]=Fr();return s}var Vi,qi={},Ms=()=>{if(!Vi){var s,u={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(s in qi)qi[s]===void 0?delete u[s]:u[s]=qi[s];var c=[];for(s in u)c.push(`${s}=${u[s]}`);Vi=c}return Vi};function Rs(s,u){if(p)return xe(19,1,s,u);s>>>=0,u>>>=0;var c=0;return Ms().forEach((h,y)=>{var S=u+c;for(y=fe()[s+4*y>>>2>>>0]=S,S=0;S<h.length;++S)N()[y++>>>0]=h.charCodeAt(S);N()[y>>>0]=0,c+=h.length+1}),0}function Bs(s,u){if(p)return xe(20,1,s,u);s>>>=0,u>>>=0;var c=Ms();fe()[s>>>2>>>0]=c.length;var h=0;return c.forEach(y=>h+=y.length+1),fe()[u>>>2>>>0]=h,0}function Ns(s){return p?xe(21,1,s):52}function Ds(s,u,c,h){return p?xe(22,1,s,u,c,h):52}function Ps(s,u,c,h){return p?xe(23,1,s,u,c,h):70}var Zg=[null,[],[]];function Us(s,u,c,h){if(p)return xe(24,1,s,u,c,h);u>>>=0,c>>>=0,h>>>=0;for(var y=0,S=0;S<c;S++){var I=fe()[u>>>2>>>0],A=fe()[u+4>>>2>>>0];u+=8;for(var R=0;R<A;R++){var W=V()[I+R>>>0],Z=Zg[s];W===0||W===10?((s===1?T:k)(es(Z)),Z.length=0):Z.push(W)}y+=A}return fe()[h>>>2>>>0]=y,0}function Qg(s){return s>>>0}p||(function(){for(var s=i.numThreads-1;s--;)Qn();Ci.unshift(()=>{zt++,(function(u){p?u():Promise.all(yt.map(Zn)).then(u)})(()=>Ln())})})();for(var Ws=Array(256),Gr=0;256>Gr;++Gr)Ws[Gr]=String.fromCharCode(Gr);ms=Ws,_t=i.BindingError=class extends Error{constructor(s){super(s),this.name="BindingError"}},i.InternalError=class extends Error{constructor(s){super(s),this.name="InternalError"}},ct.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=()=>ct.length/2-5-Ri.length;var P,Xg=[Ii,Gn,Xn,ts,rs,as,ns,ss,os,us,ls,ds,ps,cs,hs,fs,Is,Es,zs,Rs,Bs,Ns,Ds,Ps,Us];(async function(){function s(h,y){return P=h.exports,P=(function(){var S=P,I={};for(let[A,R]of Object.entries(S))I[A]=typeof R=="function"?(...W)=>{Lr.push(A);try{return R(...W)}finally{G||(Lr.pop(),st&&bt===1&&Lr.length===0&&(bt=0,gt+=1,Wr(Go),typeof Fibers<"u"&&Fibers.le()))}}:R;return I})(),P=(function(){var S=P,I=R=>W=>R(W)>>>0,A=R=>()=>R()>>>0;return(S=Object.assign({},S)).Cb=I(S.Cb),S.fc=A(S.fc),S.ic=I(S.ic),S.vc=I(S.vc),S.wc=A(S.wc),S.Ac=I(S.Ac),S})(),Hn.push(P.jc),E=y,Ln(),P}zt++;var u=Vn();if(i.instantiateWasm)return new Promise(h=>{i.instantiateWasm(u,(y,S)=>{s(y,S),h(y.exports)})});if(p)return new Promise(h=>{Et=y=>{var S=new WebAssembly.Instance(y,Vn());h(s(S,y))}});ur??(ur=i.locateFile?i.locateFile?i.locateFile("ort-wasm-simd-threaded.jsep.wasm",x):x+"ort-wasm-simd-threaded.jsep.wasm":new URL(""+new URL("ort-wasm-simd-threaded.jsep-D5Jk56-t.wasm",import.meta.url).href,import.meta.url).href);try{var c=await(async function(h){var y=ur;if(!he&&typeof WebAssembly.instantiateStreaming=="function"&&!ye(y))try{var S=fetch(y,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(S,h)}catch(I){k(`wasm streaming compile failed: ${I}`),k("falling back to ArrayBuffer instantiation")}return(async function(I,A){try{var R=await(async function(W){if(!he)try{var Z=await g(W);return new Uint8Array(Z)}catch{}if(W==ur&&he)W=new Uint8Array(he);else{if(!_)throw"both async and sync fetching of the wasm failed";W=_(W)}return W})(I);return await WebAssembly.instantiate(R,A)}catch(W){k(`failed to asynchronously prepare wasm: ${W}`),dt(W)}})(y,h)})(u);return s(c.instance,c.module)}catch(h){return n(h),Promise.reject(h)}})();var Ls=s=>(Ls=P.Cb)(s),Vs=()=>(Vs=P.Db)();i._OrtInit=(s,u)=>(i._OrtInit=P.Eb)(s,u),i._OrtGetLastError=(s,u)=>(i._OrtGetLastError=P.Fb)(s,u),i._OrtCreateSessionOptions=(s,u,c,h,y,S,I,A,R,W)=>(i._OrtCreateSessionOptions=P.Gb)(s,u,c,h,y,S,I,A,R,W),i._OrtAppendExecutionProvider=(s,u)=>(i._OrtAppendExecutionProvider=P.Hb)(s,u),i._OrtAddFreeDimensionOverride=(s,u,c)=>(i._OrtAddFreeDimensionOverride=P.Ib)(s,u,c),i._OrtAddSessionConfigEntry=(s,u,c)=>(i._OrtAddSessionConfigEntry=P.Jb)(s,u,c),i._OrtReleaseSessionOptions=s=>(i._OrtReleaseSessionOptions=P.Kb)(s),i._OrtCreateSession=(s,u,c)=>(i._OrtCreateSession=P.Lb)(s,u,c),i._OrtReleaseSession=s=>(i._OrtReleaseSession=P.Mb)(s),i._OrtGetInputOutputCount=(s,u,c)=>(i._OrtGetInputOutputCount=P.Nb)(s,u,c),i._OrtGetInputName=(s,u)=>(i._OrtGetInputName=P.Ob)(s,u),i._OrtGetOutputName=(s,u)=>(i._OrtGetOutputName=P.Pb)(s,u),i._OrtFree=s=>(i._OrtFree=P.Qb)(s),i._OrtCreateTensor=(s,u,c,h,y,S)=>(i._OrtCreateTensor=P.Rb)(s,u,c,h,y,S),i._OrtGetTensorData=(s,u,c,h,y)=>(i._OrtGetTensorData=P.Sb)(s,u,c,h,y),i._OrtReleaseTensor=s=>(i._OrtReleaseTensor=P.Tb)(s),i._OrtCreateRunOptions=(s,u,c,h)=>(i._OrtCreateRunOptions=P.Ub)(s,u,c,h),i._OrtAddRunConfigEntry=(s,u,c)=>(i._OrtAddRunConfigEntry=P.Vb)(s,u,c),i._OrtReleaseRunOptions=s=>(i._OrtReleaseRunOptions=P.Wb)(s),i._OrtCreateBinding=s=>(i._OrtCreateBinding=P.Xb)(s),i._OrtBindInput=(s,u,c)=>(i._OrtBindInput=P.Yb)(s,u,c),i._OrtBindOutput=(s,u,c,h)=>(i._OrtBindOutput=P.Zb)(s,u,c,h),i._OrtClearBoundOutputs=s=>(i._OrtClearBoundOutputs=P._b)(s),i._OrtReleaseBinding=s=>(i._OrtReleaseBinding=P.$b)(s),i._OrtRunWithBinding=(s,u,c,h,y)=>(i._OrtRunWithBinding=P.ac)(s,u,c,h,y),i._OrtRun=(s,u,c,h,y,S,I,A)=>(i._OrtRun=P.bc)(s,u,c,h,y,S,I,A),i._OrtEndProfiling=s=>(i._OrtEndProfiling=P.cc)(s),i._JsepOutput=(s,u,c)=>(i._JsepOutput=P.dc)(s,u,c),i._JsepGetNodeName=s=>(i._JsepGetNodeName=P.ec)(s);var Hr=()=>(Hr=P.fc)(),ot=i._free=s=>(ot=i._free=P.gc)(s),jr=i._malloc=s=>(jr=i._malloc=P.ic)(s),Fi=(s,u,c,h,y,S)=>(Fi=P.kc)(s,u,c,h,y,S),qs=()=>(qs=P.lc)(),Fs=(s,u,c,h,y)=>(Fs=P.mc)(s,u,c,h,y),Gs=s=>(Gs=P.nc)(s),Gi=s=>(Gi=P.oc)(s),Hs=(s,u)=>(Hs=P.pc)(s,u),js=()=>(js=P.qc)(),se=(s,u)=>(se=P.rc)(s,u),hr=s=>(hr=P.sc)(s),Ks=(s,u)=>(Ks=P.tc)(s,u),ae=s=>(ae=P.uc)(s),Hi=s=>(Hi=P.vc)(s),ne=()=>(ne=P.wc)(),Zs=s=>(Zs=P.xc)(s),Qs=s=>(Qs=P.yc)(s),Xs=(s,u,c)=>(Xs=P.zc)(s,u,c),Js=s=>(Js=P.Ac)(s),Ys=i.dynCall_iii=(s,u,c)=>(Ys=i.dynCall_iii=P.Bc)(s,u,c),eo=i.dynCall_vi=(s,u)=>(eo=i.dynCall_vi=P.Cc)(s,u),ji=i.dynCall_ii=(s,u)=>(ji=i.dynCall_ii=P.Dc)(s,u),to=i.dynCall_vii=(s,u,c)=>(to=i.dynCall_vii=P.Ec)(s,u,c),ro=i.dynCall_iiii=(s,u,c,h)=>(ro=i.dynCall_iiii=P.Fc)(s,u,c,h),io=i.dynCall_viii=(s,u,c,h)=>(io=i.dynCall_viii=P.Gc)(s,u,c,h),ao=i.dynCall_iiiii=(s,u,c,h,y)=>(ao=i.dynCall_iiiii=P.Hc)(s,u,c,h,y),no=i.dynCall_viiii=(s,u,c,h,y)=>(no=i.dynCall_viiii=P.Ic)(s,u,c,h,y),so=i.dynCall_viiiiii=(s,u,c,h,y,S,I)=>(so=i.dynCall_viiiiii=P.Jc)(s,u,c,h,y,S,I),oo=i.dynCall_viiiiiii=(s,u,c,h,y,S,I,A)=>(oo=i.dynCall_viiiiiii=P.Kc)(s,u,c,h,y,S,I,A),uo=i.dynCall_ji=(s,u)=>(uo=i.dynCall_ji=P.Lc)(s,u),lo=i.dynCall_v=s=>(lo=i.dynCall_v=P.Mc)(s),po=i.dynCall_viiiii=(s,u,c,h,y,S)=>(po=i.dynCall_viiiii=P.Nc)(s,u,c,h,y,S),co=i.dynCall_i=s=>(co=i.dynCall_i=P.Oc)(s),ho=i.dynCall_fii=(s,u,c)=>(ho=i.dynCall_fii=P.Pc)(s,u,c),fo=i.dynCall_viiiiiiii=(s,u,c,h,y,S,I,A,R)=>(fo=i.dynCall_viiiiiiii=P.Qc)(s,u,c,h,y,S,I,A,R),mo=i.dynCall_viiiiiiiiii=(s,u,c,h,y,S,I,A,R,W,Z)=>(mo=i.dynCall_viiiiiiiiii=P.Rc)(s,u,c,h,y,S,I,A,R,W,Z),go=i.dynCall_jiii=(s,u,c,h)=>(go=i.dynCall_jiii=P.Sc)(s,u,c,h),yo=i.dynCall_dii=(s,u,c)=>(yo=i.dynCall_dii=P.Tc)(s,u,c),_o=i.dynCall_viiiiiiiii=(s,u,c,h,y,S,I,A,R,W)=>(_o=i.dynCall_viiiiiiiii=P.Uc)(s,u,c,h,y,S,I,A,R,W),wo=i.dynCall_viiiiiiiiiii=(s,u,c,h,y,S,I,A,R,W,Z,te)=>(wo=i.dynCall_viiiiiiiiiii=P.Vc)(s,u,c,h,y,S,I,A,R,W,Z,te),bo=i.dynCall_iiiiii=(s,u,c,h,y,S)=>(bo=i.dynCall_iiiiii=P.Wc)(s,u,c,h,y,S),$o=i.dynCall_iij=(s,u,c)=>($o=i.dynCall_iij=P.Xc)(s,u,c),vo=i.dynCall_iiiiiiiiii=(s,u,c,h,y,S,I,A,R,W)=>(vo=i.dynCall_iiiiiiiiii=P.Yc)(s,u,c,h,y,S,I,A,R,W),xo=i.dynCall_iiiiiiiiiii=(s,u,c,h,y,S,I,A,R,W,Z)=>(xo=i.dynCall_iiiiiiiiiii=P.Zc)(s,u,c,h,y,S,I,A,R,W,Z),So=i.dynCall_vij=(s,u,c)=>(So=i.dynCall_vij=P._c)(s,u,c),ko=i.dynCall_iiif=(s,u,c,h)=>(ko=i.dynCall_iiif=P.$c)(s,u,c,h),To=i.dynCall_iiij=(s,u,c,h)=>(To=i.dynCall_iiij=P.ad)(s,u,c,h),Co=i.dynCall_fiii=(s,u,c,h)=>(Co=i.dynCall_fiii=P.bd)(s,u,c,h),Io=i.dynCall_viiiiiiiiiiiii=(s,u,c,h,y,S,I,A,R,W,Z,te,oe,be)=>(Io=i.dynCall_viiiiiiiiiiiii=P.cd)(s,u,c,h,y,S,I,A,R,W,Z,te,oe,be),Eo=i.dynCall_vjiii=(s,u,c,h,y)=>(Eo=i.dynCall_vjiii=P.dd)(s,u,c,h,y),zo=i.dynCall_vif=(s,u,c)=>(zo=i.dynCall_vif=P.ed)(s,u,c),Ao=i.dynCall_iiiiiii=(s,u,c,h,y,S,I)=>(Ao=i.dynCall_iiiiiii=P.fd)(s,u,c,h,y,S,I),Oo=i.dynCall_iiiij=(s,u,c,h,y)=>(Oo=i.dynCall_iiiij=P.gd)(s,u,c,h,y),Mo=i.dynCall_iiiiiiii=(s,u,c,h,y,S,I,A)=>(Mo=i.dynCall_iiiiiiii=P.hd)(s,u,c,h,y,S,I,A),Ro=i.dynCall_viiiiiiiiiiii=(s,u,c,h,y,S,I,A,R,W,Z,te,oe)=>(Ro=i.dynCall_viiiiiiiiiiii=P.id)(s,u,c,h,y,S,I,A,R,W,Z,te,oe),Bo=i.dynCall_diii=(s,u,c,h)=>(Bo=i.dynCall_diii=P.jd)(s,u,c,h),No=i.dynCall_jiiii=(s,u,c,h,y)=>(No=i.dynCall_jiiii=P.kd)(s,u,c,h,y),Do=i.dynCall_viiij=(s,u,c,h,y)=>(Do=i.dynCall_viiij=P.ld)(s,u,c,h,y),Po=i.dynCall_fiiii=(s,u,c,h,y)=>(Po=i.dynCall_fiiii=P.md)(s,u,c,h,y),Uo=i.dynCall_viiif=(s,u,c,h,y)=>(Uo=i.dynCall_viiif=P.nd)(s,u,c,h,y),Wo=i.dynCall_diiii=(s,u,c,h,y)=>(Wo=i.dynCall_diiii=P.od)(s,u,c,h,y),Lo=i.dynCall_viiid=(s,u,c,h,y)=>(Lo=i.dynCall_viiid=P.pd)(s,u,c,h,y),Vo=i.dynCall_iiiijii=(s,u,c,h,y,S,I)=>(Vo=i.dynCall_iiiijii=P.qd)(s,u,c,h,y,S,I),qo=i.dynCall_iiiiiij=(s,u,c,h,y,S,I)=>(qo=i.dynCall_iiiiiij=P.rd)(s,u,c,h,y,S,I),Fo=s=>(Fo=P.sd)(s),Go=()=>(Go=P.td)(),Ho=s=>(Ho=P.ud)(s),jo=()=>(jo=P.vd)();function Jg(s,u,c){var h=ne();try{to(s,u,c)}catch(y){if(ae(h),y!==y+0)throw y;se(1,0)}}function Yg(s,u,c){var h=ne();try{return Ys(s,u,c)}catch(y){if(ae(h),y!==y+0)throw y;se(1,0)}}function ey(s,u){var c=ne();try{eo(s,u)}catch(h){if(ae(c),h!==h+0)throw h;se(1,0)}}function ty(s,u){var c=ne();try{return ji(s,u)}catch(h){if(ae(c),h!==h+0)throw h;se(1,0)}}function ry(s,u,c,h){var y=ne();try{return ro(s,u,c,h)}catch(S){if(ae(y),S!==S+0)throw S;se(1,0)}}function iy(s,u,c,h,y){var S=ne();try{no(s,u,c,h,y)}catch(I){if(ae(S),I!==I+0)throw I;se(1,0)}}function ay(s,u,c,h,y){var S=ne();try{return ao(s,u,c,h,y)}catch(I){if(ae(S),I!==I+0)throw I;se(1,0)}}function ny(s,u,c,h){var y=ne();try{io(s,u,c,h)}catch(S){if(ae(y),S!==S+0)throw S;se(1,0)}}function sy(s,u,c,h,y,S,I){var A=ne();try{return Ao(s,u,c,h,y,S,I)}catch(R){if(ae(A),R!==R+0)throw R;se(1,0)}}function oy(s){var u=ne();try{lo(s)}catch(c){if(ae(u),c!==c+0)throw c;se(1,0)}}function uy(s,u,c){var h=ne();try{return $o(s,u,c)}catch(y){if(ae(h),y!==y+0)throw y;se(1,0)}}function ly(s,u,c,h,y,S){var I=ne();try{po(s,u,c,h,y,S)}catch(A){if(ae(I),A!==A+0)throw A;se(1,0)}}function dy(s,u,c){var h=ne();try{So(s,u,c)}catch(y){if(ae(h),y!==y+0)throw y;se(1,0)}}function py(s,u,c,h,y,S,I){var A=ne();try{so(s,u,c,h,y,S,I)}catch(R){if(ae(A),R!==R+0)throw R;se(1,0)}}function cy(s,u,c,h,y,S,I,A){var R=ne();try{oo(s,u,c,h,y,S,I,A)}catch(W){if(ae(R),W!==W+0)throw W;se(1,0)}}function hy(s,u,c,h,y,S){var I=ne();try{return bo(s,u,c,h,y,S)}catch(A){if(ae(I),A!==A+0)throw A;se(1,0)}}function fy(s,u,c,h,y,S,I,A){var R=ne();try{return Mo(s,u,c,h,y,S,I,A)}catch(W){if(ae(R),W!==W+0)throw W;se(1,0)}}function my(s,u,c,h,y,S,I,A,R,W){var Z=ne();try{_o(s,u,c,h,y,S,I,A,R,W)}catch(te){if(ae(Z),te!==te+0)throw te;se(1,0)}}function gy(s,u,c,h,y,S,I,A,R){var W=ne();try{fo(s,u,c,h,y,S,I,A,R)}catch(Z){if(ae(W),Z!==Z+0)throw Z;se(1,0)}}function yy(s){var u=ne();try{return co(s)}catch(c){if(ae(u),c!==c+0)throw c;se(1,0)}}function _y(s,u,c,h,y,S,I,A,R,W){var Z=ne();try{return vo(s,u,c,h,y,S,I,A,R,W)}catch(te){if(ae(Z),te!==te+0)throw te;se(1,0)}}function wy(s,u,c){var h=ne();try{return ho(s,u,c)}catch(y){if(ae(h),y!==y+0)throw y;se(1,0)}}function by(s,u,c,h){var y=ne();try{return go(s,u,c,h)}catch(S){if(ae(y),S!==S+0)throw S;return se(1,0),0n}}function $y(s,u,c){var h=ne();try{return yo(s,u,c)}catch(y){if(ae(h),y!==y+0)throw y;se(1,0)}}function vy(s,u,c,h,y,S,I,A,R,W,Z,te){var oe=ne();try{wo(s,u,c,h,y,S,I,A,R,W,Z,te)}catch(be){if(ae(oe),be!==be+0)throw be;se(1,0)}}function xy(s,u,c,h,y,S,I,A,R,W,Z){var te=ne();try{mo(s,u,c,h,y,S,I,A,R,W,Z)}catch(oe){if(ae(te),oe!==oe+0)throw oe;se(1,0)}}function Sy(s,u,c,h,y,S,I,A,R,W,Z){var te=ne();try{return xo(s,u,c,h,y,S,I,A,R,W,Z)}catch(oe){if(ae(te),oe!==oe+0)throw oe;se(1,0)}}function ky(s,u,c,h){var y=ne();try{return ko(s,u,c,h)}catch(S){if(ae(y),S!==S+0)throw S;se(1,0)}}function Ty(s,u,c,h){var y=ne();try{return To(s,u,c,h)}catch(S){if(ae(y),S!==S+0)throw S;se(1,0)}}function Cy(s,u,c,h){var y=ne();try{return Co(s,u,c,h)}catch(S){if(ae(y),S!==S+0)throw S;se(1,0)}}function Iy(s,u,c,h,y,S,I,A,R,W,Z,te,oe,be){var He=ne();try{Io(s,u,c,h,y,S,I,A,R,W,Z,te,oe,be)}catch(fr){if(ae(He),fr!==fr+0)throw fr;se(1,0)}}function Ey(s,u,c,h,y){var S=ne();try{Eo(s,u,c,h,y)}catch(I){if(ae(S),I!==I+0)throw I;se(1,0)}}function zy(s,u,c){var h=ne();try{zo(s,u,c)}catch(y){if(ae(h),y!==y+0)throw y;se(1,0)}}function Ay(s,u){var c=ne();try{return uo(s,u)}catch(h){if(ae(c),h!==h+0)throw h;return se(1,0),0n}}function Oy(s,u,c,h,y){var S=ne();try{return Oo(s,u,c,h,y)}catch(I){if(ae(S),I!==I+0)throw I;se(1,0)}}function My(s,u,c,h,y,S,I,A,R,W,Z,te,oe){var be=ne();try{Ro(s,u,c,h,y,S,I,A,R,W,Z,te,oe)}catch(He){if(ae(be),He!==He+0)throw He;se(1,0)}}function Ry(s,u,c,h){var y=ne();try{return Bo(s,u,c,h)}catch(S){if(ae(y),S!==S+0)throw S;se(1,0)}}function By(s,u,c,h,y){var S=ne();try{return No(s,u,c,h,y)}catch(I){if(ae(S),I!==I+0)throw I;return se(1,0),0n}}function Ny(s,u,c,h,y){var S=ne();try{Do(s,u,c,h,y)}catch(I){if(ae(S),I!==I+0)throw I;se(1,0)}}function Dy(s,u,c,h,y){var S=ne();try{return Po(s,u,c,h,y)}catch(I){if(ae(S),I!==I+0)throw I;se(1,0)}}function Py(s,u,c,h,y){var S=ne();try{Uo(s,u,c,h,y)}catch(I){if(ae(S),I!==I+0)throw I;se(1,0)}}function Uy(s,u,c,h,y){var S=ne();try{return Wo(s,u,c,h,y)}catch(I){if(ae(S),I!==I+0)throw I;se(1,0)}}function Wy(s,u,c,h,y){var S=ne();try{Lo(s,u,c,h,y)}catch(I){if(ae(S),I!==I+0)throw I;se(1,0)}}function Ly(s,u,c,h,y,S,I){var A=ne();try{return Vo(s,u,c,h,y,S,I)}catch(R){if(ae(A),R!==R+0)throw R;se(1,0)}}function Vy(s,u,c,h,y,S,I){var A=ne();try{return qo(s,u,c,h,y,S,I)}catch(R){if(ae(A),R!==R+0)throw R;se(1,0)}}return i.stackSave=()=>ne(),i.stackRestore=s=>ae(s),i.stackAlloc=s=>Hi(s),i.setValue=function(s,u,c="i8"){switch(c.endsWith("*")&&(c="*"),c){case"i1":case"i8":N()[s>>>0]=u;break;case"i16":pe()[s>>>1>>>0]=u;break;case"i32":D()[s>>>2>>>0]=u;break;case"i64":J[s>>>3]=BigInt(u);break;case"float":Fe()[s>>>2>>>0]=u;break;case"double":Ne()[s>>>3>>>0]=u;break;case"*":fe()[s>>>2>>>0]=u;break;default:dt(`invalid type for setValue: ${c}`)}},i.getValue=function(s,u="i8"){switch(u.endsWith("*")&&(u="*"),u){case"i1":case"i8":return N()[s>>>0];case"i16":return pe()[s>>>1>>>0];case"i32":return D()[s>>>2>>>0];case"i64":return J[s>>>3];case"float":return Fe()[s>>>2>>>0];case"double":return Ne()[s>>>3>>>0];case"*":return fe()[s>>>2>>>0];default:dt(`invalid type for getValue: ${u}`)}},i.UTF8ToString=Te,i.stringToUTF8=Zt,i.lengthBytesUTF8=is,(function s(){if(0<zt)lr=s;else if(p)a(i),mt();else{for(;0<Ci.length;)Ci.shift()(i);0<zt?lr=s:(i.calledRun=!0,G||(mt(),a(i)))}})(),i.PTR_SIZE=4,o}),tc=ea,Xo=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),Xo&&ea()}),ta,Jo,We,rc,Zr,Yo,eu,ra,tu,ia,ic,aa,ac,pn=L(()=>{dn(),ta=typeof location>"u"?void 0:location.origin,Jo=()=>{var e;return(e=import.meta.url)!=null&&e.startsWith("file:")?new URL(new URL(""+new URL("ort.bundle.min-OfoG_cy9.mjs",import.meta.url).href,import.meta.url).href,ta).href:import.meta.url},We=Jo(),rc=()=>{if(We&&!We.startsWith("blob:"))return We.substring(0,We.lastIndexOf("/")+1)},Zr=(e,t)=>{try{let r=t??We;return(r?new URL(e,r):new URL(e)).origin===ta}catch{return!1}},Yo=(e,t)=>{let r=t??We;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},eu=(e,t)=>`${t??"./"}${e}`,ra=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},tu=async e=>(await import(e)).default,ia=(l0(),hi(Jp)).default,ic=async()=>{if(!We)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Zr(We))return[void 0,ia()];let e=await ra(We);return[e,ia(e)]},aa=(d0(),hi(ec)).default,ac=async(e,t,r)=>{if(!e&&!t&&aa&&We&&Zr(We))return[void 0,aa];{let a="ort-wasm-simd-threaded.jsep.mjs",n=e??Yo(a,t),i=r&&n&&!Zr(n,t),o=i?await ra(n):n??eu(a,t);return[i?o:void 0,await tu(o)]}}}),na,Qr,gr,sa,ru,iu,cn,Ee,Ht=L(()=>{pn(),Qr=!1,gr=!1,sa=!1,ru=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},iu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},cn=async e=>{if(Qr)return Promise.resolve();if(gr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(sa)throw new Error("previous call to 'initializeWebAssembly()' failed.");gr=!0;let t=e.initTimeout,r=e.numThreads;if(!iu())throw new Error("WebAssembly SIMD is not supported in the current environment.");let a=ru();r>1&&!a&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let n=e.wasmPaths,i=typeof n=="string"?n:void 0,o=n==null?void 0:n.mjs,l=(o==null?void 0:o.href)??o,d=n==null?void 0:n.wasm,p=(d==null?void 0:d.href)??d,f=e.wasmBinary,[m,g]=await ac(l,i,r>1),_=!1,w=[];if(t>0&&w.push(new Promise(b=>{setTimeout(()=>{_=!0,b()},t)})),w.push(new Promise((b,x)=>{let v={numThreads:r};if(f)v.wasmBinary=f;else if(p||i)v.locateFile=$=>p??i+$;else if(l&&l.indexOf("blob:")!==0)v.locateFile=$=>new URL($,l).href;else if(m){let $=rc();$&&(v.locateFile=T=>$+T)}g(v).then($=>{gr=!1,Qr=!0,na=$,b(),m&&URL.revokeObjectURL(m)},$=>{gr=!1,sa=!0,x($)})})),await Promise.race(w),_)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Ee=()=>{if(Qr&&na)return na;throw new Error("WebAssembly is not initialized yet.")}}),Oe,fi,ge,hn=L(()=>{Ht(),Oe=(e,t)=>{let r=Ee(),a=r.lengthBytesUTF8(e)+1,n=r._malloc(a);return r.stringToUTF8(e,n,a),t.push(n),n},fi=(e,t,r,a)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([n,i])=>{let o=t?t+n:n;if(typeof i=="object")fi(i,o+".",r,a);else if(typeof i=="string"||typeof i=="number")a(o,i.toString());else if(typeof i=="boolean")a(o,i?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof i}`)})},ge=e=>{let t=Ee(),r=t.stackSave();try{let a=t.PTR_SIZE,n=t.stackAlloc(2*a);t._OrtGetLastError(n,n+a);let i=Number(t.getValue(n,a===4?"i32":"i64")),o=t.getValue(n+a,"*"),l=o?t.UTF8ToString(o):"";throw new Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${l}`)}finally{t.stackRestore(r)}}}),nc,p0=L(()=>{Ht(),hn(),nc=e=>{let t=Ee(),r=0,a=[],n=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)n.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)n.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(n.terminate=!1);let i=0;return(e==null?void 0:e.tag)!==void 0&&(i=Oe(e.tag,a)),r=t._OrtCreateRunOptions(n.logSeverityLevel,n.logVerbosityLevel,!!n.terminate,i),r===0&&ge("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&fi(e.extra,"",new WeakSet,(o,l)=>{let d=Oe(o,a),p=Oe(l,a);t._OrtAddRunConfigEntry(r,d,p)!==0&&ge(`Can't set a run config entry: ${o} - ${l}.`)}),[r,a]}catch(i){throw r!==0&&t._OrtReleaseRunOptions(r),a.forEach(o=>t._free(o)),i}}}),au,nu,su,ou,sc,c0=L(()=>{Ht(),hn(),au=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},nu=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},su=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},ou=(e,t,r)=>{for(let a of t){let n=typeof a=="string"?a:a.name;switch(n){case"webnn":if(n="WEBNN",typeof a!="string"){let o=a==null?void 0:a.deviceType;if(o){let l=Oe("deviceType",r),d=Oe(o,r);Ee()._OrtAddSessionConfigEntry(e,l,d)!==0&&ge(`Can't set a session config entry: 'deviceType' - ${o}.`)}}break;case"webgpu":if(n="JS",typeof a!="string"){let o=a;if(o!=null&&o.preferredLayout){if(o.preferredLayout!=="NCHW"&&o.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${o.preferredLayout}`);let l=Oe("preferredLayout",r),d=Oe(o.preferredLayout,r);Ee()._OrtAddSessionConfigEntry(e,l,d)!==0&&ge(`Can't set a session config entry: 'preferredLayout' - ${o.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${n}`)}let i=Oe(n,r);Ee()._OrtAppendExecutionProvider(e,i)!==0&&ge(`Can't append execution provider: ${n}.`)}},sc=e=>{let t=Ee(),r=0,a=[],n=e||{};su(n);try{let i=au(n.graphOptimizationLevel??"all"),o=nu(n.executionMode??"sequential"),l=typeof n.logId=="string"?Oe(n.logId,a):0,d=n.logSeverityLevel??2;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log serverity level is not valid: ${d}`);let p=n.logVerbosityLevel??0;if(!Number.isInteger(p)||p<0||p>4)throw new Error(`log verbosity level is not valid: ${p}`);let f=typeof n.optimizedModelFilePath=="string"?Oe(n.optimizedModelFilePath,a):0;if(r=t._OrtCreateSessionOptions(i,!!n.enableCpuMemArena,!!n.enableMemPattern,o,!!n.enableProfiling,0,l,d,p,f),r===0&&ge("Can't create session options."),n.executionProviders&&ou(r,n.executionProviders,a),n.enableGraphCapture!==void 0){if(typeof n.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${n.enableGraphCapture}`);let m=Oe("enableGraphCapture",a),g=Oe(n.enableGraphCapture.toString(),a);t._OrtAddSessionConfigEntry(r,m,g)!==0&&ge(`Can't set a session config entry: 'enableGraphCapture' - ${n.enableGraphCapture}.`)}if(n.freeDimensionOverrides)for(let[m,g]of Object.entries(n.freeDimensionOverrides)){if(typeof m!="string")throw new Error(`free dimension override name must be a string: ${m}`);if(typeof g!="number"||!Number.isInteger(g)||g<0)throw new Error(`free dimension override value must be a non-negative integer: ${g}`);let _=Oe(m,a);t._OrtAddFreeDimensionOverride(r,_,g)!==0&&ge(`Can't set a free dimension override: ${m} - ${g}.`)}return n.extra!==void 0&&fi(n.extra,"",new WeakSet,(m,g)=>{let _=Oe(m,a),w=Oe(g,a);t._OrtAddSessionConfigEntry(r,_,w)!==0&&ge(`Can't set a session config entry: ${m} - ${g}.`)}),[r,a]}catch(i){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&ge("Can't release session options."),a.forEach(o=>t._free(o)),i}}}),Jt,Dt,Pt,fn,mi,mn,gn,Ha,ie=L(()=>{Jt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Dt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Pt=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],a=typeof t=="number"?t:t.reduce((n,i)=>n*i,1);return r>0?Math.ceil(a*r):void 0},fn=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},mi=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},mn=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",gn=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ha=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),yn,oc=L(()=>{dn(),yn=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),a=r?parseInt(r,10):0;if(a<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),i;try{i=new ArrayBuffer(a)}catch(l){if(l instanceof RangeError){let d=Math.ceil(a/65536);i=new WebAssembly.Memory({initial:d,maximum:d}).buffer}else throw l}let o=0;for(;;){let{done:l,value:d}=await n.read();if(l)break;let p=d.byteLength;new Uint8Array(i,o,p).set(d),o+=p}return new Uint8Array(i,0,a)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),uu,lu,du,pu,_n,cu,ce,ft=L(()=>{ie(),uu=["V","I","W","E","F"],lu=(e,t)=>{console.log(`[${uu[e]},${new Date().toISOString()}]${t}`)},_n=(e,t)=>{du=e,pu=t},cu=(e,t)=>{let r=mi(e),a=mi(du);r>=a&&lu(r,typeof t=="function"?t():t)},ce=(...e)=>{pu&&cu(...e)}}),wn,uc=L(()=>{ie(),wn=(e,t)=>new(fn(t))(e)}),bn=L(()=>{}),oa,Xr,Jr,hu,fu,ua,ja,mu,lc,h0=L(()=>{ft(),bn(),oa=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Xr=[],Jr=e=>Math.ceil(Number(e)/16)*16,hu=e=>{for(let t=0;t<Xr.length;t++){let r=Xr[t];if(e<=r)return r}return Math.ceil(e/16)*16},fu=1,ua=()=>fu++,ja=async(e,t,r,a)=>{let n=Jr(r),i=e.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=e.getCommandEncoder();e.endComputePass(),o.copyBufferToBuffer(t,0,i,0,n),e.flush(),await i.mapAsync(GPUMapMode.READ);let l=i.getMappedRange();if(a){let d=a();return d.set(new Uint8Array(l,0,r)),d}else return new Uint8Array(l.slice(0,r))}finally{i.destroy()}},mu=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of oa)Xr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,a=t.byteOffset,n=t.byteLength,i=Jr(n),o=this.storageCache.get(e);if(!o)throw new Error("gpu data for uploading does not exist");if(Number(o.originalSize)!==n)throw new Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${n}`);let l=this.backend.device.createBuffer({mappedAtCreation:!0,size:i,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),d=l.getMappedRange();new Uint8Array(d).set(new Uint8Array(r,a,n)),l.unmap();let p=this.backend.device.createCommandEncoder();p.copyBufferToBuffer(l,0,o.gpuData.buffer,0,i),this.backend.device.queue.submit([p.finish()]),l.destroy(),ce("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let a=this.storageCache.get(t);if(!a)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==a.originalSize)throw new Error("inconsistent source and destination gpu data size");let n=Jr(r.originalSize),i=this.backend.getCommandEncoder();this.backend.endComputePass(),i.copyBufferToBuffer(r.gpuData.buffer,0,a.gpuData.buffer,0,n)}registerExternalBuffer(e,t,r){let a;if(r){if(a=r[0],e===r[1])return ce("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, buffer is the same, skip.`),a;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else a=ua();return this.storageCache.set(a,{gpuData:{id:a,type:0,buffer:e},originalSize:t}),ce("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, registered.`),a}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),ce("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=hu(e),a,n=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,i=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(n||i){let l=(n?this.freeBuffers:this.freeUniformBuffers).get(r);l?l.length>0?a=l.pop():a=this.backend.device.createBuffer({size:r,usage:t}):a=this.backend.device.createBuffer({size:r,usage:t})}else a=this.backend.device.createBuffer({size:r,usage:t});let o={id:ua(),type:0,buffer:a};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(e)}),ce("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${o.id}`),o}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return ce("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await ja(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=oa.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(ce("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},lc=(...e)=>new mu(...e)}),gu,we,ke=L(()=>{gu=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},we=e=>new gu(e)}),yu,rr,O,gi,dc,pc,cc,ue=L(()=>{yu=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},rr=class{static calcShape(e,t,r=!1){let a=e.length,n=t.length;if(a===0)return t;if(n===0)return e;let i=Math.max(e.length,t.length),o=new Array(i);if(r){if(a<2||n<2)return;let l=yu.calcMatMulShape([e[a-2],e[a-1]],[t[n-2],t[n-1]]);if(l===void 0)return;[o[i-2],o[i-1]]=l}for(let l=r?3:1;l<=i;l++){let d=a-l<0?1:e[a-l],p=n-l<0?1:t[n-l];if(d!==p&&d>1&&p>1)return;let f=Math.max(d,p);if(d&&p)o[i-l]=Math.max(d,p);else{if(f>1)return;o[i-l]=0}}return o}static isValidBroadcast(e,t){let r=e.length,a=t.length;if(r>a)return!1;for(let n=1;n<=r;n++)if(e[r-n]!==1&&e[r-n]!==t[a-n])return!1;return!0}},O=class di{static size(t){return di.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let a=t.length;if(a===0)return[];let n=new Array(a),i=a-1;for(;i>=0;){if(t[i]%r===0){n[i]=t[i]/r;break}if(r%t[i]!==0)throw new Error("cannot convert shape");n[i]=1,r/=t[i],i--}for(i--;i>=0;i--)n[i]=t[i];return n}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return di.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return di.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,a){let n=1;for(let i=r;i<a;i++){if(t[i]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");n*=Number(t[i])}return n}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let a=new Array(r);a[r-1]=1,a[r-2]=t[r-1];for(let n=r-3;n>=0;--n)a[n]=a[n+1]*t[n+1];return a}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(a=>this.normalizeAxis(a,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(a=>t[a]):t.slice().reverse()}static padShape(t,r){let a=t.length;return t.map((n,i)=>n+r[i]+r[i+a])}static areEqual(t,r){return t.length!==r.length?!1:t.every((a,n)=>a===r[n])}},gi=class Tr{static adjustPoolAttributes(t,r,a,n,i,o){if(!t&&a.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let l=0;l<r.length-2;l++)l>=a.length?a.push(r[l+2]):a[l]=r[l+2];for(let l=0;l<a.length;l++)if(l<n.length){if(n[l]<0)throw new Error("strides should be greater than or equal to 1")}else n.push(1);for(let l=0;l<a.length;l++)if(l<i.length){if(i[l]<0)throw new Error("dilations should be greater than or equal to 1")}else i.push(1);for(let l=0;l<a.length*2;l++)if(l<o.length){if(o[l]<0)throw new Error("pad should be greater than or equal to 1")}else o.push(0);for(let l=0;l<a.length;l++){if(a[l]<=0)throw new Error("kernel shapes need to be greater than 0");if(o[l]>=a[l]||o[l+a.length]>=a[l])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,a,n,i,o,l){if(l){if(i.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let d=0;d<t.length-2;d++)Tr.adjustPadAndReturnShape(t[d+(o?1:2)],r[d],a[d],n[d],i,d,d+t.length-2,l)}}static computePoolOutputShape(t,r,a,n,i,o,l){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let d=[r[0],r[1]];return Tr.computeShapeHelper(t,r,d,a,n,i,o,l),d}static computeConvOutputShape(t,r,a,n,i,o,l){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let d=[t[0],r[0]];return Tr.computeShapeHelper(!1,t,d,a,n,i,o,l),d}static computeShapeHelper(t,r,a,n,i,o,l,d){if(t)for(let p=0;p<r.length-2;p++)a.push(1);else for(let p=0;p<r.length-2;p++)a.push(Tr.adjustPadAndReturnShape(r[p+2],n[p],i[p],o[p],l,p,p+r.length-2,d))}static adjustPadAndReturnShape(t,r,a,n,i,o,l,d){let p=a*(n-1)+1;if(d&&d!=="NOTSET")switch(d){case"VALID":return i[o]=0,i[l]=0,Math.floor((t-p)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(a!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let f=((t+r-1)/r-1)*r+n-t;return i[o]=Math.floor(d==="SAME_LOWER"?(f+1)/2:f/2),i[l]=f-i[o],Math.floor((t+f-n)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+i[o]+i[l]-p)/r+1)}},dc=class{static getShapeOfGemmResult(e,t,r,a,n){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let i,o,l;t?(i=e[1],o=e[0]):(i=e[0],o=e[1]);let d=-1;if(a?(l=r[0],d=1):(l=r[1],d=0),r[d]!==o)throw new Error("dimension mismatch");if(i<=0||l<=0||o<=0)throw new Error("invalid shape specified");if(n&&!rr.isValidBroadcast(n,[i,l]))throw new Error("gemm: invalid bias shape for broadcast");return[i,l,o]}},pc=-34028234663852886e22,cc=34028234663852886e22}),ir,Yr,ze,Me,ee,Se,Ka,er,Tt,Y,yr,B,X,hc,$n,_u,fc,le=L(()=>{ie(),ue(),ir=64,Yr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},ze=(e,t=1)=>{let r=Yr(e,t);return typeof r=="string"?r:r[0]},Me=(e,t=1)=>{let r=Yr(e,t);return typeof r=="string"?r:r[1]},ee=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:O.computeStrides(r)})}),t},Se=e=>e%4===0?4:e%2===0?2:1,Ka=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,er=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,Tt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,Y=(e,t,r,a)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?a==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:a==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,yr=(e,t,r,a,n)=>{let i=typeof r=="number",o=i?r:r.length,l=[...new Array(o).keys()],d=o<2?"u32":o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,p=Yr(t,n),f=typeof p=="string"?p:p[1],m=typeof p=="string"?p:p[0],g={indices:d,value:f,storage:m,tensor:t},_=N=>typeof N=="string"?N:`${N}u`,w={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},b=i?"uniforms.":"",x=`${b}${e}_shape`,v=`${b}${e}_strides`,$="";for(let N=0;N<o-1;N++)$+=`
    let dim${N} = current / ${Y(v,N,o)};
    let rest${N} = current % ${Y(v,N,o)};
    indices[${N}] = dim${N};
    current = rest${N};
    `;$+=`indices[${o-1}] = current;`;let T=o<2?"":`
  fn o2i_${e}(offset: u32) -> ${g.indices} {
    var indices: ${g.indices};
    var current = offset;
    ${$}
    return indices;
  }`,k=N=>(w.offsetToIndices=!0,o<2?N:`o2i_${e}(${N})`),C=[];if(o>=2)for(let N=o-1;N>=0;N--)C.push(`${Y(v,N,o)} * (indices[${N}])`);let E=o<2?"":`
  fn i2o_${e}(indices: ${g.indices}) -> u32 {
    return ${C.join("+")};
  }`,z=N=>(w.indicesToOffset=!0,o<2?N:`i2o_${e}(${N})`),M=(...N)=>o===0?"0u":`${g.indices}(${N.map(_).join(",")})`,U=(N,V)=>o<2?`${N}`:`${Y(N,V,o)}`,H=(N,V,pe)=>o<2?`${N}=${pe};`:`${Y(N,V,o)}=${pe};`,j={},K=(N,V)=>{w.broadcastedIndicesToOffset=!0;let pe=`${V.name}broadcastedIndicesTo${e}Offset`;if(pe in j)return`${pe}(${N})`;let ve=[];for(let D=o-1;D>=0;D--){let fe=V.indicesGet("outputIndices",D+V.rank-o);ve.push(`${U(v,D)} * (${fe} % ${U(x,D)})`)}return j[pe]=`fn ${pe}(outputIndices: ${V.type.indices}) -> u32 {
             return ${ve.length>0?ve.join("+"):"0u"};
           }`,`${pe}(${N})`},Q=(N,V)=>(()=>{if(g.storage===g.value)return`${e}[${N}]=${V};`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`${e}[${N}]=vec2<u32>(u32(${V}), select(0u, 0xFFFFFFFFu, ${V} < 0));`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`${e}[${N}]=vec2<u32>(u32(${V}), 0u);`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`${e}[${N}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${V}));`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),re=N=>(()=>{if(g.storage===g.value)return`${e}[${N}]`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`i32(${e}[${N}].x)`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`u32(${e}[${N}].x)`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${N}] & 0xFFu), bool(${e}[${N}] & 0xFF00u), bool(${e}[${N}] & 0xFF0000u), bool(${e}[${N}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),J=o<2?"":`
  fn get_${e}ByIndices(indices: ${g.indices}) -> ${f} {
    return ${re(`i2o_${e}(indices)`)};
  }`,F=o<2?"":(()=>{let N=l.map(pe=>`d${pe}: u32`).join(", "),V=l.map(pe=>`d${pe}`).join(", ");return`
  fn get_${e}(${N}) -> ${f} {
    return get_${e}ByIndices(${M(V)});
  }`})(),de=(...N)=>{if(N.length!==o)throw new Error(`indices length must be ${o}`);let V=N.map(_).join(",");return o===0?re("0u"):o===1?re(V[0]):(w.get=!0,w.getByIndices=!0,w.indicesToOffset=!0,`get_${e}(${V})`)},he=N=>o<2?re(N):(w.getByIndices=!0,w.indicesToOffset=!0,`get_${e}ByIndices(${N})`),G=o<2?"":`
  fn set_${e}ByIndices(indices: ${g.indices}, value: ${f}) {
    ${Q(`i2o_${e}(indices)`,"value")}
  }`,ye=o<2?"":(()=>{let N=l.map(pe=>`d${pe}: u32`).join(", "),V=l.map(pe=>`d${pe}`).join(", ");return`
  fn set_${e}(${N}, value: ${f}) {
    set_${e}ByIndices(${M(V)}, value);
  }`})();return{impl:()=>{let N=[],V=!1;return w.offsetToIndices&&(N.push(T),V=!0),w.indicesToOffset&&(N.push(E),V=!0),w.broadcastedIndicesToOffset&&(Object.values(j).forEach(pe=>N.push(pe)),V=!0),w.set&&(N.push(ye),V=!0),w.setByIndices&&(N.push(G),V=!0),w.get&&(N.push(F),V=!0),w.getByIndices&&(N.push(J),V=!0),!i&&V&&N.unshift(`const ${x} = ${g.indices}(${r.join(",")});`,`const ${v} = ${g.indices}(${O.computeStrides(r).join(",")});`),N.join(`
`)},type:g,offsetToIndices:k,indicesToOffset:z,broadcastedIndicesToOffset:K,indices:M,indicesGet:U,indicesSet:H,set:(...N)=>{if(N.length!==o+1)throw new Error(`indices length must be ${o}`);let V=N[o];if(typeof V!="string")throw new Error("value must be string");let pe=N.slice(0,o).map(_).join(",");return o===0?Q("0u",V):o===1?Q(pe[0],V):(w.set=!0,w.setByIndices=!0,w.indicesToOffset=!0,`set_${e}(${pe}, ${V})`)},setByOffset:Q,setByIndices:(N,V)=>o<2?Q(N,V):(w.setByIndices=!0,w.indicesToOffset=!0,`set_${e}ByIndices(${N}, ${V});`),get:de,getByOffset:re,getByIndices:he,usage:a,name:e,strides:v,shape:x,rank:o}},B=(e,t,r,a=1)=>yr(e,t,r,"input",a),X=(e,t,r,a=1)=>yr(e,t,r,"output",a),hc=(e,t,r)=>yr(e,t,r,"atomicOutput",1),$n=(e,t,r,a=1)=>yr(e,t,r,"internal",a),_u=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=ir){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],a=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||a>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*a>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let n=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,i=n?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,o=n?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*a}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${a})
  fn main(${i}) {
    ${o}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",a=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${a}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:a}of this.uniforms)if(a&&a>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(a/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(a/4)}>`);else{let n=a==null||a===1?r:`vec${a}<${r}>`;e.push(`${t}:${n}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},fc=(e,t)=>new _u(e,t)}),wu,la,bu,$u,vu,xu,qe,mc,gc,It=L(()=>{ie(),ue(),ke(),le(),wu=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},la=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),bu=(e,t)=>O.sortBasedOnPerm(e,la(e.length,t)),$u=(e,t,r,a)=>{let n=`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let i=0;i<t;++i)n+=`a[${e[i]}]=i[${i}];`;return n+="return a;}"},vu=(e,t)=>{let r=[],a=[];for(let n=0;n<e.length;++n)e[n]!==1&&r.push(e[n]),e[t[n]]!==1&&a.push(t[n]);return{newShape:r,newPerm:a}},xu=(e,t)=>{let r=0;for(let a=0;a<e.length;++a)if(t[e[a]]!==1){if(e[a]<r)return!1;r=e[a]}return!0},qe=(e,t)=>{let r=e.dataType,a=e.dims.length,n=la(a,t),i=bu(e.dims,n),o=e.dims,l=i,d=a<2||xu(n,e.dims),p;if(d)return p=w=>{let b=B("input",r,o,4),x=X("output",r,l,4);return`
  ${w.registerUniform("output_size","u32").declareVariables(b,x)}
  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let w=O.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(w/64/4)},programUniforms:[{type:12,data:Math.ceil(w/4)}]}},getShaderSource:p};let{newShape:f,newPerm:m}=vu(e.dims,n),g=O.areEqual(m,[2,3,1]),_=O.areEqual(m,[3,1,2]);if(f.length===2||g||_){o=g?[f[0],f[1]*f[2]]:_?[f[0]*f[1],f[2]]:f,l=[o[1],o[0]];let w=16;return p=b=>{let x=B("a",r,o.length),v=X("output",r,l.length);return`
  ${b.registerUniform("output_size","u32").declareVariables(x,v)}
  var<workgroup> tile : array<array<${v.type.value}, ${w+1}>, ${w}>;
  ${b.mainStart([w,w,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${w} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${w}u + local_id.x;
    let input_row = workgroup_id_x * ${w}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${x.getByIndices(`${x.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${w}u + local_id.x;
    let output_row = workgroup_id_y * ${w}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${v.setByIndices(`${v.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=O.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(l[1]/w),y:Math.ceil(l[0]/w)},programUniforms:[{type:12,data:b},...ee(o,l)]}},getShaderSource:p}}return p=w=>{let b=B("a",r,o.length),x=X("output",r,l.length);return`
  ${w.registerUniform("output_size","u32").declareVariables(b,x)}

  ${$u(n,a,b,x)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${x.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${x.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let w=O.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:[{type:12,data:w},...ee(o,l)]}},getShaderSource:p}},mc=(e,t)=>{wu(e.inputs,t.perm),e.compute(qe(e.inputs[0],t.perm))},gc=e=>we({perm:e.perm})}),Su,ku,Tu,Cu,Iu,Eu,zu,Au,Ou,Mu,Qe,yc,_c,wc,bc,$c,vc,xc,Sc,kc,Tc,f0=L(()=>{ie(),ue(),le(),vn(),It(),Su={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},ku={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Tu={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Cu={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Iu=(e,t)=>{let r=[];for(let a=t-e;a<t;++a)r.push(a);return r},Eu=(e,t)=>{let r=[],a=e.length;for(let i=0;i<a;i++)t.indexOf(i)===-1&&r.push(e[i]);let n=t.map(i=>e[i]);return[r,n]},zu=(e,t)=>{let r=e.length+t.length,a=[],n=0;for(let i=0;i<r;i++)t.indexOf(i)===-1?a.push(e[n++]):a.push(1);return a},Au=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Ou=(e,t)=>{let r=[];if(!Au(e,t)){for(let a=0;a<t;++a)e.indexOf(a)===-1&&r.push(a);e.forEach(a=>r.push(a))}return r},Mu=(e,t,r,a,n,i,o)=>{let l=r[0].dims,d=O.size(i),p=O.size(o),f=B("_A",r[0].dataType,l),m=X("output",n,i),g=64;d===1&&(g=256);let _=`
          var<workgroup> aBestValues : array<f32, ${g}>;
       `,w=b=>`
        ${b.registerUniform("reduceSize","u32").declareVariables(f,m)}
        ${_}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${b.mainStart(g)}

          let outputIndex = global_idx / ${g};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Tu[a]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${g}) {
           let candidate = f32(${f.getByOffset("offset + k")});
           bestValue = ${Su[a]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${g}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${ku[a]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${m.setByOffset("outputIndex",`${a==="mean"?`${m.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${m.type.storage}(${Cu[a]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${g}`,inputDependencies:["type"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:i,dataType:n}],dispatchGroup:{x:d},programUniforms:[{type:12,data:p}]})}},Qe=(e,t,r,a)=>{let n=e.inputs.length===1?r:Za(e.inputs,r),i=n.axes;i.length===0&&!n.noopWithEmptyAxes&&(i=e.inputs[0].dims.map((_,w)=>w));let o=O.normalizeAxes(i,e.inputs[0].dims.length),l=o,d=e.inputs[0],p=Ou(l,e.inputs[0].dims.length);p.length>0&&(d=e.compute(qe(e.inputs[0],p),{inputs:[0],outputs:[-1]})[0],l=Iu(l.length,d.dims.length));let[f,m]=Eu(d.dims,l),g=f;n.keepDims&&(g=zu(f,o)),e.compute(Mu(t,n.cacheKey,[d],a,e.inputs[0].dataType,g,m),{inputs:[d]})},yc=(e,t)=>{Qe(e,"ReduceMeanShared",t,"mean")},_c=(e,t)=>{Qe(e,"ReduceL1Shared",t,"l1")},wc=(e,t)=>{Qe(e,"ReduceL2Shared",t,"l2")},bc=(e,t)=>{Qe(e,"ReduceLogSumExpShared",t,"logSumExp")},$c=(e,t)=>{Qe(e,"ReduceMaxShared",t,"max")},vc=(e,t)=>{Qe(e,"ReduceMinShared",t,"min")},xc=(e,t)=>{Qe(e,"ReduceProdShared",t,"prod")},Sc=(e,t)=>{Qe(e,"ReduceSumShared",t,"sum")},kc=(e,t)=>{Qe(e,"ReduceSumSquareShared",t,"sumSquare")},Tc=(e,t)=>{Qe(e,"ReduceLogSumShared",t,"logSum")}}),Xe,Ru,yi,Za,Je,Bu,Nu,Du,Pu,Uu,Wu,Lu,Vu,qu,Fu,Ye,Cc,Ic,Ec,zc,Ac,Oc,Mc,Rc,Bc,Nc,vn=L(()=>{ie(),ue(),ke(),le(),f0(),Xe=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Ru=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],yi=(e,t,r,a,n,i,o=!1,l=!1)=>{let d=[],p=r[0].dims,f=p.length,m=O.normalizeAxes(n,f),g=!l&&m.length===0;p.forEach((b,x)=>{g||m.indexOf(x)>=0?o&&d.push(1):d.push(b)});let _=d.length,w=O.size(d);return{name:e,shaderCache:t,getShaderSource:b=>{let x=[],v=B("_A",r[0].dataType,f),$=X("output",i,_),T=a(v,$,m),k=T[2];for(let C=0,E=0;C<f;C++)g||m.indexOf(C)>=0?(o&&E++,k=`for(var j${C}: u32 = 0; j${C} < ${p[C]}; j${C}++) {
                  ${T[2].includes("last_index")?`let last_index = j${C};`:""}
                  ${v.indicesSet("input_indices",C,`j${C}`)}
                  ${k}
                }`):(x.push(`${v.indicesSet("input_indices",C,$.indicesGet("output_indices",E))};`),E++);return`

        ${b.registerUniform("output_size","u32").declareVariables(v,$)}

        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${v.type.indices};
          let output_indices = ${$.offsetToIndices("global_idx")};

          ${x.join(`
`)}
          ${T[0]}       // init ops for reduce max/min
          ${T[1]}
          ${k}
          ${T[3]}
          ${T.length===4?$.setByOffset("global_idx","value"):T.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:d,dataType:i}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:[{type:12,data:w},...ee(p,d)]})}},Za=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),we({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Je=(e,t,r,a)=>{let n=e.inputs,i=n.length===1?r:Za(n,r);e.compute(yi(t,{hint:i.cacheKey,inputDependencies:["rank"]},[n[0]],i.noopWithEmptyAxes&&i.axes.length===0?Ru:a,i.axes,n[0].dataType,i.keepDims,i.noopWithEmptyAxes),{inputs:[0]})},Bu=(e,t)=>{Xe(e.inputs),Je(e,"ReduceLogSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Nu=(e,t)=>{Xe(e.inputs),Je(e,"ReduceL1",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Du=(e,t)=>{Xe(e.inputs),Je(e,"ReduceL2",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Pu=(e,t)=>{Xe(e.inputs),Je(e,"ReduceLogSumExp",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Uu=(e,t)=>{Xe(e.inputs),Je(e,"ReduceMax",t,(r,a,n)=>{let i=[];for(let o=0;o<r.rank;o++)(n.indexOf(o)>=0||n.length===0)&&i.push(r.indicesSet("input_indices",o,0));return[`${i.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},Wu=(e,t)=>{Xe(e.inputs),Je(e,"ReduceMean",t,(r,a,n)=>{let i=1;for(let o=0;o<r.rank;o++)(n.indexOf(o)>=0||n.length===0)&&(i*=e.inputs[0].dims[o]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${a.type.value}(sum / ${i});`]})},Lu=(e,t)=>{Xe(e.inputs),Je(e,"ReduceMin",t,(r,a,n)=>{let i=[];for(let o=0;o<r.rank;o++)(n.indexOf(o)>=0||n.length===0)&&i.push(`input_indices[${o}] = 0;`);return[`${i.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},Vu=(e,t)=>{Xe(e.inputs),Je(e,"ReduceProd",t,(r,a)=>[`var value = ${a.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},qu=(e,t)=>{Xe(e.inputs),Je(e,"ReduceSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},Fu=(e,t)=>{Xe(e.inputs),Je(e,"ReduceSumSquare",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Ye=(e,t,r)=>{if(t.length===0)return r;let a=1,n=1;for(let i=0;i<t.length;i++)t.indexOf(i)===-1?a*=e[i]:n*=e[i];return n<32&&a>1024},Cc=(e,t)=>{Ye(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Wu(e,t):yc(e,t)},Ic=(e,t)=>{Ye(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Nu(e,t):_c(e,t)},Ec=(e,t)=>{Ye(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Du(e,t):wc(e,t)},zc=(e,t)=>{Ye(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Pu(e,t):bc(e,t)},Ac=(e,t)=>{Ye(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Uu(e,t):$c(e,t)},Oc=(e,t)=>{Ye(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Lu(e,t):vc(e,t)},Mc=(e,t)=>{Ye(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Vu(e,t):xc(e,t)},Rc=(e,t)=>{Ye(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?qu(e,t):Sc(e,t)},Bc=(e,t)=>{Ye(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Fu(e,t):kc(e,t)},Nc=(e,t)=>{Ye(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Bu(e,t):Tc(e,t)}}),da,Dc,Pc,Qa,m0=L(()=>{ie(),ke(),vn(),da=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Dc=(e,t)=>{da(e.inputs);let r=(a,n,i)=>{let o=[];for(let l=0;l<a.rank;l++)(i.indexOf(l)>=0||i.length===0)&&o.push(`input_indices[${l}] = 0;`);return[`${o.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(yi("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Pc=(e,t)=>{da(e.inputs);let r=(a,n,i)=>{let o=[];for(let l=0;l<a.rank;l++)(i.indexOf(l)>=0||i.length===0)&&o.push(`input_indices[${l}] = 0;`);return[`${o.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(yi("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Qa=e=>we(e)}),Gu,ei,Hu,ju,Ku,Rr,Zu,Uc,xn=L(()=>{ie(),ue(),bn(),le(),Gu=(e,t)=>{let r=e[0],a=e[1],n=e[2],i=e[3],o=e[4],l=e[5];if(o&&l)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let d=r.dims[0],p=r.dims[1],f=r.dims[2];if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(a.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(a.dims[0]!==f)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(n.dims[0]!==a.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let m=n.dims[0]/3,g=m,_=g;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let T of t.qkvHiddenSizes)if(T%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");m=t.qkvHiddenSizes[0],g=t.qkvHiddenSizes[1],_=t.qkvHiddenSizes[2]}let w=p;if(m!==g)throw new Error("qkv_hidden_sizes first element should be same as the second");if(n.dims[0]!==m+g+_)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let b=0;if(o){if(g!==_)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(o.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(o.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(o.dims[1]!==d)throw new Error('Input "past" second dimension must be batch_size');if(o.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(o.dims[4]!==g/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(b=o.dims[3])}let x=w+b,v=-1,$=0;if(i)throw new Error("Mask not supported");if(o)throw new Error("past is not supported");if(l){if(l.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(l.dims[0]!==d||l.dims[1]!==t.numHeads||l.dims[2]!==p||l.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:d,sequenceLength:p,pastSequenceLength:b,kvSequenceLength:w,totalSequenceLength:x,maxSequenceLength:v,inputHiddenSize:f,hiddenSize:m,vHiddenSize:_,headSize:Math.floor(m/t.numHeads),vHeadSize:Math.floor(_/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},ei=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,Hu=(e,t,r,a,n,i,o,l)=>{let d=Se(o?1:i),p=64,f=i/d;f<p&&(p=32);let m=Math.ceil(i/d/p),g=[{type:12,data:t},{type:12,data:r},{type:12,data:a},{type:12,data:n},{type:12,data:f},{type:12,data:m}],_=ze(e.dataType,d),w=Me(1,d),b=["type"];o&&b.push("type"),l&&b.push("type");let x=v=>{let $=X("x",e.dataType,e.dims,d),T=[$],k=o?B("seq_lens",o.dataType,o.dims):void 0;k&&T.push(k);let C=l?B("total_sequence_length_input",l.dataType,l.dims):void 0;C&&T.push(C);let E=Me(e.dataType),z=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${p}>;
  var<workgroup> thread_sum: array<f32, ${p}>;
  ${v.registerUniforms(z).declareVariables(...T)}
  ${v.mainStart([p,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${ei(k,C,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${p}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${o?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${w}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${w}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(d){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${d}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${p}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${w}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${w}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(d){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${d}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${p}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${$.type.value}(${E}(1.0) / ${E}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${w}(x[offset + i]);
        x[offset + i] = ${$.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${o?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${$.type.value}(${E}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${p};${_};${d}`,inputDependencies:b},getShaderSource:x,getRunData:()=>({outputs:[],dispatchGroup:{x:Math.ceil(i/p),y:n,z:t*r},programUniforms:g})}},ju=(e,t,r,a,n,i,o,l,d)=>{let p=o+i.kvSequenceLength,f=[i.batchSize,i.numHeads,i.sequenceLength,p],m=e>1&&a,g=i.kvNumHeads?i.kvNumHeads:i.numHeads,_=m?[i.batchSize,g,p,i.headSize]:void 0,w=i.nReps?i.nReps:1,b=i.scale===0?1/Math.sqrt(i.headSize):i.scale,x=Se(i.headSize),v=i.headSize/x,$=12,T={x:Math.ceil(p/$),y:Math.ceil(i.sequenceLength/$),z:i.batchSize*i.numHeads},k=[{type:12,data:i.sequenceLength},{type:12,data:v},{type:12,data:p},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:1,data:b},{type:12,data:o},{type:12,data:i.kvSequenceLength},{type:12,data:w}],C=m&&a&&O.size(a.dims)>0,E=["type","type"];C&&E.push("type"),n&&E.push("type"),l&&E.push("type"),d&&E.push("type");let z=[{dims:f,dataType:t.dataType,gpuDataType:0}];m&&z.push({dims:_,dataType:t.dataType,gpuDataType:0});let M=U=>{let H=B("q",t.dataType,t.dims,x),j=B("key",r.dataType,r.dims,x),K=[H,j];if(C){let G=B("past_key",a.dataType,a.dims,x);K.push(G)}n&&K.push(B("attention_bias",n.dataType,n.dims));let Q=l?B("seq_lens",l.dataType,l.dims):void 0;Q&&K.push(Q);let re=d?B("total_sequence_length_input",d.dataType,d.dims):void 0;re&&K.push(re);let J=X("output",t.dataType,f),F=[J];m&&F.push(X("present_key",t.dataType,_,x));let de=Me(1,x),he=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;

  var<workgroup> tileQ: array<${H.type.storage}, ${$*$}>;
  var<workgroup> tileK: array<${H.type.storage}, ${$*$}>;
  ${U.registerUniforms(he).declareVariables(...K,...F)}
  ${U.mainStart([$,$,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${w===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${w===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${ei(Q,re,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${C&&m?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${m?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${de}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${C&&m?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${m?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${de}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(x){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${x}`)}})()};
        output[outputIdx] = ${J.type.value} (sum * uniforms.alpha) + ${n?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${x};${n!==void 0};${a!==void 0};${e}`,inputDependencies:E},getRunData:()=>({outputs:z,dispatchGroup:T,programUniforms:k}),getShaderSource:M}},Ku=(e,t,r,a,n,i,o=void 0,l=void 0)=>{let d=i+n.kvSequenceLength,p=n.nReps?n.nReps:1,f=n.vHiddenSize*p,m=e>1&&a,g=n.kvNumHeads?n.kvNumHeads:n.numHeads,_=m?[n.batchSize,g,d,n.headSize]:void 0,w=[n.batchSize,n.sequenceLength,f],b=12,x={x:Math.ceil(n.vHeadSize/b),y:Math.ceil(n.sequenceLength/b),z:n.batchSize*n.numHeads},v=[{type:12,data:n.sequenceLength},{type:12,data:d},{type:12,data:n.vHeadSize},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:12,data:f},{type:12,data:i},{type:12,data:n.kvSequenceLength},{type:12,data:p}],$=m&&a&&O.size(a.dims)>0,T=["type","type"];$&&T.push("type"),o&&T.push("type"),l&&T.push("type");let k=[{dims:w,dataType:t.dataType,gpuDataType:0}];m&&k.push({dims:_,dataType:t.dataType,gpuDataType:0});let C=E=>{let z=B("probs",t.dataType,t.dims),M=B("v",r.dataType,r.dims),U=[z,M];$&&U.push(B("past_value",a.dataType,a.dims));let H=o?B("seq_lens",o.dataType,o.dims):void 0;o&&U.push(H);let j=l?B("total_sequence_length_input",l.dataType,l.dims):void 0;l&&U.push(j);let K=[X("output",t.dataType,w)];m&&K.push(X("present_value",t.dataType,_));let Q=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;
  var<workgroup> tileQ: array<${z.type.value}, ${b*b}>;
  var<workgroup> tileV: array<${z.type.value}, ${b*b}>;
  ${E.registerUniforms(Q).declareVariables(...U,...K)}
  ${E.mainStart([b,b,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${p===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${p===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${ei(H,j,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${$&&m?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${m?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${z.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${$&&m?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${m?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${a!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:k,dispatchGroup:x,programUniforms:v}),getShaderSource:C}},Rr=(e,t,r,a,n,i,o,l,d,p,f=void 0,m=void 0)=>{let g=Math.min(e.outputCount,1+(o?1:0)+(l?1:0)),_=g>1?p.pastSequenceLength:0,w=_+p.kvSequenceLength,b=d&&O.size(d.dims)>0?d:void 0,x=[t,r];g>1&&o&&O.size(o.dims)>0&&x.push(o),b&&x.push(b),f&&x.push(f),m&&x.push(m);let v=e.compute(ju(g,t,r,o,b,p,_,f,m),{inputs:x,outputs:g>1?[-1,1]:[-1]})[0];e.compute(Hu(v,p.batchSize,p.numHeads,_,p.sequenceLength,w,f,m),{inputs:f&&m?[v,f,m]:[v],outputs:[]});let $=[v,a];g>1&&l&&O.size(l.dims)>0&&$.push(l),f&&$.push(f),m&&$.push(m),e.compute(Ku(g,v,a,l,p,_,f,m),{inputs:$,outputs:g>1?[0,2]:[0]})},Zu=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],a=t.sequenceLength,n=t.inputHiddenSize,i=t.headSize,o=12,l={x:Math.ceil(t.headSize/o),y:Math.ceil(t.sequenceLength/o),z:t.batchSize*t.numHeads},d=[e.inputs[0],e.inputs[1],e.inputs[2]],p=[{type:12,data:a},{type:12,data:n},{type:12,data:i},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],f=m=>{let g=X("output_q",d[0].dataType,r),_=X("output_k",d[0].dataType,r),w=X("output_v",d[0].dataType,r),b=B("input",d[0].dataType,d[0].dims),x=B("weight",d[1].dataType,d[1].dims),v=B("bias",d[2].dataType,d[2].dims),$=b.type.storage,T=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${o}u;
  var<workgroup> tileInput: array<${$}, ${o*o}>;
  var<workgroup> tileWeightQ: array<${$}, ${o*o}>;
  var<workgroup> tileWeightK: array<${$}, ${o*o}>;
  var<workgroup> tileWeightV: array<${$}, ${o*o}>;
  ${m.registerUniforms(T).declareVariables(b,x,v,g,_,w)}
  ${m.mainStart([o,o,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${$}(0);
    var valueK = ${$}(0);
    var valueV = ${$}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:l,programUniforms:p}),getShaderSource:f},{inputs:d,outputs:[-1,-1,-1]})},Uc=(e,t)=>{let r=Gu(e.inputs,t),[a,n,i]=Zu(e,r);return Rr(e,a,n,i,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),Qu,Xu,Ju,Wc,g0=L(()=>{at(),ie(),ue(),ke(),le(),Qu=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(a,n,i)=>{let o=n.length;if(o!==a.length)throw new Error(`${i}: num dimensions != ${o}`);n.forEach((l,d)=>{if(l!==a[d])throw new Error(`${i}: dim[${d}] do not match`)})};if(e[0].dims.length>1){let a=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,a,"Invalid input scale"),r(e[2].dims,a,"Invalid input B"),r(e[3].dims,a,"Invalid input mean"),r(e[4].dims,a,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Xu=(e,t)=>{let{epsilon:r,spatial:a,format:n}=t,i=e[0].dims,o=a?Se(i[i.length-1]):1,l=n==="NHWC"&&i.length>1?o:1,d=O.size(i)/o,p=a,f=p?i.length:i,m=B("x",e[0].dataType,e[0].dims,o),g=B("scale",e[1].dataType,e[1].dims,l),_=B("bias",e[2].dataType,e[2].dims,l),w=B("inputMean",e[3].dataType,e[3].dims,l),b=B("inputVar",e[4].dataType,e[4].dims,l),x=X("y",e[0].dataType,f,o),v=()=>{let T="";if(a)T=`let cOffset = ${i.length===1?"0u":n==="NHWC"?`outputIndices[${i.length-1}] / ${o}`:"outputIndices[1]"};`;else if(n==="NCHW")T=`
            ${x.indicesSet("outputIndices","0","0")}
            let cOffset = ${x.indicesToOffset("outputIndices")};`;else{T=`var cIndices = ${g.type.indices}(0);
                       cIndices[0] = outputIndices[${i.length-1}];`;for(let k=1;k<g.rank;k++)T+=`cIndices[${k}] = outputIndices[${k}];`;T+=`let cOffset = ${g.indicesToOffset("cIndices")};`}return T},$=T=>`
  const epsilon = ${r};
  ${T.registerUniform("outputSize","u32").declareVariables(m,g,_,w,b,x)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${x.offsetToIndices(`global_idx * ${o}`)};
    ${v()}
    let scale = ${g.getByOffset("cOffset")};
    let bias = ${_.getByOffset("cOffset")};
    let inputMean = ${w.getByOffset("cOffset")};
    let inputVar = ${b.getByOffset("cOffset")};
    let x = ${m.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${x.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${a}_${o}`,inputDependencies:p?["rank","type","type","type","type"]:void 0},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p?[{type:12,data:d},...ee(i)]:[{type:12,data:d}]})}},Ju=e=>we(e),Wc=(e,t)=>{let{inputs:r,outputCount:a}=e,n=Ju({...t,outputCount:a});if($e.webgpu.validateInputContent&&Qu(r,n),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Xu(r,n))}}),Yu,el,Lc,y0=L(()=>{ue(),le(),Yu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},el=e=>{let t=e[0].dims,r=e[0].dims[2],a=O.size(t)/4,n=e[0].dataType,i=B("input",n,t,4),o=B("bias",n,[r],4),l=B("residual",n,t,4),d=X("output",n,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:p=>`
  const channels = ${r}u / 4;
  ${p.declareVariables(i,o,l,d)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let value = ${i.getByOffset("global_idx")}
      + ${o.getByOffset("global_idx % channels")} + ${l.getByOffset("global_idx")};
    ${d.setByOffset("global_idx","value")}
  }`}},Lc=e=>{Yu(e.inputs),e.compute(el(e.inputs))}}),tl,me,Vc,qc,Fc,Gc,Hc,jc,Kc,Zc,Qc,rl,Xc,Jc,Yc,eh,Cr,th,pi,rh,ih,ah,nh,sh,oh,uh,lh,dh,ph,ch,hh,fh,mh,gh,yh,pa,_h,Xa,Ja,wh,bh,$h,il,al,vh,Sn=L(()=>{ie(),ue(),ke(),le(),tl=(e,t,r,a,n,i,o)=>{let l=Math.ceil(t/4),d="";typeof n=="string"?d=`${n}(a)`:d=n("a");let p=B("inputData",r,[l],4),f=X("outputData",a,[l],4),m=[{name:"vec_size",type:"u32"}];return o&&m.push(...o),`
      ${e.registerUniforms(m).declareVariables(p,f)}

  ${i??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${p.getByOffset("global_idx")};
    ${f.setByOffset("global_idx",d)}
  }`},me=(e,t,r,a,n,i=e.dataType,o,l)=>{let d=[{type:12,data:Math.ceil(O.size(e.dims)/4)}];return o&&d.push(...o),{name:t,shaderCache:{hint:n,inputDependencies:["type"]},getShaderSource:p=>tl(p,O.size(e.dims),e.dataType,i,r,a,l),getRunData:p=>({outputs:[{dims:e.dims,dataType:i}],dispatchGroup:{x:Math.ceil(O.size(p[0].dims)/64/4)},programUniforms:d})}},Vc=e=>{e.compute(me(e.inputs[0],"Abs","abs"))},qc=e=>{e.compute(me(e.inputs[0],"Acos","acos"))},Fc=e=>{e.compute(me(e.inputs[0],"Acosh","acosh"))},Gc=e=>{e.compute(me(e.inputs[0],"Asin","asin"))},Hc=e=>{e.compute(me(e.inputs[0],"Asinh","asinh"))},jc=e=>{e.compute(me(e.inputs[0],"Atan","atan"))},Kc=e=>{e.compute(me(e.inputs[0],"Atanh","atanh"))},Zc=e=>we(e),Qc=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(me(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},rl=e=>{let t,r,a=e.length>=2&&e[1].data!==0,n=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=a?e[1].getFloat32Array()[0]:-34028234663852886e22,r=n?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=a?e[1].getUint16Array()[0]:64511,r=n?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return we({min:t,max:r})},Xc=(e,t)=>{let r=t||rl(e.inputs),a=Me(e.inputs[0].dataType);e.compute(me(e.inputs[0],"Clip",n=>`clamp(${n}, vec4<${a}>(uniforms.min), vec4<${a}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:a},{name:"max",type:a}]),{inputs:[0]})},Jc=e=>{e.compute(me(e.inputs[0],"Ceil","ceil"))},Yc=e=>{e.compute(me(e.inputs[0],"Cos","cos"))},eh=e=>{e.compute(me(e.inputs[0],"Cosh","cosh"))},Cr=e=>we(e),th=(e,t)=>{let r=Me(e.inputs[0].dataType);e.compute(me(e.inputs[0],"Elu",a=>`elu_vf32(${a})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},pi=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,rh=e=>{let t=Me(e.inputs[0].dataType);e.compute(me(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,pi(t)))},ih=e=>{e.compute(me(e.inputs[0],"Exp","exp"))},ah=e=>{e.compute(me(e.inputs[0],"Floor","floor"))},nh=e=>{let t=Me(e.inputs[0].dataType);e.compute(me(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,pi(t)))},sh=(e,t)=>{let r=Me(e.inputs[0].dataType);e.compute(me(e.inputs[0],"LeakyRelu",a=>`select(leaky_relu_alpha_ * ${a}, ${a}, ${a} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},oh=e=>{e.compute(me(e.inputs[0],"Not",t=>`!${t}`))},uh=e=>{e.compute(me(e.inputs[0],"Neg",t=>`-${t}`))},lh=e=>{e.compute(me(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},dh=e=>{let t=Me(e.inputs[0].dataType);e.compute(me(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},ph=e=>{e.compute(me(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},ch=e=>we(e),hh=(e,t)=>{let r=Me(e.inputs[0].dataType);e.compute(me(e.inputs[0],"HardSigmoid",a=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${a} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},fh=e=>{e.compute(me(e.inputs[0],"Sin","sin"))},mh=e=>{e.compute(me(e.inputs[0],"Sinh","sinh"))},gh=e=>{e.compute(me(e.inputs[0],"Sqrt","sqrt"))},yh=e=>{e.compute(me(e.inputs[0],"Tan","tan"))},pa=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,_h=e=>{e.compute(me(e.inputs[0],"Tanh",pa))},Xa=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${pa("v")};
}
`,Ja=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,wh=e=>{let t=Me(e.inputs[0].dataType);e.compute(me(e.inputs[0],"FastGelu",Ja,Xa(t),void 0,e.inputs[0].dataType))},bh=(e,t)=>{let r=Me(e.inputs[0].dataType);return e.compute(me(e.inputs[0],"ThresholdedRelu",a=>`select(vec4<${r}>(0.0), ${a}, ${a} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},$h=e=>{e.compute(me(e.inputs[0],"Log","log"))},il=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,al=e=>`quick_gelu_impl(${e})`,vh=(e,t)=>{let r=Me(e.inputs[0].dataType);e.compute(me(e.inputs[0],"QuickGelu",al,il(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),nl,sl,xh,_0=L(()=>{ue(),le(),Sn(),nl=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},sl=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=B("input",e[0].dataType,e[0].dims,4),a=B("bias",e[0].dataType,[e[0].dims[2]],4),n=X("output",e[0].dataType,t,4),i=O.size(t)/4,o=ze(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:l=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${l.declareVariables(r,a,n)}

  ${pi(o)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${n.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},xh=e=>{nl(e.inputs),e.compute(sl(e.inputs))}}),ol,ul,et,Sh,kh,Th,Ch,Ih,Eh,zh,Ah,Oh,Mh,w0=L(()=>{ie(),ue(),le(),ol=(e,t,r,a,n,i,o,l,d,p,f,m)=>{let g,_;typeof l=="string"?g=_=($,T)=>`${l}((${$}),(${T}))`:typeof l=="function"?g=_=l:(g=l.scalar,_=l.vector);let w=X("outputData",f,a.length,4),b=B("aData",d,t.length,4),x=B("bData",p,r.length,4),v;if(n)if(i){let $=O.size(t)===1,T=O.size(r)===1,k=t.length>0&&t[t.length-1]%4===0,C=r.length>0&&r[r.length-1]%4===0;$||T?v=w.setByOffset("global_idx",_($?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"),T?`${x.type.value}(${x.getByOffset("0")}.x)`:x.getByOffset("global_idx"))):v=`
            let outputIndices = ${w.offsetToIndices("global_idx * 4u")};
            let offsetA = ${b.broadcastedIndicesToOffset("outputIndices",w)};
            let offsetB = ${x.broadcastedIndicesToOffset("outputIndices",w)};
            ${w.setByOffset("global_idx",_(o||k?b.getByOffset("offsetA / 4u"):`${b.type.value}(${b.getByOffset("offsetA / 4u")}[offsetA % 4u])`,o||C?x.getByOffset("offsetB / 4u"):`${x.type.value}(${x.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else v=w.setByOffset("global_idx",_(b.getByOffset("global_idx"),x.getByOffset("global_idx")));else{if(!i)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let $=(T,k,C="")=>{let E=`aData[indexA${k}][componentA${k}]`,z=`bData[indexB${k}][componentB${k}]`;return`
            let outputIndices${k} = ${w.offsetToIndices(`global_idx * 4u + ${k}u`)};
            let offsetA${k} = ${b.broadcastedIndicesToOffset(`outputIndices${k}`,w)};
            let offsetB${k} = ${x.broadcastedIndicesToOffset(`outputIndices${k}`,w)};
            let indexA${k} = offsetA${k} / 4u;
            let indexB${k} = offsetB${k} / 4u;
            let componentA${k} = offsetA${k} % 4u;
            let componentB${k} = offsetB${k} % 4u;
            ${T}[${k}] = ${C}(${g(E,z)});
          `};f===9?v=`
            var data = vec4<u32>(0);
            ${$("data",0,"u32")}
            ${$("data",1,"u32")}
            ${$("data",2,"u32")}
            ${$("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:v=`
            ${$("outputData[global_idx]",0)}
            ${$("outputData[global_idx]",1)}
            ${$("outputData[global_idx]",2)}
            ${$("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(b,x,w)}

        ${m??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${v}
      }`},ul=(e,t,r,a,n,i,o=r.dataType)=>{let l=r.dims.map(b=>Number(b)??1),d=a.dims.map(b=>Number(b)??1),p=!O.areEqual(l,d),f=l,m=O.size(l),g=!1,_=!1,w=[p];if(p){let b=rr.calcShape(l,d,!1);if(!b)throw new Error("Can't perform binary op on the given tensors");f=b.slice(),m=O.size(f);let x=O.size(l)===1,v=O.size(d)===1,$=l.length>0&&l[l.length-1]%4===0,T=d.length>0&&d[d.length-1]%4===0;w.push(x),w.push(v),w.push($),w.push(T);let k=1;for(let C=1;C<f.length;C++){let E=l[l.length-C],z=d[d.length-C];if(E===z)k*=E;else break}k%4===0?(_=!0,g=!0):(x||v||$||T)&&(g=!0)}else g=!0;return w.push(g),{name:e,shaderCache:{hint:t+w.map(b=>b.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:b=>ol(b,l,d,f,g,p,_,n,r.dataType,a.dataType,o,i),getRunData:()=>({outputs:[{dims:f,dataType:o}],dispatchGroup:{x:Math.ceil(m/64/4)},programUniforms:[{type:12,data:Math.ceil(O.size(f)/4)},...ee(l,d,f)]})}},et=(e,t,r,a,n,i)=>{e.compute(ul(t,n??"",e.inputs[0],e.inputs[1],r,a,i))},Sh=e=>{et(e,"Add",(t,r)=>`${t}+${r}`)},kh=e=>{et(e,"Div",(t,r)=>`${t}/${r}`)},Th=e=>{et(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},Ch=e=>{et(e,"Mul",(t,r)=>`${t}*${r}`)},Ih=e=>{let t=B("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;et(e,"Pow",{scalar:(r,a)=>`pow_custom(${r},${a})`,vector:(r,a)=>`pow_vector_custom(${r},${a})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Eh=e=>{et(e,"Sub",(t,r)=>`${t}-${r}`)},zh=e=>{et(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Ah=e=>{et(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Oh=e=>{et(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},Mh=e=>{et(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),ll,dl,pl,cl,Rh,Bh,b0=L(()=>{ie(),ue(),ke(),le(),ll=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,a=e[r],n=a.dataType,i=a.dims.length;e.forEach((o,l)=>{if(l!==r){if(o.dataType!==n)throw new Error("input tensors should be one type");if(o.dims.length!==i)throw new Error("input tensors should have the same shape");o.dims.forEach((d,p)=>{if(p!==t&&d!==a.dims[p])throw new Error("non concat dimensions must match")})}})},dl=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,pl=(e,t)=>{let r=e.length,a=[];for(let n=0;n<r;++n){let i=t.setByOffset("global_idx",e[n].getByIndices("indices"));r===1?a.push(i):n===0?a.push(`if (inputIndex == ${n}u) { ${i} }`):n===r-1?a.push(`else { ${i} }`):a.push(`else if (inputIndex == ${n}) { ${i} }`)}return a.join(`
`)},cl=(e,t,r,a)=>{let n=O.size(r),i=new Array(e.length),o=new Array(e.length),l=0,d=[],p=[],f=[{type:12,data:n}];for(let b=0;b<e.length;++b)l+=e[b].dims[t],i[b]=l,p.push(e[b].dims.length),o[b]=B(`input${b}`,a,p[b]),d.push("rank"),f.push({type:12,data:i[b]});for(let b=0;b<e.length;++b)f.push(...ee(e[b].dims));f.push(...ee(r));let m=X("output",a,r.length),g=m.indicesGet("indices",t),_=Array.from(Array(i.length).keys()).map(b=>`uniforms.sizeInConcatAxis${b}`).join(","),w=b=>`

  ${(()=>{b.registerUniform("outputSize","u32");for(let x=0;x<e.length;x++)b.registerUniform(`sizeInConcatAxis${x}`,"u32");return b.declareVariables(...o,m)})()}

  ${dl(i.length,_)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${m.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${g});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${i.length}u>(${_});
      ${g} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${pl(o,m)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:r,dataType:a}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:f}),getShaderSource:w}},Rh=(e,t)=>{let r=e.inputs,a=r[0].dims,n=O.normalizeAxis(t.axis,a.length);ll(r,n);let i=a.slice();i[n]=r.reduce((l,d)=>l+(d.dims.length>n?d.dims[n]:0),0);let o=r.filter(l=>O.size(l.dims)>0);e.compute(cl(o,n,i,r[0].dataType),{inputs:o})},Bh=e=>we({axis:e.axis})}),Vt,qt,Ft,kn,jt=L(()=>{ie(),ue(),Vt=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},qt=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Ft=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},kn=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,a]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:a}}else if(t==="Clip"){let[r,a]=(e==null?void 0:e.activation_params)||[pc,cc];return{activation:t,clipMax:a,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Ae,Nh,Tn=L(()=>{Ae=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Nh=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Dh,$0=L(()=>{Dh=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Ar,Cn,In=L(()=>{ie(),ue(),le(),jt(),Ar=(e,t,r,a,n)=>{let i=a-r;return`
      ${Array.from({length:r}).map((o,l)=>`
      if (${Y(t.shape,l,t.rank)} != 1) {
        ${t.indicesSet(e,l,Y(n,l+i,a))}
      } else {
        ${t.indicesSet(e,l,0)}
      }`).join("")}
`},Cn=(e,t,r,a,n=!1,i)=>{let o=e[0].dims,l=e[1].dims,d=o[o.length-2],p=l[l.length-1],f=o[o.length-1],m=Se(p),g=Se(f),_=Se(d),w=O.size(r)/m/_,b=e.length>2,x=a?a.slice(0,-2):r.slice(0,-2),v=[O.size(x),d,p],$=[{type:12,data:w},{type:12,data:d},{type:12,data:p},{type:12,data:f}];qt(t,$),$.push(...ee(x,o,l)),b&&$.push(...ee(e[2].dims)),$.push(...ee(v));let T=k=>{let C=$n("batch_dims",e[0].dataType,x.length),E=B("a",e[0].dataType,o.length,g),z=B("b",e[1].dataType,l.length,m),M=X("output",e[0].dataType,v.length,m),U=ze(M.type.tensor),H=Vt(t,M.type.value,U),j=[E,z],K="";if(b){let J=n?m:1;j.push(B("bias",e[2].dataType,e[2].dims.length,J)),K=`${n?`value += bias[col / ${J}];`:`value += ${M.type.value}(bias[row + i]);`}`}let Q=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Ft(t,Q);let re=()=>{let J=`var a_data: ${E.type.value};`;for(let F=0;F<g;F++)J+=`
              let b_data${F} = b[(b_offset + (k + ${F}) * uniforms.N + col) / ${m}];`;for(let F=0;F<_;F++){J+=`a_data = a[(a_offset + (row + ${F}) * uniforms.K + k) / ${g}];`;for(let de=0;de<g;de++)J+=`
            values[${F}] = fma(${z.type.value}(a_data${g===1?"":`[${de}]`}), b_data${de}, values[${F}]);
`}return J};return`
  ${k.registerUniforms(Q).registerInternalVariables(C).declareVariables(...j,M)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${m})) * ${m};
    var index1 = global_idx / (uniforms.N / ${m});
    let stride1 = uniforms.M / ${_};
    let row = (index1 % stride1) * ${_};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${C.offsetToIndices("batch")};`}

    var a_indices: ${E.type.indices};
    ${Ar("a_indices",E,E.rank-2,C.rank,"batch_indices")}
    ${E.indicesSet("a_indices",E.rank-2,0)}
    ${E.indicesSet("a_indices",E.rank-1,0)}
    let a_offset = ${E.indicesToOffset("a_indices")};

    var b_indices: ${z.type.indices};
    ${Ar("b_indices",z,z.rank-2,C.rank,"batch_indices")}
    ${z.indicesSet("b_indices",z.rank-2,0)}
    ${z.indicesSet("b_indices",z.rank-1,0)}
    let b_offset = ${z.indicesToOffset("b_indices")};
    var values: array<${M.type.value}, ${_}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${g}) {
      ${re()}
    }
    for (var i = 0u; i < ${_}u; i++) {
      var value = values[i];
      ${K}
      ${H}
      let cur_indices = ${M.type.indices}(batch, row + i, col);
      let offset = ${M.indicesToOffset("cur_indices")};
      ${M.setByOffset(`offset / ${m}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${m};${g};${_};${n}`,inputDependencies:b?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:$}),getShaderSource:T}}}),hl,fl,Ya,ca,ml,en,gl,_i,En=L(()=>{ie(),ue(),le(),jt(),In(),Tn(),hl=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,fl=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Ya=(e,t,r="f32",a,n=!1,i=32,o=!1,l=32)=>{let d=t[1]*e[1],p=t[0]*e[0],f=n?d:i,m=n?i:d,g=f/t[0],_=i/t[1];if(!((n&&g===4&&e[1]===4||!n&&(g===3||g===4))&&f%t[0]===0&&i%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${n} is true, innerElementSize ${g} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${g} must be 3 or 4.
  tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}. tileInner ${i} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${g}<${r}>, ${f/g}>, ${m}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${p/e[0]}>, ${i}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${g};
const tileInner = ${i};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${o?"0":"i32(globalId.z)"};
  ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${d};

  let num_tiles = ${o?`${Math.ceil(l/i)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${o?`i32(globalId.z) * ${l}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${_};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${hl(n,a)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${a?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${g===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${fl(n,g)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},ca=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,ml=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",en=(e,t,r="f32",a,n=!1,i=32,o=!1,l=32,d=!1)=>{let p=e[1]*t[1],f=e[0]*t[0],m=n?p:i,g=n?i:p;if(!(g%t[1]===0&&m%t[0]===0&&i%t[1]===0))throw new Error(`tileAHight ${g} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${m} must be divisible by workgroupSize[0]${t[0]}, tileInner ${i} must be divisible by workgroupSize[1]${t[1]}`);let _=g/t[1],w=m/t[0],b=i/t[1],x=d?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${p};
    let globalColStart = i32(workgroupId.x) * ${f};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${g}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${m}; inputCol = inputCol + ${t[0]}) {
          ${ca(n,a)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${i}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${a?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${p};

let tileRowA = i32(localId.y) * ${_};
let tileColA = i32(localId.x) * ${w};
let tileRowB = i32(localId.y) * ${b};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${w}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${ca(n,a)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${a?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${ml(n)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${m}>, ${g}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${f}>, ${i}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${i};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${o?"0":"i32(globalId.z)"};
    ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${o?`${Math.ceil(l/i)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${o?`i32(globalId.z) * ${l}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${x}
  }
`},gl=(e,t,r,a,n=!1)=>{let[i,o,l,d]=a,p=ze(a[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${Ae(e,p)} {
      var value = ${Ae(e,p)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${o.type.indices};
        ${Ar("aIndices",o,o.rank-2,i.rank,"batchIndices")}
        ${o.indicesSet("aIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("aIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${Ae(e,p)} {
      var value = ${Ae(e,p)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${l.type.indices};
        ${Ar("bIndices",l,l.rank-2,i.rank,"batchIndices")}
        ${l.indicesSet("bIndices",l.rank-2,"u32(row)")}
        ${l.indicesSet("bIndices",l.rank-1,"u32(colIn)")}
        value = ${l.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ae(e,p)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${n?"bias[colIn]":`${Ae(e,p)}(bias[row])`};`:""}
        ${r}
        ${d.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},_i=(e,t,r,a,n=!1,i)=>{let o=e[0].dims,l=e[1].dims,d=o.slice(0,-2),p=l.slice(0,-2),f=a?a.slice(0,-2):r.slice(0,-2),m=O.size(f),g=o[o.length-2],_=o[o.length-1],w=l[l.length-1],b=_%4===0&&w%4===0,x=g<=8?[4,1,1]:[4,4,1],v=[8,8,1],$=[Math.ceil(w/v[0]/x[0]),Math.ceil(g/v[1]/x[1]),Math.ceil(m/v[2]/x[2])],T=b?4:1,k=[...d,g,_/T],C=k.length,E=[...p,_,w/T],z=E.length,M=[m,g,w/T],U=[{type:6,data:g},{type:6,data:w},{type:6,data:_}];qt(t,U),U.push(...ee(f,k,E));let H=["rank","rank"],j=e.length>2;j&&(U.push(...ee(e[2].dims)),H.push("rank")),U.push(...ee(M));let K=Q=>{let re=f.length,J=$n("batchDims",e[0].dataType,re,1),F=ze(e[0].dataType),de=B("a",e[0].dataType,C,T),he=B("b",e[1].dataType,z,T),G=X("result",e[0].dataType,M.length,T),ye=[de,he];if(j){let D=n?T:1;ye.push(B("bias",e[2].dataType,e[2].dims.length,D))}let N=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Ft(t,N);let V=ze(G.type.tensor),pe=Vt(t,G.type.value,V),ve=gl(T,j,pe,[J,de,he,G],n);return`
  ${Q.registerUniforms(N).registerInternalVariables(J).declareVariables(...ye,G)}
  ${ve}
  ${b?Ya(x,v,F,J):en(x,v,F,J)}
                   `};return{name:"MatMul",shaderCache:{hint:`${x};${t.activation};${b};${n}`,inputDependencies:H},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:$[0],y:$[1],z:$[2]},programUniforms:U}),getShaderSource:K}}}),yl,Ph,v0=L(()=>{ie(),ft(),le(),jt(),Tn(),$0(),En(),yl=(e,t,r,a,n=!1,i,o=4,l=4,d=4,p="f32")=>{let f=U=>{switch(U){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${p}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${U} is not supported.`)}},m=U=>{switch(U){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${U} is not supported.`)}},g=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,_=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,w=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",b=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",x=e?"row":"col",v=e?"col":"row",$=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${x} / outWidth;
    let outCol = ${x} % outWidth;

    let WRow = ${v} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${v} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${v} % inChannels;
    var resData = ${Ae(o,p)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${w} && xCol >= 0 && xCol < ${b}) {
      ${g}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${f(o)}
    }
    return resData;`,T=e?t&&a?`
    let col = colIn * ${o};
    ${$}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${$}
    }
    return ${Ae(o,p)}(0.0);`:a&&r?`
    let col = colIn * ${o};
    ${$}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${$}
    }
    return ${Ae(o,p)}(0.0);`,k=e?a&&r?m(l):`
    let col = colIn * ${l};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${m(l)}
    }
    return ${Ae(l,p)}(0.0);`:`
    let col = colIn * ${l};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${m(l)}
    }
    return ${Ae(l,p)}(0.0);`,C=Ae(d,p),E=Ae(e?o:l,p),z=Ae(e?l:o,p),M=Vt(i,C,p);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${E} {
      ${e?T:k}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${z} {
      ${e?k:T}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${C}) {
      let col = colIn * ${d};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${_}
      ${Nh(n)}
      ${M}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Ph=(e,t,r,a,n,i,o,l,d)=>{let p=t.format==="NHWC",f=p?e[0].dims[3]:e[0].dims[1],m=r[0],g=p?r[2]:r[3],_=p?r[1]:r[2],w=p?r[3]:r[1],b=p&&(f%4===0||f%3===0)&&w%4===0,x=p?w:g*_,v=p?g*_:w,$=[8,8,1],T=a<=8?[4,1,1]:[4,4,1],k=[Math.ceil(x/$[0]/T[0]),Math.ceil(v/$[1]/T[1]),Math.ceil(m/$[2]/T[2])];ce("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${k}`);let C=b?p&&f%4!==0?3:4:1,E=$[1]*T[1],z=$[0]*T[0],M=Math.max($[0]*C,$[1]),U=a%E===0,H=n%z===0,j=i%M===0,K=b?[C,4,4]:[1,1,1],Q=[{type:6,data:a},{type:6,data:n},{type:6,data:i},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];qt(t,Q),Q.push(...ee(e[0].dims,e[1].dims));let re=["rank","rank"];o&&(Q.push(...ee(e[2].dims)),re.push("rank")),Q.push(...ee(r));let J=F=>{let de=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Ft(t,de);let he=b?4:1,G=ze(e[0].dataType),ye=`
      fn setOutputAtIndex(flatIndex : i32, value : ${b?`vec4<${G}>`:G}) {
        result[flatIndex] = ${b?`vec4<${G}>`:G}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${b?`vec4<${G}>`:G}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${b?"/ 4":""}, value);
      }`,N=B("x",e[0].dataType,e[0].dims.length,C===3?1:C),V=B("w",e[1].dataType,e[1].dims.length,he),pe=[N,V],ve=X("result",e[0].dataType,r.length,he);if(o){let D=B("bias",e[2].dataType,e[2].dims.length,he);pe.push(D),ye+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${b?`vec4<${G}>`:G} {
          return bias[coords.${p?"w":"y"}${b?"/ 4":""}];
        }`}return`
        ${Dh("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${F.registerUniforms(de).declareVariables(...pe,ve)}
        ${ye}
        ${yl(p,U,H,j,o,t,K[0],K[1],K[2],G)}
        ${b?Ya(T,$,G,void 0,!p,M):en(T,$,G,void 0,!p,M,!1,void 0,l)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${C};${b};${U};${H};${j};${E};${z};${M}`,inputDependencies:re},getRunData:()=>({outputs:[{dims:d?d(r):r,dataType:e[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:Q}),getShaderSource:J}}}),_l,ha,_r,wl,fa,bl,Uh,Wh,x0=L(()=>{ie(),ft(),ue(),le(),jt(),Tn(),_l=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},ha=e=>typeof e=="number"?[e,e,e]:e,_r=(e,t)=>t<=1?e:e+(e-1)*(t-1),wl=(e,t,r,a=1)=>{let n=_r(t,a);return Math.floor((e[0]*(r-1)-r+n)/2)},fa=(e,t,r,a,n)=>{n==null&&(n=wl(e,t[0],a[0]));let i=[0,0,0,r];for(let o=0;o<3;o++)e[o]+2*n>=t[o]&&(i[o]=Math.trunc((e[o]-t[o]+2*n)/a[o]+1));return i},bl=(e,t,r,a,n,i,o,l,d,p)=>{let f,m,g,_;if(e==="VALID"&&(e=0),typeof e=="number"){f={top:e,bottom:e,left:e,right:e,front:e,back:e};let w=fa([t,r,a,1],[l,d,p],1,[n,i,o],e);m=w[0],g=w[1],_=w[2]}else if(Array.isArray(e)){if(!e.every((b,x,v)=>b===v[0]))throw Error(`Unsupported padding parameter: ${e}`);f={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let w=fa([t,r,a,1],[l,d,p],1,[n,i,o],e[0]);m=w[0],g=w[1],_=w[2]}else if(e==="SAME_UPPER"){m=Math.ceil(t/n),g=Math.ceil(r/i),_=Math.ceil(a/o);let w=(m-1)*n+l-t,b=(g-1)*i+d-r,x=(_-1)*o+p-a,v=Math.floor(w/2),$=w-v,T=Math.floor(b/2),k=b-T,C=Math.floor(x/2),E=x-C;f={top:T,bottom:k,left:C,right:E,front:v,back:$}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:f,outDepth:m,outHeight:g,outWidth:_}},Uh=(e,t,r,a,n,i=!1,o="channelsLast")=>{let l,d,p,f,m;if(o==="channelsLast")[l,d,p,f,m]=e;else if(o==="channelsFirst")[l,m,d,p,f]=e;else throw new Error(`Unknown dataFormat ${o}`);let[g,,_,w,b]=t,[x,v,$]=ha(r),[T,k,C]=ha(a),E=_r(_,T),z=_r(w,k),M=_r(b,C),{padInfo:U,outDepth:H,outHeight:j,outWidth:K}=bl(n,d,p,f,x,v,$,E,z,M),Q=i?g*m:g,re=[0,0,0,0,0];return o==="channelsFirst"?re=[l,Q,H,j,K]:o==="channelsLast"&&(re=[l,H,j,K,Q]),{batchSize:l,dataFormat:o,inDepth:d,inHeight:p,inWidth:f,inChannels:m,outDepth:H,outHeight:j,outWidth:K,outChannels:Q,padInfo:U,strideDepth:x,strideHeight:v,strideWidth:$,filterDepth:_,filterHeight:w,filterWidth:b,effectiveFilterDepth:E,effectiveFilterHeight:z,effectiveFilterWidth:M,dilationDepth:T,dilationHeight:k,dilationWidth:C,inShape:e,outShape:re,filterShape:t}},Wh=(e,t,r,a,n,i)=>{let o=i==="channelsLast";o?e[0].dims[3]:e[0].dims[1];let l=[64,1,1],d={x:r.map((x,v)=>v)},p=[Math.ceil(_l(d.x.map(x=>r[x]))/l[0]),1,1];ce("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${p}`);let f=1,m=O.size(r),g=[{type:12,data:m},{type:12,data:a},{type:12,data:n},{type:12,data:t.strides},{type:12,data:t.dilations}];qt(t,g),g.push(...ee(e[0].dims,e[1].dims));let _=["rank","rank"],w=e.length===3;w&&(g.push(...ee(e[2].dims)),_.push("rank")),g.push(...ee(r));let b=x=>{let v=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:a.length},{name:"pads",type:"u32",length:n.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Ft(t,v);let $=1,T=ze(e[0].dataType),k=B("x",e[0].dataType,e[0].dims.length,f),C=B("W",e[1].dataType,e[1].dims.length,$),E=[k,C],z=X("result",e[0].dataType,r.length,$),M="";if(w){let j=B("bias",e[2].dataType,e[2].dims.length,$);E.push(j),M+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${T} {
          return bias[${o?Y("coords",4,5):Y("coords",1,5)}];
        }`}let U=Ae(f,T),H=Vt(t,U,T);return`
            ${M}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${k.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${C.getByIndices("aIndices")};
            }
          ${x.registerUniforms(v).declareVariables(...E,z)}
          ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${z.offsetToIndices("global_idx")};
              let batch = ${Y("coords",0,k.rank)};
              let d2 = ${o?Y("coords",k.rank-1,k.rank):Y("coords",1,k.rank)};
              let xFRCCorner = vec3<u32>(${o?Y("coords",1,k.rank):Y("coords",2,k.rank)},
              ${o?Y("coords",2,k.rank):Y("coords",3,k.rank)},
              ${o?Y("coords",3,k.rank):Y("coords",4,k.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${o?Y("uniforms.x_shape",1,k.rank):Y("uniforms.x_shape",2,k.rank)};
              let xShapeZ = ${o?Y("uniforms.x_shape",2,k.rank):Y("uniforms.x_shape",3,k.rank)};
              let xShapeW = ${o?Y("uniforms.x_shape",3,k.rank):Y("uniforms.x_shape",4,k.rank)};
              let xShapeU = ${o?Y("uniforms.x_shape",4,k.rank):Y("uniforms.x_shape",1,k.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${o?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${o?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${o?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${o?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${w?"value = value + getBiasByOutputCoords(coords)":""};
              ${H}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${o};${f};${w}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:p[0],y:p[1],z:p[2]},programUniforms:g}),getShaderSource:b}}}),Lh,Vh,S0=L(()=>{ie(),ue(),le(),jt(),Lh=(e,t,r,a)=>{let n=e.length>2,i=n?"value += b[output_channel];":"",o=e[0].dims,l=e[1].dims,d=t.format==="NHWC",p=d?r[3]:r[1],f=p/t.group,m=d&&f>=4?Se(p):1,g=O.size(r)/m,_=[{type:12,data:g},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:f}];qt(t,_),_.push(...ee(o,[l[0],l[1],l[2],l[3]/m]));let w=n?["rank","rank","rank"]:["rank","rank"];_.push(...ee([r[0],r[1],r[2],r[3]/m]));let b=x=>{let v=X("output",e[0].dataType,r.length,m),$=ze(v.type.tensor),T=Vt(t,v.type.value,$),k=B("x",e[0].dataType,o.length),C=B("w",e[1].dataType,l.length,m),E=[k,C];n&&E.push(B("b",e[2].dataType,e[2].dims,m));let z=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Ft(t,z);let M=d?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${k.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${C.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${k.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${C.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${x.registerUniforms(z).declareVariables(...E,v)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${v.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${d?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${d?1:2}], outputIndices[${d?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${m} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${d?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${M}
    ${i}
    ${T}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${m}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:_}),getShaderSource:b}},Vh=(e,t,r,a)=>{let n=e.length>2,i=Se(r[3]),o=Se(r[2]),l=O.size(r)/i/o,d=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/i],p=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/i],f=[r[0],r[1],r[2],r[3]/i],m=[{type:12,data:l},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];qt(t,m),m.push(...ee(d,p,f));let g=(o-1)*t.strides[1]+p[1],_=w=>{let b=X("output",e[0].dataType,f.length,i),x=ze(b.type.tensor),v=Vt(t,b.type.value,x),$=B("x",e[0].dataType,d.length,i),T=B("w",e[1].dataType,p.length,i),k=[$,T];n&&k.push(B("b",e[2].dataType,e[2].dims,i));let C=n?"value += b[output_channel];":"",E=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Ft(t,E),`
  ${w.registerUniforms(E).declareVariables(...k,b)}
  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${o}u;
    let col = (index1 % width1) * ${o}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${$.type.value}, ${g}>;
    var values: array<${b.type.value}, ${o}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${p[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${g}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${$.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${$.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${p[1]}; w_width++) {
          let w_val = ${T.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${o}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${o}u; i++) {
      var value = values[i];
      ${C}
      ${v}
      ${b.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${i};${o};${g};${p[0]};${p[1]}`,inputDependencies:n?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:m}),getShaderSource:_}}}),$l,ti,vl,ri,tn,ma,xl,Sl,rn,k0=L(()=>{ue(),v0(),x0(),En(),S0(),jt(),In(),It(),$l=(e,t,r,a,n,i)=>{let o=e[0],l=e.slice(i?1:2,i?3:4),d=l.length,p=t[0],f=t.slice(2).map((g,_)=>g+(g-1)*(r[_]-1)),m=l.map((g,_)=>g+a[_]+a[_+d]).map((g,_)=>Math.floor((g-f[_]+n[_])/n[_]));return m.splice(0,0,o),m.splice(i?3:1,0,p),m},ti=[2,3,1,0],vl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[1]*t.group;if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},ri=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let i=2;i<t[1].dims.length;++i)r[i-2]===0&&(r[i-2]=t[1].dims[i]);let a=e.pads.slice();gi.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,a,e.format==="NHWC",e.autoPad);let n=Object.assign({},e);return Object.assign(n,{kernelShape:r,pads:a}),n},tn=e=>{let t=kn(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],n=e.dilations,i=e.group,o=e.kernel_shape,l=e.pads,d=e.strides,p=e.w_is_const();return{autoPad:a,format:r,dilations:n,group:i,kernelShape:o,pads:l,strides:d,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},ma=(e,t,r,a)=>{let n=r.format==="NHWC",i=$l(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,n);if(r.group!==1){let E=[t[0]];if(n){let z=e.kernelCustomData.wT??e.compute(qe(t[1],ti),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=z),E.push(z)}else E.push(t[1]);t.length===3&&E.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&n&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(Vh(E,r,i,a),{inputs:E}):e.compute(Lh(E,r,i,a),{inputs:E});return}let o=t.length===3,l=t[0].dims[n?1:2],d=t[0].dims[n?2:3],p=t[0].dims[n?3:1],f=t[1].dims[2],m=t[1].dims[3],g=i[n?1:2],_=i[n?2:3],w=i[n?3:1],b=n&&f===l&&m===d&&r.pads[0]===0&&r.pads[1]===0;if(b||f===1&&m===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let E=i[0],z,M,U,H=[];if(n){let Q=e.kernelCustomData.wT??e.compute(qe(t[1],ti),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=Q),b){let re=l*d*p;z=t[0].reshape([1,E,re]),M=Q.reshape([1,re,w]),U=[1,E,w]}else z=t[0].reshape([E,l*d,p]),M=Q.reshape([1,p,w]),U=[E,g*_,w];H.push(z),H.push(M)}else z=t[0].reshape([E,p,l*d]),M=t[1].reshape([1,w,p]),U=[E,w,g*_],H.push(M),H.push(z);o&&H.push(t[2]);let j=U[2],K=H[0].dims[H[0].dims.length-1];j<8&&K<8?e.compute(Cn(H,r,i,U,n,a),{inputs:H}):e.compute(_i(H,r,i,U,n,a),{inputs:H});return}let x=!0,v=e.kernelCustomData.wT??e.compute(qe(t[1],ti),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let $=[t[0],v];o&&$.push(t[2]);let T=n?g*_:w,k=n?w:g*_,C=f*m*p;e.compute(Ph($,r,i,T,k,C,o,x,a),{inputs:$})},xl=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let n=[0,t.pads[0],0,t.pads[1]],i=[1].concat(t.strides),o=[1].concat(t.dilations),l=[1].concat(t.kernelShape),d=ri({...t,pads:n,strides:i,dilations:o,kernelShape:l},a);ma(e,a,d,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},Sl=(e,t,r)=>{let a=r.format==="NHWC"?"channelsLast":"channelsFirst",n=ri(r,t),i=r.autoPad==="NOTSET"?r.pads:r.autoPad,o=Uh(t[0].dims,t[1].dims,r.strides,r.dilations,i,!1,a);e.compute(Wh(t,n,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],a))},rn=(e,t)=>{if(vl(e.inputs,t),e.inputs[0].dims.length===3)xl(e,t);else if(e.inputs[0].dims.length===5)Sl(e,e.inputs,t);else{let r=ri(t,e.inputs);ma(e,e.inputs,r)}}}),qh,T0=L(()=>{ie(),ft(),ue(),le(),qh=(e,t,r)=>{let a=e.length>2,n=t.outputShape,i=t.format==="NHWC",o=t.group,l=e[1].dims,d=l[2]/o,p=l[3],f=i?Se(d):1,m=i?Se(p):1,g=i?p===1?f:m:1,_=O.size(n)/m,w=[Math.ceil(_/64),1,1];ce("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${w}`);let b=["rank","rank"],x=[t.strides[0],t.strides[1]],v=[t.kernelShape[i?1:2],t.kernelShape[i?2:3]],$=[t.dilations[0],t.dilations[1]],T=[v[0]+(t.dilations[0]<=1?0:(t.kernelShape[i?1:2]-1)*(t.dilations[0]-1)),v[1]+(t.dilations[1]<=1?0:(t.kernelShape[i?2:3]-1)*(t.dilations[1]-1))],k=[T[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),T[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],C=[{type:12,data:_},{type:12,data:x},{type:12,data:v},{type:12,data:$},{type:12,data:T},{type:6,data:k},{type:12,data:d},{type:12,data:p},...ee(e[0].dims,e[1].dims)];a&&(C.push(...ee(e[2].dims)),b.push("rank")),C.push(...ee(n));let E=z=>{let M=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:x.length},{name:"filter_dims",type:"u32",length:v.length},{name:"dilations",type:"u32",length:v.length},{name:"effective_filter_dims",type:"u32",length:T.length},{name:"pads",type:"i32",length:k.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],U=ze(e[0].dataType),H=i?1:2,j=i?2:3,K=i?3:1,Q=B("W",e[1].dataType,e[1].dims.length,g),re=B("Dy",e[0].dataType,e[0].dims.length,f),J=[re,Q];a&&J.push(B("bias",e[2].dataType,[n[K]].length,m));let F=X("result",e[0].dataType,n.length,m),de=()=>{let G="";if(f===1)G+=`
        let w_offset = ${Q.indicesToOffset(`${Q.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
        let wValue = ${Q.getByOffset(`w_offset / ${g}`)};
        dotProd = dotProd + xValue * wValue;`;else if(p===1)G+=`
          let wValue = ${Q.getByOffset(`${Q.indicesToOffset(`${Q.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)} / ${g}`)};
          dotProd = dotProd + dot(xValue, wValue);`;else for(let ye=0;ye<f;ye++)G+=`
            let wValue${ye} = ${Q.getByOffset(`${Q.indicesToOffset(`${Q.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${ye}, wOutChannel)`)} / ${g}`)};
            dotProd = dotProd + xValue[${ye}] * wValue${ye};`;return G},he=`
            let outputIndices = ${F.offsetToIndices(`global_idx * ${m}`)};
            let batch = ${F.indicesGet("outputIndices",0)};
            let d1 = ${F.indicesGet("outputIndices",K)};
            let r = ${F.indicesGet("outputIndices",H)};
            let c = ${F.indicesGet("outputIndices",j)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${F.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${U}(dyRCorner) + ${U}(wR)) / ${U}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${U}(uniforms.Dy_shape[${H}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }

              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${U}(dyCCorner) + ${U}(wC)) / ${U}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${U}(uniforms.Dy_shape[${j}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + ${f}) {
                  let xValue = ${i?re.getByOffset(`${re.indicesToOffset(`${re.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${f}`):re.get("batch","inputChannel","idyR","idyC")};
                  ${de()}
                  inputChannel = inputChannel + ${f};
                }
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${a?` + bias[d1 / ${m}]`:""};
            ${F.setByOffset("global_idx","value")};
          `;return`
    ${z.registerUniforms(M).declareVariables(...J,F)}
      ${z.mainStart()}
      ${z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${he}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${f}${g}${m}${p===1}`,inputDependencies:b},getRunData:()=>({dispatchGroup:{x:w[0],y:w[1],z:w[2]},outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],programUniforms:C}),getShaderSource:E}}}),kl,Tl,Cl,ga,Fh,Il,ya,El,Gh,C0=L(()=>{T0(),jt(),It(),kl=(e,t,r,a,n,i)=>(e-1)*t+r+(a-1)*n+1-i,Tl=(e,t,r,a,n)=>{let i=Math.floor(e/2);t==="SAME_UPPER"?(r[a]=i,r[n]=e-i):t==="SAME_LOWER"&&(r[a]=e-i,r[n]=i)},Cl=(e,t,r,a,n,i,o,l,d,p)=>{let f=e.length-2,m=p.length===0;d.length<f&&d.push(...Array(f-d.length).fill(0));let g=e[0],_=t[l?3:1]*n;for(let w=0,b=e.length-f-(l?1:0);w<f;++w,++b){let x=e[b],v=m?x*o[w]:p[w],$=kl(x,o[w],i[w],t[b],r[w],v);Tl($,a,i,w,w+f),m&&p.push(o[w]*(x-1)+d[w]+(t[b]-1)*r[w]+1-i[w]-i[w+f])}p.splice(0,0,g),p.splice(l?3:1,0,_)},ga=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((m,g)=>m*g,1)===0){r.length=0;for(let m=2;m<t[1].dims.length;++m)r.push(t[1].dims[m])}let a=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(a?3:1,0,t[1].dims[1]);let n=e.pads.slice(),i=e.outputShape.slice(),o=e.outputPadding.slice(),l=t[0].dims,d=e.dilations.slice();if(d.reduce((m,g)=>m+g,0)===0){let m=t[0].dims.length-2;d=new Array(m).fill(1)}let p=e.strides.slice();if(p.reduce((m,g)=>m+g,0)===0){let m=t[0].dims.length-2;p=new Array(m).fill(1)}Cl(l,r,d,e.autoPad,e.group,n,p,a,o,i);let f=Object.assign({},e);return Object.assign(f,{kernelShape:r,pads:n,outputPadding:o,outputShape:i,dilations:d,strides:p}),f},Fh=e=>{let t=kn(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],n=e.dilations,i=e.group,o=e.kernelShape,l=e.pads,d=e.strides,p=e.wIsConst(),f=e.outputPadding,m=e.outputShape;return{autoPad:a,format:r,dilations:n,group:i,kernelShape:o,outputPadding:f,outputShape:m,pads:l,strides:d,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},Il=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[0];if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.reduce((o,l)=>o+l,0)>0&&t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.reduce((o,l)=>o+l,0)>0&&t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.reduce((o,l)=>o+l,0)>0&&t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.outputPadding.length!==i&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${i}D`);if(t.kernelShape.reduce((o,l)=>o+l,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},ya=(e,t,r,a)=>{let n=e.kernelCustomData.wT??e.compute(qe(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=n);let i=[t[0],n];t.length===3&&i.push(t[2]),e.compute(qh(i,r,a),{inputs:i})},El=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let n=t.kernelShape;(n.length===0||n[0]===0)&&(n=[e.inputs[1].dims[2]]);let i=t.dilations;(i.length===0||i[0]===0)&&(i=[1]);let o=t.strides;(o.length===0||o[0]===0)&&(o=[1]);let l=t.pads;l.length===0&&(l=[0,0]),l=[0,l[0],0,l[1]],o=[1].concat(o),i=[1].concat(i),n=[1].concat(n);let d=t.outputPadding;d=[0].concat(d);let p=ga({...t,pads:l,strides:o,dilations:i,kernelShape:n,outputPadding:d},a);ya(e,a,p,f=>r?[f[0],f[2],f[3]]:[f[0],f[1],f[3]])},Gh=(e,t)=>{if(Il(e.inputs,t),e.inputs[0].dims.length===3)El(e,t);else{let r=ga(t,e.inputs);ya(e,e.inputs,r)}}}),zl,Hh,jh,I0=L(()=>{ie(),ue(),ke(),le(),zl=(e,t,r,a)=>{let n=O.size(t),i=t.length,o=B("input",e,i),l=X("output",e,i),d=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),p=O.normalizeAxis(d,i),f=m=>{let g=` i32(${o.indicesGet("inputIndices","uniforms.axis")}) `,_=Y("uniforms.input_shape","uniforms.axis",i),w=a.reverse?g+(a.exclusive?" + 1":""):"0",b=a.reverse?_:g+(a.exclusive?"":" + 1");return`
                ${m.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(o,l)}
                ${m.mainStart()}
                  ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${l.offsetToIndices("global_idx")};
                  var sum = ${l.type.value}(0);
                  let first : i32 = ${w};
                  let last : i32 = ${b};
                  for (var i : i32 = first; i < last; i++) {
                    ${o.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${o.getByIndices("inputIndices")};
                  }
                  ${l.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:a.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},{type:12,data:p},...ee(t,t)]}),getShaderSource:f}},Hh=(e,t)=>{let r=e.inputs[0].dims,a=e.inputs[0].dataType,n=e.inputs[1];e.compute(zl(a,r,n,t),{inputs:[0]})},jh=e=>{let t=e.exclusive===1,r=e.reverse===1;return we({exclusive:t,reverse:r})}}),Al,Ol,Ml,Kh,Zh,E0=L(()=>{ie(),ue(),ke(),le(),Al=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Ol=(e,t,r,a)=>{let n=[];n.push(`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let i=0;i<t;++i)n.push(r.indicesSet("a",e[i],`i[${i}]`));return n.push("return a;}"),n.join(`
`)},Ml=(e,t)=>{let r,a,n,i,o,l,d=t.format==="NHWC",p=t.blocksize,f=t.mode==="DCR";d?([r,a,n,i]=e.dims,o=f?[r,a,n,p,p,i/p**2]:[r,a,n,i/p**2,p,p],l=f?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,a,n,i]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],o=f?[r,p,p,i/p**2,a,n]:[r,i/p**2,p,p,a,n],l=f?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let m=e.reshape(o),g=m.dims.length,_=e.dataType,w=B("a",_,g),b=X("output",_,g),x=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(w,b)}

  ${Ol(l,g,w,b)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let $=d?[r,a*p,n*p,i/p**2]:[r,i/p**2,a*p,n*p],T=O.size($),k=m.dims,C=O.sortBasedOnPerm(k,l);return{outputs:[{dims:$,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...ee(k,C)]}},getShaderSource:x}},Kh=(e,t)=>{Al(e.inputs),e.compute(Ml(e.inputs[0],t))},Zh=e=>we({blocksize:e.blocksize,mode:e.mode,format:e.format})}),ii,wr,_a,Rl,Bl,Nl,Dl,wa,Pl,Qh,Xh,z0=L(()=>{ie(),ue(),ke(),le(),ii="[a-zA-Z]|\\.\\.\\.",wr="("+ii+")+",_a="^"+wr+"$",Rl="("+wr+",)*"+wr,Bl="^"+Rl+"$",Nl=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Dl=class{constructor(e,t){var n;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,a]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(Bl)))throw new Error("Invalid LHS term");if(r.split(",").forEach((i,o)=>{let l=e[o].dims.slice();if(!i.match(RegExp(_a)))throw new Error("Invalid LHS term");let d=this.processTerm(i,!0,l,o);this.lhs.push(d)}),a==="")a+=[...this.symbolToInfo.entries()].filter(([i,o])=>o.count===1||i==="...").map(([i])=>i).join("");else if(!a.match(RegExp(wr)))throw new Error("Invalid RHS");(n=a.match(RegExp(ii,"g")))==null||n.forEach(i=>{if(i==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let o=this.symbolToInfo.get(i);if(o===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(o.dimValue)}}),this.rhs=this.processTerm(a,!1,this.outputDims)}addSymbol(e,t,r){let a=this.symbolToInfo.get(e);if(a!==void 0){if(a.dimValue!==t&&a.count!==1)throw new Error("Dimension mismatch");a.count++,a.inputIndices.push(r)}else a={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,a)}processTerm(e,t,r,a=-1){let n=r.length,i=!1,o=[],l=0;if(!e.match(RegExp(_a))&&!t&&e!=="")throw new Error("Invalid LHS term");let d=e.match(RegExp(ii,"g")),p=new Nl(a);return d==null||d.forEach((f,m)=>{if(f==="..."){if(i)throw new Error("Only one ellipsis is allowed per input term");i=!0;let g=n-d.length+1;if(g<0)throw new Error("Ellipsis out of bounds");if(o=r.slice(l,l+g),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=o;else throw new Error("Ellipsis must be specified in the LHS");for(let _=0;_<o.length;_++){let w=String.fromCharCode(48+_);p.addSymbol(w,m+_),this.addSymbol(w,r[l++],a)}}else p.addSymbol(f,m+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(f,r[l++],a)}),p}},wa=e=>e+"_max",Pl=(e,t,r,a)=>{let n=e.map(p=>p.length).map((p,f)=>B(`input${f}`,t,p)),i=O.size(a),o=X("output",t,a.length),l=[...r.symbolToInfo.keys()].filter(p=>!r.rhs.symbolToIndices.has(p)),d=p=>{let f=[],m="var prod = 1.0;",g="var sum = 0.0;",_="sum += prod;",w=[],b=[],x=[],v=[],$=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((k,C)=>{var E;if(r.rhs.symbolToIndices.has(C)){let z=(E=r.rhs.symbolToIndices.get(C))==null?void 0:E[0];z!==void 0&&r.lhs.forEach((M,U)=>{if(k.inputIndices.includes(U)){let H=M.symbolToIndices.get(C);if(H===void 0)throw new Error("Invalid symbol error");H.forEach(j=>{f.push(`${n[U].indicesSet(`input${U}Indices`,j,o.indicesGet("outputIndices",z))}`)})}})}else r.lhs.forEach((z,M)=>{if(k.inputIndices.includes(M)){let U=z.symbolToIndices.get(C);if(U===void 0)throw new Error("Invalid symbol error");U.forEach(H=>{w.push(`${n[M].indicesSet(`input${M}Indices`,H,`${C}`)}`)}),v.push(`prod *= ${n[M].getByIndices(`input${M}Indices`)};`)}}),b.push(`for(var ${C}: u32 = 0; ${C} < uniforms.${wa(C)}; ${C}++) {`),x.push("}")});let T=$?[...f,`let sum = ${n.map((k,C)=>k.getByIndices(`input${C}Indices`)).join(" * ")};`]:[...f,g,...b,...w,m,...v,_,...x];return`
            ${p.registerUniforms(l.map(k=>({name:`${wa(k)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...n,o)}

            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${o.offsetToIndices("global_idx")};
            ${n.map((k,C)=>`var input${C}Indices: ${n[C].type.indices};`).join(`
`)}
            ${T.join(`
`)};
            ${o.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let p=l.filter(m=>r.symbolToInfo.has(m)).map(m=>{var g;return{type:12,data:((g=r.symbolToInfo.get(m))==null?void 0:g.dimValue)||0}});p.push({type:12,data:i});let f=e.map((m,g)=>[...ee(m)]).reduce((m,g)=>m.concat(g),p);return f.push(...ee(a)),{outputs:[{dims:a,dataType:t}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:f}},getShaderSource:d}},Qh=(e,t)=>{let r=new Dl(e.inputs,t.equation),a=r.outputDims,n=e.inputs.map((i,o)=>i.dims);e.compute(Pl(n,e.inputs[0].dataType,r,a))},Xh=e=>{let t=e.equation.replace(/\s+/g,"");return we({equation:t})}}),Ul,ba,Wl,Ll,Jh,A0=L(()=>{ie(),ue(),le(),Ul=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=r.length<t.length?0:r.length-t.length,n=t.length<r.length?0:t.length-r.length;for(;a<r.length&&n<t.length;++a,++n)if(r[a]!==t[n]&&r[a]!==1&&t[n]!==1)throw new Error("Expand requires shape to be broadcastable to input")},ba=(e,t)=>{let r=e.length-t.length,a=[];for(let n=0;n<r;++n)a.push(e[n]);for(let n=0;n<t.length;++n)a.push(t[n]===1?e[n+r]:t[n]);return a},Wl=(e,t)=>e.length>t.length?ba(e,t):ba(t,e),Ll=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=Wl(t,r),n=e[0].dataType,i=n===9||O.size(t)===1,o=n===9||t.length>0&&t[t.length-1]%4===0?4:1,l=i||a.length>0&&a[a.length-1]%4===0?4:1,d=Math.ceil(O.size(a)/l),p=m=>{let g=B("input",n,t.length,o),_=X("output",n,a.length,l),w;if(n===9){let b=(x,v,$="")=>`
          let outputIndices${v} = ${_.offsetToIndices(`outputOffset + ${v}u`)};
          let offset${v} = ${g.broadcastedIndicesToOffset(`outputIndices${v}`,_)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${x}[${v}] = ${$}(${g.getByOffset(`index${v}`)}[component${v}]);
        `;w=`
        let outputOffset = global_idx * ${l};
        var data = vec4<u32>(0);
        ${b("data",0,"u32")}
        ${b("data",1,"u32")}
        ${b("data",2,"u32")}
        ${b("data",3,"u32")}
        ${_.setByOffset("global_idx","data")}
      }`}else w=`
        let outputIndices = ${_.offsetToIndices(`global_idx * ${l}`)};
        let inputOffset = ${g.broadcastedIndicesToOffset("outputIndices",_)};
        let data = ${_.type.value}(${g.getByOffset(`inputOffset / ${o}`)});
        ${_.setByOffset("global_idx","data")}
      }`;return`
    ${m.registerUniform("vec_size","u32").declareVariables(g,_)}
    ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${w}`},f=[{type:12,data:d},...ee(t,a)];return{name:"Expand",shaderCache:{hint:`${a.length};${o}${l}`,inputDependencies:["rank"]},getShaderSource:p,getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:f})}},Jh=e=>{Ul(e.inputs),e.compute(Ll(e.inputs),{inputs:[0]})}}),Vl,Yh,O0=L(()=>{ie(),ue(),le(),Sn(),Vl=e=>{let t=e[0].dataType,r=O.size(e[0].dims),a=O.size(e[1].dims),n=a%4===0,i=o=>{let l=B("x",t,[1],4),d=B("bias",t,[1],4),p=X("y",t,[1],4),f=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],m=_=>`
      let bias${_}_offset: u32 = (global_idx * 4 + ${_}) % uniforms.bias_size;
      let bias${_} = ${d.getByOffset(`bias${_}_offset / 4`)}[bias${_}_offset % 4];`,g=n?`
      let bias = ${d.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${m(0)}${m(1)}${m(2)}${m(3)}
      let bias = ${l.type.value}(bias0, bias1, bias2, bias3);`;return`${o.registerUniforms(f).declareVariables(l,d,p)}

    ${Xa(Me(t))}

    ${o.mainStart(ir)}
      ${o.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${l.getByOffset("global_idx")};
      ${g}
      let x_in = x + bias;
      ${p.setByOffset("global_idx",Ja("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${n}`,inputDependencies:["type","type"]},getShaderSource:i,getRunData:o=>({outputs:[{dims:o[0].dims,dataType:o[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:a}],dispatchGroup:{x:Math.ceil(r/ir/4)}})}},Yh=e=>{e.inputs.length<2||O.size(e.inputs[1].dims)===0?wh(e):e.compute(Vl(e.inputs))}}),ql,Fl,ef,tf,M0=L(()=>{ie(),ue(),ke(),le(),ql=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Fl=(e,t)=>{let r=e[0].dims,a=e[1].dims,n=r.length,i=O.normalizeAxis(t.axis,n),o=r.slice(0);o.splice(i,1,...a);let l=r[i],d=e[0].dataType===9?4:1,p=Math.ceil(O.size(o)/d),f=[{type:12,data:p},{type:6,data:l},{type:12,data:i},...ee(e[0].dims,e[1].dims,o)],m=g=>{let _=B("data",e[0].dataType,e[0].dims.length,d),w=B("inputIndices",e[1].dataType,e[1].dims.length),b=X("output",e[0].dataType,o.length,d),x=$=>{let T=a.length,k=`var indicesIndices${$}  = ${w.type.indices}(0);`;for(let C=0;C<T;C++)k+=`${T>1?`indicesIndices${$}[${C}]`:`indicesIndices${$}`} = ${o.length>1?`outputIndices${$}[uniforms.axis + ${C}]`:`outputIndices${$}`};`;k+=`
          var idx${$} = ${w.getByIndices(`indicesIndices${$}`)};
          if (idx${$} < 0) {
            idx${$} = idx${$} + uniforms.axisDimLimit;
          }
          var dataIndices${$} : ${_.type.indices};
        `;for(let C=0,E=0;C<n;C++)C===i?(k+=`${n>1?`dataIndices${$}[${C}]`:`dataIndices${$}`} = u32(idx${$});`,E+=T):(k+=`${n>1?`dataIndices${$}[${C}]`:`dataIndices${$}`} = ${o.length>1?`outputIndices${$}[${E}]`:`outputIndices${$}`};`,E++);return k},v;if(e[0].dataType===9){let $=(T,k,C="")=>`
          let outputIndices${k} = ${b.offsetToIndices(`outputOffset + ${k}u`)};
          ${x(k)};
          let offset${k} = ${_.indicesToOffset(`dataIndices${k}`)};
          let index${k} = offset${k} / 4u;
          let component${k} = offset${k} % 4u;
          ${T}[${k}] = ${C}(${_.getByOffset(`index${k}`)}[component${k}]);
        `;v=`
        let outputOffset = global_idx * ${d};
        var value = vec4<u32>(0);
        ${$("value",0,"u32")}
        ${$("value",1,"u32")}
        ${$("value",2,"u32")}
        ${$("value",3,"u32")}
        ${b.setByOffset("global_idx","value")}
      `}else v=`
      let outputIndices = ${b.offsetToIndices("global_idx")};
      ${x("")};
      let value = ${_.getByIndices("dataIndices")};
      ${b.setByOffset("global_idx","value")};
      `;return`
      ${g.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(_,w,b)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:m}},ef=e=>we({axis:e.axis}),tf=(e,t)=>{let r=e.inputs;ql(r),e.compute(Fl(e.inputs,t))}}),Gl,rf,af,R0=L(()=>{ie(),ue(),le(),Gl=(e,t,r,a,n,i,o,l,d)=>{let p=[{type:12,data:i},{type:12,data:a},{type:12,data:n},{type:12,data:r},{type:12,data:o},{type:12,data:l},{type:12,data:d}],f=[i];p.push(...ee(t.dims,f));let m=g=>{let _=B("indices_data",t.dataType,t.dims.length),w=X("input_slice_offsets_data",12,1,1),b=[_,w],x=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:n.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${g.registerUniforms(x).declareVariables(...b)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${n.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${n.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:f,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:p}),getShaderSource:m},{inputs:[t],outputs:[-1]})[0]},rf=(e,t)=>{let r=e.inputs,a=r[0].dims,n=r[0].dataType,i=r[1].dims,o=i[i.length-1],l=O.sizeToDimension(i,i.length-1),d=O.sizeFromDimension(a,t.batchDims+o),p=O.sizeToDimension(a,t.batchDims),f=O.sizeFromDimension(a,t.batchDims),m=l/p,g=new Array(o),_=d;for(let k=0;k<o;++k)g[o-1-k]=_,_*=a[t.batchDims+o-1-k];let w=Gl(e,r[1],g,t.batchDims,a,l,m,f,o),b=t.batchDims+o;if(b>a.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let x=i.slice(0,-1).concat(a.slice(b)),v=O.size(x),$=[{type:12,data:v},{type:12,data:d},...ee(r[0].dims,w.dims,x)],T=k=>{let C=B("data",r[0].dataType,r[0].dims.length),E=B("slice_offsets",12,w.dims.length),z=X("output",r[0].dataType,x.length);return`
          ${k.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(C,E,z)}
            ${k.mainStart()}
            ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:x,dataType:n}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:$}),getShaderSource:T},{inputs:[r[0],w]})},af=e=>({batchDims:e.batch_dims,cacheKey:""})}),Hl,jl,nf,sf,B0=L(()=>{ie(),ue(),ke(),le(),Hl=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=O.normalizeAxis(t.quantizeAxis,e[0].dims.length),a=t.blockSize,n=e[0],i=e[2],o=e.length===4?e[3]:void 0;if(i.dims.length!==n.dims.length||!n.dims.map((l,d)=>d===r?Math.ceil(l/a)===i.dims[d]:l===i.dims[d]).reduce((l,d)=>l&&d,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(o){if(o.dataType!==n.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(o.dims.length!==i.dims.length||!o.dims.map((l,d)=>l===i.dims[d]).reduce((l,d)=>l&&d,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},jl=(e,t)=>{let r=e[0].dims,a=e[1].dims,n=r.length,i=O.normalizeAxis(t.gatherAxis,n),o=O.normalizeAxis(t.quantizeAxis,n),l=r.slice(0);l.splice(i,1,...a);let d=O.size(l),p=e[2].dataType,f=e[0].dataType===22,m=[{type:12,data:d},{type:12,data:o},{type:12,data:i},{type:12,data:t.blockSize},...ee(...e.map((_,w)=>_.dims),l)],g=_=>{let w=B("data",e[0].dataType,e[0].dims.length),b=B("inputIndices",e[1].dataType,e[1].dims.length),x=B("scales",e[2].dataType,e[2].dims.length),v=e.length>3?B("zeroPoint",e[3].dataType,e[3].dims.length):void 0,$=X("output",p,l.length),T=[w,b,x];v&&T.push(v);let k=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${_.registerUniforms(k).declareVariables(...T,$)}
        ${_.mainStart()}
        let output_indices = ${$.offsetToIndices("global_idx")};
        var indices_indices = ${b.type.indices}(0);
        ${a.length>1?`
          for (var i: u32 = 0; i < ${a.length}; i++) {
            let index = ${$.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${b.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${$.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${w.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${$.indicesGet("output_indices","i")};
          ${w.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${b.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[i]};
        }
        ${w.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${l.length}; i++) {
          let index = ${$.indicesGet("output_indices",`i + ${a.length} - 1`)};
          ${w.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${w.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${w.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${x.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${x.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${x.getByIndices("scale_indices")};
        ${v?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${v.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${v.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Me(p)}(quantized_data - zero_point) * scale;
        ${$.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((_,w)=>w!==1).map(_=>_.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(_,w)=>"rank")},getRunData:()=>({outputs:[{dims:l,dataType:p}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:m}),getShaderSource:g}},nf=(e,t)=>{let r=e.inputs;Hl(r,t),e.compute(jl(e.inputs,t))},sf=e=>we({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Kl,Zl,of,uf,N0=L(()=>{ie(),ue(),ke(),le(),Kl=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Zl=(e,t)=>{let r=e[0].dims,a=e[0].dataType,n=r.length,i=e[1].dims,o=e[1].dataType,l=O.normalizeAxis(t.axis,n),d=r[l],p=i.slice(0),f=O.size(p),m=B("input",a,n),g=B("indicesInput",o,i.length),_=X("output",a,p.length),w=[{type:12,data:f},{type:6,data:d},{type:12,data:l}];return w.push(...ee(r,i,p)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:w}),getShaderSource:b=>`
      ${b.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(m,g,_)}
      ${b.mainStart()}
      ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${_.offsetToIndices("global_idx")};

      var idx = ${g.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${m.type.indices}(outputIndices);
      ${m.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${m.getByIndices("inputIndices")};

      ${_.setByOffset("global_idx","value")};
  }`}},of=e=>we({axis:e.axis}),uf=(e,t)=>{let r=e.inputs;Kl(r),e.compute(Zl(e.inputs,t))}}),Ql,Xl,lf,df,D0=L(()=>{ie(),ue(),le(),Ql=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Xl=(e,t)=>{let r=e[0].dims.slice(),a=e[1].dims.slice(),[n,i,o]=dc.getShapeOfGemmResult(r,t.transA,a,t.transB,e.length===3?e[2].dims:void 0),l=[n,i];if(!l)throw new Error("Can't use gemm on the given tensors");let d=16,p=Math.ceil(i/d),f=Math.ceil(n/d),m=!0,g=O.size(l),_=[{type:12,data:m?p:g},{type:12,data:n},{type:12,data:i},{type:12,data:o},{type:1,data:t.alpha},{type:1,data:t.beta}],w=["type","type"];e.length===3&&(_.push(...ee(e[2].dims)),w.push("rank")),_.push(...ee(l));let b=v=>{let $="";t.transA&&t.transB?$="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?$="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?$="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&($="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let T=t.alpha===1?"":"value *= uniforms.alpha;",k=B("a",e[0].dataType,e[0].dims),C=B("b",e[1].dataType,e[1].dims),E=k.type.value,z=null,M=[k,C];e.length===3&&(z=B("c",e[2].dataType,e[2].dims.length),M.push(z));let U=X("output",e[0].dataType,l.length);M.push(U);let H=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${v.registerUniforms(H).declareVariables(...M)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${E}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${$}
    }

    ${T}
    ${z!=null?`let cOffset = ${z.broadcastedIndicesToOffset("vec2(m, n)",U)}; value += ${E}(uniforms.beta) * ${z.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},x=v=>{let $=B("a",e[0].dataType,e[0].dims),T=B("b",e[1].dataType,e[1].dims),k=null,C=[$,T];e.length===3&&(k=B("c",e[2].dataType,e[2].dims.length),C.push(k));let E=X("output",e[0].dataType,l.length);C.push(E);let z=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],M="",U="";t.transA&&t.transB?(U=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,M="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(U=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,M="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(U=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,M="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(U=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,M="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let H=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${v.registerUniforms(z).declareVariables(...C)}
  var<workgroup> tile_a: array<array<${$.type.storage}, ${d}>, ${d}>;
  var<workgroup> tile_b: array<array<${T.type.storage}, ${d}>, ${d}>;
  ${v.mainStart([d,d,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${d};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${d};
    let num_tiles = (uniforms.K - 1) / ${d} + 1;
    var k_start = 0u;
    var value = ${E.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${U}
      k_start = k_start + ${d};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${d}; k++) {
        ${M}
      }
      workgroupBarrier();
    }

    ${H}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",E)}; value += ${E.type.value}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return m?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:p*f},programUniforms:_}),getShaderSource:x}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:_}),getShaderSource:b}},lf=e=>{let t=e.transA,r=e.transB,a=e.alpha,n=e.beta;return{transA:t,transB:r,alpha:a,beta:n,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},df=(e,t)=>{Ql(e.inputs),e.compute(Xl(e.inputs,t))}}),ut,ht,Ot,Mt,Jl,Yl,ed,td,rd,id,ad,nd,pf,cf,P0=L(()=>{ie(),ue(),ke(),le(),[ut,ht,Ot,Mt]=[0,1,2,3],Jl=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Yl=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,ed=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,td=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,rd=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,id=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${ut}] = batch;
     indices[${ht}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Ot}] = u32(r);
            indices[${Mt}] = u32(c);
          }
        `;case"border":return`
          indices[${Ot}] = u32(clamp(r, 0, H - 1));
          indices[${Mt}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Ot}] = gs_reflect(r, border[1], border[3]);
          indices[${Mt}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,ad=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${ut}], indices[${ht}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${ut}], indices[${ht}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${ut}], indices[${ht}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${ut}], indices[${ht}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${ut}], indices[${ht}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${ut}], indices[${ht}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,nd=(e,t)=>{let r=B("x",e[0].dataType,e[0].dims.length),a=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],n=B("grid",e[1].dataType,a.length,2),i=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(i=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[ut,ht,Ot,Mt]=[0,3,1,2]);let o=X("output",e[0].dataType,i.length),l=r.type.value,d=O.size(i),p=[{type:12,data:d},...ee(e[0].dims,a,i)],f=m=>`
  ${m.registerUniform("output_size","u32").declareVariables(r,n,o)}
  ${Yl}
  ${ed(l)}
  ${td(t)}
  ${rd(t)}
  ${id(r,l,t)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Ot}]);
      let W_in = i32(uniforms.x_shape[${Mt}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${o.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${ut}], indices[${Ot}], indices[${Mt}]);
      let nxy = ${n.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${ad(o,l,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:m=>{let g=O.size(i);return{outputs:[{dims:i,dataType:m[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:p}},getShaderSource:f}},pf=(e,t)=>{Jl(e.inputs),e.compute(nd(e.inputs,t))},cf=e=>we({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Be,sd,hf,$a,od,Ir,ff,mf=L(()=>{ie(),ue(),ke(),bn(),xn(),le(),It(),Be=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,sd=(e,t)=>{let r=e[0],a=Be(e,1),n=Be(e,2),i=Be(e,3),o=Be(e,4),l=Be(e,5),d=Be(e,6),p=Be(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let f=r.dims[0],m=r.dims[1],g=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],_=m,w=0,b=0,x=Math.floor(g/t.numHeads);if(d&&p&&O.size(d.dims)&&O.size(p.dims)){if(d.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(d.dims[0]!==f||d.dims[1]!==t.numHeads||d.dims[3]!==x)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(p.dims[0]!==f||p.dims[1]!==t.numHeads||p.dims[3]!==x)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[2]!==p.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(p.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');w=d.dims[2],b=d.dims[2]}else if(d&&O.size(d.dims)||p&&O.size(p.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(a&&O.size(a.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(a.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,_=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==x)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,_=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==x)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,_=a.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(i&&O.size(i.dims)>0){if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(a&&a.dims.length===5&&a.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let $=w+_,T=0;if(o&&O.size(o.dims)>0){T=8;let z=o.dims;throw z.length===1?z[0]===f?T=1:z[0]===3*f+2&&(T=3):z.length===2&&z[0]===f&&z[1]===$&&(T=5),T===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let k=!1,C=g;if(n&&O.size(n.dims)>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(_!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');C=n.dims[2]}else{if(_!==n.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');C=n.dims[1]*n.dims[3],k=!0}}let E=!1;if(o&&O.size(o.dims)>0)throw new Error("Key padding mask is not supported");if(l&&O.size(l.dims)>0){if(l.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(l.dims[0]!==f||l.dims[1]!==t.numHeads||l.dims[2]!==m||l.dims[3]!==$)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:f,sequenceLength:m,pastSequenceLength:w,kvSequenceLength:_,totalSequenceLength:$,maxSequenceLength:b,inputHiddenSize:0,hiddenSize:g,vHiddenSize:C,headSize:x,vHeadSize:Math.floor(C/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:T,scale:t.scale,broadcastResPosBias:E,passPastInKv:k,qkvFormat:v}},hf=e=>we({...e}),$a=we({perm:[0,2,1,3]}),od=(e,t,r,a,n,i,o)=>{let l=[a,n,i],d=O.size(l),p=[{type:12,data:d},{type:12,data:o},{type:12,data:i}],f=m=>{let g=X("qkv_with_bias",t.dataType,l),_=B("qkv",t.dataType,l),w=B("bias",r.dataType,l),b=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${m.registerUniforms(b).declareVariables(_,w,g)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:l,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:f},{inputs:[t,r],outputs:[-1]})[0]},Ir=(e,t,r,a,n,i,o,l)=>{let d=i;if(o&&O.size(o.dims)>0){if(a===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return d=od(e,i,o,t,a,r*n,l),d=d.reshape([t,a,r,n]),r===1||a===1?d:e.compute(qe(d,$a.perm),{inputs:[d],outputs:[-1]})[0]}else return i.dims.length===3&&(d=i.reshape([t,a,r,n])),r===1||a===1?d:e.compute(qe(d,$a.perm),{inputs:[d],outputs:[-1]})[0]},ff=(e,t)=>{let r=sd(e.inputs,t),a=e.inputs[0],n=Be(e.inputs,1),i=Be(e.inputs,2),o=Be(e.inputs,3),l=Be(e.inputs,4),d=Be(e.inputs,5),p=Be(e.inputs,6),f=Be(e.inputs,7);if(a.dims.length===5)throw new Error("Packed QKV is not implemented");if((n==null?void 0:n.dims.length)===5)throw new Error("Packed KV is not implemented");let m=n&&i&&n.dims.length===4&&i.dims.length===4,g=Ir(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,a,o,0);if(m)return Rr(e,g,n,i,l,void 0,p,f,d,r);if(!n||!i)throw new Error("key and value must be provided");let _=Ir(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,n,o,r.hiddenSize),w=Ir(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,i,o,2*r.hiddenSize);Rr(e,g,_,w,l,void 0,p,f,d,r)}}),ud,ld,dd,pd,an,gf,yf,_f=L(()=>{ie(),ue(),ke(),le(),ud=e=>{if(!e||e.length<1)throw new Error("too few inputs")},ld=(e,t)=>{let r=[],a=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),a=r.length),we({numOutputs:a,axis:t.axis,splitSizes:r})},dd=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${Y("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,pd=e=>{let t=e.length,r=[];for(let a=0;a<t;++a){let n=e[a].setByIndices("indices","input[global_idx]");t===1?r.push(n):a===0?r.push(`if (output_number == ${a}u) { ${n} }`):a===t-1?r.push(`else { ${n} }`):r.push(`else if (output_number == ${a}) { ${n} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},an=(e,t)=>{let r=e[0].dims,a=O.size(r),n=e[0].dataType,i=O.normalizeAxis(t.axis,r.length),o=new Array(t.numOutputs),l=B("input",n,r.length),d=new Array(t.numOutputs),p=[],f=[],m=0,g=[{type:12,data:a}];for(let w=0;w<t.numOutputs;w++){m+=t.splitSizes[w],d[w]=m;let b=r.slice();b[i]=t.splitSizes[w],f.push(b),o[w]=X(`output${w}`,n,b.length),p.push({dims:f[w],dataType:e[0].dataType})}g.push({type:12,data:d},...ee(r,...f));let _=w=>`
  ${w.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",d.length).declareVariables(l,...o)}
  ${dd(d.length)}
  ${pd(o)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${l.offsetToIndices("global_idx")};
    var index = ${l.indicesGet("indices",i)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${Y("uniforms.size_in_split_axis","output_number - 1u",d.length)};
      ${l.indicesSet("indices",i,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:p,dispatchGroup:{x:Math.ceil(a/64)},programUniforms:g})}},gf=(e,t)=>{ud(e.inputs);let r=e.inputs.length===1?t:ld(e.inputs,t);e.compute(an(e.inputs,r),{inputs:[0]})},yf=e=>{let t=e.axis,r=e.splitSizes,a=e.numOutputs<0?r.length:e.numOutputs;if(a!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return we({axis:t,numOutputs:a,splitSizes:r})}}),cd,hd,va,wf,U0=L(()=>{ke(),xn(),mf(),_f(),It(),cd=(e,t)=>{if(t.doRotary)throw new Error("GroupQuerryAttention do_rotary attribute is not supported");if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],a=e[1],n=e[2],i=e[3],o=e[4];if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let l=!1,d=r.dims[0],p=r.dims[1],f=r.dims.length===3?l?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],m=p,g=0,_=!a||a.dims.length===0,w=Math.floor(_?f/(t.numHeads+2*t.kvNumHeads):f/t.numHeads);_&&(f=w*t.numHeads);let b=i&&i.dims.length!==0,x=o&&o.dims.length!==0;if(b&&i.dims.length===4&&i.dims[0]===d&&i.dims[1]!==t.kvNumHeads&&i.dims[2]===t.kvNumHeads&&i.dims[3]===w)throw new Error("BSNH pastKey/pastValue is not supported");if(b&&x){if(i.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(o.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=i.dims[2]}else if(b||x)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v=1;if(a&&a.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(r.dims[2]%a.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');m=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');m=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');m=a.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}let $=0,T=!1,k=t.kvNumHeads?w*t.kvNumHeads:f;if(n&&n.dims.length>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(m!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=n.dims[2]}else{if(m!==n.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');k=n.dims[1]*n.dims[3],T=!0}}let C=e.length>4?e[5]:void 0;if(C&&C.dims.length!==1&&C.dims[0]!==d)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:d,sequenceLength:p,pastSequenceLength:g,kvSequenceLength:m,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:f,vHiddenSize:k,headSize:w,vHeadSize:Math.floor(k/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:T,qkvFormat:v}},hd=we({perm:[0,2,1,3]}),va=(e,t,r)=>{let a=t,n=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(a=t.reshape([r.batchSize,r.kvSequenceLength,n,r.headSize]),a=e.compute(qe(a,hd.perm),{inputs:[a],outputs:[-1]})[0]),a},wf=(e,t)=>{var x;let r=cd(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((x=e.inputs[1])==null?void 0:x.dims.length)===5)throw new Error("Packed KV is not implemented");let a=e.inputs[0],n=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,i=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,l=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,d=e.inputs.length>4?e.inputs[5]:void 0,p=e.inputs.length>5?e.inputs[6]:void 0,f=r.kvNumHeads?r.kvNumHeads:r.numHeads,m=we({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,f*r.headSize,f*r.headSize]}),[g,_,w]=!n&&!i?e.compute(an([a],m),{inputs:[a],outputs:[-1,-1,-1]}):[a,n,i],b=Ir(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,g,void 0,0);Rr(e,b,va(e,_,r),va(e,w,r),void 0,void 0,o,l,void 0,r,d,p)}}),xa,fd,md,bf,W0=L(()=>{ie(),ue(),It(),le(),xa=(e,t,r,a,n,i,o,l)=>{let d=Se(i),p=d===1?"f32":`vec${d}f`,f=d===1?"vec2f":`mat2x${d}f`,m=n*o,g=64;m===1&&(g=256);let _=[n,o,i/d],w=[n,o,2],b=["rank","type","type"],x=[];x.push(...ee(_,w));let v=$=>{let T=B("x",t.dataType,3,d),k=B("scale",r.dataType,r.dims),C=B("bias",a.dataType,a.dims),E=X("output",1,3,2),z=[T,k,C,E];return`
  var<workgroup> workgroup_shared : array<${f}, ${g}>;
  const workgroup_size = ${g}u;
  ${$.declareVariables(...z)}
  ${$.mainStart(g)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${p}(0);
    var squared_sum = ${p}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${p}(${T.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${f}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Tt("workgroup_shared[0][0]",d)} / f32(hight * ${d});
      let squared_sum_final = ${Tt("workgroup_shared[0][1]",d)} / f32(hight * ${d});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${l}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${d};${l};${g}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:w,dataType:1}],dispatchGroup:{x:m},programUniforms:x}),getShaderSource:v},{inputs:[t,r,a],outputs:[-1]})[0]},fd=(e,t,r)=>{let a=t[0].dims,n=a,i=2,o=a[0],l=a[1],d=O.sizeFromDimension(a,i),p=Se(d),f=O.size(n)/p,m=xa(e,t[0],t[1],t[2],o,d,l,r.epsilon),g=[o,l,d/p],_=[o,l],w=["type","none"],b=x=>{let v=B("x",t[0].dataType,g.length,p),$=B("scale_shift",1,_.length,2),T=X("output",t[0].dataType,g.length,p),k=[v,$,T];return`
  ${x.registerUniform("output_size","u32").declareVariables(...k)}
  ${x.mainStart()}
  ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${T.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${$.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${v.getByOffset("global_idx")} * ${T.type.value}(scale_shift.x) + ${T.type.value}(scale_shift.y);
      ${T.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${p}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},...ee(g,_,g)]}),getShaderSource:b},{inputs:[t[0],m]})},md=(e,t,r)=>{let a=t[0].dims,n=a,i=a[0],o=a[a.length-1],l=O.sizeFromDimension(a,1)/o,d=Se(o),p=O.size(n)/d,f=[{type:12,data:l},{type:12,data:Math.floor(o/d)}],m=["type","type"],g=!1,_=[0,a.length-1];for(let v=0;v<a.length-2;v++)g=g||a[v+1]!==1,_.push(v+1);g=g&&a[a.length-1]!==1;let w=g?e.compute(qe(e.inputs[0],_),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:a.length},(v,$)=>a[_[$]])),b=xa(e,w,t[1],t[2],i,l,o,r.epsilon),x=v=>{let $=ze(t[0].dataType),T=d===1?"vec2f":`mat${d}x2f`,k=z=>{let M=z===0?"x":"y",U=d===1?"f32":`vec${d}f`;switch(d){case 1:return`${$}(${U}(scale.${M}))`;case 2:return`vec2<${$}>(${U}(scale[0].${M}, scale[1].${M}))`;case 4:return`vec4<${$}>(${U}(scale[0].${M}, scale[1].${M}, scale[2].${M}, scale[3].${M}))`;default:throw new Error(`Not supported compoents ${d}`)}},C=B("input",t[0].dataType,t[0].dims,d),E=X("output",t[0].dataType,n,d);return`
  @group(0) @binding(0) var<storage, read> input : array<${C.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${T}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${E.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${v.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${k(0)}, ${k(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${d}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:x},{inputs:[t[0],b]})},bf=(e,t)=>{t.format==="NHWC"?md(e,e.inputs,t):fd(e,e.inputs,t)}}),gd,yd,$f,L0=L(()=>{ie(),ue(),le(),gd=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},yd=(e,t,r)=>{let a=t.simplified,n=e[0].dims,i=e[1],o=!a&&e[2],l=n,d=O.normalizeAxis(t.axis,n.length),p=O.sizeToDimension(n,d),f=O.sizeFromDimension(n,d),m=O.size(i.dims),g=o?O.size(o.dims):0;if(m!==f||o&&g!==f)throw new Error(`Size of X.shape()[axis:] == ${f}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${m} and bias size of ${g}`);let _=[];for(let C=0;C<n.length;++C)C<d?_.push(n[C]):_.push(1);let w=Se(f),b=["type","type"],x=[{type:12,data:p},{type:1,data:f},{type:12,data:Math.floor(f/w)},{type:1,data:t.epsilon}];o&&b.push("type");let v=r>1,$=r>2,T=C=>{let E=ze(e[0].dataType),z=[B("x",e[0].dataType,e[0].dims,w),B("scale",i.dataType,i.dims,w)];o&&z.push(B("bias",o.dataType,o.dims,w)),z.push(X("output",e[0].dataType,l,w)),v&&z.push(X("mean_data_output",1,_)),$&&z.push(X("inv_std_output",1,_));let M=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${C.registerUniforms(M).declareVariables(...z)}
  ${C.mainStart()}
    ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Ka("f32",w)};
    var mean_square_vector = ${Ka("f32",w)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${er(E,w,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Tt("mean_vector",w)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Tt("mean_square_vector",w)} / uniforms.norm_size ${a?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${er(E,w,"x[j + offset]")};
      let f32scale = ${er(E,w,"scale[j]")};
      output[j + offset] = ${z[0].type.value}((f32input ${a?"":"- mean"}) * inv_std_dev * f32scale
        ${o?`+ ${er(E,w,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${$?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},k=[{dims:l,dataType:e[0].dataType}];return v&&k.push({dims:_,dataType:1}),$&&k.push({dims:_,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${w};${r};${a}`,inputDependencies:b},getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(p/64)},programUniforms:x}),getShaderSource:T}},$f=(e,t)=>{gd(e.inputs),e.compute(yd(e.inputs,t,e.outputCount))}}),_d,vf,V0=L(()=>{ue(),In(),En(),_d=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},vf=e=>{_d(e.inputs);let t=rr.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],a=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&a<8)e.compute(Cn(e.inputs,{activation:""},t));else{let n=t[t.length-2],i=O.size(e.inputs[0].dims.slice(0,-2)),o=O.size(e.inputs[1].dims.slice(0,-2));if(i!==1&&n===1&&o===1){let l=e.inputs[0].reshape([1,i,a]),d=e.inputs[1].reshape([1,a,r]),p=[1,i,r],f=[l,d];e.compute(_i(f,{activation:""},t,p),{inputs:f})}else e.compute(_i(e.inputs,{activation:""},t))}}}),wd,bd,$d,xf,Sf,q0=L(()=>{ie(),ue(),ke(),le(),wd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],a=r.dims.length;if(r.dims[a-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let n=Math.floor((t.k+t.blockSize-1)/t.blockSize),i=t.blockSize/8*t.bits,o=e[1];if(!O.areEqual(o.dims,[t.n,n,i]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let l=e[2].dims;if(O.size(l)!==t.n*n)throw new Error("scales input size error.");if(e.length===4){let d=e[3].dims,p=t.bits>4?t.n*n:t.n*Math.floor((n+1)/2);if(O.size(d)!==p)throw new Error("zeroPoints input size error.")}},bd=(e,t)=>{let r=e[0].dims,a=r.length,n=r[a-2],i=t.k,o=t.n,l=r.slice(0,a-2),d=O.size(l),p=e[1].dims[2]/4,f=e[0].dataType,m=Se(t.k),g=Se(p),_=Se(o),w=l.concat([n,o]),b=n>1&&o/_%2===0?2:1,x=O.size(w)/_/b,v=64,$=[],T=[d,n,i/m],k=O.convertShape(e[1].dims).slice();k.splice(-1,1,p/g),$.push(...ee(T)),$.push(...ee(k)),$.push(...ee(e[2].dims)),e.length===4&&$.push(...ee(O.convertShape(e[3].dims)));let C=[d,n,o/_];$.push(...ee(C));let E=z=>{let M=T.length,U=B("a",e[0].dataType,M,m),H=B("b",12,k.length,g),j=B("scales",e[2].dataType,e[2].dims.length),K=[U,H,j],Q=e.length===4?B("zero_points",12,e[3].dims.length):void 0;Q&&K.push(Q);let re=C.length,J=X("output",e[0].dataType,re,_),F=ze(e[0].dataType),de=(()=>{switch(m){case 1:return`array<${F}, 8>`;case 2:return`mat4x2<${F}>`;case 4:return`mat2x4<${F}>`;default:throw new Error(`${m}-component is not supported.`)}})(),he=()=>{let N=`
          // reuse a data
            var input_offset = ${U.indicesToOffset(`${U.type.indices}(batch, row, word_offset)`)};
            var a_data: ${de};
            for (var j: u32 = 0; j < ${8/m}; j++) {
              a_data[j] = ${U.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let V=0;V<_*b;V++)N+=`
            b_value = ${g===1?`b${V}_data`:`b${V}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${de}(${Array.from({length:4},(pe,ve)=>`${F}(b_value_lower[${ve}]), ${F}(b_value_upper[${ve}])`).join(", ")});
            b_dequantized_values = ${m===1?`${de}(${Array.from({length:8},(pe,ve)=>`(b_quantized_values[${ve}] - ${Q?`zero_point${V}`:"zero_point"}) * scale${V}`).join(", ")});`:`(b_quantized_values - ${de}(${Array(8).fill(`${Q?`zero_point${V}`:"zero_point"}`).join(",")})) * scale${V};`};
            workgroup_shared[local_id.x * ${b} + ${Math.floor(V/_)}]${_>1?`[${V%_}]`:""} += ${Array.from({length:8/m},(pe,ve)=>`${m===1?`a_data[${ve}] * b_dequantized_values[${ve}]`:`dot(a_data[${ve}], b_dequantized_values[${ve}])`}`).join(" + ")};
          `;return N},G=()=>{let N=`
            var col_index = col * ${_};
            ${Q?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${F}(8);`}
            `;for(let V=0;V<_*b;V++)N+=`
            let scale${V} = ${j.getByOffset("col_index * nBlocksPerCol + block")};
            ${Q?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${Q.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${V} = ${F}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return N},ye=()=>{let N=`col_index = col * ${_};`;for(let V=0;V<_*b;V++)N+=`
            let b${V}_data = ${H.getByIndices(`${H.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return N+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${de};
            var b_dequantized_values: ${de};`,N};return`
        var<workgroup> workgroup_shared: array<${J.type.value}, ${b*v}>;
        ${z.declareVariables(...K,J)}
        ${z.mainStart([v,1,1])}
          let output_indices = ${J.offsetToIndices(`(global_idx / ${v}) * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/m};
            ${G()}
            for (var word: u32 = 0; word < ${p}; word += ${g}) {
              ${ye()}
              for (var i: u32 = 0; i < ${g}; i++) {
                ${he()}
                word_offset += ${8/m};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${b}) {
            var output_value: ${J.type.value} = ${J.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${v}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${b};
            }
            ${J.setByIndices(`${J.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${m};${g};${_};${b};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:w,dataType:f}],dispatchGroup:{x},programUniforms:$}),getShaderSource:E}},$d=(e,t)=>{let r=e[0].dims,a=r.length,n=r[a-2],i=t.k,o=t.n,l=r.slice(0,a-2),d=O.size(l),p=e[1].dims[2]/4,f=e[0].dataType,m=Se(t.k),g=Se(p),_=l.concat([n,o]),w=128,b=o%8===0?8:o%4===0?4:1,x=w/b,v=x*g*8,$=v/m,T=v/t.blockSize,k=O.size(_)/b,C=[],E=[d,n,i/m],z=O.convertShape(e[1].dims).slice();z.splice(-1,1,p/g),C.push(...ee(E)),C.push(...ee(z)),C.push(...ee(e[2].dims)),e.length===4&&C.push(...ee(O.convertShape(e[3].dims)));let M=[d,n,o];C.push(...ee(M));let U=H=>{let j=E.length,K=B("a",e[0].dataType,j,m),Q=B("b",12,z.length,g),re=B("scales",e[2].dataType,e[2].dims.length),J=[K,Q,re],F=e.length===4?B("zero_points",12,e[3].dims.length):void 0;F&&J.push(F);let de=M.length,he=X("output",e[0].dataType,de),G=ze(e[0].dataType),ye=()=>{switch(m){case 1:return`
          let a_data0 = vec4<${G}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${G}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${G}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${G}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${m}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${K.type.value}, ${$}>;
        var<workgroup> inter_results: array<array<${he.type.value}, ${x}>, ${b}>;
        ${H.declareVariables(...J,he)}
        ${H.mainStart([x,b,1])}
          let output_indices = ${he.offsetToIndices(`workgroup_index * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${T} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${$};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${$}; a_offset += ${w})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${K.getByIndices(`${K.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${K.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${T} + local_id.x;
            ${F?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${F.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${G}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${G}(8);`}
            let scale = ${re.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${Q.getByIndices(`${Q.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/m};
            for (var i: u32 = 0; i < ${g}; i++) {
              ${ye()}
              let b_value = ${g===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${G}>(${Array.from({length:4},(N,V)=>`${G}(b_value_lower[${V}]), ${G}(b_value_upper[${V}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${G}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(N,V)=>`${`dot(a_data${V}, b_dequantized_values[${V}])`}`).join(" + ")};
              word_offset += ${8/m};
            }
            workgroupBarrier();
          }

          if (local_idx < ${b}) {
            var output_value: ${he.type.value} = ${he.type.value}(0);
            for (var b = 0u; b < ${x}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${he.setByIndices(`${he.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${m};${g};${x};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:f}],dispatchGroup:{x:k},programUniforms:C}),getShaderSource:U}},xf=(e,t)=>{wd(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute($d(e.inputs,t)):e.compute(bd(e.inputs,t))},Sf=e=>we(e)}),vd,xd,Sd,kd,Td,Cd,Id,Ed,kf,F0=L(()=>{ie(),ue(),le(),vd=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},xd=(e,t,r)=>{let a="";for(let n=t-1;n>=0;--n)a+=`
            k = i32(${e.indicesGet("indices",n)}) - ${Y("uniforms.pads",n,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${Y("uniforms.x_shape",n,t)})) {
              break;
            }
            offset += k * i32(${Y("uniforms.x_strides",n,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${a}
            value = x[offset];
          }
      `},Sd=(e,t,r)=>{let a="";for(let n=t-1;n>=0;--n)a+=`
                k = i32(${e.indicesGet("indices",n)}) - ${Y("uniforms.pads",n,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${Y("uniforms.x_shape",n,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${Y("uniforms.x_shape",n,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${Y("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},kd=(e,t,r)=>{let a="";for(let n=t-1;n>=0;--n)a+=`
                k = i32(${e.indicesGet("indices",n)}) - ${Y("uniforms.pads",n,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${Y("uniforms.x_shape",n,t)})) {
                  k = i32(${Y("uniforms.x_shape",n,t)}) - 1;
                }
                offset += k * i32(${Y("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Td=(e,t,r)=>{let a="";for(let n=t-1;n>=0;--n)a+=`
                k = i32(${e.indicesGet("indices",n)}) - ${Y("uniforms.pads",n,r)};
                if (k < 0)  {
                  k += i32(${Y("uniforms.x_shape",n,t)}]);
                }
                if (k >= i32(${Y("uniforms.x_shape",n,t)})) {
                  k -= i32(${Y("uniforms.x_shape",n,t)});
                }
                offset += k * i32(${Y("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Cd=(e,t,r)=>{switch(r.mode){case 0:return xd(e,t,r.pads.length);case 1:return Sd(e,t,r.pads.length);case 2:return kd(e,t,r.pads.length);case 3:return Td(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Id=(e,t)=>{let r=O.padShape(e[0].dims.slice(),t.pads),a=e[0].dims,n=O.size(r),i=[{type:12,data:n},{type:6,data:t.pads}],o=e.length>=3&&e[2].data;t.mode===0&&i.push({type:o?e[2].dataType:1,data:t.value}),i.push(...ee(e[0].dims,r));let l=["rank"],d=p=>{let f=X("output",e[0].dataType,r.length),m=B("x",e[0].dataType,a.length),g=m.type.value,_=Cd(f,a.length,t),w=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&w.push({name:"constant_value",type:o?g:"f32"}),`
            ${p.registerUniforms(w).declareVariables(m,f)}
            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${f.offsetToIndices("global_idx")};

            var value = ${g}(0);
            ${_}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${o}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(r)/64)},programUniforms:i}),getShaderSource:d}},Ed=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),a=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,n=e[0].dims.length,i=new Int32Array(2*n).fill(0);if(e.length>=4){let l=e[3].getBigInt64Array();for(let d=0;d<l.length;d++)i[Number(l[d])]=Number(r[d]),i[Number(l[d])+n]=Number(r[d+l.length])}else r.forEach((l,d)=>i[Number(d)]=Number(l));let o=[];return i.forEach(l=>o.push(l)),{mode:t.mode,value:a,pads:o}}else return t},kf=(e,t)=>{vd(e.inputs);let r=Ed(e.inputs,t);e.compute(Id(e.inputs,r),{inputs:[0]})}}),br,Sa,ka,Ta,Ca,zd,Ad,Ia,Ea,Tf,Cf,za,If,Ef,Aa,zf,Af,Of,Mf,G0=L(()=>{at(),ie(),ue(),le(),br=e=>{if($e.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Sa=(e,t,r)=>{let a=t.format==="NHWC",n=e.dims.slice();a&&n.splice(1,0,n.pop());let i=Object.hasOwnProperty.call(t,"dilations"),o=t.kernelShape.slice(),l=t.strides.slice(),d=i?t.dilations.slice():[],p=t.pads.slice();gi.adjustPoolAttributes(r,n,o,l,d,p);let f=gi.computePoolOutputShape(r,n,l,d,o,p,t.autoPad),m=Object.assign({},t);i?Object.assign(m,{kernelShape:o,strides:l,pads:p,dilations:d,cacheKey:t.cacheKey}):Object.assign(m,{kernelShape:o,strides:l,pads:p,cacheKey:t.cacheKey});let g=f.slice();return g.push(g.splice(1,1)[0]),[m,a?g:f]},ka=(e,t)=>{let r=t.format==="NHWC",a=O.size(e),n=O.size(t.kernelShape),i=[{type:12,data:a},{type:12,data:n}],o=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let l=t.kernelShape[t.kernelShape.length-1],d=t.strides[t.strides.length-1],p=t.pads[t.pads.length/2-1],f=t.pads[t.pads.length-1],m=!!(p+f);i.push({type:12,data:l},{type:12,data:d},{type:12,data:p},{type:12,data:f}),o.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let g=!1;if(t.kernelShape.length===2){let _=t.kernelShape[t.kernelShape.length-2],w=t.strides[t.strides.length-2],b=t.pads[t.pads.length/2-2],x=t.pads[t.pads.length-2];g=!!(b+x),i.push({type:12,data:_},{type:12,data:w},{type:12,data:b},{type:12,data:x}),o.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[i,o,!0,m,g]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let l=O.computeStrides(t.kernelShape);i.push({type:12,data:l},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:"kernelStrides",type:"u32",length:l.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let d=t.pads.reduce((p,f)=>p+f);return[i,o,!!d,!1,!1]}},Ta=(e,t,r,a,n,i,o,l,d,p,f,m)=>{let g=n.format==="NHWC",_=t.type.value,w=X("output",t.type.tensor,a);if(n.kernelShape.length<=2){let b="",x="",v="",$=r-(g?2:1);if(f?b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${$}] < 0 || xIndices[${$}]
                      >= uniforms.x_shape[${$}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${i}
                }`:b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${i}
                }`,n.kernelShape.length===2){let T=r-(g?3:2);m?x=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${T}] < 0 || xIndices[${T}] >= uniforms.x_shape[${T}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:x=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                `,v=`
              }
            `}return`
            ${e.registerUniforms(d).declareVariables(t,w)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${w.offsetToIndices("global_idx")};
              var xIndices = ${w.offsetToIndices("global_idx")};

              var value = ${_}(${l});
              var pad = 0;
              ${x}
              ${b}
              ${v}
              ${o}

              output[global_idx] = value;
            }`}else{if(g)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let b=n.kernelShape.length,x=n.pads.length,v="";return p?v=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${i}
              }`:v=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${i}
            `,`
            ${e.registerUniforms(d).declareVariables(t,w)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${w.offsetToIndices("global_idx")};
              var xIndices = ${w.offsetToIndices("global_idx")};

              var offsets: array<u32, ${b}>;

              var value = ${_}(${l});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${b-1}u; j++) {
                  offsets[j] = offset / ${Y("uniforms.kernelStrides","j",b)};
                  offset -= offsets[j] * ${Y("uniforms.kernelStrides","j",b)};
                }
                offsets[${b-1}] = offset;

                isPad = false;
                for (var j = ${r-b}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${Y("uniforms.strides",`j - ${r-b}u`,b)}
                    + offsets[j - ${r-b}u] - ${Y("uniforms.pads","j - 2u",x)};
                  ${v}
              }
              ${o}

              output[global_idx] = value;
            }`}},Ca=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,zd=e=>`${Ca(e)};${e.countIncludePad}`,Ad=e=>`${Ca(e)};${e.storageOrder};${e.dilations}`,Ia=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Ea=(e,t,r,a)=>{let[n,i]=Sa(t,a,r),o=B("x",t.dataType,t.dims.length),l=o.type.value,d="value += x_val;",p="";n.countIncludePad?p+=`value /= ${l}(uniforms.kernelSize);`:p+=`value /= ${l}(i32(uniforms.kernelSize) - pad);`;let[f,m,g,_,w]=ka(i,n);f.push(...ee(t.dims,i));let b=["rank"];return{name:e,shaderCache:{hint:`${a.cacheKey};${g};${_};${w}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(i)/64)},programUniforms:f}),getShaderSource:x=>Ta(x,o,t.dims.length,i.length,n,d,p,0,m,g,_,w)}},Tf=e=>{let t=e.count_include_pad!==0,r=Ia(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let a={countIncludePad:t,...r,cacheKey:""};return{...a,cacheKey:zd(a)}},Cf=(e,t)=>{br(e.inputs),e.compute(Ea("AveragePool",e.inputs[0],!1,t))},za={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},If=e=>{let t=e.format;return{format:t,...za,cacheKey:t}},Ef=(e,t)=>{br(e.inputs),e.compute(Ea("GlobalAveragePool",e.inputs[0],!0,t))},Aa=(e,t,r,a)=>{let[n,i]=Sa(t,a,r),o=`
      value = max(x_val, value);
    `,l="",d=B("x",t.dataType,t.dims.length),p=["rank"],[f,m,g,_,w]=ka(i,n);return f.push(...ee(t.dims,i)),{name:e,shaderCache:{hint:`${a.cacheKey};${g};${_};${w}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(i)/64)},programUniforms:f}),getShaderSource:b=>Ta(b,d,t.dims.length,i.length,n,o,l,t.dataType===10?-65504:-1e5,m,g,_,w)}},zf=(e,t)=>{br(e.inputs),e.compute(Aa("MaxPool",e.inputs[0],!1,t))},Af=e=>{let t=e.storage_order,r=e.dilations,a=Ia(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(a.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let n={storageOrder:t,dilations:r,...a,cacheKey:""};return{...n,cacheKey:Ad(n)}},Of=e=>{let t=e.format;return{format:t,...za,cacheKey:t}},Mf=(e,t)=>{br(e.inputs),e.compute(Aa("GlobalMaxPool",e.inputs[0],!0,t))}}),Od,Md,Rf,Bf,H0=L(()=>{ie(),ue(),ke(),le(),Od=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,a)=>r===e[2].dims[a]).reduce((r,a)=>r&&a,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((n,i)=>i===t.axis||n===e[0].dims[i]).reduce((n,i)=>n&&i,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],a=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/a)||t.blockSize>Math.ceil(r/(a-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Md=(e,t)=>{let r=O.normalizeAxis(t.axis,e[0].dims.length),a=e[0].dataType,n=a===3,i=e[0].dims,o=e[1].dataType,l=O.size(i),d=a===3||a===2,p=d?[Math.ceil(O.size(e[0].dims)/4)]:e[0].dims,f=e[1].dims,m=e.length>2?e[2]:void 0,g=m?d?[Math.ceil(O.size(m.dims)/4)]:m.dims:void 0,_=f.length===0||f.length===1&&f[0]===1,w=_===!1&&f.length===1,b=Se(l),x=_&&(!d||b===4),v=x?b:1,$=x&&!d?b:1,T=B("input",d?12:a,p.length,$),k=B("scale",o,f.length),C=m?B("zero_point",d?12:a,g.length):void 0,E=X("output",o,i.length,v),z=[T,k];C&&z.push(C);let M=[p,f];m&&M.push(g);let U=[{type:12,data:l/v},{type:12,data:r},{type:12,data:t.blockSize},...ee(...M,i)],H=j=>{let K=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${j.registerUniforms(K).declareVariables(...z,E)}
      ${j.mainStart()}
          ${j.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${E.offsetToIndices("global_idx")};

          // Set input x
          ${d?`
            let input = ${T.getByOffset("global_idx / 4")};
            let x_vec = ${n?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${v===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${T.getByOffset("global_idx")};`};

          // Set scale input
          ${_?`let scale_value= ${k.getByOffset("0")}`:w?`
            let scale_index = ${E.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${k.getByOffset("scale_index")};`:`
            var scale_indices: ${k.type.indices} = output_indices;
            let index = ${k.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${k.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${k.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${C?_?d?`
                let zero_point_input = ${C.getByOffset("0")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${C.getByOffset("0")}`:w?d?`
                let zero_point_index = ${E.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${C.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${E.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${C.getByOffset("zero_point_index")};`:d?`
                let zero_point_offset = ${k.indicesToOffset("scale_indices")};
                let zero_point_input = ${C.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${C.getByIndices("scale_indices")};`:`let zero_point_value = ${d?n?"i32":"u32":T.type.value}(0);`};
      // Compute and write output
      ${E.setByOffset("global_idx",`${E.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:C?["rank","rank","rank"]:["rank","rank"]},getShaderSource:H,getRunData:()=>({outputs:[{dims:i,dataType:o}],dispatchGroup:{x:Math.ceil(l/v/64),y:1,z:1},programUniforms:U})}},Rf=(e,t)=>{Od(e.inputs,t),e.compute(Md(e.inputs,t))},Bf=e=>we({axis:e.axis,blockSize:e.blockSize})}),Rd,Bd,Nf,j0=L(()=>{at(),ie(),le(),Rd=(e,t,r)=>{let a=e===t,n=e<t&&r<0,i=e>t&&r>0;if(a||n||i)throw new Error("Range these inputs' contents are invalid.")},Bd=(e,t,r,a)=>{let n=Math.abs(Math.ceil((t-e)/r)),i=[n],o=n,l=[{type:12,data:o},{type:a,data:e},{type:a,data:r},...ee(i)],d=p=>{let f=X("output",a,i.length),m=f.type.value,g=[{name:"outputSize",type:"u32"},{name:"start",type:m},{name:"delta",type:m}];return`
        ${p.registerUniforms(g).declareVariables(f)}
        ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${m}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${a}`},getShaderSource:d,getRunData:()=>({outputs:[{dims:i,dataType:a}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l})}},Nf=e=>{let t=0,r=0,a=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],a=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],a=e.inputs[2].getFloat32Array()[0]),$e.webgpu.validateInputContent&&Rd(t,r,a),e.compute(Bd(t,r,a,e.inputs[0].dataType),{inputs:[]})}}),Nd,Dd,Df,Pf,K0=L(()=>{ie(),ue(),ke(),le(),Nd=(e,t,r,a)=>{if(e!=="none"&&a!=="i32"&&a!=="u32"&&a!=="f32")throw new Error(`Input ${a} is not supported with reduction ${e}.`);let n=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,i=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return a==="i32"||a==="u32"?`atomicAdd(&${t}, bitcast<${a}>(${r}));`:`
              ${n}bitcast<${a}>(oldValue) + (${r})${i}`;case"max":return a==="i32"||a==="u32"?`atomicMax(&${t}, bitcast<${a}>(${r}));`:`
                ${n}max(bitcast<f32>(oldValue), (${r}))${i}`;case"min":return a==="i32"||a==="u32"?`atomicMin(&${t}, bitcast<${a}>(${r}));`:`${n}min(bitcast<${a}>(oldValue), (${r}))${i}`;case"mul":return`${n}(bitcast<${a}>(oldValue) * (${r}))${i}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Dd=(e,t)=>{let r=e[0].dims,a=e[1].dims,n=r,i=1,o=Math.ceil(O.size(a)/i),l=a[a.length-1],d=O.sizeFromDimension(r,l),p=[{type:12,data:o},{type:12,data:l},{type:12,data:d},...ee(e[1].dims,e[2].dims,n)],f=m=>{let g=B("indices",e[1].dataType,e[1].dims.length),_=B("updates",e[2].dataType,e[2].dims.length,i),w=t.reduction!=="none"&&t.reduction!==""?hc("output",e[0].dataType,n.length):X("output",e[0].dataType,n.length,i);return`
      ${m.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(g,_,w)}
      ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var hasDuplicates = false;
  if (${t.reduction==="none"}) {
    let n = ${O.size(a)};
    for (var i = 0; i < n; i = i + 1) {
      for (var j = i + 1; j < n; j = j + 1) {
        var index_i = i32(indices[i].x);
        var index_j = i32(indices[j].x);
        if (index_i == index_j) {
          hasDuplicates = true;
          break;
        }
      }
      if (hasDuplicates) {
        break;
      }
    }
  }

  var data_offset = 0u;
  var indices_start = uniforms.last_index_dimension * global_idx;
  if (${t.reduction==="none"} && hasDuplicates) {
    if (global_idx != 0u) {
      return;
    }
    indices_start = 0u;
  }
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start + uniforms.last_index_dimension];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${Nd(t.reduction,"output[data_offset + i]","value",w.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:p}),getShaderSource:f}},Df=e=>we({reduction:e.reduction}),Pf=(e,t)=>{e.compute(Dd(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Pd,Ud,Wd,Oa,Ld,Vd,qd,Fd,Gd,Hd,jd,Kd,Ma,Zd,Qd,Xd,Jd,Yd,Uf,Wf,Z0=L(()=>{ie(),ue(),ke(),le(),Pd=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Ud=(e,t,r)=>{t.every(n=>n>=0&&n<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let a=new Array(r).fill(1);return t.forEach((n,i)=>a[n]=e[i]),a},Wd=(e,t,r,a,n,i)=>{let[o,l,d]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],p=e[0].dims.length;if(o>0&&e.length>o&&e[o].dims.length>0)e[o].getFloat32Array().forEach(f=>i.push(f));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0){if(e[l].getFloat32Array().forEach(f=>a.push(f)),a.length!==0&&a.length!==p&&r>=18&&a.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Pd(a,t),t.axes.length>0&&Ud(a,t.axes,p).forEach((f,m)=>a[m]=f)}if(d>0&&e.length>d&&e[d].dims.length===1&&e[d].dims[0]>0&&(e[d].getBigInt64Array().forEach(f=>n.push(Number(f))),n.length!==0&&n.length!==p&&r>=18&&n.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof a<"u"&&typeof n<"u"&&a.length>0&&n.length>p)throw new Error("Resize requires only of scales or sizes to be specified")},Oa=(e,t,r,a)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${a}(big / (${r}));
  let fract = ${a}(big % (${r})) / ${a}(${r});
  return whole + fract;
`,Ld=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Oa("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Oa("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Vd=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",qd=(e,t,r)=>{let a=new Array(r).fill(0).concat(new Array(r).fill(1)),n=e.length===0?a:e.slice();return t.length>0?(t.forEach((i,o)=>{a[i]=n[o],a[o+r]=n[t.length+o]}),a):n},Fd=(e,t,r,a)=>{let n=[];if(r.length>0)if(a.length>0){if(e.forEach(i=>n.push(i)),Math.max(...a)>e.length)throw new Error("axes is out of bound");a.forEach((i,o)=>n[i]=r[o])}else r.forEach(i=>n.push(i));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");n=e.map((i,o)=>Math.round(i*t[o]))}return n},Gd=(e,t,r)=>{let a=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(i=>t[i]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(i=>t[i]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let n=e.slice();return r.axes.length>0?(r.axes.forEach(i=>t[i]=a),r.axes.forEach(i=>n[i]=Math.round(e[i]*t[i]))):(t.fill(a,0,t.length),n.forEach((i,o)=>n[o]=Math.round(i*t[o]))),n},Hd=(e,t,r,a,n)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${Y("uniforms.scales","i",a)};
        var roi_low = ${Y("uniforms.roi","i",n)};
        var roi_hi = ${Y("uniforms.roi",`i + ${t.length}`,n)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${Y("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${Y("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,jd=(e,t,r,a,n,i,o)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${a.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${Y("uniforms.scales","i",n)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${Y("uniforms.roi","i",i)};
          var roi_hi = ${Y("uniforms.roi",`i + ${r.length}`,i)};
          var input_shape_i = ${Y("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${Y("uniforms.output_shape","i",a.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${o} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,Kd=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${Y("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Ma=(e,t,r,a)=>e.rank>a?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Zd=(e,t,r,a,n)=>{let[i,o,l,d]=r.length===2?[-1,0,1,-1]:[0,2,3,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(row, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(col, ${r[l]} - 1))`)};
      ${Ma(e,d,i,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${p} = originalIndices[${o}];
      var col:${p} = originalIndices[${l}];
      ${a?`if (row < 0 || row > (${r[o]} - 1) || col < 0 || col > (${r[l]} - 1)) {
        return ${n};
      }`:""};
      row = max(0, min(row, ${r[o]} - 1));
      col = max(0, min(col, ${r[l]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${i}])`:"0"};
      var x11: ${p} = getInputValue(batch, channel, row1, col1);
      var x12: ${p} = getInputValue(batch, channel, row1, col2);
      var x21: ${p} = getInputValue(batch, channel, row2, col1);
      var x22: ${p} = getInputValue(batch, channel, row2, col2);
      var dx1: ${p} = abs(row - ${p}(row1));
      var dx2: ${p} = abs(${p}(row2) - row);
      var dy1: ${p} = abs(col - ${p}(col1));
      var dy2: ${p} = abs(${p}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Qd=(e,t,r,a,n,i,o,l,d,p)=>{let f=r.length===2,[m,g]=f?[0,1]:[2,3],_=e.type.value,w=b=>{let x=b===m?"row":"col";return`
      fn ${x}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${_} {
        var output_index = ${t.indicesGet("output_indices",b)};
        var originalIdx: ${_} = getOriginalCoordinateFromResizedCoordinate(output_index, ${n[b]},
        ${a[b]}, ${r[b]}, ${i[b]}, ${i[b]} + ${r.length});
        var fractOriginalIdx: ${_} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${l} && (originalIdx < 0 || originalIdx > (${r[b]} - 1))) {
          return ${d};
        }
        var data: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${x}: ${_} = originalIdx + ${_}(i);
          if (${x} < 0 || ${x} >= ${r[b]}) {
            ${p?`coefs[i + 1] = 0.0;
                        continue;`:l?`return ${d};`:`${x} = max(0, min(${x}, ${r[b]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",b,`u32(${x})`)};
          data[i + 1] = ${b===m?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${w(m)};
    ${w(g)};
  fn getCubicInterpolationCoefs(s: ${_}) -> array<${_}, 4> {
    var absS = abs(s);
    var coeffs: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${_} = 1.0 - absS;
    var twoMinusAbsS: ${_} = 2.0 - absS;
    var onePlusAbsS: ${_} = 1.0 + absS;
    coeffs[0] = ((${o} * onePlusAbsS - 5 * ${o}) * onePlusAbsS + 8 * ${o}) * onePlusAbsS - 4 * ${o};
    coeffs[1] = ((${o} + 2) * absS - (${o} + 3)) * absS * absS + 1;
    coeffs[2] = ((${o} + 2) * oneMinusAbsS - (${o} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${o} * twoMinusAbsS - 5 * ${o}) * twoMinusAbsS + 8 * ${o}) * twoMinusAbsS - 4 * ${o};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${_}, 4>, coefs: array<${_}, 4>) -> ${_} {
    var coefsSum: ${_} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${_} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Xd=(e,t,r,a,n)=>{let[i,o,l,d,p]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],f=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${f} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(depth, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(height, ${r[l]} - 1))`)};
      ${e.indicesSet("input_indices",d,`max(0, min(width, ${r[d]} - 1))`)};
      ${Ma(e,p,i,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${f} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${f} = originalIndices[${o}];
      var height:${f} = originalIndices[${l}];
      var width:${f} = originalIndices[${d}];
      ${a?`if (depth < 0 || depth > (${r[o]} - 1) || height < 0 || height > (${r[l]} - 1) || width < 0 || (width > ${r[d]} - 1)) {
      return ${n};
        }`:""};

    depth = max(0, min(depth, ${r[o]} - 1));
      height = max(0, min(height, ${r[l]} - 1));
      width = max(0, min(width, ${r[d]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${p}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${i}])`:"0"};

      var x111: ${f} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${f} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${f} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${f} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${f} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${f} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${f} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${f} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${f} = abs(depth - ${f}(depth1));
      var dx2: ${f} = abs(${f}(depth2) - depth);
      var dy1: ${f} = abs(height - ${f}(height1));
      var dy2: ${f} = abs(${f}(height2) - height);
      var dz1: ${f} = abs(width - ${f}(width1));
      var dz2: ${f} = abs(${f}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Jd=(e,t,r,a,n,i)=>{let o=e.dims,l=qd(i,t.axes,o.length),d=Fd(o,a,n,t.axes),p=a.slice();a.length===0&&(p=o.map(($,T)=>$===0?1:d[T]/$),t.keepAspectRatioPolicy!=="stretch"&&(d=Gd(o,p,t)));let f=X("output",e.dataType,d.length),m=B("input",e.dataType,o.length),g=O.size(d),_=o.length===d.length&&o.every(($,T)=>$===d[T]),w=t.coordinateTransformMode==="tf_crop_and_resize",b=t.extrapolationValue,x=m.type.value,v=$=>`
      ${_?"":`
      ${Ld(t.coordinateTransformMode,x)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Kd(m,o)};
              ${Vd(t.nearestMode,r,x)};
              ${jd(m,f,o,d,p.length,l.length,w)};
              `;case"linear":return`
              ${Hd(f,o,d,p.length,l.length)};
              ${(()=>{if(o.length===2||o.length===4)return`${Zd(m,f,o,w,b)}`;if(o.length===3||o.length===5)return`${Xd(m,f,o,w,b)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(o.length===2||o.length===4)return`${Qd(m,f,o,d,p,l,t.cubicCoeffA,w,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${$.registerUniform("output_size","u32").registerUniform("scales","f32",p.length).registerUniform("roi","f32",l.length).declareVariables(m,f)}
      ${$.mainStart()}
        ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${_?"output[global_idx] = input[global_idx];":`
        let output_indices = ${f.offsetToIndices("global_idx")};
        var input_indices: ${m.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${m.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${o.length===2||o.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${p.length>0?t.mode==="cubic"?p:p.length:""}|${n.length>0?n:""}|${l.length>0?l:""}|${_}|${t.mode==="nearest"?o.length:o}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:d,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},{type:1,data:p},{type:1,data:l},...ee(o,d)]})}},Yd=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},Uf=(e,t)=>{let r=[],a=[],n=[],i=Yd(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Wd(e.inputs,t,i,r,a,n),e.compute(Jd(e.inputs[0],t,i,r,a,n),{inputs:[0]})},Wf=e=>{let t=e.antialias,r=e.axes,a=e.coordinateTransformMode,n=e.cubicCoeffA,i=e.excludeOutside!==0,o=e.extrapolationValue,l=e.keepAspectRatioPolicy,d=e.mode,p=e.nearestMode===""?"simple":e.nearestMode;return we({antialias:t,axes:r,coordinateTransformMode:a,cubicCoeffA:n,excludeOutside:i,extrapolationValue:o,keepAspectRatioPolicy:l,mode:d,nearestMode:p})}}),ep,tp,Lf,Q0=L(()=>{ie(),ue(),ke(),le(),ep=(e,t)=>{let[r,a,n,i]=e,{numHeads:o,rotaryEmbeddingDim:l}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!O.areEqual(a.dims,[])&&!O.areEqual(a.dims,[1])&&a.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${a.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(!O.areEqual(n.dims,i.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(l>0&&o===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let d=r.dims[0],p=r.dims[r.dims.length-2],f=n.dims[0],m=O.sizeFromDimension(r.dims,1)/p,g=l===0?n.dims[1]*2:m/o;if(l>g)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(a.dims.length===2){if(d!==a.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${a.dims[0]}`);if(p!==a.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${a.dims[1]}`)}if(g/2!==n.dims[1]&&l/2!==n.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${n.dims[1]}`);if(p>f)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},tp=(e,t)=>{let{interleaved:r,numHeads:a,rotaryEmbeddingDim:n,scale:i}=t,o=e[0].dims[0],l=O.sizeFromDimension(e[0].dims,1),d=e[0].dims[e[0].dims.length-2],p=l/d,f=e[2].dims[1],m=n===0?f*2:p/a,g=new Array(o,d,p/m,m-f),_=O.computeStrides(g),w=[{type:1,data:i},{type:12,data:g},{type:12,data:_},...e[0].dims.length===3?new Array({type:12,data:[l,p,m,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[l,m,d*m,1]}):[],...ee(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],b=x=>{let v=B("input",e[0].dataType,e[0].dims.length),$=B("position_ids",e[1].dataType,e[1].dims.length),T=B("cos_cache",e[2].dataType,e[2].dims.length),k=B("sin_cache",e[3].dataType,e[3].dims.length),C=X("output",e[0].dataType,e[0].dims.length);return x.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:g.length},{name:"global_strides",type:"u32",length:_.length},{name:"input_output_strides",type:"u32",length:_.length}]),`
        ${x.declareVariables(v,$,T,k,C)}

        ${x.mainStart(ir)}
          let half_rotary_emb_dim = uniforms.${T.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${$.broadcastedIndicesToOffset("bsnh.xy",X("",$.type.tensor,2))};
            let position_id =
                u32(${$.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${v.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} -
                ${v.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${C.setByOffset("i","re")}
            let im = ${v.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} +
                ${v.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${C.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${C.setByOffset("k",v.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:we({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(g)/ir)},programUniforms:w})}},Lf=(e,t)=>{ep(e.inputs,t),e.compute(tp(e.inputs,t))}}),rp,ip,Vf,X0=L(()=>{ie(),ue(),le(),rp=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],a=e[2];if(t.dataType!==r.dataType||t.dataType!==a.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let n=t.dims[t.dims.length-1],i=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==n)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==i)throw new Error("Skip must have the same sequence length as input");if(a.dims.length!==1)throw new Error("Gamma must be 1D");if(a.dims[a.dims.length-1]!==n)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let o=e[3];if(o.dims.length!==1)throw new Error("Beta must be 1D");if(o.dims[o.dims.length-1]!==n)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let o=e[4];if(o.dims.length!==1)throw new Error("Bias must be 1D");if(o.dims[o.dims.length-1]!==n)throw new Error("Bias must have the same hidden size as input")}},ip=(e,t,r,a)=>{let n=t.simplified,i=e[0].dims,o=O.size(i),l=i,d=o,p=i.slice(-1)[0],f=a?i.slice(0,-1).concat(1):[],m=!n&&e.length>3,g=e.length>4,_=a&&r>1,w=a&&r>2,b=r>3,x=64,v=Se(p),$=[{type:12,data:d},{type:12,data:v},{type:12,data:p},{type:1,data:t.epsilon}],T=C=>{let E=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],z=[B("x",e[0].dataType,e[0].dims,v),B("skip",e[1].dataType,e[1].dims,v),B("gamma",e[2].dataType,e[2].dims,v)];m&&z.push(B("beta",e[3].dataType,e[3].dims,v)),g&&z.push(B("bias",e[4].dataType,e[4].dims,v)),z.push(X("output",e[0].dataType,l,v)),_&&z.push(X("mean_output",1,f)),w&&z.push(X("inv_std_output",1,f)),b&&z.push(X("input_skip_bias_sum",e[0].dataType,l,v));let M=ze(e[0].dataType),U=ze(1,v);return`

      ${C.registerUniforms(E).declareVariables(...z)}
      var<workgroup> sum_shared : array<${U}, ${x}>;
      var<workgroup> sum_squared_shared : array<${U}, ${x}>;

      ${C.mainStart([x,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${x};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${x};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${x-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${g?"bias[offset1d + i]":M+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${b?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${er(M,v,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${x};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Tt("sum",v)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Tt("square_sum",v)} / f32(uniforms.hidden_size) ${n?"":"- mean * mean"} + uniforms.epsilon);
        ${_?"mean_output[global_idx] = mean;":""}
        ${w?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${n?"":`- ${M}(mean)`}) *
            ${M}(inv_std_dev) * gamma[offset1d + i]
            ${m?"+ beta[offset1d + i]":""};
        }
      }`},k=[{dims:l,dataType:e[0].dataType}];return r>1&&k.push({dims:f,dataType:1}),r>2&&k.push({dims:f,dataType:1}),r>3&&k.push({dims:i,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${_};${w};${b}`,inputDependencies:e.map((C,E)=>"type")},getShaderSource:T,getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(d/p)},programUniforms:$})}},Vf=(e,t)=>{rp(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(ip(e.inputs,t,e.outputCount,!1),{outputs:r})}}),ap,$r,np,Ra,sp,op,qf,Ff,J0=L(()=>{ie(),ue(),ke(),le(),ap=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,a)=>{if(e[a+1].dataType!==6&&e[a+1].dataType!==7)throw new Error(`Input ${a} must be an array of int32 or int64`)})},$r=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(a=>r.push(Number(a)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(a=>r.push(Number(a)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},np=(e,t)=>{if(e.length>1){let r=$r(e,1),a=$r(e,2),n=$r(e,3);return n.length===0&&(n=[...Array(e[0].dims.length).keys()]),we({starts:r,ends:a,axes:n})}else return t},Ra=(e,t,r,a,n)=>{let i=e;return e<0&&(i+=r[a[t]]),n[t]<0?Math.max(0,Math.min(i,r[a[t]]-1)):Math.max(0,Math.min(i,r[a[t]]))},sp=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${Y("uniforms.input_shape","i",r.length)};
            let steps_i = ${Y("uniforms.steps","i",r.length)};
            let signs_i = ${Y("uniforms.signs","i",r.length)};
            let starts_i = ${Y("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,op=(e,t)=>{let r=e[0].dims,a=O.size(r),n=t.axes.length>0?O.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],i=$r(e,4);i.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),i.length===0&&(i=Array(n.length).fill(1));let o=t.starts.map((v,$)=>Ra(v,$,r,n,i)),l=t.ends.map((v,$)=>Ra(v,$,r,n,i));if(n.length!==o.length||n.length!==l.length)throw new Error("start, ends and axes should have the same number of elements");if(n.length!==r.length)for(let v=0;v<r.length;++v)n.includes(v)||(o.splice(v,0,0),l.splice(v,0,r[v]),i.splice(v,0,1));let d=i.map(v=>Math.sign(v));i.forEach((v,$,T)=>{if(v<0){let k=(l[$]-o[$])/v,C=o[$],E=C+k*i[$];o[$]=E,l[$]=C,T[$]=-v}});let p=r.slice(0);n.forEach((v,$)=>{p[v]=Math.ceil((l[v]-o[v])/i[v])});let f={dims:p,dataType:e[0].dataType},m=X("output",e[0].dataType,p.length),g=B("input",e[0].dataType,e[0].dims.length),_=O.size(p),w=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:o.length},{name:"signs",type:"i32",length:d.length},{name:"steps",type:"u32",length:i.length}],b=[{type:12,data:_},{type:12,data:o},{type:6,data:d},{type:12,data:i},...ee(e[0].dims,p)],x=v=>`
      ${v.registerUniforms(w).declareVariables(g,m)}
        ${sp(g,m,r)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${m.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${m.setByOffset("global_idx",g.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${d.length}_${o.length}_${i.length}`,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:[f],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:b})}},qf=(e,t)=>{ap(e.inputs,t);let r=np(e.inputs,t);e.compute(op(e.inputs,r),{inputs:[0]})},Ff=e=>{let t=e.starts,r=e.ends,a=e.axes;return we({starts:t,ends:r,axes:a})}}),up,lp,Gf,Hf,Y0=L(()=>{ie(),ue(),ke(),It(),le(),up=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},lp=(e,t)=>{let r=e.inputs[0],a=r.dims,n=O.size(a),i=a.length,o=O.normalizeAxis(t.axis,i),l=o<a.length-1,d,p=[];l?(p=Array.from({length:i},(z,M)=>M),p[o]=i-1,p[i-1]=o,d=e.compute(qe(r,p),{inputs:[r],outputs:[-1]})[0]):d=r;let f=d.dims,m=f[i-1],g=n/m,_=Se(m),w=m/_,b=64;g===1&&(b=256);let x=(z,M)=>M===4?`max(max(${z}.x, ${z}.y), max(${z}.z, ${z}.w))`:M===2?`max(${z}.x, ${z}.y)`:M===3?`max(max(${z}.x, ${z}.y), ${z}.z)`:z,v=B("x",d.dataType,d.dims,_),$=X("result",d.dataType,d.dims,_),T=v.type.value,k=ze(d.dataType)==="f32"?`var threadMax = ${T}(-3.402823e+38f);`:`var threadMax = ${T}(-65504.0h);`,C=z=>`
      var<workgroup> rowMaxShared : ${T};
      var<workgroup> rowSumShared : ${T};
      var<workgroup> threadShared : array<${T}, ${b}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${T} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${T}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${z.registerUniform("packedCols","i32").declareVariables(v,$)}
      ${z.mainStart(b)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${b};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${k}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${T}(${x("threadShared[0]",_)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${T}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${T}(${Tt("threadShared[0]",_)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,E=e.compute({name:"Softmax",shaderCache:{hint:`${_};${b}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:f,dataType:d.dataType}],dispatchGroup:{x:g},programUniforms:[{type:6,data:w}]}),getShaderSource:C},{inputs:[d],outputs:[l?-1:0]})[0];l&&e.compute(qe(E,p),{inputs:[E]})},Gf=(e,t)=>{up(e.inputs),lp(e,t)},Hf=e=>we({axis:e.axis})}),Ba,dp,pp,cp,jf,e_=L(()=>{ie(),ue(),le(),Ba=e=>Array.from(e.getBigInt64Array(),Number),dp=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Ba(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},pp=(e,t)=>{let r=[];for(let a=0;a<e.length;++a)r.push(e[a]*t[a]);return r},cp=(e,t)=>{let r=e[0].dims,a=t??Ba(e[1]),n=pp(r,a),i=O.size(n),o=e[0].dataType,l=B("input",o,r.length),d=X("output",o,n.length),p=f=>`
      const inputShape = ${l.indices(...r)};
      ${f.registerUniform("output_size","u32").declareVariables(l,d)}
      ${f.mainStart()}
      ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${d.offsetToIndices("global_idx")};
      var input_indices: ${l.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${l.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${d.indicesGet("output_indices","i")}  % input_dim_i;

        ${l.indicesSet("input_indices","i","input_dim_value")}
      }
      ${d.setByOffset("global_idx",l.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${a}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},...ee(e[0].dims,n)]}),getShaderSource:p}},jf=e=>{dp(e.inputs),e.compute(cp(e.inputs),{inputs:[0]})}}),hp,fp,Kf,t_=L(()=>{ie(),ue(),le(),hp=(e,t,r,a,n)=>{let i=X("output_data",n,r.length,4),o=B("a_data",t[1].dataType,t[1].dims.length,4),l=B("b_data",t[2].dataType,t[2].dims.length,4),d=B("c_data",t[0].dataType,t[0].dims.length,4),p,f=(m,g,_)=>`select(${g}, ${m}, ${_})`;if(!a)p=i.setByOffset("global_idx",f(o.getByOffset("global_idx"),l.getByOffset("global_idx"),d.getByOffset("global_idx")));else{let m=(g,_,w="")=>{let b=`a_data[index_a${_}][component_a${_}]`,x=`b_data[index_b${_}][component_b${_}]`,v=`bool(c_data[index_c${_}] & (0xffu << (component_c${_} * 8)))`;return`
            let output_indices${_} = ${i.offsetToIndices(`global_idx * 4u + ${_}u`)};
            let offset_a${_} = ${o.broadcastedIndicesToOffset(`output_indices${_}`,i)};
            let offset_b${_} = ${l.broadcastedIndicesToOffset(`output_indices${_}`,i)};
            let offset_c${_} = ${d.broadcastedIndicesToOffset(`output_indices${_}`,i)};
            let index_a${_} = offset_a${_} / 4u;
            let index_b${_} = offset_b${_} / 4u;
            let index_c${_} = offset_c${_} / 4u;
            let component_a${_} = offset_a${_} % 4u;
            let component_b${_} = offset_b${_} % 4u;
            let component_c${_} = offset_c${_} % 4u;
            ${g}[${_}] = ${w}(${f(b,x,v)});
          `};n===9?p=`
            var data = vec4<u32>(0);
            ${m("data",0,"u32")}
            ${m("data",1,"u32")}
            ${m("data",2,"u32")}
            ${m("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:p=`
            ${m("output_data[global_idx]",0)}
            ${m("output_data[global_idx]",1)}
            ${m("output_data[global_idx]",2)}
            ${m("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(d,o,l,i)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${p}
      }`},fp=e=>{let t=e[1].dims,r=e[2].dims,a=e[0].dims,n=e[1].dataType,i=!(O.areEqual(t,r)&&O.areEqual(r,a)),o=t,l=O.size(t);if(i){let p=rr.calcShape(rr.calcShape(t,r,!1),a,!1);if(!p)throw new Error("Can't perform where op on the given tensors");o=p,l=O.size(o)}let d=Math.ceil(l/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:p=>hp(p,e,o,i,n),getRunData:()=>({outputs:[{dims:o,dataType:n}],dispatchGroup:{x:Math.ceil(l/64/4)},programUniforms:[{type:12,data:d},...ee(a,t,r,o)]})}},Kf=e=>{e.compute(fp(e.inputs))}}),Zf,r_=L(()=>{m0(),xn(),g0(),y0(),_0(),w0(),b0(),k0(),C0(),I0(),E0(),z0(),A0(),O0(),M0(),R0(),B0(),N0(),D0(),P0(),U0(),W0(),L0(),V0(),q0(),mf(),F0(),G0(),H0(),j0(),K0(),vn(),Z0(),Q0(),X0(),J0(),Y0(),_f(),e_(),It(),Sn(),t_(),Zf=new Map([["Abs",[Vc]],["Acos",[qc]],["Acosh",[Fc]],["Add",[Sh]],["ArgMax",[Pc,Qa]],["ArgMin",[Dc,Qa]],["Asin",[Gc]],["Asinh",[Hc]],["Atan",[jc]],["Atanh",[Kc]],["Attention",[Uc]],["AveragePool",[Cf,Tf]],["BatchNormalization",[Wc]],["BiasAdd",[Lc]],["BiasSplitGelu",[xh]],["Cast",[Qc,Zc]],["Ceil",[Jc]],["Clip",[Xc]],["Concat",[Rh,Bh]],["Conv",[rn,tn]],["ConvTranspose",[Gh,Fh]],["Cos",[Yc]],["Cosh",[eh]],["CumSum",[Hh,jh]],["DepthToSpace",[Kh,Zh]],["DequantizeLinear",[Rf,Bf]],["Div",[kh]],["Einsum",[Qh,Xh]],["Elu",[th,Cr]],["Equal",[Th]],["Erf",[rh]],["Exp",[ih]],["Expand",[Jh]],["FastGelu",[Yh]],["Floor",[ah]],["FusedConv",[rn,tn]],["Gather",[tf,ef]],["GatherElements",[uf,of]],["GatherBlockQuantized",[nf,sf]],["GatherND",[rf,af]],["Gelu",[nh]],["Gemm",[df,lf]],["GlobalAveragePool",[Ef,If]],["GlobalMaxPool",[Mf,Of]],["Greater",[zh]],["GreaterOrEqual",[Oh]],["GridSample",[pf,cf]],["GroupQueryAttention",[wf]],["HardSigmoid",[hh,ch]],["InstanceNormalization",[bf]],["LayerNormalization",[$f]],["LeakyRelu",[sh,Cr]],["Less",[Ah]],["LessOrEqual",[Mh]],["Log",[$h]],["MatMul",[vf]],["MatMulNBits",[xf,Sf]],["MaxPool",[zf,Af]],["Mul",[Ch]],["MultiHeadAttention",[ff,hf]],["Neg",[uh]],["Not",[oh]],["Pad",[kf]],["Pow",[Ih]],["QuickGelu",[vh,Cr]],["Range",[Nf]],["Reciprocal",[lh]],["ReduceMin",[Oc]],["ReduceMean",[Cc]],["ReduceMax",[Ac]],["ReduceSum",[Rc]],["ReduceProd",[Mc]],["ReduceL1",[Ic]],["ReduceL2",[Ec]],["ReduceLogSum",[Nc]],["ReduceLogSumExp",[zc]],["ReduceSumSquare",[Bc]],["Relu",[dh]],["Resize",[Uf,Wf]],["RotaryEmbedding",[Lf]],["ScatterND",[Pf,Df]],["Sigmoid",[ph]],["Sin",[fh]],["Sinh",[mh]],["Slice",[qf,Ff]],["SkipLayerNormalization",[Vf]],["Split",[gf,yf]],["Sqrt",[gh]],["Softmax",[Gf,Hf]],["Sub",[Eh]],["Tan",[yh]],["Tanh",[_h]],["ThresholdedRelu",[bh,Cr]],["Tile",[jf]],["Transpose",[mc,gc]],["Where",[Kf]]])}),Qf,i_=L(()=>{at(),ft(),le(),Qf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,a,n){rt(e.programInfo.name);let i=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let l=[];for(let p of t)l.push({binding:l.length,resource:{buffer:p.buffer}});for(let p of r)l.push({binding:l.length,resource:{buffer:p.buffer}});n&&l.push({binding:l.length,resource:n});let d=i.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:l,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let p={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:d,dispatchGroup:a};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(p)}o.setPipeline(e.computePipeline),o.setBindGroup(0,d),o.dispatchWorkgroups(...a),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Ke(e.programInfo.name)}dispose(){}build(e,t){rt(e.name);let r=this.backend.device,a=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"},{feature:"subgroups-f16",extension:"subgroups_f16"}].forEach(p=>{r.features.has(p.feature)&&a.push(`enable ${p.extension};`)});let n=fc(t,this.backend.device.limits),i=e.getShaderSource(n),o=`${a.join(`
`)}
${n.additionalImplementations}
${i}`,l=r.createShaderModule({code:o,label:e.name});ce("verbose",()=>`[WebGPU] ${e.name} shader code: ${o}`);let d=r.createComputePipeline({compute:{module:l,entryPoint:"main"},layout:"auto",label:e.name});return Ke(e.name),{programInfo:e,computePipeline:d,uniformVariablesInfo:n.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,a=typeof e=="number"?1:e.z||1,n=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=n&&r<=n&&a<=n)return[t,r,a];let i=t*r*a,o=Math.ceil(Math.sqrt(i));if(o>n){if(o=Math.ceil(Math.cbrt(i)),o>n)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[o,o,o]}else return[o,o,1]}}}),mp,gp,yp,_p,Xf,a_=L(()=>{at(),ie(),ft(),uc(),h0(),r_(),i_(),mp=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let a=0;a<e.length;++a){let n=e[a].dataType;switch(t[a]){case"none":{r.push("");break}case"type":{r.push(`${n}`);break}case"rank":{let i=e[a].dims.length;r.push(`${n};${i}`);break}case"dims":{let i=e[a].dims.join(",");r.push(`${n};${i}`);break}default:throw new Error(`unsupported input dependency: ${t[a]}`)}}return r.join("|")},gp=(e,t,r)=>{var n,i;let a=e.name;return(n=e.shaderCache)!=null&&n.hint&&(a+="["+e.shaderCache.hint+"]"),a+=":"+r+`:${mp(t,((i=e.shaderCache)==null?void 0:i.inputDependencies)??new Array(t.length).fill("dims"))}`,a},yp=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},_p=class{constructor(e){this.subgroupsSupported=e.features.has("subgroups"),this.subgroupsF16Supported=e.features.has("subgroups");let t=e.limits;!this.subgroupsSupported||!t.minSubgroupSize||!t.maxSubgroupSize?this.subgroupSizeRange=void 0:this.subgroupSizeRange=[t.minSubgroupSize,t.maxSubgroupSize]}},Xf=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],a={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},n=i=>t.features.has(i)&&r.push(i)&&!0;n("chromium-experimental-timestamp-query-inside-passes")||n("timestamp-query"),n("shader-f16"),n("subgroups")&&n("subgroups-f16"),this.device=await t.requestDevice(a),this.deviceInfo=new _p(this.device),this.adapterInfo=new yp(t.info||await t.requestAdapterInfo()),this.gpuDataManager=lc(this),this.programManager=new Qf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,_n(e.logLevel,!!e.debug),this.device.onuncapturederror=i=>{i.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${i.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;rt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var a;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let n=0;n<t.length/2;n++){let i=r[n],o=i.kernelId,l=this.kernels.get(o),d=l.kernelType,p=l.kernelName,f=i.programName,m=i.inputTensorViews,g=i.outputTensorViews,_=t[n*2],w=t[n*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=_);let b=Number(_-this.queryTimeBase),x=Number(w-this.queryTimeBase);if(!Number.isSafeInteger(b)||!Number.isSafeInteger(x))throw new RangeError("incorrect timestamp range");if((a=this.env.webgpu.profiling)!=null&&a.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:m.map(v=>({dims:v.dims,dataType:Dt(v.dataType)})),outputsMetadata:g.map(v=>({dims:v.dims,dataType:Dt(v.dataType)})),kernelId:o,kernelType:d,kernelName:p,programName:f,startTime:b,endTime:x});else{let v="";m.forEach((T,k)=>{v+=`input[${k}]: [${T.dims}] | ${Dt(T.dataType)}, `});let $="";g.forEach((T,k)=>{$+=`output[${k}]: [${T.dims}] | ${Dt(T.dataType)}, `}),console.log(`[profiling] kernel "${o}|${d}|${p}|${f}" ${v}${$}execution time: ${x-b} ns`)}Mr("GPU",`${f}::${_}::${w}`)}e.unmap(),this.pendingQueries.delete(e)}),Ke()}run(e,t,r,a,n,i){rt(e.name);let o=[];for(let $=0;$<t.length;++$){let T=t[$].data;if(T===0)continue;let k=this.gpuDataManager.get(T);if(!k)throw new Error(`no GPU data for input: ${T}`);o.push(k)}let{outputs:l,dispatchGroup:d,programUniforms:p}=e.getRunData(t),f=r.length===0?l.map(($,T)=>T):r;if(f.length!==l.length)throw new Error(`Output size ${f.length} must be equal to ${l.length}.`);let m=[],g=[];for(let $=0;$<l.length;++$){if(!Number.isInteger(f[$])||f[$]<-3||f[$]>=i)throw new Error(`Invalid output index: ${f[$]}`);if(f[$]===-3)continue;let T=f[$]===-1,k=f[$]===-2,C=T||k?n(l[$].dataType,l[$].dims):a(f[$],l[$].dataType,l[$].dims);if(m.push(C),C.data===0)continue;let E=this.gpuDataManager.get(C.data);if(!E)throw new Error(`no GPU data for output: ${C.data}`);if(T&&this.temporaryData.push(E),k){let z=this.kernelPersistentData.get(this.currentKernelId);z||(z=[],this.kernelPersistentData.set(this.currentKernelId,z)),z.push(E)}g.push(E)}if(o.length!==t.length||g.length!==m.length){if(g.length===0)return Ke(e.name),m;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let _;if(p){let $=0,T=[];p.forEach(z=>{let M=typeof z.data=="number"?[z.data]:z.data;if(M.length===0)return;let U=z.type===10?2:4,H,j;z.type===10?(j=M.length>4?16:M.length>2?8:M.length*U,H=M.length>4?16:U*M.length):(j=M.length<=2?M.length*U:16,H=16),$=Math.ceil($/j)*j,T.push($);let K=z.type===10?8:4;$+=M.length>4?Math.ceil(M.length/K)*H:M.length*U});let k=16;$=Math.ceil($/k)*k;let C=new ArrayBuffer($);p.forEach((z,M)=>{let U=T[M],H=typeof z.data=="number"?[z.data]:z.data;if(z.type===6)new Int32Array(C,U,H.length).set(H);else if(z.type===12)new Uint32Array(C,U,H.length).set(H);else if(z.type===10)new Uint16Array(C,U,H.length).set(H);else if(z.type===1)new Float32Array(C,U,H.length).set(H);else throw new Error(`Unsupported uniform type: ${Dt(z.type)}`)});let E=this.gpuDataManager.create($,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(E.buffer,0,C,0,$),this.gpuDataManager.release(E.id),_={offset:0,size:$,buffer:E.buffer}}let w=this.programManager.normalizeDispatchGroupSize(d),b=w[1]===1&&w[2]===1,x=gp(e,t,b),v=this.programManager.getArtifact(x);if(v||(v=this.programManager.build(e,w),this.programManager.setArtifact(x,v),ce("info",()=>`[artifact] key: ${x}, programName: ${e.name}`)),p&&v.uniformVariablesInfo){if(p.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${p.length} in program "${v.programInfo.name}".`);for(let $=0;$<p.length;$++){let T=p[$],k=T.type,C=typeof T.data=="number"?1:T.data.length,[E,z]=v.uniformVariablesInfo[$];if(k!==E||C!==z)throw new Error(`Uniform variable ${$} mismatch: expect type ${E} with size ${z}, got type ${k} with size ${C} in program "${v.programInfo.name}".`)}}if(ce("info",()=>`[ProgramManager] run "${e.name}" (key=${x}) with ${w[0]}x${w[1]}x${w[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let $={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:m};this.pendingKernels.push($),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push($)}return this.programManager.run(v,o,g,w,_),Ke(e.name),m}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,a){let n=Zf.get(e);if(!n)throw new Error(`kernel not implemented: ${e}`);let i={kernelType:e,kernelName:a,kernelEntry:n[0],attributes:[n[1],r]};this.kernels.set(t,i)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let a=this.kernels.get(e);if(!a)throw new Error(`kernel not created: ${e}`);let n=a.kernelType,i=a.kernelName,o=a.kernelEntry,l=a.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${n}] ${i}" is not allowed to be called recursively`);this.currentKernelId=e,l[0]&&(l[1]=l[0](l[1]),l[0]=void 0),ce("info",()=>`[WebGPU] Start to run kernel "[${n}] ${i}"...`);let d=this.env.debug;this.temporaryData=[];try{return d&&this.device.pushErrorScope("validation"),o(t,l[1]),0}catch(p){return r.push(Promise.resolve(`[WebGPU] Kernel "[${n}] ${i}" failed. ${p}`)),1}finally{d&&r.push(this.device.popErrorScope().then(p=>p?`GPU validation error for kernel "[${n}] ${i}": ${p.message}`:null));for(let p of this.temporaryData)this.gpuDataManager.release(p.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,a){let n=this.sessionExternalDataMapping.get(e);n||(n=new Map,this.sessionExternalDataMapping.set(e,n));let i=n.get(t),o=this.gpuDataManager.registerExternalBuffer(r,a,i);return n.set(t,[o,r]),o}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let a=await ja(this,e,t);return wn(a.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){ce("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){ce("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){ce("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let a=0;a<r;a++){let n=this.getComputePassEncoder(),i=e[a];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(i.computePipeline),n.setBindGroup(0,i.bindGroup),n.dispatchWorkgroups(...i.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[a]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),wp,Na,bp,Da,Pa,Ua,$p,Jf,n_=L(()=>{ft(),wp=1,Na=()=>wp++,bp=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Da=(e,t)=>{let r=bp.get(e);if(!r)throw new Error("Unsupported data type.");return t.length>0?Math.ceil(t.reduce((a,n)=>a*n)*r/8):0},Pa=class{constructor(e){this.sessionId=e.sessionId,this.mlContext=e.context,this.mlTensor=e.tensor,this.dataType=e.dataType,this.tensorShape=e.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return Da(this.dataType,this.tensorShape)}destroy(){ce("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((a,n)=>a===r[n])}},Ua=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,a){let n=this.tensorManager.getMLContext(e);if(this.wrapper){if(this.wrapper.canReuseTensor(n,t,r))return this.wrapper.tensor;if(a){if(this.wrapper.byteLength!==Da(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let i=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,i,!0,!0),a&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){if(this.wrapper)if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}else ce("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor();this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},$p=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=Na();return this.tensorTrackersById.set(e,new Ua(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,a,n){ce("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${a}, copyOld: ${n}}`);let i=this.tensorTrackersById.get(t);if(!i)throw new Error("Tensor not found.");return i.ensureTensor(e,r,a,n)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){ce("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,a){let n=this.getMLContext(e),i=Na(),o=new Pa({sessionId:e,context:n,tensor:t,dataType:r,shape:a});return this.tensorTrackersById.set(i,new Ua(this,o)),this.externalTensors.add(o),i}async getCachedTensor(e,t,r,a,n,i){let o=this.getMLContext(e);for(let[d,p]of this.freeTensors.entries())if(p.canReuseTensor(o,t,r)){ce("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, shape: ${r}}`);let f=this.freeTensors.splice(d,1)[0];return f.sessionId=e,f}ce("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, shape: ${r}}`);let l=await o.createTensor({dataType:t,shape:r,dimensions:r,usage:a,writable:n,readable:i});return new Pa({sessionId:e,context:o,tensor:l,dataType:t,shape:r})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Jf=(...e)=>new $p(...e)}),ai,vp,Yf,s_=L(()=>{ie(),Ht(),uc(),n_(),ft(),ai=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),vp=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),a=Object.keys(t).sort();return r.length===a.length&&r.every((n,i)=>n===a[i]&&e[n]===t[n])},Yf=class{constructor(e){this.tensorManager=Jf(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.temporaryGraphInputs=[],this.temporarySessionTensorIds=new Map,_n(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){ce("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){ce("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)ce("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(a=>a.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:a}),a}}else if(e===void 0){let r=this.mlContextCache.findIndex(a=>a.options===void 0&&a.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:a}),a}}let t=this.mlContextCache.findIndex(r=>vp(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let a=this.mlContextCache.findIndex(n=>n.mlContext===t);a!==-1&&this.mlContextCache.splice(a,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){ce("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,a,n){let i=ai.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,i,a,n)}async createTemporaryTensor(e,t,r){ce("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let a=ai.get(t);if(!a)throw new Error(`Unsupported ONNX data type: ${t}`);let n=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,n,a,r,!1);let i=this.temporarySessionTensorIds.get(e);return i?i.push(n):this.temporarySessionTensorIds.set(e,[n]),n}uploadTensor(e,t){if(!Ee().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");ce("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return wn(r,t)}}registerMLTensor(e,t,r,a){let n=ai.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);let i=this.tensorManager.registerTensor(e,t,n,a);return ce("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${n}, dimensions: ${a}} -> {tensorId: ${i}}`),i}registerMLConstant(e,t,r,a,n,i){if(!i)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let l=i.get(o);if(!l)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(t,t+r).buffer,p;switch(n.dataType){case"float32":p=new Float32Array(d);break;case"float16":p=new Uint16Array(d);break;case"int32":p=new Int32Array(d);break;case"uint32":p=new Uint32Array(d);break;case"int64":p=new BigInt64Array(d);break;case"uint64":p=new BigUint64Array(d);break;case"int8":p=new Int8Array(d);break;case"int4":case"uint4":case"uint8":p=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${n.dataType} in creating WebNN Constant from external data.`)}return ce("verbose",()=>`[WebNN] registerMLConstant {dataType: ${n.dataType}, shape: ${n.shape}}}`),a.constant(n,p)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}flush(){}}}),em={};Nr(em,{init:()=>tm});var ni,xp,tm,o_=L(()=>{ie(),a_(),ft(),ue(),s_(),ni=class rm{constructor(t,r,a,n){this.module=t,this.dataType=r,this.data=a,this.dims=n}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(O.size(t)!==O.size(this.dims))throw new Error("Invalid new shape");return new rm(this.module,this.dataType,this.data,t)}},xp=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo,this.deviceInfo=t.deviceInfo;let a=e.PTR_SIZE,n=r/e.PTR_SIZE,i=a===4?"i32":"i64";this.opKernelContext=Number(e.getValue(a*n++,i));let o=Number(e.getValue(a*n++,i));this.outputCount=Number(e.getValue(a*n++,i)),this.customDataOffset=Number(e.getValue(a*n++,"*")),this.customDataSize=Number(e.getValue(a*n++,i));let l=[];for(let d=0;d<o;d++){let p=Number(e.getValue(a*n++,i)),f=Number(e.getValue(a*n++,"*")),m=Number(e.getValue(a*n++,i)),g=[];for(let _=0;_<m;_++)g.push(Number(e.getValue(a*n++,i)));l.push(new ni(e,p,f,g))}this.inputs=l}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var o;let r=((o=t==null?void 0:t.inputs)==null?void 0:o.map(l=>typeof l=="number"?this.inputs[l]:l))??this.inputs,a=(t==null?void 0:t.outputs)??[],n=(l,d,p)=>new ni(this.module,d,this.output(l,p),p),i=(l,d)=>{let p=Pt(l,d);if(!p)throw new Error(`Unsupported data type: ${l}`);let f=p>0?this.backend.gpuDataManager.create(p).id:0;return new ni(this.module,l,f,d)};return this.backend.run(e,r,a,n,i,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let a=this.module.PTR_SIZE,n=a===4?"i32":"i64",i=this.module.stackAlloc((1+t.length)*a);this.module.setValue(i,t.length,n);for(let o=0;o<t.length;o++)this.module.setValue(i+a*(o+1),t[o],n);return this.module._JsepOutput(this.opKernelContext,e,i)}catch(a){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${a}`)}finally{this.module.stackRestore(r)}}},tm=async(e,t,r,a)=>{let n=t.jsepInit;if(!n)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let i=new Xf;await i.initialize(r,a),n("webgpu",[i,o=>i.alloc(Number(o)),o=>i.free(o),(o,l,d,p=!1)=>{if(p)ce("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(l)}, size=${Number(d)}`),i.memcpy(Number(o),Number(l));else{ce("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let f=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));i.upload(Number(l),f)}},async(o,l,d)=>{ce("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${l}, size=${d}`),await i.download(Number(o),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(o,l,d)=>i.createKernel(o,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),o=>i.releaseKernel(o),(o,l,d,p)=>{ce("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${l}`);let f=new xp(t,i,Number(l));return i.computeKernel(Number(o),f,p)},()=>i.captureBegin(),()=>i.captureEnd(),()=>i.replay()])}else{let i=new Yf(r);n("webnn",[i,()=>i.reserveTensorId(),o=>i.releaseTensorId(o),async(o,l,d,p,f)=>i.ensureTensor(o,l,d,p,f),(o,l)=>{i.uploadTensor(o,l)},async(o,l)=>i.downloadTensor(o,l)])}}}),Sp,zn,An,vt,kp,wi,On,Mn,Wa,Rn,Bn,Nn,im=L(()=>{p0(),c0(),ie(),Ht(),hn(),oc(),Sp=(e,t)=>{Ee()._OrtInit(e,t)!==0&&ge("Can't initialize onnxruntime.")},zn=async e=>{Sp(e.wasm.numThreads,mi(e.logLevel))},An=async(e,t)=>{{let r=(o_(),hi(em)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let a=e.webgpu.adapter;if(a){if(typeof a.limits!="object"||typeof a.features!="object"||typeof a.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let n=e.webgpu.powerPreference;if(n!==void 0&&n!=="low-power"&&n!=="high-performance")throw new Error(`Invalid powerPreference setting: "${n}"`);let i=e.webgpu.forceFallbackAdapter;if(i!==void 0&&typeof i!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${i}"`);if(a=await navigator.gpu.requestAdapter({powerPreference:n,forceFallbackAdapter:i}),!a)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",Ee(),e,a)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",Ee(),e)}}},vt=new Map,kp=e=>{let t=Ee(),r=t.stackSave();try{let a=t.PTR_SIZE,n=t.stackAlloc(2*a);t._OrtGetInputOutputCount(e,n,n+a)!==0&&ge("Can't get session input/output count.");let i=a===4?"i32":"i64";return[Number(t.getValue(n,i)),Number(t.getValue(n+a,i))]}finally{t.stackRestore(r)}},wi=e=>{let t=Ee(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},On=async(e,t)=>{var m,g,_;let r,a,n=Ee();Array.isArray(e)?[r,a]=e:e.buffer===n.HEAPU8.buffer?[r,a]=[e.byteOffset,e.byteLength]:[r,a]=wi(e);let i=0,o=0,l=0,d=[],p=[],f=[];try{if([o,d]=sc(t),(t==null?void 0:t.externalData)&&n.mountExternalData){let C=[];for(let E of t.externalData){let z=typeof E=="string"?E:E.path;C.push(yn(typeof E=="string"?E:E.data).then(M=>{n.mountExternalData(z,M)}))}await Promise.all(C)}for(let C of(t==null?void 0:t.executionProviders)??[])if((typeof C=="string"?C:C.name)==="webnn"){if(n.shouldTransferToMLTensor=!1,typeof C!="string"){let E=C,z=E==null?void 0:E.context,M=E==null?void 0:E.gpuDevice,U=E==null?void 0:E.deviceType,H=E==null?void 0:E.powerPreference;z?n.currentContext=z:M?n.currentContext=await n.jsepCreateMLContext(M):n.currentContext=await n.jsepCreateMLContext({deviceType:U,powerPreference:H})}else n.currentContext=await n.jsepCreateMLContext();break}i=await n._OrtCreateSession(r,a,o),i===0&&ge("Can't create a session."),(m=n.jsepOnCreateSession)==null||m.call(n),n.currentContext&&(n.jsepRegisterMLContext(i,n.currentContext),n.currentContext=void 0,n.shouldTransferToMLTensor=!0);let[w,b]=kp(i),x=!!(t!=null&&t.enableGraphCapture),v=[],$=[],T=[];for(let C=0;C<w;C++){let E=n._OrtGetInputName(i,C);E===0&&ge("Can't get an input name."),p.push(E),v.push(n.UTF8ToString(E))}for(let C=0;C<b;C++){let E=n._OrtGetOutputName(i,C);E===0&&ge("Can't get an output name."),f.push(E);let z=n.UTF8ToString(E);$.push(z);{if(x&&(t==null?void 0:t.preferredOutputLocation)===void 0){T.push("gpu-buffer");continue}let M=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((g=t==null?void 0:t.preferredOutputLocation)==null?void 0:g[z])??"cpu";if(M!=="cpu"&&M!=="cpu-pinned"&&M!=="gpu-buffer"&&M!=="ml-tensor")throw new Error(`Not supported preferred output location: ${M}.`);if(x&&M!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${M}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);T.push(M)}}let k=null;return T.some(C=>C==="gpu-buffer"||C==="ml-tensor")&&(l=n._OrtCreateBinding(i),l===0&&ge("Can't create IO binding."),k={handle:l,outputPreferredLocations:T,outputPreferredLocationsEncoded:T.map(C=>Ha(C))}),vt.set(i,[i,p,f,k,x,!1]),[i,v,$]}catch(w){throw p.forEach(b=>n._OrtFree(b)),f.forEach(b=>n._OrtFree(b)),l!==0&&n._OrtReleaseBinding(l)!==0&&ge("Can't release IO binding."),i!==0&&n._OrtReleaseSession(i)!==0&&ge("Can't release session."),w}finally{n._free(r),o!==0&&n._OrtReleaseSessionOptions(o)!==0&&ge("Can't release session options."),d.forEach(w=>n._free(w)),(_=n.unmountExternalData)==null||_.call(n)}},Mn=e=>{var d;let t=Ee(),r=vt.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[a,n,i,o,l]=r;o&&(l&&t._OrtClearBoundOutputs(o.handle)!==0&&ge("Can't clear bound outputs."),t._OrtReleaseBinding(o.handle)!==0&&ge("Can't release IO binding.")),(d=t.jsepOnReleaseSession)==null||d.call(t,e),n.forEach(p=>t._OrtFree(p)),i.forEach(p=>t._OrtFree(p)),t._OrtReleaseSession(a)!==0&&ge("Can't release session."),vt.delete(e)},Wa=async(e,t,r,a,n,i=!1)=>{if(!e){t.push(0);return}let o=Ee(),l=o.PTR_SIZE,d=e[0],p=e[1],f=e[3],m=f,g,_;if(d==="string"&&(f==="gpu-buffer"||f==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(i&&f!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${n} when enableGraphCapture is true.`);if(f==="gpu-buffer"){let x=e[2].gpuBuffer;_=Pt(Jt(d),p);let v=o.jsepRegisterBuffer;if(!v)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');g=v(a,n,x,_)}else if(f==="ml-tensor"){let x=e[2].mlTensor;_=Pt(Jt(d),p);let v=o.jsepRegisterMLTensor;if(!v)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');g=v(a,x,Jt(d),p)}else{let x=e[2];if(Array.isArray(x)){_=l*x.length,g=o._malloc(_),r.push(g);for(let v=0;v<x.length;v++){if(typeof x[v]!="string")throw new TypeError(`tensor data at index ${v} is not a string`);o.setValue(g+v*l,Oe(x[v],r),"*")}}else{let v=o.jsepIsGraphInput;if(d!=="string"&&v){let $=o._OrtGetInputName(a,n),T=o.UTF8ToString($);if(v(a,T)){let k=Jt(d);_=Pt(k,p),m="ml-tensor";let C=o.jsepCreateTemporaryTensor,E=o.jsepUploadTensor;if(!C||!E)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let z=await C(a,k,p);E(z,new Uint8Array(x.buffer,x.byteOffset,x.byteLength)),g=z}else _=x.byteLength,g=o._malloc(_),r.push(g),o.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,_),g)}else _=x.byteLength,g=o._malloc(_),r.push(g),o.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,_),g)}}let w=o.stackSave(),b=o.stackAlloc(4*p.length);try{p.forEach((v,$)=>o.setValue(b+$*l,v,l===4?"i32":"i64"));let x=o._OrtCreateTensor(Jt(d),g,_,b,p.length,Ha(m));x===0&&ge(`Can't create tensor for input/output. session=${a}, index=${n}.`),t.push(x)}finally{o.stackRestore(w)}},Rn=async(e,t,r,a,n,i)=>{var j,K,Q;let o=Ee(),l=o.PTR_SIZE,d=vt.get(e);if(!d)throw new Error(`cannot run inference. invalid session id: ${e}`);let p=d[0],f=d[1],m=d[2],g=d[3],_=d[4],w=d[5],b=t.length,x=a.length,v=0,$=[],T=[],k=[],C=[],E=o.stackSave(),z=o.stackAlloc(b*l),M=o.stackAlloc(b*l),U=o.stackAlloc(x*l),H=o.stackAlloc(x*l);try{[v,$]=nc(i);for(let F=0;F<b;F++)await Wa(r[F],T,C,e,t[F],_);for(let F=0;F<x;F++)await Wa(n[F],k,C,e,b+a[F],_);for(let F=0;F<b;F++)o.setValue(z+F*l,T[F],"*"),o.setValue(M+F*l,f[t[F]],"*");for(let F=0;F<x;F++)o.setValue(U+F*l,k[F],"*"),o.setValue(H+F*l,m[a[F]],"*");if(g&&!w){let{handle:F,outputPreferredLocations:de,outputPreferredLocationsEncoded:he}=g;if(f.length!==b)throw new Error(`input count from feeds (${b}) is expected to be always equal to model's input count (${f.length}).`);for(let G=0;G<b;G++){let ye=t[G];await o._OrtBindInput(F,f[ye],T[G])!==0&&ge(`Can't bind input[${G}] for session=${e}.`)}for(let G=0;G<x;G++){let ye=a[G];(j=n[G])!=null&&j[3]?o._OrtBindOutput(F,m[ye],k[G],0)!==0&&ge(`Can't bind pre-allocated output[${G}] for session=${e}.`):o._OrtBindOutput(F,m[ye],0,he[ye])!==0&&ge(`Can't bind output[${G}] to ${de[G]} for session=${e}.`)}vt.set(e,[p,f,m,g,_,!0])}(K=o.jsepOnRunStart)==null||K.call(o,p);let re;g?re=await o._OrtRunWithBinding(p,g.handle,x,U,v):re=await o._OrtRun(p,M,z,b,H,x,U,v),re!==0&&ge("failed to call OrtRun().");let J=[];for(let F=0;F<x;F++){let de=Number(o.getValue(U+F*l,"*"));if(de===k[F]){J.push(n[F]);continue}let he=o.stackSave(),G=o.stackAlloc(4*l),ye=!1,N,V=0;try{o._OrtGetTensorData(de,G,G+l,G+2*l,G+3*l)!==0&&ge(`Can't access output tensor data on index ${F}.`);let pe=l===4?"i32":"i64",ve=Number(o.getValue(G,pe));V=o.getValue(G+l,"*");let D=o.getValue(G+l*2,"*"),fe=Number(o.getValue(G+l*3,pe)),Fe=[];for(let Ce=0;Ce<fe;Ce++)Fe.push(Number(o.getValue(D+Ce*l,pe)));o._OrtFree(D)!==0&&ge("Can't free memory for tensor dims.");let Ne=Fe.reduce((Ce,_e)=>Ce*_e,1);N=Dt(ve);let Et=g==null?void 0:g.outputPreferredLocations[a[F]];if(N==="string"){if(Et==="gpu-buffer"||Et==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Ce=[];for(let _e=0;_e<Ne;_e++){let mt=o.getValue(V+_e*l,"*"),ur=o.getValue(V+(_e+1)*l,"*"),zt=_e===Ne-1?void 0:ur-mt;Ce.push(o.UTF8ToString(mt,zt))}J.push([N,Fe,Ce,"cpu"])}else if(Et==="gpu-buffer"&&Ne>0){let Ce=o.jsepGetBuffer;if(!Ce)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let _e=Ce(V),mt=Pt(ve,Ne);if(mt===void 0||!mn(N))throw new Error(`Unsupported data type: ${N}`);ye=!0,J.push([N,Fe,{gpuBuffer:_e,download:o.jsepCreateDownloader(_e,mt,N),dispose:()=>{o._OrtReleaseTensor(de)!==0&&ge("Can't release tensor.")}},"gpu-buffer"])}else if(Et==="ml-tensor"&&Ne>0){let Ce=o.jsepEnsureTensor;if(!Ce)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Pt(ve,Ne)===void 0||!gn(N))throw new Error(`Unsupported data type: ${N}`);let _e=await Ce(e,V,ve,Fe,!1);ye=!0,J.push([N,Fe,{mlTensor:_e,download:o.jsepCreateMLTensorDownloader(V,N),dispose:()=>{o.jsepReleaseTensorId(V),o._OrtReleaseTensor(de)}},"ml-tensor"])}else{let Ce=fn(N),_e=new Ce(Ne);new Uint8Array(_e.buffer,_e.byteOffset,_e.byteLength).set(o.HEAPU8.subarray(V,V+_e.byteLength)),J.push([N,Fe,_e,"cpu"])}}finally{o.stackRestore(he),N==="string"&&V&&o._free(V),ye||o._OrtReleaseTensor(de),(Q=o.jsepOnRunEnd)==null||Q.call(o,p)}}return g&&!_&&(o._OrtClearBoundOutputs(g.handle)!==0&&ge("Can't clear bound outputs."),vt.set(e,[p,f,m,g,_,!1])),J}finally{o.stackRestore(E),T.forEach(re=>o._OrtReleaseTensor(re)),k.forEach(re=>o._OrtReleaseTensor(re)),C.forEach(re=>o._free(re)),v!==0&&o._OrtReleaseRunOptions(v),$.forEach(re=>o._free(re))}},Bn=e=>{let t=Ee(),r=vt.get(e);if(!r)throw new Error("invalid session id");let a=r[0],n=t._OrtEndProfiling(a);n===0&&ge("Can't get an profile file name."),t._OrtFree(n)},Nn=e=>{let t=[];for(let r of e){let a=r[2];!Array.isArray(a)&&"buffer"in a&&t.push(a.buffer)}return t}}),xt,De,Qt,vr,xr,si,La,oi,Rt,Bt,Tp,am,nm,sm,om,um,lm,dm,pm=L(()=>{at(),im(),Ht(),pn(),xt=()=>!!$e.wasm.proxy&&typeof document<"u",Qt=!1,vr=!1,xr=!1,oi=new Map,Rt=(e,t)=>{let r=oi.get(e);r?r.push(t):oi.set(e,[t])},Bt=()=>{if(Qt||!vr||xr||!De)throw new Error("worker not ready")},Tp=e=>{switch(e.data.type){case"init-wasm":Qt=!1,e.data.err?(xr=!0,La[1](e.data.err)):(vr=!0,La[0]()),si&&(URL.revokeObjectURL(si),si=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=oi.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},am=async()=>{if(!vr){if(Qt)throw new Error("multiple calls to 'initWasm()' detected.");if(xr)throw new Error("previous call to 'initWasm()' failed.");if(Qt=!0,xt())return new Promise((e,t)=>{De==null||De.terminate(),ic().then(([r,a])=>{var n;try{De=a,De.onerror=o=>t(o),De.onmessage=Tp,La=[e,t];let i={type:"init-wasm",in:$e};!i.in.wasm.wasmPaths&&(r||(n=import.meta.url)!=null&&n.startsWith("file:"))&&(i.in.wasm.wasmPaths={wasm:new URL(""+new URL("ort-wasm-simd-threaded.jsep-D5Jk56-t.wasm",import.meta.url).href,import.meta.url).href}),De.postMessage(i),si=r}catch(i){t(i)}},t)});try{await cn($e.wasm),await zn($e),vr=!0}catch(e){throw xr=!0,e}finally{Qt=!1}}},nm=async e=>{if(xt())return Bt(),new Promise((t,r)=>{Rt("init-ep",[t,r]);let a={type:"init-ep",in:{epName:e,env:$e}};De.postMessage(a)});await An($e,e)},sm=async e=>xt()?(Bt(),new Promise((t,r)=>{Rt("copy-from",[t,r]);let a={type:"copy-from",in:{buffer:e}};De.postMessage(a,[e.buffer])})):wi(e),om=async(e,t)=>{if(xt()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Bt(),new Promise((r,a)=>{Rt("create",[r,a]);let n={type:"create",in:{model:e,options:{...t}}},i=[];e instanceof Uint8Array&&i.push(e.buffer),De.postMessage(n,i)})}else return On(e,t)},um=async e=>{if(xt())return Bt(),new Promise((t,r)=>{Rt("release",[t,r]);let a={type:"release",in:e};De.postMessage(a)});Mn(e)},lm=async(e,t,r,a,n,i)=>{if(xt()){if(r.some(o=>o[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(n.some(o=>o))throw new Error("pre-allocated output tensor is not supported for proxy.");return Bt(),new Promise((o,l)=>{Rt("run",[o,l]);let d=r,p={type:"run",in:{sessionId:e,inputIndices:t,inputs:d,outputIndices:a,options:i}};De.postMessage(p,Nn(d))})}else return Rn(e,t,r,a,n,i)},dm=async e=>{if(xt())return Bt(),new Promise((t,r)=>{Rt("end-profiling",[t,r]);let a={type:"end-profiling",in:e};De.postMessage(a)});Bn(e)}}),Va,Cp,cm,u_=L(()=>{at(),pm(),ie(),dn(),oc(),Va=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Cp=e=>{switch(e[3]){case"cpu":return new tt(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!mn(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:a,dispose:n}=e[2];return tt.fromGpuBuffer(r,{dataType:t,dims:e[1],download:a,dispose:n})}case"ml-tensor":{let t=e[0];if(!gn(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:a,dispose:n}=e[2];return tt.fromMLTensor(r,{dataType:t,dims:e[1],download:a,dispose:n})}default:throw new Error(`invalid data location: ${e[3]}`)}},cm=class{async fetchModelAndCopyToWasmMemory(e){return sm(await yn(e))}async loadModel(e,t){rt();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames]=await om(r,t),Ke()}async dispose(){return um(this.sessionId)}async run(e,t,r){rt();let a=[],n=[];Object.entries(e).forEach(m=>{let g=m[0],_=m[1],w=this.inputNames.indexOf(g);if(w===-1)throw new Error(`invalid input '${g}'`);a.push(_),n.push(w)});let i=[],o=[];Object.entries(t).forEach(m=>{let g=m[0],_=m[1],w=this.outputNames.indexOf(g);if(w===-1)throw new Error(`invalid output '${g}'`);i.push(_),o.push(w)});let l=a.map((m,g)=>Va(m,()=>`input "${this.inputNames[n[g]]}"`)),d=i.map((m,g)=>m?Va(m,()=>`output "${this.outputNames[o[g]]}"`):null),p=await lm(this.sessionId,n,l,o,d,r),f={};for(let m=0;m<p.length;m++)f[this.outputNames[o[m]]]=i[m]??Cp(p[m]);return Ke(),f}startProfiling(){}endProfiling(){dm(this.sessionId)}}}),hm={};Nr(hm,{OnnxruntimeWebAssemblyBackend:()=>sn,initializeFlags:()=>nn,wasmBackend:()=>fm});var nn,sn,fm,l_=L(()=>{at(),pm(),u_(),nn=()=>{if((typeof $e.wasm.initTimeout!="number"||$e.wasm.initTimeout<0)&&($e.wasm.initTimeout=0),$e.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof $e.wasm.proxy!="boolean"&&($e.wasm.proxy=!1),typeof $e.wasm.trace!="boolean"&&($e.wasm.trace=!1),typeof $e.wasm.numThreads!="number"||!Number.isInteger($e.wasm.numThreads)||$e.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)$e.wasm.numThreads=1;else{let e=typeof navigator>"u"?Ky("node:os").cpus().length:navigator.hardwareConcurrency;$e.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},sn=class{async init(e){nn(),await am(),await nm(e)}async createInferenceSessionHandler(e,t){let r=new cm;return await r.loadModel(e,t),Promise.resolve(r)}},fm=new sn});at();at();at();var d_="1.21.0",p_=Xp;{let e=(l_(),hi(hm)).wasmBackend;Ut("webgpu",e,5),Ut("webnn",e,5),Ut("cpu",e,10),Ut("wasm",e,10)}Object.defineProperty($e.versions,"web",{value:d_,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const c_=Object.freeze(Object.defineProperty({__proto__:null,get InferenceSession(){return ln},get TRACE(){return Mr},get TRACE_FUNC_BEGIN(){return rt},get TRACE_FUNC_END(){return Ke},get Tensor(){return tt},default:p_,get env(){return $e},get registerBackend(){return Ut}},Symbol.toStringTag,{value:"Module"})),mm={SAMPLE_RATE:44100,FFT_SIZE:4096,HOP_SIZE:1024,TRAINING_SAMPLES:343980,MODEL_SPEC_BINS:2048,MODEL_SPEC_FRAMES:336,SEGMENT_OVERLAP:.25,TRACKS:["drums","bass","other","vocals"],DEFAULT_MODEL_URL:"https://huggingface.co/timcsy/demucs-web-onnx/resolve/main/htdemucs_embedded.onnx"},qa=new Map,Fa=new Map,Ga=new Map;function h_(e){if(qa.has(e))return qa.get(e);const t=new Float32Array(e/2),r=new Float32Array(e/2);for(let n=0;n<e/2;n++){const i=-2*Math.PI*n/e;t[n]=Math.cos(i),r[n]=Math.sin(i)}const a={real:t,imag:r};return qa.set(e,a),a}function f_(e){if(Fa.has(e))return Fa.get(e);const t=new Float32Array(e/2),r=new Float32Array(e/2);for(let n=0;n<e/2;n++){const i=2*Math.PI*n/e;t[n]=Math.cos(i),r[n]=Math.sin(i)}const a={real:t,imag:r};return Fa.set(e,a),a}function gm(e){if(Ga.has(e))return Ga.get(e);const t=new Float32Array(e);for(let r=0;r<e;r++)t[r]=.5*(1-Math.cos(2*Math.PI*r/e));return Ga.set(e,t),t}function ym(e,t){let r=0;for(let a=0;a<t;a++)r=r<<1|e&1,e>>=1;return r}function m_(e,t,r,a){const n=Math.log2(a)|0,i=h_(a);for(let o=0;o<a;o++){const l=ym(o,n);e[o]=r[l],t[o]=0}for(let o=2;o<=a;o*=2){const l=o/2,d=a/o;for(let p=0;p<a;p+=o)for(let f=0;f<l;f++){const m=f*d,g=i.real[m],_=i.imag[m],w=p+f,b=p+f+l,x=e[w],v=t[w],$=e[b]*g-t[b]*_,T=e[b]*_+t[b]*g;e[w]=x+$,t[w]=v+T,e[b]=x-$,t[b]=v-T}}}function g_(e,t,r,a,n){const i=Math.log2(n)|0,o=f_(n);for(let l=0;l<n;l++){const d=ym(l,i);e[l]=r[d],t[l]=a[d]}for(let l=2;l<=n;l*=2){const d=l/2,p=n/l;for(let f=0;f<n;f+=l)for(let m=0;m<d;m++){const g=m*p,_=o.real[g],w=o.imag[g],b=f+m,x=f+m+d,v=e[b],$=t[b],T=e[x]*_-t[x]*w,k=e[x]*w+t[x]*_;e[b]=v+T,t[b]=$+k,e[x]=v-T,t[x]=$-k}}for(let l=0;l<n;l++)e[l]/=n,t[l]/=n}function Ip(e,t,r){const a=Math.floor((e.length-t)/r)+1,n=t/2+1,i=gm(t),o=1/Math.sqrt(t),l=new Float32Array(a*n),d=new Float32Array(a*n),p=new Float32Array(t),f=new Float32Array(t),m=new Float32Array(t);for(let g=0;g<a;g++){const _=g*r;for(let b=0;b<t;b++)m[b]=e[_+b]*i[b];m_(p,f,m,t);const w=g*n;for(let b=0;b<n;b++)l[w+b]=p[b]*o,d[w+b]=f[b]*o}return{real:l,imag:d,numFrames:a,numBins:n}}function Ep(e,t,r,a,n,i,o){const l=o,d=new Float32Array(l),p=new Float32Array(l),f=gm(n),m=Math.sqrt(n),g=new Float32Array(n),_=new Float32Array(n),w=new Float32Array(n),b=new Float32Array(n);for(let x=0;x<r;x++){g.fill(0),_.fill(0);for(let $=0;$<a;$++)g[$]=e[x*a+$],_[$]=t[x*a+$];for(let $=1;$<a-1;$++)g[n-$]=g[$],_[n-$]=-_[$];g_(w,b,g,_,n);const v=x*i;for(let $=0;$<n&&v+$<l;$++)d[v+$]+=w[$]*f[$]*m,p[v+$]+=f[$]*f[$]}for(let x=0;x<l;x++)p[x]>1e-8&&(d[x]/=p[x]);return d}function ui(e,t,r){const a=e.length,n=new Float32Array(t+a+r);for(let i=0;i<t;i++){const o=Math.min(t-i,a-1);n[i]=e[o]}n.set(e,t);for(let i=0;i<r;i++){const o=Math.max(0,a-2-i);n[t+a+i]=e[o]}return n}const{FFT_SIZE:Wt,HOP_SIZE:Yt,TRAINING_SAMPLES:St,MODEL_SPEC_BINS:$i,MODEL_SPEC_FRAMES:vi,SEGMENT_OVERLAP:y_,TRACKS:zp}=mm;function __(e){const a=$i,n=vi,i=[];for(let o=0;o<4;o++){const l={leftReal:new Float32Array(a*n),leftImag:new Float32Array(a*n),rightReal:new Float32Array(a*n),rightImag:new Float32Array(a*n)};for(let d=0;d<n;d++)for(let p=0;p<a;p++){const f=o*4*a*n,m=p*n+d;l.leftReal[m]=e[f+0*a*n+p*n+d],l.leftImag[m]=e[f+1*a*n+p*n+d],l.rightReal[m]=e[f+2*a*n+p*n+d],l.rightImag[m]=e[f+3*a*n+p*n+d]}i.push(l)}return i}function w_(e,t){const r=$i,a=vi,n=Yt,i=r+1,o=a+4,l=($,T)=>{const k=new Float32Array(o*i),C=new Float32Array(o*i);for(let E=0;E<a;E++)for(let z=0;z<r;z++){const M=z*a+E,H=(E+2)*i+z;k[H]=$[M],C[H]=T[M]}return{real:k,imag:C}},d=l(e.leftReal,e.leftImag),p=l(e.rightReal,e.rightImag),f=Wt/2,m=Math.floor(n/2)*3,g=(o-1)*n+Wt,_=Ep(d.real,d.imag,o,i,Wt,n,g),w=Ep(p.real,p.imag,o,i,Wt,n,g),b=f+m,x=_.subarray(b,b+t),v=w.subarray(b,b+t);return{left:new Float32Array(x),right:new Float32Array(v)}}function b_(e,t){const r=St,a=new Float32Array(r),n=new Float32Array(r),i=Math.min(e.length,r);a.set(e.subarray(0,i)),n.set(t.subarray(0,i));const o=Math.ceil(r/Yt),l=Math.floor(Yt/2)*3,d=l+o*Yt-r,p=ui(a,l,d),f=ui(n,l,d),m=Wt/2,g=ui(p,m,m),_=ui(f,m,m),w=Ip(g,Wt,Yt),b=Ip(_,Wt,Yt),x=$i,v=vi,$=2,T=new Float32Array(4*x*v);for(let C=0;C<v;C++){const E=C+$;for(let z=0;z<x;z++){const M=E*w.numBins+z;T[0*x*v+z*v+C]=w.real[M],T[1*x*v+z*v+C]=w.imag[M],T[2*x*v+z*v+C]=b.real[M],T[3*x*v+z*v+C]=b.imag[M]}}const k=new Float32Array(2*r);return k.set(a,0),k.set(n,r),{waveform:k,magSpec:T,numBins:x,numFrames:v,originalLength:e.length}}class $_{constructor(t={}){this.ort=t.ort||null,this.session=null,this.modelPath=t.modelPath||"./htdemucs_embedded.onnx",this.sessionOptions=t.sessionOptions||{},this.onProgress=t.onProgress||(()=>{}),this.onLog=t.onLog||(()=>{}),this.onDownloadProgress=t.onDownloadProgress||(()=>{})}async loadModel(t){if(!this.ort)throw new Error("ONNX Runtime not provided. Pass ort in constructor options.");this.onLog("model","Loading model...");let r;if(t instanceof ArrayBuffer)r=t;else{const n=await fetch(t||this.modelPath),i=n.headers.get("Content-Length");if(i&&n.body){const o=parseInt(i,10),l=n.body.getReader(),d=[];let p=0;for(;;){const{done:g,value:_}=await l.read();if(g)break;d.push(_),p+=_.length,this.onDownloadProgress(p,o)}const f=new Uint8Array(p);let m=0;for(const g of d)f.set(g,m),m+=g.length;r=f.buffer}else r=await n.arrayBuffer()}const a={executionProviders:["webgpu","wasm"],graphOptimizationLevel:"basic"};return this.session=await this.ort.InferenceSession.create(r,{...a,...this.sessionOptions}),this.onLog("model","Model loaded successfully"),this.session}async separate(t,r){if(!this.session)throw new Error("Model not loaded. Call loadModel() first.");const a=t.length,n=Math.floor(St*(1-y_)),i=Math.ceil((a-St)/n)+1,o=zp.map(()=>({left:new Float32Array(a),right:new Float32Array(a)})),l=new Float32Array(a);let d=0;for(let p=0;p<a;p+=n){const m=Math.min(p+St,a)-p,g=new Float32Array(St),_=new Float32Array(St);for(let j=0;j<m;j++)g[j]=t[p+j],_[j]=r[p+j];const w=b_(g,_),b=new this.ort.Tensor("float32",w.waveform,[1,2,St]),x=new this.ort.Tensor("float32",w.magSpec,[1,4,$i,vi]),v={};v[this.session.inputNames[0]]=b,this.session.inputNames.length>1&&(v[this.session.inputNames[1]]=x);const $=await this.session.run(v);let T=null,k=null,C=null;for(const j of this.session.outputNames){const K=$[j];K.dims.length===4&&K.dims[2]===2?(T=K.data,k=K.dims):K.dims.length===5&&K.dims[2]===4&&(C=K.data)}if(!T)throw new Error("Could not find time-domain output tensor");let E=null;if(C){const j=__(C);E=[];for(let K=0;K<4;K++){const Q=w_(j[K],St),re=k[2],J=k[3],F=new Float32Array(J),de=new Float32Array(J);for(let G=0;G<J;G++)F[G]=T[K*re*J+0*J+G],de[G]=T[K*re*J+1*J+G];const he={left:new Float32Array(J),right:new Float32Array(J)};for(let G=0;G<J;G++)he.left[G]=F[G]+(Q.left[G]||0),he.right[G]=de[G]+(Q.right[G]||0);E.push(he)}}const z=k[1],M=k[2],U=k[3],H=new Float32Array(m);for(let j=0;j<m;j++){const K=Math.min(j/(n*.5),1),Q=Math.min((m-j)/(n*.5),1);H[j]=Math.min(K,Q)}for(let j=0;j<z;j++)for(let K=0;K<m&&p+K<a;K++){let Q,re;if(E)Q=E[j].left[K],re=E[j].right[K];else{const J=j*M*U+0*U+K,F=j*M*U+1*U+K;Q=T[J],re=T[F]}o[j].left[p+K]+=Q*H[K],o[j].right[p+K]+=re*H[K]}for(let j=0;j<m&&p+j<a;j++)l[p+j]+=H[j];d++,this.onProgress({progress:d/i,currentSegment:d,totalSegments:i})}for(let p=0;p<zp.length;p++)for(let f=0;f<a;f++)l[f]>0&&(o[p].left[f]/=l[f],o[p].right[f]/=l[f]);return{drums:o[0],bass:o[1],other:o[2],vocals:o[3]}}}const q=e=>document.getElementById(e),Sr={vocals:"人聲",drums:"鼓組",bass:"貝斯",other:"其他樂器"},v_={vocals:"coral",drums:"lime",bass:"blue",other:"violet"},{SAMPLE_RATE:Gt,DEFAULT_MODEL_URL:x_}=mm;let kt,li,Or,Er,Re,it={},Pe={},Le=0,ar=[],bi=0,Ze=0,nr=!1,zr,Lt,Xt,S_;const _m=q("fileInput"),Ie=q("videoPreview"),Ap=q("notice"),lt=(e,t="")=>{Ap.textContent=e,Ap.className=`notice ${t}`},tr=e=>`${String(Math.floor(Math.max(0,e)/60)).padStart(2,"0")}:${String(Math.floor(Math.max(0,e)%60)).padStart(2,"0")}`,Ct=()=>(Re==null?void 0:Re.duration)||0,Dn=e=>URL.createObjectURL(e);function or(){return kt||(kt=new AudioContext({sampleRate:Gt})),kt}async function k_(e){const t=or();Ie.src=Er||Dn(e),Ie.hidden=!1,q("videoFeatureText").textContent="已載入 MV，可在下方預覽畫面",q("downloadMv").disabled=!1;try{return await t.decodeAudioData(await e.arrayBuffer())}catch{return lt("瀏覽器無法直接解碼此影片，將以即時播放擷取音訊；請保持此分頁開啟。","warn"),await T_(t)}}function T_(e){return Xt||(Xt=new Promise(async(t,r)=>{try{if(!window.MediaRecorder||!Ie.captureStream)throw new Error("此瀏覽器不支援影片音訊擷取，請改用 MP3/WAV/M4A 音訊檔。");zr||(zr=e.createMediaElementSource(Ie),Lt=e.createGain(),Lt.gain.value=.65,zr.connect(Lt).connect(e.destination));const a=e.createMediaStreamDestination();zr.connect(a);const n=new MediaRecorder(a.stream),i=[];n.ondataavailable=l=>{l.data.size&&i.push(l.data)},n.onerror=()=>r(new Error("影片音訊擷取失敗。")),n.onstop=async()=>{try{t(await e.decodeAudioData(await new Blob(i).arrayBuffer()))}catch{r(new Error("無法讀取影片音軌，請改用 MP3、WAV 或 M4A。"))}finally{a.disconnect(),Xt=null}};const o=()=>{n.state!=="inactive"&&n.stop(),Ie.pause()};Ie.addEventListener("ended",o,{once:!0}),S_=o,Ie.currentTime=0,await e.resume(),n.start(250),await Ie.play()}catch(a){Xt=null,r(a)}}),Xt)}async function wm(e){xi(),Or=e,Re=null,it={},Pe={},q("mixerContent").hidden=!0,q("emptyMixer").hidden=!1,q("stemList").replaceChildren(),q("fileName").textContent=e.name,q("fileMeta").textContent=`${(e.size/1024/1024).toFixed(1)} MB · 讀取中`,q("fileCard").hidden=!1,q("dropZone").hidden=!0,q("processBtn").disabled=!0,q("processing").hidden=!0,Er&&URL.revokeObjectURL(Er),Er=null,Ie.hidden=!0,q("downloadMv").disabled=!0,q("mixHint").textContent="等你放入一首歌";try{const t=or();e.type.startsWith("video/")||/\.(mp4|webm|mov)$/i.test(e.name)?(Er=Dn(e),Re=await k_(e)):Re=await t.decodeAudioData(await e.arrayBuffer()),q("fileMeta").textContent=`${tr(Re.duration)} · ${Re.numberOfChannels} 聲道`,q("processBtn").disabled=!1,q("mixHint").textContent="準備好進行分離",lt("音訊已就緒。按下「開始分離音軌」，首次使用會下載模型。")}catch(t){lt(t.message||"無法讀取此檔案，請選擇常見音訊或影片格式。","error"),q("fileMeta").textContent="格式不支援"}}_m.addEventListener("change",e=>{var r;const t=(r=e.target.files)==null?void 0:r[0];t&&wm(t)});q("removeFile").addEventListener("click",()=>{xi(),Or=null,Re=null,it={},Pe={},q("fileCard").hidden=!0,q("dropZone").hidden=!1,q("processing").hidden=!0,q("mixerContent").hidden=!0,q("emptyMixer").hidden=!1,q("stemList").replaceChildren(),q("downloadKey").disabled=!0,q("downloadMix").disabled=!0,Ie.pause(),Ie.removeAttribute("src"),Ie.hidden=!0,q("downloadMv").disabled=!0,_m.value="",lt("先選擇音訊或影片，再按「開始分離音軌」。")});const Br=q("dropZone");for(const e of["dragenter","dragover"])Br.addEventListener(e,t=>{t.preventDefault(),Br.classList.add("dragover")});for(const e of["dragleave","drop"])Br.addEventListener(e,t=>{t.preventDefault(),Br.classList.remove("dragover")});Br.addEventListener("drop",e=>{var r;const t=(r=e.dataTransfer.files)==null?void 0:r[0];t&&wm(t)});function Op(e,t,r=""){q("processProgress").style.width=`${e}%`,q("progressText").textContent=`${Math.round(e)}%`,t&&(q("statusText").textContent=t),r&&(q("segmentText").textContent=r)}q("processBtn").addEventListener("click",async()=>{if(Re){q("processBtn").disabled=!0,q("processing").hidden=!1,q("modelBadge").innerHTML="<i></i> 載入中",q("modelStatus").textContent="準備瀏覽器推論環境…",q("modelProgress").style.width="0%",lt("正在你的裝置上分離音軌。請保持此分頁開啟。","busy");try{if(await or().resume(),!li){$e.wasm.numThreads=1;let o=!1;if(navigator.gpu)try{o=!!await navigator.gpu.requestAdapter()}catch{}q("backendInfo").textContent=o?"WebGPU 可用 · WASM 備援":"WASM · 單執行緒相容模式",li=new $_({ort:c_,onDownloadProgress:(l,d)=>{const p=d?100*l/d:0;q("modelProgress").style.width=`${p}%`,q("modelStatus").textContent=`下載模型中 ${(l/1048576).toFixed(0)} / ${(d/1048576).toFixed(0)} MB`,Op(Math.min(12,p*.12),"下載 AI 模型",`${(l/1048576).toFixed(0)} / ${(d/1048576).toFixed(0)} MB`)},onLog:(l,d)=>{l==="model"&&(q("modelStatus").textContent=d==="Model loaded successfully"?"模型已就緒，可在此裝置重複使用。":"正在載入模型…")},onProgress:({progress:l,currentSegment:d,totalSegments:p})=>{const f=(Date.now()-e)/1e3,m=d?f/d*(p-d):0;Op(15+l*85,"分離音軌",`片段 ${d} / ${p}`),q("etaText").textContent=m?`預估剩餘 ${tr(m)}`:"估計時間 —"}}),q("modelStatus").textContent="從 Hugging Face 載入 HTDemucs 模型（約 172 MB）…",await li.loadModel(x_),q("modelBadge").innerHTML="<i></i> 已就緒"}const e=Date.now(),t=Gt/Re.sampleRate,r=Re.getChannelData(0),a=Re.numberOfChannels>1?Re.getChannelData(1):r;let n=r,i=a;if(Re.sampleRate!==Gt){const o=Math.floor(r.length*t);n=sr(r,o),i=sr(a,o)}it=await li.separate(n,i),Pe=Object.fromEntries(Object.keys(it).map(o=>[o,{gain:1,mute:!1,solo:!1}])),Le=0,q("keyValue").innerHTML="0 <small>半音</small>",q("keyNote").textContent="原調",bm(),q("emptyMixer").hidden=!0,q("mixerContent").hidden=!1,q("durationLabel").textContent=tr(Ct()),q("totalTime").textContent=tr(Ct()),q("processProgress").style.width="100%",q("progressText").textContent="100%",q("statusText").textContent="分離完成",q("segmentText").textContent="四條音軌已準備就緒",q("etaText").textContent="完成",q("modelBadge").innerHTML="<i></i> 已就緒",q("modelStatus").textContent="模型已就緒，可在此裝置重複使用。",q("mixHint").textContent="4 條音軌已分離",q("downloadMix").disabled=!1,q("downloadKey").disabled=!1,lt(`分離完成。可試聽、調整音量、升降 Key，或下載各音軌。耗時 ${tr((Date.now()-e)/1e3)}。`,"success")}catch(e){console.error(e),q("modelBadge").innerHTML="<i></i> 發生問題",lt(`分離失敗：${e.message||e}。請重新載入頁面或改用 WASM 相容瀏覽器。`,"error")}finally{q("processBtn").disabled=!Re}}});function sr(e,t){const r=new Float32Array(t),a=e.length/t;for(let n=0;n<t;n++){const i=n*a,o=Math.floor(i),l=Math.min(o+1,e.length-1);r[n]=e[o]*(1-(i-o))+e[l]*(i-o)}return r}function bm(){const e=q("stemList");e.replaceChildren();for(const[t,r]of Object.entries(it)){const a=document.createElement("div");a.className=`stem-row ${v_[t]}`,a.innerHTML=`<div class="stem-identity"><span class="stem-dot"></span><div><strong>${Sr[t]}</strong><small>${t.toUpperCase()} STEM</small></div></div><button class="solo-button" type="button" aria-label="獨奏${Sr[t]}" title="獨奏">S</button><button class="mute-button" type="button" aria-label="靜音${Sr[t]}" title="靜音">M</button><input class="stem-volume" type="range" min="0" max="1.5" value="1" step="0.01" aria-label="${Sr[t]}音量" /><span class="volume-label">100%</span><button class="stem-download" type="button" aria-label="下載${Sr[t]}">↓</button>`;const n=a.querySelector(".stem-volume");n.addEventListener("input",()=>{Pe[t].gain=Number(n.value),a.querySelector(".volume-label").textContent=`${Math.round(n.value*100)}%`,ci()}),a.querySelector(".solo-button").addEventListener("click",i=>{Pe[t].solo=!Pe[t].solo,i.currentTarget.classList.toggle("active",Pe[t].solo),ci()}),a.querySelector(".mute-button").addEventListener("click",i=>{Pe[t].mute=!Pe[t].mute,i.currentTarget.classList.toggle("active",Pe[t].mute),ci()}),a.querySelector(".stem-download").addEventListener("click",()=>Un(Tm(r.left,r.right),`${Wn()}-${t}.wav`)),e.appendChild(a)}}function Pn(e){const t=Object.values(Pe).some(a=>a.solo),r=Pe[e];return r.mute||t&&!r.solo?0:r.gain}function ci(){for(const e of ar)e.gain.gain.setTargetAtTime(Pn(e.name),kt.currentTime,.025)}function $m(e=Ze){xi(!1),e>=Ct()&&(e=0);const t=or(),r=t.currentTime;for(const[a,n]of Object.entries(it)){const i=t.createBuffer(2,n.left.length,Gt);i.copyToChannel(n.left,0),i.copyToChannel(n.right,1);const o=t.createBufferSource();o.buffer=i,o.playbackRate.value=Si();const l=t.createGain();l.gain.value=Pn(a),o.connect(l).connect(t.destination),o.onended=()=>{var d;o===((d=ar.at(-1))==null?void 0:d.source)&&(nr=!1,q("playMix").textContent="▶",Ze=0)},o.start(r,e),ar.push({name:a,source:o,gain:l})}bi=r,Ze=e,nr=!0,q("playMix").textContent="Ⅱ"}function xi(e=!0){for(const t of ar)try{t.source.stop()}catch{}ar=[],nr=!1,e&&(Ze=0),q("playMix").textContent="▶"}q("playMix").addEventListener("click",async()=>{Object.keys(it).length&&(await or().resume(),nr?(Ze=Math.min(Ct(),Ze+kt.currentTime-bi),xi(!1)):$m(Ze))});q("seekBar").addEventListener("input",()=>{const e=Ct()*Number(q("seekBar").value)/1e3;nr?$m(e):Ze=e,vm()});setInterval(()=>{nr&&(Ze=Math.min(Ct(),Ze+kt.currentTime-bi),bi=kt.currentTime,vm())},200);function vm(){q("currentTime").textContent=tr(Ze),q("seekBar").value=Ct()?Math.round(Ze/Ct()*1e3):0}q("resetMix").addEventListener("click",()=>{for(const e of Object.keys(Pe))Pe[e]={gain:1,mute:!1,solo:!1};bm(),ci()});q("keyDown").addEventListener("click",()=>xm(Le-1));q("keyUp").addEventListener("click",()=>xm(Le+1));function xm(e){Le=Math.max(-6,Math.min(6,e));const t=Le>0?`+${Le}`:String(Le);q("keyValue").innerHTML=`${t} <small>半音</small>`,q("keyNote").textContent=Le===0?"原調":`${Le>0?"升高":"降低"} ${Math.abs(Le)} 個半音`;for(const r of ar)r.source.playbackRate.setTargetAtTime(Si(),kt.currentTime,.025)}function Si(){return Math.pow(2,Le/12)}q("downloadMix").addEventListener("click",()=>Sm("stemroom-accompaniment.wav"));q("downloadKey").addEventListener("click",()=>Sm(`${Wn()}-${Le>=0?"+":""}${Le}st.wav`));q("downloadMix").disabled=!0;function Sm(e){if(!Object.keys(it).length)return;const t=km(),r=Si(),a=Math.max(1,Math.floor(t.left.length/r)),n=sr(t.left,a),i=sr(t.right,a);Un(Tm(n,i),e)}function km(){const e=Object.values(it)[0].left.length,t=new Float32Array(e),r=new Float32Array(e);for(const[n,i]of Object.entries(it)){const o=Pn(n);if(o)for(let l=0;l<e;l++)t[l]+=i.left[l]*o,r[l]+=i.right[l]*o}let a=0;for(let n=0;n<e;n++)a=Math.max(a,Math.abs(t[n]),Math.abs(r[n]));if(a>.99){const n=.99/a;for(let i=0;i<e;i++)t[i]*=n,r[i]*=n}return{left:t,right:r}}function Tm(e,t){const r=[e,t],a=e.length,n=new ArrayBuffer(44+a*4),i=new DataView(n),o=(d,p)=>[...p].forEach((f,m)=>i.setUint8(d+m,f.charCodeAt(0)));o(0,"RIFF"),i.setUint32(4,n.byteLength-8,!0),o(8,"WAVE"),o(12,"fmt "),i.setUint32(16,16,!0),i.setUint16(20,1,!0),i.setUint16(22,2,!0),i.setUint32(24,Gt,!0),i.setUint32(28,Gt*4,!0),i.setUint16(32,4,!0),i.setUint16(34,16,!0),o(36,"data"),i.setUint32(40,a*4,!0);let l=44;for(let d=0;d<a;d++)for(const p of r){const f=Math.max(-1,Math.min(1,p[d]));i.setInt16(l,f<0?f*32768:f*32767,!0),l+=2}return new Blob([n],{type:"audio/wav"})}function Un(e,t){const r=Dn(e),a=document.createElement("a");a.href=r,a.download=t,a.click(),setTimeout(()=>URL.revokeObjectURL(r),6e4)}function Wn(){return((Or==null?void 0:Or.name)||"stemroom").replace(/\.[^.]+$/,"").replace(/[\\/:*?"<>|]/g,"_")}q("downloadMv").addEventListener("click",async()=>{if(!Ie.src||!Object.keys(it).length)return;if(!window.MediaRecorder||!Ie.captureStream){lt("此瀏覽器不支援 MV 錄製，請使用新版 Chrome 或 Edge。","error");return}const e=km(),t=Si(),r=sr(e.left,Math.floor(e.left.length/t)),a=sr(e.right,Math.floor(e.right.length/t)),n=or();await n.resume();const i=n.createBuffer(2,r.length,Gt);i.copyToChannel(r,0),i.copyToChannel(a,1);const o=Ie.captureStream(),l=n.createMediaStreamDestination(),d=n.createBufferSource();d.buffer=i,d.connect(l),zr&&Lt&&(Lt.gain.value=0);const p=new MediaStream([...o.getVideoTracks(),...l.stream.getAudioTracks()]),f=MediaRecorder.isTypeSupported("video/webm;codecs=vp9,opus")?"video/webm;codecs=vp9,opus":"video/webm",m=new MediaRecorder(p,{mimeType:f}),g=[];m.ondataavailable=_=>{_.data.size&&g.push(_.data)},m.onstop=()=>{d.disconnect(),l.disconnect(),o.getTracks().forEach(_=>_.stop()),Lt&&(Lt.gain.value=.65),Un(new Blob(g,{type:"video/webm"}),`${Wn()}-伴奏MV.webm`),q("downloadMv").disabled=!1,q("downloadMv").innerHTML="輸出伴奏 MV <span>↗</span>",lt("伴奏 MV 已輸出，檔案格式為 WEBM。","success")},q("downloadMv").disabled=!0,q("downloadMv").innerHTML="正在錄製…",lt("正在即時合成影片。請保持頁面開啟直到匯出完成。","busy"),Ie.currentTime=0,Ie.muted=!0,m.start(500),await Ie.play(),d.start(),Ie.addEventListener("ended",()=>{m.state!=="inactive"&&m.stop(),Ie.muted=!1},{once:!0})});navigator.gpu?q("backendInfo").textContent="WebGPU 可用 · WASM 備援":q("backendInfo").textContent="WASM · 單執行緒相容模式";
