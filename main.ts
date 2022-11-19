radio.onReceivedNumber(function (receivedNumber) {
    nieuw = Math.round(Math.map(radio.receivedPacket(RadioPacketProperty.SignalStrength), -94, -42, 0, 9))
    basic.showString("" + (nieuw))
})
let nieuw = 0
nieuw = radio.receivedPacket(RadioPacketProperty.SignalStrength)
radio.setGroup(13)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
	
})
