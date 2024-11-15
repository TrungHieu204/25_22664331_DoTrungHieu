// add 4 Best Sellers
let BestSeller = {
    arr: [],
    add: function(_img, _name, _brand, _price, _desc, _warranty) {
        var a = {
            id: this.arr.length + 1 + 'b',
            img: _img,
            name: _name,
            brand: _brand,
            price: _price,
            desc: _desc,
            warranty: _warranty
        };
        this.arr.push(a);
    }
}

BestSeller.add('./asset/img/vali/vali-khoa-khung/1.jpg',
    'Vali Austin Reed MF9065_19 S Titanium Gray',
    'TRADITIONAL',
    '7390000',
    `TẶNG gối cổ cao cấp trị giá 310K
Freeship toàn quốc
GIẢM THÊM 10% khi mua phụ kiện áp dụng cho đơn hàng chứa vali từ 1 triệu
GIẢM THÊM 15% khi mua phụ kiện áp dụng cho đơn hàng chứa vali từ 1.5 triệu
GIẢM THÊM 20% khi mua phụ kiện áp dụng cho đơn hàng chứa vali từ 3 triệu
Ưu đãi áp dụng từ 01.11 - 07.11`,
    'Pick It Now !')

BestSeller.add('asset/img/vali/vali-khoa-khung/2.jpg',
    'Vali Epoch MF7068_24 M Gray',
    'TRADITIONAL',
    '6390000',
    `GIẢM nóng 500K
GIẢM THÊM 10% khi mua phụ kiện áp dụng cho đơn hàng chứa vali từ 1 triệu
GIẢM THÊM 15% khi mua phụ kiện áp dụng cho đơn hàng chứa vali từ 1.5 triệu
GIẢM THÊM 20% khi mua phụ kiện áp dụng cho đơn hàng chứa vali từ 3 triệu
Freeship toàn quốc
Ưu đãi áp dụng từ 01.11 - 21.11`,
    'Pick It Now !');

BestSeller.add('asset/img/vali/vali-khoa-khung/3.jpg',
    `Vali La Brujula 8015A_19 S Hairline Blue `,
    'TRADITIONAL',
    '4390000',
    `TẶNG kèm gối cổ du lịch trị giá 290K
GIẢM THÊM 10% khi mua phụ kiện áp dụng cho đơn hàng chứa vali từ 1 triệu
GIẢM THÊM 15% khi mua phụ kiện áp dụng cho đơn hàng chứa vali từ 1.5 triệu
GIẢM THÊM 20% khi mua phụ kiện áp dụng cho đơn hàng chứa vali từ 3 triệu
Freeship toàn quốc
Ưu đãi áp dụng từ 01.11 - 21.11`,
    'Pick It Now !');

BestSeller.add('asset/img/vali/vali-khoa-khung/4.jpg',
    `Vali Legend Walker 5509_48 GM S Shiny Graphite`,
    'TRADITIONAL',
    '5090000',
    `Thương hiệu:	Legend Walker
Xuất xứ thương hiệu:	Nhật Bản
Chất liệu:	Nhựa PC cao cấp
Trọng lượng:	3.7 Kg
Kích thước (dài x rộng x cao):	36.50x25x48 cm
Thể tích:	35 Lít
Bánh xe:	Bánh xe đôi
Khoá:	Khung
Thời gian bảo hành:	Bảo hành trọn đời
Tiện ích đặc biệt:	
● Giá đỡ chai nước
● Khóa khung 2 điểm `,
    'Pick It Now !')

BestSeller.add('asset/img/vali/vali-khoa-khung/5.jpg',
    `Vali Pisani X9 YG1849A_20 S Gun Metal`,
    'TRADITIONAL',
    '2890000',
    `Thương hiệu:	Pisani
Chất liệu:	Nhựa PC cao cấp
Trọng lượng:	3.75 kg
Kích thước (dài x rộng x cao):	38x24.3x56.5 cm
Thể tích:	38 L
Bánh xe:	Bánh xe đôi
Khoá:	Khung
Thời gian bảo hành:	Bảo hành trọn đời
Tiện ích đặc biệt:	
● Khóa khung 2 điểm`,
    'Pick It Now !')

