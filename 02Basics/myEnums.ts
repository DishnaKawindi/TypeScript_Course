// Onlt one of these options can be chosen
// Default starting index is 0. Can change it as AISLE = 10
// When converting this to JS, put const keyword infront of enum. It will construct less JS code
enum SeatChoice {
    AISLE = "aisle",
    MIDDLE = 3,
    WINDOW,
    FORTH
}

const hcSeat = SeatChoice.AISLE