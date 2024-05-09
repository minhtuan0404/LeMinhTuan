function removeSpace(str)
{
    str=str.trim();
    str=str.replace(/\s/g," ");
    //chuyen ki tu dau ve in hoa
    const arr=str.split(" ");
    for(let i=0;i<arr.length;i++)
        {
            arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
        }
    str=arr.join(" ")
    return str;
}
let str='   Nếu bạn là một fan của thể loại truyện sắc hiệp, thì đây chắc chắn là một bộ truyện bạn không thể bỏ qua. Từ phần văn hóa đặc trưng đến lối viết tinh tế, Tiên Kiếm Bất Bại sẽ khiến bạn bị cuốn hút từ đầu
';
str=removeSpace(str);
console.log(str);