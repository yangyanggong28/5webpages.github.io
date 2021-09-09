document.write ('\
    \
    <figure>\
        <img src = "./images/headerpic.png">\
    </figure>\
    \
    <nav>\
        <label for = "checkbox" id = "checkboxlabel">\
            <img src = "./images/hamberger.png">\
        </label>\
        <input type = "checkbox" id = "checkbox">\
        <ul class = "commonnav">\
            <li><a href = "./index.html" accesskey = "h">Home</a></li>\
            <li><a href = "./services.html" accesskey = "s">Services</a>\
                <ul>\
                <li><a href="./services.html">Glasses</a></li>\
                <li><a href="./services.html">Contact lenses</a></li>\
                <li><a href="./services.html">Eye health</a></li>\
                </ul>\
            </li>\
            <li><a href = "./products.html" accesskey = "p">Products</a>\
                <ul>\
                <li><a href="#">Glasses</a>\
                    <ul>\
                    <li><a href="#">Glasses</a></li>\
                    <li><a href="#">Sunglasses</a></li>\
                    <li><a href="#">Designer glass</a></li>\
                    <li><a href="#">Non-prescription glass</a></li>\
                    </ul>\
                </li>\
                <li><a href="#">Contact lenses</a>\
                    <ul>\
                    <li><a href="#">Daily</a></li>\
                    <li><a href="#">Fortnightly</a></li>\
                    <li><a href="#">Monthly</a></li>\
                    <li><a href="#">Multifocal</a></li>\
                    <li><a href="#">Toric</a></li>\
                    </ul>\
                </li>\
                </ul>\
            </li>\
            <li><a href = "./quote.html" accesskey = "q">Quote</a></li>\
            <li><a href = "./contact.html" accesskey = "c">Contact&Blog</a></li>\
            <p><a href = "./index.html">ABC optical</a></p>\
            <li id = "book"><a href = "./index.html#homeform">Book</a></li>\
        </ul>\
    </nav>\
');
