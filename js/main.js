let bridalBtn1 = $('#bridalPart1'),
    bridalBtn2 = $('#bridalPart2'),
    part1 = $('#part1'),
    part2 = $('#part2'),
    fashBtn1 = $('#fashPart1'),
    fashBtn2 = $('#fashPart2')
allBtn1 = $('#allBtn1'),
    allBtn2 = $('#allBtn2'),
    allBtn3 = $('#allBtn3'),
    allBtn4 = $('#allBtn4'),
    separateBtn1 = $('#separateBtn1'),
    separateBtn2 = $('#separateBtn2'),
    separateBtn3 = $('#separateBtn3'),
    separateBtn4 = $('#separateBtn4'),
    dAndJBtn1 = $('#dAndJBtn1'),
    dAndJBtn2 = $('#dAndJBtn2'),
    dAndJBtn3 = $('#dAndJBtn3'),
    dAndJBtn4 = $('#dAndJBtn4'),
    lifeStyleBtn1 = $('#lifeStyleBtn1'),
    lifeStyleBtn2 = $('#lifeStyleBtn2'),
    lifeStyleBtn3 = $('#lifeStyleBtn3'),
    lifeStyleBtn4 = $('#lifeStyleBtn4'),
    shopBanner1 = $('#shopBanner1'),
    shopBanner2 = $('#shopBanner2'),
    shopBanner3 = $('#shopBanner3'),
    shopBanner4 = $('#shopBanner4'),
    fusTropez = $('.fusTropez'),
    greenTropez = $('.greenTropez'),
    navyTropez = $('.navyTropez'),
    fuschiaBtn = $('#fuschiaBtn'),
    greenBtn = $('#greenBtn'),
    navyBtn = $('#navyBtn');

part2.hide()
bridalBtn1.on('mouseenter', function () {
    $('#part2').hide()
    part1.show()
})
fashBtn1.on('mouseenter', function () {
    $('#part1').hide()
    part2.show()
})
bridalBtn2.on('mouseenter', function () {
    $('#part1').show()
})
fashBtn2.on('mouseenter', function () {
    $('#part1').hide()
})

shopBanner2.hide()
shopBanner3.hide()
shopBanner4.hide()
allBtn1.on('click', function () {
    shopBanner1.show()
    shopBanner2.hide()
    shopBanner3.hide()
    shopBanner4.hide()
    $('#bannerText').html = (`Our collection has been designed with timeless style and elegance in mind, to complement pieces you already
    own, resulting in a more mindful wardrobe that can take you from ‘coffee to cocktails’ with ease.
    Sustainability is at the heart of Sassi Holford - all our garments are made-to-order so every piece has a
    home, and are made in England to ensure that we keep our carbon footprint low and take responsibility for
    our impact on the planet.`)
})
separateBtn1.on('click', function () {
    shopBanner2.show()
    shopBanner1.hide()
    shopBanner3.hide()
    shopBanner4.hide()
    $('#bannerText').html = (`Shop effortless elegance and reinvent your wardrobe with these refined staple pieces. Core garments of fine structure, powerful tailoring and practicality form this collection.`)
})
dAndJBtn1.on('click', function () {
    shopBanner3.show()
    shopBanner1.hide()
    shopBanner2.hide()
    shopBanner4.hide()
    $('#bannerText').html = (`Famed for her superior cut, all of Sassi’s designs celebrate the female form and encourage individuality. Shop confident and sophisticated silhouettes reworked for the discerning woman.`) 
})
lifeStyleBtn1.on('click', function () {
    shopBanner4.show()
    shopBanner1.hide()
    shopBanner3.hide()
    shopBanner2.hide()
    $('#bannerText').html = (`Shop effortless elegance and reinvent your wardrobe with these refined staple pieces. Core garments of fine structure, powerful tailoring and practicality form this collection.`)
})


allBtn2.on('click', function () {
    shopBanner1.show()
    shopBanner2.hide()
    shopBanner3.hide()
    shopBanner4.hide()
    $('#bannerText').html = (`Our collection has been designed with timeless style and elegance in mind, to complement pieces you already
    own, resulting in a more mindful wardrobe that can take you from ‘coffee to cocktails’ with ease.
    Sustainability is at the heart of Sassi Holford - all our garments are made-to-order so every piece has a
    home, and are made in England to ensure that we keep our carbon footprint low and take responsibility for
    our impact on the planet.`)
})
separateBtn2.on('click', function () {
    shopBanner2.show()
    shopBanner1.hide()
    shopBanner3.hide()
    shopBanner4.hide()
    $('#bannerText').html = `Shop effortless elegance and reinvent your wardrobe with these refined staple pieces. Core garments of fine structure, powerful tailoring and practicality form this collection.`
})
dAndJBtn2.on('click', function () {
    shopBanner3.show()
    shopBanner1.hide()
    shopBanner2.hide()
    shopBanner4.hide()
    $('#bannerText').html = `Shop effortless elegance and reinvent your wardrobe with these refined staple pieces. Core garments of fine structure, powerful tailoring and practicality form this collection.` 
})
lifeStyleBtn2.on('click', function () {
    shopBanner4.show()
    shopBanner1.hide()
    shopBanner3.hide()
    shopBanner2.hide()
    $('#bannerText').html = (`Shop effortless elegance and reinvent your wardrobe with these refined staple pieces. Core garments of fine structure, powerful tailoring and practicality form this collection.`)
})

