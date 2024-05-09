function createUrlFriendly(str) {
    str = str.replace(/\s+/g, '-'); // loai bo khoang trang
    str = str.replace(/<[^>]+>/g, ''); // loai bo the tag
    str =str.replace(/[^\u0000-\u007F]/g, char => {
        const hex = char.codePointAt(0).toString(16);
        return `\\u${hex.padStart(4, '0')}`;
      }); // loai bo cac ky tu dac biet
    return str;
  }
  function createUrlFriendly(str) {
    return str.replace(/[^\w\s]|(?<=\s)(?=\s)|\s+/g, match => {
      // Thay thế dấu cách bằng dấu gạch ngang, nhưng chỉ khi chúng không liên tiếp
      if (match === ' ') return '-';
      // Xóa tất cả các ký tự không mong muốn khác
      return '';
    });
  }

  let str=`Nếu bạn là một fan của thể loại truyện sắc hiệp, thì đây chắc chắn là một bộ truyện bạn không thể bỏ qua. Từ phần văn hóa đặc trưng đến lối viết tinh tế, Tiên Kiếm Bất Bại sẽ khiến bạn bị cuốn hút từ đầu
  `;
  let cc=createUrlFriendly(str);
  console.log(cc);
