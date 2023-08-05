
public class MicroBitLEDs {

    public static void main(String[] args) throws InterruptedException {
    MicroBit device = MicroBit.getInstance();

    while (true) {
        device.display.scroll("Hello, Java!");  // Display a message
        device.display.clear();  // Clear the display
        device.display.setPixelValue(2, 2, 255);  // Set a pixel to full brightness
        Thread.sleep(1000);  // Pause for 1 second
        device.display.clear();
        Thread.sleep(1000);
    }
}
}
