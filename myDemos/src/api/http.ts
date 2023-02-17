import request from './index';

export function getData() {
  return request.get<{ data: any }>({ url: '/api/data' });
}
export function getFile() {
  /**
   * mockjs 和 axios的responseType属性不共存
   * 见博客 https://blog.csdn.net/qq_34159635/article/details/120422516
   * mockjs 源码部分
   *   overrideMimeType: function() {}
	    responseType: '', // '', 'text', 'arraybuffer', 'blob', 'document', 'json'
	    response: null,
	    responseText: '',
	    responseXML: null
   */
  
  return request.get<any>({ url: 'http://127.0.0.1:3000/d', config: { responseType: 'arraybuffer' } });
}