BestSeller.add('asset/img/vali/vali-khoa-khung/6.jpg',
    `Vali Austin Reed ALI-040_19 S Pearl Navy`,
    'TRADITIONAL',
    '7090000',
    `Thương hiệu:	Austin Reed
Xuất xứ thương hiệu:	Anh
Chất liệu:	Nhựa PC cao cấp
Trọng lượng:	3.6 kg
Kích thước (dài x rộng x cao):	33.5x24x48.5 cm
Thể tích:	35 L
Bánh xe:	Bánh xe đôi
Khoá:	Khung
Thời gian bảo hành:	Bảo hành trọn đời
Tiện ích đặc biệt:	
● Khóa bánh xe
● Khóa khung 2 điểm`,
    'Pick It Now !')

BestSeller.add('asset/img/vali/vali-khoa-khung/7.jpg',
    `Vali Austin Reed GA8253_19 S Champagne`,
    'TRADITIONAL',
    '5280000',
    `Thương hiệu:	Austin Reed
Xuất xứ thương hiệu:	Anh
Chất liệu:	Nhựa PC cao cấp
Trọng lượng:	3.6 kg
Kích thước (dài x rộng x cao):	35x22x49 cm
Thể tích:	34L
Bánh xe:	Bánh xe đôi
Khoá:	Khóa khung
Thời gian bảo hành:	Bảo hành trọn đời
Tiện ích đặc biệt:	
● Khóa khung 2 điểm`,
    'Pick It Now !')

localStorage.setItem('BestSellers', JSON.stringify(BestSeller.arr));

let FeatureProduct = {
    arr: [],
    add: function(_img, _name, _brand, _price, _desc, _warranty) {
        var a = {
            id: this.arr.length + 1 + 'f',
            img: _img,
            name: _name,
            brand: _brand,
            price: _price,
            desc: _desc,
            warranty: _warranty
        };
        this.arr.push(a);
    }
}

FeatureProduct.add('asset/img/vali/vali-nhuadeo/1.jpg',
    `Vali Pisani URI BR10_20 S Rose Gold`,
    'DESIGNED',
    `3690000`,
    `Thương hiệu:	Pisani
Chất liệu:	Nhựa PC cao cấp
Trọng lượng:	3.4 kg
Kích thước (dài x rộng x cao):	38x23.5x54.5 cm
Thể tích:	36 L
Bánh xe:	Bánh xe đôi
Khoá:	Khung
Thời gian bảo hành:	Bảo hành trọn đời`,
    'Pick IT Now !');

FeatureProduct.add('asset/img/vali/vali-nhuadeo/2.jpg',
    `Vali Larita Siro OC22001_24 M Red`,
    'DESIGNED',
    `999000`,
    `Thương hiệu:	Larita
Chất liệu:	Nhựa PP siêu bền, hạn chế bể vỡ tốt
Trọng lượng:	3.3kg
Kích thước (dài x rộng x cao):	45.5x26x65.5 cm
Thể tích:	61 L
Bánh xe:	Bánh xe đôi
Dây kéo:	Dây kéo đơn
Khoá:	Khóa số
Thời gian bảo hành:	Bảo hành trọn đời`,
    'Pick It Now !');

FeatureProduct.add('asset/img/vali/vali-nhuadeo/3.jpg',
    `Vali Pisani Tarus PP12_20 S Yellow`,
    'DESIGNED',
    `999000`,
    `Thương hiệu:	Pisani
Chất liệu:	Nhựa PP siêu bền, hạn chế bể vỡ tốt
Trọng lượng:	2.6 kg
Kích thước (dài x rộng x cao):	39.5x22x56.5 cm
Thể tích:	35 L
Bánh xe:	Bánh xe đôi
Dây kéo:	Dây kéo đơn
Khoá:	Khóa số
Thời gian bảo hành:	Bảo hành trọn đời`,
    'Pick It Now !');

FeatureProduct.add('asset/img/vali/vali-nhuadeo/4.jpg',
    `Vali Larita Lyra HF8023_20 S Blue`,
    'DESIGNED',
    `999000`,
    `Thương hiệu:	Larita
Chất liệu:	Nhựa PC + ABS
Trọng lượng:	2.9kg
Kích thước (dài x rộng x cao):	38.5x24x57 cm
Thể tích:	37L
Bánh xe:	Bánh xe đôi
Dây kéo:	Dây kéo đơn
Khoá:	Khóa số
Thời gian bảo hành:	Bảo hành trọn đời`,
    'Pick It Now !');

