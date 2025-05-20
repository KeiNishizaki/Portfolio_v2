//上下ボタンを押すとsectionのid要素に切り替わる

//////////////////////////////////////////////////////////
///////////up関数　押すと次の作品にスクロールする//////////
/////////////////////////////////////////////////////////

function up(elem){


    
        //次回。以下のelem + 1とかの要素の数値をfor文で回して見やすくする。


        //section1
        var element1 = document.getElementById(elem + 1);
        // rect は left, top, right, bottom, x, y, width, height の 8 つのプロパティを持つ DOMRect オブジェクト
        var rect1 = element1.getBoundingClientRect();//要素の座標値を取得
        var elemtop1 = rect1.top;//取得した座標値
        var elembottom1 = rect1.bottom;

        //section2
        var element2 = document.getElementById(elem + 2);
        // rect は left, top, right, bottom, x, y, width, height の 8 つのプロパティを持つ DOMRect オブジェクト
        var rect2 = element2.getBoundingClientRect();//要素の座標値を取得
        var elembottom2 = rect2.bottom;


        //section3
        var element3 = document.getElementById(elem + 3);
        // rect は left, top, right, bottom, x, y, width, height の 8 つのプロパティを持つ DOMRect オブジェクト
        var rect3 = element3.getBoundingClientRect();//要素の座標値を取得
        var elembottom3 = rect3.bottom;


        //section4
        var element4 = document.getElementById(elem + 4);
        var rect4 = element4.getBoundingClientRect();//要素の座標値を取得
        var elembottom4 = rect4.bottom;


        //section5
        var element5 = document.getElementById(elem + 5);
        var rect5 = element5.getBoundingClientRect();//要素の座標値を取得
        var elembottom5 = rect5.bottom;


        //section6
        var element6 = document.getElementById(elem + 6);
        var rect6 = element6.getBoundingClientRect();//要素の座標値を取得
        var elembottom6 = rect6.bottom;


        //section7
        var element7 = document.getElementById(elem + 7);
        var rect7 = element7.getBoundingClientRect();//要素の座標値を取得
        var elembottom7 = rect7.bottom;

        //section8
        var element8 = document.getElementById(elem + 8);
        var rect8 = element8.getBoundingClientRect();//要素の座標値を取得
        var elembottom8 = rect8.bottom;


        //section9
        var element9 = document.getElementById(elem + 9);
        var rect9 = element9.getBoundingClientRect();//要素の座標値を取得
        var elembottom9 = rect9.bottom;


        //section10
        var element10 = document.getElementById(elem + 10);
        var rect10 = element10.getBoundingClientRect();//要素の座標値を取得
        var elembottom10 = rect10.bottom;



        //★★★作品の追加した時にする作業★★★

        //Aは作品のsectionsの番号に置き換える

        //var elementA = document.getElementById(elem + A);
        //var rectA = elementA.getBoundingClientRect();//要素の座標値を取得
        //var elembottomA = rectA.bottom;

        //ここまでで一つをいじる



        var posY = window.pageYOffset;//スクロール画面のy座標取得


        if(posY　< elemtop1){
        //if(表示している画面Y座標　>= elemtop){
            var i = 1
            element = document.getElementById(elem + i);
            // rect は left, top, right, bottom, x, y, width, height の 8 つのプロパティを持つ DOMRect オブジェクト
            rect = element.getBoundingClientRect();//要素の座標値を取得
            elemtop = rect.top + window.pageYOffset;//取得した座標値に、window.pageYOffset を加算してページ全体の縦位置を取得

            elembottom = rect.bottom + window.pageYOffset;

            document.documentElement.scrollTop = elemtop;
            console.log("section1");
            console.log(posY);
            console.log(elemtop);

        } else if(elemtop1 <= posY < elembottom1){
            i = 1;
            element = document.getElementById(elem + i);
            // rect は left, top, right, bottom, x, y, width, height の 8 つのプロパティを持つ DOMRect オブジェクト
            rect = element.getBoundingClientRect();//要素の座標値を取得
            elemtop = rect.top + window.pageYOffset;//取得した座標値
            document.documentElement.scrollTop = elemtop;
            console.log("section2");
            console.log(posY);

        } else if(elembottom1 <= posY < elembottom2){
            i = 1;
            element = document.getElementById(elem + i);
            // rect は left, top, right, bottom, x, y, width, height の 8 つのプロパティを持つ DOMRect オブジェクト
            rect = element.getBoundingClientRect();//要素の座標値を取得
            elemtop = rect.top + window.pageYOffset;//取得した座標値に、window.pageYOffset を加算してページ全体の縦位置を取得
            document.documentElement.scrollTop = elemtop;
            console.log("section3");
            console.log(posY);
        
        } else if(elembottom2 <= posY < elembottom3){
            i = 2;
            element = document.getElementById(elem + i);
            // rect は left, top, right, bottom, x, y, width, height の 8 つのプロパティを持つ DOMRect オブジェクト
            rect = element.getBoundingClientRect();//要素の座標値を取得
            elemtop = rect.top + window.pageYOffset;//取得した座標値に、window.pageYOffset を加算してページ全体の縦位置を取得
            document.documentElement.scrollTop = elemtop;
            console.log("section4");
            console.log(posY);
        } else if(elembottom3 <= posY < elembottom4){
            i = 3;
            element = document.getElementById(elem + i);
            // rect は left, top, right, bottom, x, y, width, height の 8 つのプロパティを持つ DOMRect オブジェクト
            rect = element.getBoundingClientRect();//要素の座標値を取得
            elemtop = rect.top + window.pageYOffset;//取得した座標値に、window.pageYOffset を加算してページ全体の縦位置を取得
            document.documentElement.scrollTop = elemtop;
            console.log("section5");
            console.log(posY);

        } else if(elembottom4 <= posY < elembottom5){
            i = 4;
            element = document.getElementById(elem + i);
            // rect は left, top, right, bottom, x, y, width, height の 8 つのプロパティを持つ DOMRect オブジェクト
            rect = element.getBoundingClientRect();//要素の座標値を取得
            elemtop = rect.top + window.pageYOffset;//取得した座標値に、window.pageYOffset を加算してページ全体の縦位置を取得
            document.documentElement.scrollTop = elemtop;
            console.log("section6");
            console.log(posY);

        } else if(elembottom5 <= posY < elembottom6){
            i = 5;
            element = document.getElementById(elem + i);
            // rect は left, top, right, bottom, x, y, width, height の 8 つのプロパティを持つ DOMRect オブジェクト
            rect = element.getBoundingClientRect();//要素の座標値を取得
            elemtop = rect.top + window.pageYOffset;//取得した座標値に、window.pageYOffset を加算してページ全体の縦位置を取得
            document.documentElement.scrollTop = elemtop;
            console.log("section7");
            console.log(posY);

        } else if(elembottom6 <= posY < elembottom7){
            i = 6;
            element = document.getElementById(elem + i);
            // rect は left, top, right, bottom, x, y, width, height の 8 つのプロパティを持つ DOMRect オブジェクト
            rect = element.getBoundingClientRect();//要素の座標値を取得
            elemtop = rect.top + window.pageYOffset;//取得した座標値に、window.pageYOffset を加算してページ全体の縦位置を取得
            document.documentElement.scrollTop = elemtop;
            console.log("section8");
            console.log(posY);

        } else if(elembottom7 <= posY < elembottom8){
            i = 7;
            element = document.getElementById(elem + i);
            // rect は left, top, right, bottom, x, y, width, height の 8 つのプロパティを持つ DOMRect オブジェクト
            rect = element.getBoundingClientRect();//要素の座標値を取得
            elemtop = rect.top + window.pageYOffset;//取得した座標値に、window.pageYOffset を加算してページ全体の縦位置を取得
            document.documentElement.scrollTop = elemtop;
            console.log("section9");
            console.log(posY);
            
        } else if(elembottom8 <= posY < elembottom9){
            i = 8;
            element = document.getElementById(elem + i);
            // rect は left, top, right, bottom, x, y, width, height の 8 つのプロパティを持つ DOMRect オブジェクト
            rect = element.getBoundingClientRect();//要素の座標値を取得
            elemtop = rect.top + window.pageYOffset;//取得した座標値に、window.pageYOffset を加算してページ全体の縦位置を取得
            document.documentElement.scrollTop = elemtop;
            console.log("section10");
            console.log(posY);

        } else if(elembottom9 <= posY < elembottom10){
            i = 9;
            element = document.getElementById(elem + i);
            // rect は left, top, right, bottom, x, y, width, height の 8 つのプロパティを持つ DOMRect オブジェクト
            rect = element.getBoundingClientRect();//要素の座標値を取得
            elemtop = rect.top + window.pageYOffset;//取得した座標値に、window.pageYOffset を加算してページ全体の縦位置を取得
            document.documentElement.scrollTop = elemtop;
            console.log("section10");
            console.log(posY);

        }   //★★★作品の追加した時にする作業★★★
 


}
//////////////////////////////////////////////////////////
//////////down関数　押すと次の作品にスクロールする//////////
/////////////////////////////////////////////////////////
function down(elem){


        //次回。以下のelem + 1とかの要素の数値をfor文で回して見やすくする。


        //section1
        var element1 = document.getElementById(elem + 1);
        // rect は left, top, right, bottom, x, y, width, height の 8 つのプロパティを持つ DOMRect オブジェクト
        var rect1 = element1.getBoundingClientRect();//要素の座標値を取得
        var elemtop1 = rect1.top;//取得した座標値
        var elembottom1 = rect1.bottom;

        //section2
        var element2 = document.getElementById(elem + 2);
        // rect は left, top, right, bottom, x, y, width, height の 8 つのプロパティを持つ DOMRect オブジェクト
        var rect2 = element2.getBoundingClientRect();//要素の座標値を取得
        var elembottom2 = rect2.bottom;


        //section3
        var element3 = document.getElementById(elem + 3);
        // rect は left, top, right, bottom, x, y, width, height の 8 つのプロパティを持つ DOMRect オブジェクト
        var rect3 = element3.getBoundingClientRect();//要素の座標値を取得
        var elembottom3 = rect3.bottom;


        //section4
        var element4 = document.getElementById(elem + 4);
        var rect4 = element4.getBoundingClientRect();//要素の座標値を取得
        var elembottom4 = rect4.bottom;


        //section5
        var element5 = document.getElementById(elem + 5);
        var rect5 = element5.getBoundingClientRect();//要素の座標値を取得
        var elembottom5 = rect5.bottom;


        //section6
        var element6 = document.getElementById(elem + 6);
        var rect6 = element6.getBoundingClientRect();//要素の座標値を取得
        var elembottom6 = rect6.bottom;


        //section7
        var element7 = document.getElementById(elem + 7);
        var rect7 = element7.getBoundingClientRect();//要素の座標値を取得
        var elembottom7 = rect7.bottom;

        //section8
        var element8 = document.getElementById(elem + 8);
        var rect8 = element8.getBoundingClientRect();//要素の座標値を取得
        var elembottom8 = rect8.bottom;


        //section9
        var element9 = document.getElementById(elem + 9);
        var rect9 = element9.getBoundingClientRect();//要素の座標値を取得
        var elembottom9 = rect9.bottom;


        //section10
        var element10 = document.getElementById(elem + 10);
        var rect10 = element10.getBoundingClientRect();//要素の座標値を取得
        var elembottom10 = rect10.bottom;



        //★★★作品の追加した時にする作業★★★

        //Aは作品のsectionsの番号に置き換える

        //var elementA = document.getElementById(elem + A);
        //var rectA = elementA.getBoundingClientRect();//要素の座標値を取得
        //var elembottomA = rectA.bottom;

        //ここまでで一つをいじる



        var posY = window.pageYOffset;//スクロール画面のy座標取得


        if(posY　< elemtop1){
        //if(表示している画面Y座標　>= elemtop){
            var i = 1
            element = document.getElementById(elem + i);
            // rect は left, top, right, bottom, x, y, width, height の 8 つのプロパティを持つ DOMRect オブジェクト
            rect = element.getBoundingClientRect();//要素の座標値を取得
            elemtop = rect.top + window.pageYOffset;//取得した座標値に、window.pageYOffset を加算してページ全体の縦位置を取得

            elembottom = rect.bottom + window.pageYOffset;

            document.documentElement.scrollTop = elemtop;
            console.log("section1");
            console.log(posY);
            console.log(elemtop);

        } else if(elemtop1 <= posY < elembottom1){
            i = 2;
            element = document.getElementById(elem + i);
            // rect は left, top, right, bottom, x, y, width, height の 8 つのプロパティを持つ DOMRect オブジェクト
            rect = element.getBoundingClientRect();//要素の座標値を取得
            elemtop = rect.top + window.pageYOffset;//取得した座標値
            document.documentElement.scrollTop = elemtop;
            console.log("section2");
            console.log(posY);

        } else if(elembottom1 <= posY < elembottom2){
            i = 3;
            element = document.getElementById(elem + i);
            // rect は left, top, right, bottom, x, y, width, height の 8 つのプロパティを持つ DOMRect オブジェクト
            rect = element.getBoundingClientRect();//要素の座標値を取得
            elemtop = rect.top + window.pageYOffset;//取得した座標値に、window.pageYOffset を加算してページ全体の縦位置を取得
            document.documentElement.scrollTop = elemtop;
            console.log("section3");
            console.log(posY);
        
        } else if(elembottom2 <= posY < elembottom3){
            i = 4;
            element = document.getElementById(elem + i);
            // rect は left, top, right, bottom, x, y, width, height の 8 つのプロパティを持つ DOMRect オブジェクト
            rect = element.getBoundingClientRect();//要素の座標値を取得
            elemtop = rect.top + window.pageYOffset;//取得した座標値に、window.pageYOffset を加算してページ全体の縦位置を取得
            document.documentElement.scrollTop = elemtop;
            console.log("section4");
            console.log(posY);
        } else if(elembottom3 <= posY < elembottom4){
            i = 5;
            element = document.getElementById(elem + i);
            // rect は left, top, right, bottom, x, y, width, height の 8 つのプロパティを持つ DOMRect オブジェクト
            rect = element.getBoundingClientRect();//要素の座標値を取得
            elemtop = rect.top + window.pageYOffset;//取得した座標値に、window.pageYOffset を加算してページ全体の縦位置を取得
            document.documentElement.scrollTop = elemtop;
            console.log("section5");
            console.log(posY);

        } else if(elembottom4 <= posY < elembottom5){
            i = 6;
            element = document.getElementById(elem + i);
            // rect は left, top, right, bottom, x, y, width, height の 8 つのプロパティを持つ DOMRect オブジェクト
            rect = element.getBoundingClientRect();//要素の座標値を取得
            elemtop = rect.top + window.pageYOffset;//取得した座標値に、window.pageYOffset を加算してページ全体の縦位置を取得
            document.documentElement.scrollTop = elemtop;
            console.log("section6");
            console.log(posY);

        } else if(elembottom5 <= posY < elembottom6){
            i = 7;
            element = document.getElementById(elem + i);
            // rect は left, top, right, bottom, x, y, width, height の 8 つのプロパティを持つ DOMRect オブジェクト
            rect = element.getBoundingClientRect();//要素の座標値を取得
            elemtop = rect.top + window.pageYOffset;//取得した座標値に、window.pageYOffset を加算してページ全体の縦位置を取得
            document.documentElement.scrollTop = elemtop;
            console.log("section7");
            console.log(posY);

        } else if(elembottom6 <= posY < elembottom7){
            i = 8;
            element = document.getElementById(elem + i);
            // rect は left, top, right, bottom, x, y, width, height の 8 つのプロパティを持つ DOMRect オブジェクト
            rect = element.getBoundingClientRect();//要素の座標値を取得
            elemtop = rect.top + window.pageYOffset;//取得した座標値に、window.pageYOffset を加算してページ全体の縦位置を取得
            document.documentElement.scrollTop = elemtop;
            console.log("section8");
            console.log(posY);

        } else if(elembottom7 <= posY < elembottom8){
            i = 9;
            element = document.getElementById(elem + i);
            // rect は left, top, right, bottom, x, y, width, height の 8 つのプロパティを持つ DOMRect オブジェクト
            rect = element.getBoundingClientRect();//要素の座標値を取得
            elemtop = rect.top + window.pageYOffset;//取得した座標値に、window.pageYOffset を加算してページ全体の縦位置を取得
            document.documentElement.scrollTop = elemtop;
            console.log("section9");
            console.log(posY);
            
        } else if(elembottom8 <= posY < elembottom9){
            i = 10;
            element = document.getElementById(elem + i);
            // rect は left, top, right, bottom, x, y, width, height の 8 つのプロパティを持つ DOMRect オブジェクト
            rect = element.getBoundingClientRect();//要素の座標値を取得
            elemtop = rect.top + window.pageYOffset;//取得した座標値に、window.pageYOffset を加算してページ全体の縦位置を取得
            document.documentElement.scrollTop = elemtop;
            console.log("section10");
            console.log(posY);

        }   //★★★作品の追加した時にする作業★★★
        //else if()の部分を付け足す(elembottom3 <= posY < elembottom4）　i=5　のように





}
