input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    music.playMelody("C D E F G A B C5 ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    music.playMelody("C5 B A G F E D C ", 120)
})
basic.showString("Math quizz!")
let _1_pregunta = 8 * 13
basic.showString("8 x 13")
basic.showString("A= 104")
basic.showString("B= 124")