FeatureProduct.add('asset/img/vali/vali-nhuadeo/5.jpg',
    `Vali Larita Nero BR25_20 S Blue`,
    'DESIGNED',
    `999000`,
    `Thương hiệu:	Larita
Chất liệu:	Nhựa PC + ABS
Trọng lượng:	2.7Kg
Kích thước (dài x rộng x cao):	35x24x54.5 cm
Thể tích:	36 L
Bánh xe:	Bánh xe đôi
Dây kéo:	Dây kéo đơn
Khoá:	Khoá số
Thời gian bảo hành:	Bảo hành trọn đời`,
    'Pick It Now !');

FeatureProduct.add('asset/img/vali/vali-nhuadeo/6.jpg',
    `Vali Larita Cetus HF8022_20 S Blue`,
    'DESIGNED',
    `999000`,
    `Thương hiệu:	Larita
Chất liệu:	Nhựa PC + ABS
Trọng lượng:	2.9kg
Kích thước (dài x rộng x cao):	35x24x49 cm
Thể tích:	37L
Bánh xe:	Bánh xe đôi
Dây kéo:	Dây kéo đơn
Khoá:	Khóa số
Thời gian bảo hành:	Bảo hành trọn đời`,
    'Pick It Now !');

FeatureProduct.add('asset/img/vali/vali-khoa-khung/16.jpg',
    `Vali Pisani XR15_20 S Silver`,
    'TRADITIONAL',
    `9020000`,
    `Thương hiệu:	Pisani
Chất liệu:	Nhôm nguyên khối sang trọng
Trọng lượng:	4.82kg
Kích thước (dài x rộng x cao):	36x25x59 cm
Thể tích:	38L
Bánh xe:	Bánh xe đôi
Khoá:	Khóa khung
Thời gian bảo hành:	Bảo hành trọn đời
Tiện ích đặc biệt:	
● Khóa khung 2 điểm`,
    'Pick It Now !');

FeatureProduct.add('asset/img/vali/vali-khoa-khung/9.jpg',
    `Vali Epoch MF7126_20 S Rose Gold`,
    'TRADITIONAL',
    `5090000`,
    `Thương hiệu:	Epoch
Xuất xứ thương hiệu:	Đài Loan
Chất liệu:	Nhựa PC cao cấp
Trọng lượng:	3.6 Kg
Kích thước (dài x rộng x cao):	36x22x51 cm
Thể tích:	35 Lít
Bánh xe:	Bánh xe đôi
Khoá:	Khung
Thời gian bảo hành:	Bảo hành trọn đời
Tiện ích đặc biệt:	
● Khóa khung 1 điểm `,
    'Pick It Now !');

FeatureProduct.add('asset/img/vali/vali-nhuadeo/7.jpg',
    `Vali Larita Rohan MG0224_20 S Red`,
    'DESIGNED',
    `999000`,
    `Thương hiệu:	Larita
Chất liệu:	Nhựa PP siêu bền, hạn chế bể vỡ tốt
Trọng lượng:	2.9 Kg
Kích thước (dài x rộng x cao):	41x23x55 cm
Thể tích:	44 L
Bánh xe:	Bánh xe đôi
Dây kéo:	Dây kéo đơn
Khoá:	Khoá số
Thời gian bảo hành:	Bảo hành trọn đời`,
    'Pick It Now !');

FeatureProduct.add('asset/img/vali/vali-nhuadeo/8.jpg',
    `Vali Larita Remi OC25_20 S Light Blue`,
    'TRADITIONAL',
    `999000`,
    `Thương hiệu:	Larita
Chất liệu:	Nhựa PP siêu bền, hạn chế bể vỡ tốt
Trọng lượng:	2.7kg
Kích thước (dài x rộng x cao):	39x23x56 cm
Thể tích:	39L
Bánh xe:	Bánh xe đôi
Dây kéo:	Dây kéo đơn
Khoá:	Khoá số
Thời gian bảo hành:	Bảo hành trọn đời`,
    'Pick It Now !');