allBtn3.on('click', function () {
    shopBanner3.hide()
    shopBanner1.show()
    shopBanner2.hide()
    shopBanner4.hide()
    $('#bannerText').html = (`Our collection has been designed with timeless style and elegance in mind, to complement pieces you already
    own, resulting in a more mindful wardrobe that can take you from ‘coffee to cocktails’ with ease.
    Sustainability is at the heart of Sassi Holford - all our garments are made-to-order so every piece has a
    home, and are made in England to ensure that we keep our carbon footprint low and take responsibility for
    our impact on the planet.`)
})
separateBtn3.on('click', function () {
    shopBanner2.show()
    shopBanner1.hide()
    shopBanner3.hide()
    shopBanner4.hide()
    $('#bannerText').html = (`Shop effortless elegance and reinvent your wardrobe with these refined staple pieces. Core garments of fine structure, powerful tailoring and practicality form this collection.`)
})
dAndJBtn3.on('click', function () {
    shopBanner3.show()
    shopBanner1.hide()
    shopBanner2.hide()
    shopBanner4.hide()
    $('#bannerText').html = (`Famed for her superior cut, all of Sassi’s designs celebrate the female form and encourage individuality. Shop confident and sophisticated silhouettes reworked for the discerning woman.` )
})
lifeStyleBtn3.on('click', function () {
    shopBanner4.show()
    shopBanner1.hide()
    shopBanner3.hide()
    shopBanner2.hide()
    $('#bannerText').html = (`Shop effortless elegance and reinvent your wardrobe with these refined staple pieces. Core garments of fine structure, powerful tailoring and practicality form this collection.`)
})

allBtn4.on('click', function () {
    shopBanner3.hide()
    shopBanner1.show()
    shopBanner2.hide()
    shopBanner4.hide()
    $('#bannerText').html = (`Our collection has been designed with timeless style and elegance in mind, to complement pieces you already
    own, resulting in a more mindful wardrobe that can take you from ‘coffee to cocktails’ with ease.
    Sustainability is at the heart of Sassi Holford - all our garments are made-to-order so every piece has a
    home, and are made in England to ensure that we keep our carbon footprint low and take responsibility for
    our impact on the planet.`)
})
separateBtn4.on('click', function () {
    shopBanner2.show()
    shopBanner1.hide()
    shopBanner3.hide()
    shopBanner4.hide()
    $('#bannerText').html = (`Shop effortless elegance and reinvent your wardrobe with these refined staple pieces. Core garments of fine structure, powerful tailoring and practicality form this collection.`)
})
dAndJBtn4.on('click', function () {
    shopBanner3.show()
    shopBanner1.hide()
    shopBanner2.hide()
    shopBanner4.hide()
    $('#bannerText').html = (`Famed for her superior cut, all of Sassi’s designs celebrate the female form and encourage individuality. Shop confident and sophisticated silhouettes reworked for the discerning woman.` )
})
lifeStyleBtn4.on('click', function () {
    shopBanner4.show()
    shopBanner1.hide()
    shopBanner3.hide()
    shopBanner2.hide()
    $('#bannerText').html = (`Shop effortless elegance and reinvent your wardrobe with these refined staple pieces. Core garments of fine structure, powerful tailoring and practicality form this collection.`)
})

// Shop Image 1
$('#cat_img12').hide()
$('#cat_img11').on('mouseenter', function () {
    $('#cat_img12').show()  
    $('#cat_img11').hide()
    
})
$('#cat_img12').on('mouseleave', function () {
    $('#cat_img11').show()  
    $('#cat_img12').hide()  
})

// Shop Image 2
$('#img21').hide()
$('#img21').on('mouseenter', function () {
    $('#img22').show()  
    $('#img21').hide()
    $('#bannerText').html = `Shop effortless elegance and reinvent your wardrobe with these refined staple pieces. Core garments of fine structure, powerful tailoring and practicality form this collection.`  
})
$('#img22').on('mouseleave', function () {
    $('#img21').show()  
    $('#img22').hide()  
})

// Shop Image 3
$('#img24').hide()
$('#img23').on('mouseenter', function () {
    $('#img24').show()  
    $('#img23').hide()
    $('#bannerText').html = `Famed for her superior cut, all of Sassi’s designs celebrate the female form and encourage individuality. Shop confident and sophisticated silhouettes reworked for the discerning woman.` 
})
$('#img24').on('mouseleave', function () {
    $('#img23').show()  
    $('#img24').hide()  
})

// Shop Image 4
$('#img26').hide()
$('#img25').on('mouseenter', function () {
    $('#img26').show()  
    $('#img25').hide()  
})
$('#img26').on('mouseleave', function () {
    $('#img25').show()  
    $('#img26').hide()  
})

// Shop Image 5
$('#img27').hide()
$('#img27').on('mouseenter', function () {
    $('#img28').show()  
    $('#img27').hide()  
})
$('#img28').on('mouseleave', function () {
    $('#img27').show()  
    $('#img28').hide() 
})

// Shop Image 6
$('#img29').hide()
$('#img29').on('mouseenter', function () {
    $('#img30').show()  
    $('#img29').hide()  
})
$('#img30').on('mouseleave', function () {
    $('#img29').show()  
    $('#img30').hide()  
})


greenTropez.hide()
navyTropez.hide()
fuschiaBtn.on('click', function () {
    fusTropez.show()
    greenTropez.hide()
    navyTropez.hide()
})
greenBtn.on('click', function () {
    fusTropez.hide()
    greenTropez.show()
    navyTropez.hide()
})
navyBtn.on('click', function () {
    fusTropez.hide()
    greenTropez.hide()
    navyTropez.show()
})