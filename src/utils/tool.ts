/**
 * 获取url中的参数
 * @params key 需要从url中获取的字段名称
 * @describe 获取url中的参数
 */
export const getQueryString = (key: string) => {
  let { href } = window.location;
  href = href.replace(/#\/.+/, '');
  const src = href.split('?');
  if (src[0] === href) {
    return '';
  }
  const arr = src[1].split('&');
  const obj: any = {};
  for (let i = 0; i < arr.length; i++) {
    const arr1 = arr[i].split('=');
    obj[arr1[0]] = arr1[1];
  }
  return (obj[key] || '').replace(/(\/|#).?/g, '');
};

/**
 * 将json对象转换为 FormData类型
 * @param data 【参数是json对象】
 * @return [返回 FormData类型 的值]
 */
export const transformDataToFormData = (data: any) => {
  const form = new FormData();
  Object.keys(data).forEach((key) => {
    if (data[key] instanceof Array) {
      data[key].forEach((value: any) => {
        form.append(key, value);
      });
    } else {
      form.append(key, data[key]);
    }
  });

  return form;
};

/**
 * 下载文件
 * @param data 【数据流】
 * @param fileName 【文件名】
 * @param type 【文件 MIME 类型】
 */
export const downloadFile = (data: any, fileName: string, type: string) => {
  const link = document.createElement('a');
  const blob = new Blob([data], {
    type,
  });

  link.style.display = 'none';
  link.href = URL.createObjectURL(blob); // 创建url对象
  link.download = fileName; // 下载后文件名
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href); // 销毁url对象
};
