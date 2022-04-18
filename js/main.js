let bridalBtn1 = $('#bridalPart1'),
    bridalBtn2 = $('#bridalPart2'),
    part1 = $('#part1'),
    part2 = $('#part2'),
    fashBtn1 = $('#fashPart1'),
    fashBtn2 = $('#fashPart2');

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