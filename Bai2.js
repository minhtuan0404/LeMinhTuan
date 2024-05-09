function str_limit(str,limit=10)
{
    //xoa tag HTML
    str=str.replace(/<[^>]*>/g,"");
    //trim xoa kt trang 2 ban
    str=str.trim();
    //tim kiem 2 khoang trang
    str=str.replace(/\s+/g," ");
    //chuyen chuoi ve in hoa
    str=str.toLowerCase();
    //chuyen ky tu dau ve in hoa
    const mang = str.split(" ");
    const mangmoi = mang.slice(0,limit);
    str = mangmoi.join(" ");
    return str;
}

let str=`Nếu bạn là một fan của thể loại truyện sắc hiệp, thì đây chắc chắn là một bộ truyện bạn không thể bỏ qua. Từ phần văn hóa đặc trưng đến lối viết tinh tế, Tiên Kiếm Bất Bại sẽ khiến bạn bị cuốn hút từ đầu
`;
console.log(str.length);//27

str = str_limit(str);
console.log(str);//15