FeatureProduct.add('asset/img/vali/vali-khoa-khung/10.jpg',
    `Vali Epoch MF9313_19 S Black`,
    'TRADITIONAL',
    `5790000`,
    `Thương hiệu:	Epoch
Xuất xứ thương hiệu:	Đài Loan
Chất liệu:	Nhựa PC cao cấp
Trọng lượng:	4Kg
Kích thước (dài x rộng x cao):	36x24x51 cm
Thể tích:	40L
Bánh xe:	Bánh xe đôi
Khoá:	Khóa khung
Thời gian bảo hành:	Bảo hành trọn đời`,
    'Pick It Now !');

FeatureProduct.add('asset/img/vali/vali-khoa-khung/11.jpg',
    `Vali La Brujula 1840A_19 S Hairline Blue`,
    'TRADITIONAL',
    `4399000`,
    `Thương hiệu:	La Brujula
Xuất xứ thương hiệu:	Đài Loan
Chất liệu:	Nhựa PC cao cấp
Trọng lượng:	3.55
Kích thước (dài x rộng x cao):	35x23x49.5 cm
Thể tích:	37 L
Bánh xe:	Bánh xe đôi
Khoá:	Khung
Thời gian bảo hành:	Bảo hành trọn đời
Tiện ích đặc biệt:	
● Khóa khung 2 điểm`,
    'Pick It Now !');

FeatureProduct.add('asset/img/vali/vali-khoa-khung/12.jpg',
    `Vali Leecooper LEE2301_19 S Primrose Yellow`,
    'TRADITIONAL',
    `3680000`,
    `Thương hiệu:	Leecooper
Xuất xứ thương hiệu:	Anh
Chất liệu:	Nhựa PC cao cấp
Trọng lượng:	3.65KG
Kích thước (dài x rộng x cao):	34x24x49 cm
Thể tích:	36L
Bánh xe:	Bánh xe đôi
Khoá:	Khóa khung
Thời gian bảo hành:	Bảo hành trọn đời`,
    'Pick It Now !');

FeatureProduct.add('asset/img/vali/vali-khoa-khung/vali-austin-reed-mf9033-19-m-black-carbon-9836-01579253834.jpg',
    `Vali Austin Reed MF9033_24 M Black Carbon`,
    'TRADITIONAL',
    `6990000`,
    `Thương hiệu:	Austin Reed
Xuất xứ thương hiệu:	Anh
Chất liệu:	Nhựa PC cao cấp
Trọng lượng:	4.7 Kg
Kích thước (dài x rộng x cao):	43x26x61 cm
Thể tích:	62 Lít
Bánh xe:	Bánh xe đôi
Khoá:	Khung
Thời gian bảo hành:	Bảo hành trọn đời
Tiện ích đặc biệt:	
● Cần kéo ngoài
● Khóa khung 1 điểm`,
    'Pick It Now !');

FeatureProduct.add('asset/img/vali/vali-khoa-khung/14.jpg',
    `Vali Pisani Maximus AF073_19 S Black`,
    'TRADITIONAL',
    `5299000`,
    `Thương hiệu:	Pisani
Chất liệu:	Nhựa PC cao cấp
Trọng lượng:	3.75KG
Kích thước (dài x rộng x cao):	37x23x55 cm
Thể tích:	36L
Bánh xe:	Bánh xe đôi
Dây kéo:	Dây kéo đơn
Khoá:	Khóa khung
Thời gian bảo hành:	Bảo hành trọn đời
Tiện ích đặc biệt:	
● Tích hợp cổng sạc dự phòng`,
    'Pick It Now !');

FeatureProduct.add('asset/img/vali/vali-nhuadeo/9.jpg',
    `Vali Larita Lina OC22004_20 S Yellow`,
    'DESIGNED',
    `999000`,
    `Thương hiệu:	Larita
Chất liệu:	Nhựa PP siêu bền, hạn chế bể vỡ tốt
Trọng lượng:	2.6 kg
Kích thước (dài x rộng x cao):	37x23x50 cm
Thể tích:	38 L
Bánh xe:	Bánh xe đôi
Dây kéo:	Dây kéo đơn
Khoá:	Khóa số
Thời gian bảo hành:	Bảo hành trọn đời`,
    'Pick It Now !');
localStorage.setItem('FeatureProduct', JSON.stringify(FeatureProduct.arr));