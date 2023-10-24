const tickets = [
  {
    ticket_ID: 1,
    shop_ID: 84,
    cahier_ID: 6,
    selectedNumbers: [ 77, 53, 72, 78, 72 ],
    money: 20
  },
  {
    ticket_ID: 2,
    shop_ID: 86,
    cahier_ID: 8,
    selectedNumbers: [ 32, 24, 58, 17, 21 ],
    money: 20
  },
  {
    ticket_ID: 3,
    shop_ID: 85,
    cahier_ID: 1,
    selectedNumbers: [ 53, 47, 52, 32, 41 ],
    money: 20
  },
  {
    ticket_ID: 4,
    shop_ID: 19,
    cahier_ID: 6,
    selectedNumbers: [ 43, 53, 18, 26, 79 ],
    money: 20
  },
  {
    ticket_ID: 5,
    shop_ID: 57,
    cahier_ID: 1,
    selectedNumbers: [ 12, 76, 68, 74, 43 ],
    money: 20
  },
  {
    ticket_ID: 6,
    shop_ID: 78,
    cahier_ID: 4,
    selectedNumbers: [ 65, 17, 8, 16, 27 ],
    money: 20
  },
  {
    ticket_ID: 7,
    shop_ID: 44,
    cahier_ID: 2,
    selectedNumbers: [ 63, 32, 58, 7, 6 ],
    money: 20
  },
  {
    ticket_ID: 8,
    shop_ID: 80,
    cahier_ID: 5,
    selectedNumbers: [ 14, 68, 41, 5, 21 ],
    money: 20
  },
  {
    ticket_ID: 9,
    shop_ID: 29,
    cahier_ID: 2,
    selectedNumbers: [ 34, 64, 6, 80, 5 ],
    money: 20
  },
  {
    ticket_ID: 10,
    shop_ID: 73,
    cahier_ID: 9,
    selectedNumbers: [ 10, 58, 73, 39, 12 ],
    money: 20
  },
  {
    ticket_ID: 11,
    shop_ID: 89,
    cahier_ID: 7,
    selectedNumbers: [ 55, 34, 59, 15, 5 ],
    money: 20
  },
  {
    ticket_ID: 12,
    shop_ID: 91,
    cahier_ID: 8,
    selectedNumbers: [ 38, 31, 46, 55, 22 ],
    money: 20
  },
  {
    ticket_ID: 13,
    shop_ID: 57,
    cahier_ID: 0,
    selectedNumbers: [ 9, 11, 68, 54, 15 ],
    money: 20
  },
  {
    ticket_ID: 14,
    shop_ID: 4,
    cahier_ID: 6,
    selectedNumbers: [ 42, 45, 49, 12, 34 ],
    money: 20
  },
  {
    ticket_ID: 15,
    shop_ID: 65,
    cahier_ID: 6,
    selectedNumbers: [ 35, 36, 30, 32, 72 ],
    money: 20
  },
  {
    ticket_ID: 16,
    shop_ID: 43,
    cahier_ID: 8,
    selectedNumbers: [ 75, 30, 30, 31, 70 ],
    money: 20
  },
  {
    ticket_ID: 17,
    shop_ID: 73,
    cahier_ID: 9,
    selectedNumbers: [ 71, 28, 12, 2, 11 ],
    money: 20
  },
  {
    ticket_ID: 18,
    shop_ID: 69,
    cahier_ID: 1,
    selectedNumbers: [ 27, 38, 75, 72, 42 ],
    money: 20
  },
  {
    ticket_ID: 19,
    shop_ID: 6,
    cahier_ID: 3,
    selectedNumbers: [ 61, 64, 27, 4, 21 ],
    money: 20
  },
  {
    ticket_ID: 20,
    shop_ID: 67,
    cahier_ID: 5,
    selectedNumbers: [ 48, 28, 16, 6, 5 ],
    money: 20
  },
  {
    ticket_ID: 21,
    shop_ID: 30,
    cahier_ID: 0,
    selectedNumbers: [ 31, 61, 53, 59, 14 ],
    money: 20
  },
  {
    ticket_ID: 22,
    shop_ID: 58,
    cahier_ID: 6,
    selectedNumbers: [ 53, 77, 59, 33, 71 ],
    money: 20
  },
  {
    ticket_ID: 23,
    shop_ID: 69,
    cahier_ID: 5,
    selectedNumbers: [ 79, 35, 3, 23, 5 ],
    money: 20
  },
  {
    ticket_ID: 24,
    shop_ID: 12,
    cahier_ID: 0,
    selectedNumbers: [ 78, 45, 15, 7, 4 ],
    money: 20
  },
  {
    ticket_ID: 25,
    shop_ID: 99,
    cahier_ID: 2,
    selectedNumbers: [ 13, 34, 57, 77, 67 ],
    money: 20
  },
  {
    ticket_ID: 26,
    shop_ID: 41,
    cahier_ID: 7,
    selectedNumbers: [ 79, 64, 36, 3, 44 ],
    money: 20
  },
  {
    ticket_ID: 27,
    shop_ID: 60,
    cahier_ID: 3,
    selectedNumbers: [ 44, 9, 64, 42, 2 ],
    money: 20
  },
  {
    ticket_ID: 28,
    shop_ID: 68,
    cahier_ID: 9,
    selectedNumbers: [ 66, 69, 15, 44, 76 ],
    money: 20
  },
  {
    ticket_ID: 29,
    shop_ID: 63,
    cahier_ID: 7,
    selectedNumbers: [ 8, 66, 63, 23, 11 ],
    money: 20
  },
  {
    ticket_ID: 30,
    shop_ID: 13,
    cahier_ID: 4,
    selectedNumbers: [ 44, 41, 26, 36, 65 ],
    money: 20
  },
  {
    ticket_ID: 31,
    shop_ID: 43,
    cahier_ID: 7,
    selectedNumbers: [ 49, 75, 60, 15, 4 ],
    money: 20
  },
  {
    ticket_ID: 32,
    shop_ID: 79,
    cahier_ID: 4,
    selectedNumbers: [ 67, 36, 54, 45, 45 ],
    money: 20
  },
  {
    ticket_ID: 33,
    shop_ID: 42,
    cahier_ID: 6,
    selectedNumbers: [ 24, 48, 29, 17, 3 ],
    money: 20
  },
  {
    ticket_ID: 34,
    shop_ID: 46,
    cahier_ID: 0,
    selectedNumbers: [ 12, 65, 21, 19, 68 ],
    money: 20
  },
  {
    ticket_ID: 35,
    shop_ID: 48,
    cahier_ID: 5,
    selectedNumbers: [ 35, 76, 8, 56, 48 ],
    money: 20
  },
  {
    ticket_ID: 36,
    shop_ID: 38,
    cahier_ID: 3,
    selectedNumbers: [ 36, 21, 74, 60, 3 ],
    money: 20
  },
  {
    ticket_ID: 37,
    shop_ID: 65,
    cahier_ID: 8,
    selectedNumbers: [ 35, 16, 27, 62, 72 ],
    money: 20
  },
  {
    ticket_ID: 38,
    shop_ID: 87,
    cahier_ID: 8,
    selectedNumbers: [ 51, 43, 23, 60, 56 ],
    money: 20
  },
  {
    ticket_ID: 39,
    shop_ID: 68,
    cahier_ID: 0,
    selectedNumbers: [ 42, 39, 9, 18, 49 ],
    money: 20
  },
  {
    ticket_ID: 40,
    shop_ID: 54,
    cahier_ID: 6,
    selectedNumbers: [ 26, 16, 80, 14, 11 ],
    money: 20
  },
  {
    ticket_ID: 41,
    shop_ID: 78,
    cahier_ID: 2,
    selectedNumbers: [ 50, 60, 29, 64, 74 ],
    money: 20
  },
  {
    ticket_ID: 42,
    shop_ID: 90,
    cahier_ID: 4,
    selectedNumbers: [ 19, 14, 66, 47, 65 ],
    money: 20
  },
  {
    ticket_ID: 43,
    shop_ID: 55,
    cahier_ID: 1,
    selectedNumbers: [ 71, 30, 43, 73, 66 ],
    money: 20
  },
  {
    ticket_ID: 44,
    shop_ID: 59,
    cahier_ID: 6,
    selectedNumbers: [ 24, 65, 57, 31, 18 ],
    money: 20
  },
  {
    ticket_ID: 45,
    shop_ID: 41,
    cahier_ID: 3,
    selectedNumbers: [ 58, 36, 31, 77, 77 ],
    money: 20
  },
  {
    ticket_ID: 46,
    shop_ID: 72,
    cahier_ID: 0,
    selectedNumbers: [ 73, 17, 70, 51, 7 ],
    money: 20
  },
  {
    ticket_ID: 47,
    shop_ID: 70,
    cahier_ID: 6,
    selectedNumbers: [ 33, 35, 78, 1, 36 ],
    money: 20
  },
  {
    ticket_ID: 48,
    shop_ID: 11,
    cahier_ID: 3,
    selectedNumbers: [ 69, 55, 14, 73, 27 ],
    money: 20
  },
  {
    ticket_ID: 49,
    shop_ID: 39,
    cahier_ID: 8,
    selectedNumbers: [ 16, 42, 10, 73, 54 ],
    money: 20
  },
  {
    ticket_ID: 50,
    shop_ID: 77,
    cahier_ID: 3,
    selectedNumbers: [ 25, 43, 61, 69, 58 ],
    money: 20
  },
  {
    ticket_ID: 51,
    shop_ID: 80,
    cahier_ID: 2,
    selectedNumbers: [ 18, 57, 71, 75, 50 ],
    money: 20
  },
  {
    ticket_ID: 52,
    shop_ID: 11,
    cahier_ID: 3,
    selectedNumbers: [ 16, 44, 24, 26, 8 ],
    money: 20
  },
  {
    ticket_ID: 53,
    shop_ID: 74,
    cahier_ID: 0,
    selectedNumbers: [ 21, 37, 23, 26, 59 ],
    money: 20
  },
  {
    ticket_ID: 54,
    shop_ID: 97,
    cahier_ID: 2,
    selectedNumbers: [ 37, 63, 16, 7, 8 ],
    money: 20
  },
  {
    ticket_ID: 55,
    shop_ID: 16,
    cahier_ID: 4,
    selectedNumbers: [ 16, 7, 74, 47, 78 ],
    money: 20
  },
  {
    ticket_ID: 56,
    shop_ID: 89,
    cahier_ID: 6,
    selectedNumbers: [ 36, 4, 16, 30, 18 ],
    money: 20
  },
  {
    ticket_ID: 57,
    shop_ID: 47,
    cahier_ID: 3,
    selectedNumbers: [ 24, 55, 68, 18, 60 ],
    money: 20
  },
  {
    ticket_ID: 58,
    shop_ID: 1,
    cahier_ID: 0,
    selectedNumbers: [ 4, 43, 45, 79, 10 ],
    money: 20
  },
  {
    ticket_ID: 59,
    shop_ID: 55,
    cahier_ID: 7,
    selectedNumbers: [ 42, 57, 7, 10, 74 ],
    money: 20
  },
  {
    ticket_ID: 60,
    shop_ID: 7,
    cahier_ID: 7,
    selectedNumbers: [ 27, 57, 80, 56, 37 ],
    money: 20
  },
  {
    ticket_ID: 61,
    shop_ID: 43,
    cahier_ID: 8,
    selectedNumbers: [ 13, 52, 41, 61, 56 ],
    money: 20
  },
  {
    ticket_ID: 62,
    shop_ID: 91,
    cahier_ID: 4,
    selectedNumbers: [ 44, 27, 38, 37, 15 ],
    money: 20
  },
  {
    ticket_ID: 63,
    shop_ID: 99,
    cahier_ID: 7,
    selectedNumbers: [ 57, 62, 54, 25, 70 ],
    money: 20
  },
  {
    ticket_ID: 64,
    shop_ID: 88,
    cahier_ID: 3,
    selectedNumbers: [ 34, 67, 21, 11, 59 ],
    money: 20
  },
  {
    ticket_ID: 65,
    shop_ID: 1,
    cahier_ID: 4,
    selectedNumbers: [ 16, 61, 27, 70, 65 ],
    money: 20
  },
  {
    ticket_ID: 66,
    shop_ID: 36,
    cahier_ID: 6,
    selectedNumbers: [ 16, 62, 21, 55, 45 ],
    money: 20
  },
  {
    ticket_ID: 67,
    shop_ID: 19,
    cahier_ID: 7,
    selectedNumbers: [ 10, 17, 60, 71, 64 ],
    money: 20
  },
  {
    ticket_ID: 68,
    shop_ID: 90,
    cahier_ID: 1,
    selectedNumbers: [ 28, 13, 33, 57, 51 ],
    money: 20
  },
  {
    ticket_ID: 69,
    shop_ID: 22,
    cahier_ID: 8,
    selectedNumbers: [ 24, 48, 41, 68, 15 ],
    money: 20
  },
  {
    ticket_ID: 70,
    shop_ID: 19,
    cahier_ID: 6,
    selectedNumbers: [ 4, 48, 66, 41, 76 ],
    money: 20
  },
  {
    ticket_ID: 71,
    shop_ID: 70,
    cahier_ID: 3,
    selectedNumbers: [ 30, 15, 53, 28, 37 ],
    money: 20
  },
  {
    ticket_ID: 72,
    shop_ID: 61,
    cahier_ID: 3,
    selectedNumbers: [ 5, 19, 33, 16, 79 ],
    money: 20
  },
  {
    ticket_ID: 73,
    shop_ID: 28,
    cahier_ID: 5,
    selectedNumbers: [ 48, 71, 36, 33, 57 ],
    money: 20
  },
  {
    ticket_ID: 74,
    shop_ID: 62,
    cahier_ID: 1,
    selectedNumbers: [ 31, 56, 80, 80, 10 ],
    money: 20
  },
  {
    ticket_ID: 75,
    shop_ID: 21,
    cahier_ID: 8,
    selectedNumbers: [ 8, 78, 23, 23, 68 ],
    money: 20
  },
  {
    ticket_ID: 76,
    shop_ID: 86,
    cahier_ID: 2,
    selectedNumbers: [ 40, 65, 50, 9, 61 ],
    money: 20
  },
  {
    ticket_ID: 77,
    shop_ID: 89,
    cahier_ID: 1,
    selectedNumbers: [ 35, 49, 80, 14, 17 ],
    money: 20
  },
  {
    ticket_ID: 78,
    shop_ID: 20,
    cahier_ID: 5,
    selectedNumbers: [ 34, 41, 48, 54, 63 ],
    money: 20
  },
  {
    ticket_ID: 79,
    shop_ID: 5,
    cahier_ID: 8,
    selectedNumbers: [ 13, 54, 4, 55, 14 ],
    money: 20
  },
  {
    ticket_ID: 80,
    shop_ID: 12,
    cahier_ID: 8,
    selectedNumbers: [ 58, 76, 25, 58, 20 ],
    money: 20
  },
  {
    ticket_ID: 81,
    shop_ID: 15,
    cahier_ID: 3,
    selectedNumbers: [ 32, 19, 35, 3, 69 ],
    money: 20
  },
  {
    ticket_ID: 82,
    shop_ID: 26,
    cahier_ID: 0,
    selectedNumbers: [ 7, 69, 23, 62, 20 ],
    money: 20
  },
  {
    ticket_ID: 83,
    shop_ID: 81,
    cahier_ID: 2,
    selectedNumbers: [ 35, 64, 31, 24, 22 ],
    money: 20
  },
  {
    ticket_ID: 84,
    shop_ID: 78,
    cahier_ID: 0,
    selectedNumbers: [ 15, 9, 50, 8, 31 ],
    money: 20
  },
  {
    ticket_ID: 85,
    shop_ID: 65,
    cahier_ID: 2,
    selectedNumbers: [ 5, 54, 59, 74, 66 ],
    money: 20
  },
  {
    ticket_ID: 86,
    shop_ID: 56,
    cahier_ID: 7,
    selectedNumbers: [ 27, 34, 42, 45, 9 ],
    money: 20
  },
  {
    ticket_ID: 87,
    shop_ID: 19,
    cahier_ID: 8,
    selectedNumbers: [ 42, 37, 65, 37, 13 ],
    money: 20
  },
  {
    ticket_ID: 88,
    shop_ID: 79,
    cahier_ID: 5,
    selectedNumbers: [ 68, 76, 21, 16, 20 ],
    money: 20
  },
  {
    ticket_ID: 89,
    shop_ID: 88,
    cahier_ID: 7,
    selectedNumbers: [ 76, 73, 5, 20, 12 ],
    money: 20
  },
  {
    ticket_ID: 90,
    shop_ID: 3,
    cahier_ID: 7,
    selectedNumbers: [ 40, 2, 60, 63, 39 ],
    money: 20
  },
  {
    ticket_ID: 91,
    shop_ID: 85,
    cahier_ID: 4,
    selectedNumbers: [ 33, 9, 73, 49, 52 ],
    money: 20
  },
  {
    ticket_ID: 92,
    shop_ID: 79,
    cahier_ID: 2,
    selectedNumbers: [ 7, 50, 54, 38, 61 ],
    money: 20
  },
  {
    ticket_ID: 93,
    shop_ID: 72,
    cahier_ID: 3,
    selectedNumbers: [ 21, 68, 57, 45, 17 ],
    money: 20
  },
  {
    ticket_ID: 94,
    shop_ID: 25,
    cahier_ID: 0,
    selectedNumbers: [ 69, 2, 77, 50, 67 ],
    money: 20
  },
  {
    ticket_ID: 95,
    shop_ID: 52,
    cahier_ID: 0,
    selectedNumbers: [ 40, 52, 32, 56, 50 ],
    money: 20
  },
  {
    ticket_ID: 96,
    shop_ID: 1,
    cahier_ID: 1,
    selectedNumbers: [ 7, 29, 1, 65, 11 ],
    money: 20
  },
  {
    ticket_ID: 97,
    shop_ID: 32,
    cahier_ID: 3,
    selectedNumbers: [ 54, 68, 8, 76, 1 ],
    money: 20
  },
  {
    ticket_ID: 98,
    shop_ID: 37,
    cahier_ID: 9,
    selectedNumbers: [ 68, 5, 41, 74, 54 ],
    money: 20
  },
  {
    ticket_ID: 99,
    shop_ID: 49,
    cahier_ID: 9,
    selectedNumbers: [ 12, 31, 3, 65, 48 ],
    money: 20
  },
  {
    ticket_ID: 100,
    shop_ID: 64,
    cahier_ID: 0,
    selectedNumbers: [ 8, 64, 1, 55, 67 ],
    money: 20
  },
  {
    ticket_ID: 101,
    shop_ID: 48,
    cahier_ID: 7,
    selectedNumbers: [ 4, 20, 21, 23, 76 ],
    money: 20
  },
  {
    ticket_ID: 102,
    shop_ID: 12,
    cahier_ID: 0,
    selectedNumbers: [ 10, 51, 34, 41, 3 ],
    money: 20
  },
  {
    ticket_ID: 103,
    shop_ID: 44,
    cahier_ID: 8,
    selectedNumbers: [ 77, 67, 9, 43, 59 ],
    money: 20
  },
  {
    ticket_ID: 104,
    shop_ID: 99,
    cahier_ID: 8,
    selectedNumbers: [ 77, 5, 52, 24, 73 ],
    money: 20
  },
  {
    ticket_ID: 105,
    shop_ID: 29,
    cahier_ID: 2,
    selectedNumbers: [ 38, 20, 65, 63, 18 ],
    money: 20
  },
  {
    ticket_ID: 106,
    shop_ID: 97,
    cahier_ID: 5,
    selectedNumbers: [ 4, 12, 58, 32, 74 ],
    money: 20
  },
  {
    ticket_ID: 107,
    shop_ID: 49,
    cahier_ID: 0,
    selectedNumbers: [ 39, 67, 55, 16, 54 ],
    money: 20
  },
  {
    ticket_ID: 108,
    shop_ID: 20,
    cahier_ID: 6,
    selectedNumbers: [ 28, 11, 67, 77, 10 ],
    money: 20
  },
  {
    ticket_ID: 109,
    shop_ID: 0,
    cahier_ID: 1,
    selectedNumbers: [ 5, 73, 34, 78, 24 ],
    money: 20
  },
  {
    ticket_ID: 110,
    shop_ID: 29,
    cahier_ID: 0,
    selectedNumbers: [ 80, 30, 32, 62, 28 ],
    money: 20
  },
  {
    ticket_ID: 111,
    shop_ID: 6,
    cahier_ID: 8,
    selectedNumbers: [ 70, 29, 38, 34, 23 ],
    money: 20
  },
  {
    ticket_ID: 112,
    shop_ID: 24,
    cahier_ID: 6,
    selectedNumbers: [ 20, 74, 18, 38, 47 ],
    money: 20
  },
  {
    ticket_ID: 113,
    shop_ID: 72,
    cahier_ID: 9,
    selectedNumbers: [ 6, 40, 65, 76, 29 ],
    money: 20
  },
  {
    ticket_ID: 114,
    shop_ID: 21,
    cahier_ID: 5,
    selectedNumbers: [ 61, 29, 8, 4, 33 ],
    money: 20
  },
  {
    ticket_ID: 115,
    shop_ID: 5,
    cahier_ID: 5,
    selectedNumbers: [ 56, 1, 57, 71, 74 ],
    money: 20
  },
  {
    ticket_ID: 116,
    shop_ID: 22,
    cahier_ID: 7,
    selectedNumbers: [ 7, 49, 70, 38, 73 ],
    money: 20
  },
  {
    ticket_ID: 117,
    shop_ID: 41,
    cahier_ID: 3,
    selectedNumbers: [ 73, 19, 27, 24, 36 ],
    money: 20
  },
  {
    ticket_ID: 118,
    shop_ID: 40,
    cahier_ID: 7,
    selectedNumbers: [ 28, 67, 80, 66, 54 ],
    money: 20},
  {
    ticket_ID: 119,
    shop_ID: 54,
    cahier_ID: 5,
    selectedNumbers: [ 63, 33, 43, 27, 48 ],
    money: 20
  },
  {
    ticket_ID: 120,
    shop_ID: 20,
    cahier_ID: 1,
    selectedNumbers: [ 79, 75, 39, 11, 34 ],
    money: 20
  },
  {
    ticket_ID: 121,
    shop_ID: 16,
    cahier_ID: 3,
    selectedNumbers: [ 46, 36, 19, 67, 12 ],
    money: 20
  },
  {
    ticket_ID: 122,
    shop_ID: 39,
    cahier_ID: 5,
    selectedNumbers: [ 26, 77, 25, 49, 29 ],
    money: 20
  },
  {
    ticket_ID: 123,
    shop_ID: 14,
    cahier_ID: 6,
    selectedNumbers: [ 27, 4, 1, 5, 27 ],
    money: 20
  },
  {
    ticket_ID: 124,
    shop_ID: 0,
    cahier_ID: 6,
    selectedNumbers: [ 76, 15, 22, 43, 66 ],
    money: 20
  },
  {
    ticket_ID: 125,
    shop_ID: 95,
    cahier_ID: 5,
    selectedNumbers: [ 29, 19, 40, 52, 67 ],
    money: 20
  },
  {
    ticket_ID: 126,
    shop_ID: 8,
    cahier_ID: 0,
    selectedNumbers: [ 22, 32, 61, 10, 44 ],
    money: 20
  },
  {
    ticket_ID: 127,
    shop_ID: 3,
    cahier_ID: 2,
    selectedNumbers: [ 27, 69, 73, 77, 50 ],
    money: 20
  },
  {
    ticket_ID: 128,
    shop_ID: 90,
    cahier_ID: 9,
    selectedNumbers: [ 27, 48, 33, 72, 15 ],
    money: 20
  },
  {
    ticket_ID: 129,
    shop_ID: 4,
    cahier_ID: 7,
    selectedNumbers: [ 62, 55, 48, 6, 37 ],
    money: 20
  },
  {
    ticket_ID: 130,
    shop_ID: 9,
    cahier_ID: 0,
    selectedNumbers: [ 14, 64, 65, 12, 73 ],
    money: 20
  },
  {
    ticket_ID: 131,
    shop_ID: 1,
    cahier_ID: 9,
    selectedNumbers: [ 50, 24, 70, 22, 21 ],
    money: 20
  },
  {
    ticket_ID: 132,
    shop_ID: 44,
    cahier_ID: 2,
    selectedNumbers: [ 23, 22, 18, 19, 27 ],
    money: 20
  },
  {
    ticket_ID: 133,
    shop_ID: 74,
    cahier_ID: 1,
    selectedNumbers: [ 43, 75, 74, 17, 28 ],
    money: 20
  },
  {
    ticket_ID: 134,
    shop_ID: 32,
    cahier_ID: 4,
    selectedNumbers: [ 63, 2, 65, 31, 78 ],
    money: 20
  },
  {
    ticket_ID: 135,
    shop_ID: 74,
    cahier_ID: 3,
    selectedNumbers: [ 46, 67, 60, 18, 58 ],
    money: 20
  },
  {
    ticket_ID: 136,
    shop_ID: 34,
    cahier_ID: 9,
    selectedNumbers: [ 3, 36, 29, 50, 66 ],
    money: 20
  },
  {
    ticket_ID: 137,
    shop_ID: 49,
    cahier_ID: 9,
    selectedNumbers: [ 39, 63,9, 48, 68, 43 ],
    money: 20
  },
  {
    ticket_ID: 138,
    shop_ID: 52,
    cahier_ID: 1,
    selectedNumbers: [ 31, 57, 37, 17, 41 ],
    money: 20
  },
  {
    ticket_ID: 139,
    shop_ID: 49,
    cahier_ID: 9,
    selectedNumbers: [ 34, 65, 1, 33, 12 ],
    money: 20
  },
  {
    ticket_ID: 140,
    shop_ID: 0,
    cahier_ID: 5,
    selectedNumbers: [ 23, 42, 35, 39, 20 ],
    money: 20
  },
  {
    ticket_ID: 141,
    shop_ID: 84,
    cahier_ID: 4,
    selectedNumbers: [ 10, 66, 7, 20, 78 ],
    money: 20
  },
  {
    ticket_ID: 142,
    shop_ID: 73,
    cahier_ID: 5,
    selectedNumbers: [ 13, 70, 64, 30, 39 ],
    money: 20
  },
  {
    ticket_ID: 143,
    shop_ID: 78,
    cahier_ID: 5,
    selectedNumbers: [ 45, 16, 65, 21, 73 ],
    money: 20
  },
  {
    ticket_ID: 144,
    shop_ID: 65,
    cahier_ID: 9,
    selectedNumbers: [ 72, 13, 49, 79, 14 ],
    money: 20
  },
  {
    ticket_ID: 145,
    shop_ID: 66,
    cahier_ID: 7,
    selectedNumbers: [ 15, 60, 5, 3, 22 ],
    money: 20
  },
  {
    ticket_ID: 146,
    shop_ID: 91,
    cahier_ID: 1,
    selectedNumbers: [ 37, 71, 47, 44, 27 ],
    money: 20
  },
  {
    ticket_ID: 147,
    shop_ID: 71,
    cahier_ID: 9,
    selectedNumbers: [ 49, 19, 6, 76, 6 ],
    money: 20
  },
  {
    ticket_ID: 148,
    shop_ID: 23,
    cahier_ID: 8,
    selectedNumbers: [ 70, 71, 79, 30, 48 ],
    money: 20
  },
  {
    ticket_ID: 149,
    shop_ID: 64,
    cahier_ID: 6,
    selectedNumbers: [ 20, 7, 15, 24, 33 ],
    money: 20
  },
  {
    ticket_ID: 150,
    shop_ID: 93,
    cahier_ID: 6,
    selectedNumbers: [ 41, 70, 72, 38, 69 ],
    money: 20
  },
  {
    ticket_ID: 151,
    shop_ID: 58,
    cahier_ID: 2,
    selectedNumbers: [ 40, 62, 19, 21, 54 ],
    money: 20
  },
  {
    ticket_ID: 152,
    shop_ID: 22,
    cahier_ID: 3,
    selectedNumbers: [ 79, 30, 80, 22, 66 ],
    money: 20
  },
  {
    ticket_ID: 153,
    shop_ID: 55,
    cahier_ID: 2,
    selectedNumbers: [ 10, 9, 31, 80, 63 ],
    money: 20
  },
  {
    ticket_ID: 154,
    shop_ID: 5,
    cahier_ID: 8,
    selectedNumbers: [ 32, 3, 13, 32, 61 ],
    money: 20
  },
  {
    ticket_ID: 155,
    shop_ID: 13,
    cahier_ID: 2,
    selectedNumbers: [ 38, 53, 70, 59, 63 ],
    money: 20
  },
  {
    ticket_ID: 156,
    shop_ID: 48,
    cahier_ID: 4,
    selectedNumbers: [ 1, 73, 79, 49, 53 ],
    money: 20
  },
  {
    ticket_ID: 157,
    shop_ID: 44,
    cahier_ID: 4,
    selectedNumbers: [ 36, 5, 11, 42, 18 ],
    money: 20
  },
  {
    ticket_ID: 158,
    shop_ID: 12,
    cahier_ID: 3,
    selectedNumbers: [ 26, 23, 76, 38, 44 ],
    money: 20
  },
  {
    ticket_ID: 159,
    shop_ID: 79,
    cahier_ID: 3,
    selectedNumbers: [ 56, 37, 62, 34, 5 ],
    money: 20
  },
  {
    ticket_ID: 160,
    shop_ID: 86,
    cahier_ID: 7,
    selectedNumbers: [ 52, 14, 68, 75, 65 ],
    money: 20
  },
  {
    ticket_ID: 161,
    shop_ID: 69,
    cahier_ID: 6,
    selectedNumbers: [ 75, 6, 5, 3, 35 ],
    money: 20
  },
  {
    ticket_ID: 162,
    shop_ID: 76,
    cahier_ID: 9,
    selectedNumbers: [ 4, 24, 35, 68, 10 ],
    money: 20
  },
  {
    ticket_ID: 163,
    shop_ID: 18,
    cahier_ID: 7,
    selectedNumbers: [ 11, 31, 62, 79, 62 ],
    money: 20
  },
  {
    ticket_ID: 164,
    shop_ID: 10,
    cahier_ID: 0,
    selectedNumbers: [ 29, 8, 40, 56, 2 ],
    money: 20
  },
  {
    ticket_ID: 165,
    shop_ID: 1,
    cahier_ID: 2,
    selectedNumbers: [ 51, 42, 40, 18, 3 ],
    money: 20
  },
  {
    ticket_ID: 166,
    shop_ID: 6,
    cahier_ID: 1,
    selectedNumbers: [ 26, 68, 40, 65, 63 ],
    money: 20
  },
  {
    ticket_ID: 167,
    shop_ID: 10,
    cahier_ID: 9,
    selectedNumbers: [ 54, 55, 68, 68, 55 ],
    money: 20
  },
  {
    ticket_ID: 168,
    shop_ID: 85,
    cahier_ID: 5,
    selectedNumbers: [ 63, 68, 48, 10, 15 ],
    money: 20
  },
  {
    ticket_ID: 169,
    shop_ID: 99,
    cahier_ID: 7,
    selectedNumbers: [ 60, 33, 44, 8, 24 ],
    money: 20
  },
  {
    ticket_ID: 170,
    shop_ID: 39,
    cahier_ID: 5,
    selectedNumbers: [ 18, 33, 38, 53, 56 ],
    money: 20
  },
  {
    ticket_ID: 171,
    shop_ID: 83,
    cahier_ID: 9,
    selectedNumbers: [ 34, 12, 2, 19, 2 ],
    money: 20
  },
  {
    ticket_ID: 172,
    shop_ID: 15,
    cahier_ID: 3,
    selectedNumbers: [ 71, 72, 2, 22, 57 ],
    money: 20
  },
  {
    ticket_ID: 173,
    shop_ID: 32,
    cahier_ID: 7,
    selectedNumbers: [ 47, 29, 70, 60, 73 ],
    money: 20
  },
  {
    ticket_ID: 174,
    shop_ID: 84,
    cahier_ID: 4,
    selectedNumbers: [ 30, 46, 68, 35, 76 ],
    money: 20
  },
  {
    ticket_ID: 175,
    shop_ID: 32,
    cahier_ID: 1,
    selectedNumbers: [ 14, 43, 40, 67, 70 ],
    money: 20
  },
  {
    ticket_ID: 176,
    shop_ID: 12,
    cahier_ID: 8,
    selectedNumbers: [ 8, 21, 23, 65, 21 ],
    money: 20
  },
  {
    ticket_ID: 177,
    shop_ID: 92,
    cahier_ID: 6,
    selectedNumbers: [ 44, 7, 27, 7, 73 ],
    money: 20
  },
  {
    ticket_ID: 178,
    shop_ID: 85,
    cahier_ID: 8,
    selectedNumbers: [ 9, 44, 75, 49, 69 ],
    money: 20
  },
  {
    ticket_ID: 179,
    shop_ID: 17,
    cahier_ID: 4,
    selectedNumbers: [ 9, 6, 60, 22, 54 ],
    money: 20
  },
  {
    ticket_ID: 180,
    shop_ID: 41,
    cahier_ID: 3,
    selectedNumbers: [ 72, 53, 55, 66, 15 ],
    money: 20
  },
  {
    ticket_ID: 181,
    shop_ID: 81,
    cahier_ID: 4,
    selectedNumbers: [ 14, 63, 18, 77, 10 ],
    money: 20
  },
  {
    ticket_ID: 182,
    shop_ID: 35,
    cahier_ID: 1,
    selectedNumbers: [ 70, 68, 19, 67, 37 ],
    money: 20
  },
  {
    ticket_ID: 183,
    shop_ID: 57,
    cahier_ID: 7,
    selectedNumbers: [ 65, 37, 5, 19, 40 ],
    money: 20
  },
  {
    ticket_ID: 184,
    shop_ID: 71,
    cahier_ID: 5,
    selectedNumbers: [ 19, 27, 28, 7, 64 ],
    money: 20
  },
  {
    ticket_ID: 185,
    shop_ID: 45,
    cahier_ID: 4,
    selectedNumbers: [ 62, 11, 14, 36, 32 ],
    money: 20
  },
  {
    ticket_ID: 186,
    shop_ID: 26,
    cahier_ID: 8,
    selectedNumbers: [ 4, 77, 71, 32, 48 ],
    money: 20
  },
  {
    ticket_ID: 187,
    shop_ID: 82,
    cahier_ID: 6,
    selectedNumbers: [ 62, 40, 47, 32, 49 ],
    money: 20
  },
  {
    ticket_ID: 188,
    shop_ID: 99,
    cahier_ID: 1,
    selectedNumbers: [ 1, 66, 34, 4, 70 ],
    money: 20
  },
  {
    ticket_ID: 189,
    shop_ID: 22,
    cahier_ID: 4,
    selectedNumbers: [ 1, 35, 31, 12, 75 ],
    money: 20
  },
  {
    ticket_ID: 190,
    shop_ID: 68,
    cahier_ID: 0,
    selectedNumbers: [ 80, 1, 42, 22, 76 ],
    money: 20
  },
  {
    ticket_ID: 191,
    shop_ID: 95,
    cahier_ID: 4,
    selectedNumbers: [ 50, 65, 31, 79, 14 ],
    money: 20
  },
  {
    ticket_ID: 192,
    shop_ID: 61,
    cahier_ID: 6,
    selectedNumbers: [ 71, 48, 58, 35, 52 ],
    money: 20
  },
  {
    ticket_ID: 193,
    shop_ID: 23,
    cahier_ID: 1,
    selectedNumbers: [ 51, 72, 2, 68, 70 ],
    money: 20
  },
  {
    ticket_ID: 194,
    shop_ID: 20,
    cahier_ID: 2,
    selectedNumbers: [ 42, 64, 42, 28, 15 ],
    money: 20
  },
  {
    ticket_ID: 195,
    shop_ID: 25,
    cahier_ID: 7,
    selectedNumbers: [ 5, 57, 16, 55, 53 ],
    money: 20
},
  {
    ticket_ID: 196,
    shop_ID: 83,
    cahier_ID: 5,
    selectedNumbers: [ 28, 36, 32, 32, 79 ],
    money: 20
  },
  {
    ticket_ID: 197,
    shop_ID: 42,
    cahier_ID: 8,
    selectedNumbers: [ 80, 69, 47, 45, 10 ],
    money: 20
  },
  {
    ticket_ID: 198,
    shop_ID: 99,
    cahier_ID: 0,
    selectedNumbers: [ 26, 53, 70, 3, 23 ],
    money: 20
  },
  {
    ticket_ID: 199,
    shop_ID: 95,
    cahier_ID: 3,
    selectedNumbers: [ 23, 76, 31, 14, 45 ],
    money: 20
  },
  {
    ticket_ID: 200,
    shop_ID: 67,
    cahier_ID: 1,
    selectedNumbers: [ 1, 70, 59, 71, 10 ],
    money: 20
  },
  {
    ticket_ID: 201,
    shop_ID: 24,
    cahier_ID: 1,
    selectedNumbers: [ 16, 41, 69, 25, 37 ],
    money: 20
  },
  {
    ticket_ID: 202,
    shop_ID: 42,
    cahier_ID: 5,
    selectedNumbers: [ 51, 57, 35, 31, 10 ],
    money: 20
  },
  {
    ticket_ID: 203,
    shop_ID: 46,
    cahier_ID: 6,
    selectedNumbers: [ 56, 58, 68, 49, 20 ],
    money: 20
  },
  {
    ticket_ID: 204,
    shop_ID: 78,
    cahier_ID: 5,
    selectedNumbers: [ 30, 44, 53, 39, 66 ],
    money: 20
  },
  {
    ticket_ID: 205,
    shop_ID: 11,
    cahier_ID: 9,
    selectedNumbers: [ 25, 18, 75, 14, 21 ],
    money: 20
  },
  {
    ticket_ID: 206,
    shop_ID: 82,
    cahier_ID: 9,
    selectedNumbers: [ 61, 10, 64, 65, 44 ],
    money: 20
  },
  {
    ticket_ID: 207,
    shop_ID: 55,
    cahier_ID: 6,
    selectedNumbers: [ 65, 37, 38, 7, 47 ],
    money: 20
  },
  {
    ticket_ID: 208,
    shop_ID: 41,
    cahier_ID: 5,
    selectedNumbers: [ 30, 63, 49, 36, 44 ],
    money: 20
  },
  {
    ticket_ID: 209,
    shop_ID: 82,
    cahier_ID: 1,
    selectedNumbers: [ 47, 46, 41, 29, 34 ],
    money: 20
  },
  {
    ticket_ID: 210,
    shop_ID: 64,
    cahier_ID: 8,
    selectedNumbers: [ 51, 23, 10, 73, 67 ],
    money: 20
  },
  {
    ticket_ID: 211,
    shop_ID: 6,
    cahier_ID: 4,
    selectedNumbers: [ 75, 75, 38, 29, 74 ],
    money: 20
  },
  {
    ticket_ID: 212,
    shop_ID: 2,
    cahier_ID: 2,
    selectedNumbers: [ 44, 18, 10, 48, 61 ],
    money: 20
  },
  {
    ticket_ID: 213,
    shop_ID: 19,
    cahier_ID: 6,
    selectedNumbers: [ 26, 34, 9, 78, 24 ],
    money: 20
  },
  {
    ticket_ID: 214,
    shop_ID: 13,
    cahier_ID: 1,
    selectedNumbers: [ 2, 4, 46, 6, 13 ],
    money: 20
  },
  {
    ticket_ID: 215,
    shop_ID: 19,
    cahier_ID: 7,
    selectedNumbers: [ 62, 17, 76, 21, 45 ],
    money: 20
  },
  {
    ticket_ID: 216,
    shop_ID: 42,
    cahier_ID: 1,
    selectedNumbers: [ 25, 61, 9, 68, 53 ],
    money: 20
  },
  {
    ticket_ID: 217,
    shop_ID: 84,
    cahier_ID: 8,
    selectedNumbers: [ 24, 18, 65, 55, 79 ],
    money: 20
  },
  {
    ticket_ID: 218,
    shop_ID: 79,
    cahier_ID: 2,
    selectedNumbers: [ 45, 33, 32, 37, 1 ],
    money: 20
  },
  {
    ticket_ID: 219,
    shop_ID: 76,
    cahier_ID: 7,
    selectedNumbers: [ 34, 67, 14, 80, 66 ],
    money: 20
  },
  {
    ticket_ID: 220,
    shop_ID: 3,
    cahier_ID: 8,
    selectedNumbers: [ 17, 50, 2, 77, 20 ],
    money: 20
  },
  {
    ticket_ID: 221,
    shop_ID: 32,
    cahier_ID: 1,
    selectedNumbers: [ 4, 71, 70, 13, 19 ],
    money: 20
  },
  {
    ticket_ID: 222,
    shop_ID: 30,
    cahier_ID: 5,
    selectedNumbers: [ 77, 41, 33, 66, 28 ],
    money: 20
  },
  {
    ticket_ID: 223,
    shop_ID: 25,
    cahier_ID: 1,
    selectedNumbers: [ 21, 48, 73, 76, 43 ],
    money: 20
  },
  {
    ticket_ID: 224,
    shop_ID: 20,
    cahier_ID: 4,
    selectedNumbers: [ 73, 52, 67, 55, 68 ],
    money: 20
  },
  {
    ticket_ID: 225,
    shop_ID: 11,
    cahier_ID: 9,
    selectedNumbers: [ 69, 76, 13, 54, 80 ],
    money: 20
  },
  {
    ticket_ID: 226,
    shop_ID: 31,
    cahier_ID: 6,
    selectedNumbers: [ 57, 13, 14, 58, 70 ],
    money: 20
  },
  {
    ticket_ID: 227,
    shop_ID: 8,
    cahier_ID: 6,
    selectedNumbers: [ 62, 20, 3, 54, 37 ],
    money: 20
  },
  {
    ticket_ID: 228,
    shop_ID: 20,
    cahier_ID: 8,
    selectedNumbers: [ 61, 29, 36, 34, 53 ],
    money: 20
  },
  {
    ticket_ID: 229,
    shop_ID: 86,
    cahier_ID: 9,
    selectedNumbers: [ 17, 70, 2, 64, 37 ],
    money: 20
  },
  {
    ticket_ID: 230,
    shop_ID: 91,
    cahier_ID: 0,
    selectedNumbers: [ 74, 44, 5, 76, 42 ],
    money: 20
  },
  {
    ticket_ID: 231,
    shop_ID: 58,
    cahier_ID: 3,
    selectedNumbers: [ 61, 54, 47, 64, 23 ],
    money: 20
  },
  {
    ticket_ID: 232,
    shop_ID: 47,
    cahier_ID: 1,
    selectedNumbers: [ 33, 58, 49, 12, 79 ],
    money: 20
  },
  {
    ticket_ID: 233,
    shop_ID: 7,
    cahier_ID: 6,
    selectedNumbers: [ 27, 49, 14, 1, 48 ],
    money: 20
  },
  {
    ticket_ID: 234,
    shop_ID: 96,
    cahier_ID: 5,
    selectedNumbers: [ 44, 70, 44, 10, 34 ],
    money: 20
  },
  {
    ticket_ID: 235,
    shop_ID: 98,
    cahier_ID: 0,
    selectedNumbers: [ 24, 26, 67, 27, 16 ],
    money: 20
  },
  {
    ticket_ID: 236,
    shop_ID: 32,
    cahier_ID: 1,
    selectedNumbers: [ 7, 26, 13, 37, 54 ],
    money: 20
  },
  {
    ticket_ID: 237,
    shop_ID: 69,
    cahier_ID: 8,
    selectedNumbers: [ 29, 15, 24, 11, 42 ],
    money: 20
  },
  {
    ticket_ID: 238,
    shop_ID: 76,
    cahier_ID: 2,
    selectedNumbers: [ 14, 8, 66, 10, 40 ],
    money: 20
  },
  {
    ticket_ID: 239,
    shop_ID: 75,
    cahier_ID: 9,
    selectedNumbers: [ 64, 40, 67, 56, 45 ],
    money: 20
  },
  {
    ticket_ID: 240,
    shop_ID: 29,
    cahier_ID: 5,
    selectedNumbers: [ 68, 49, 3, 36, 32 ],
    money: 20
  },
  {
    ticket_ID: 241,
    shop_ID: 83,
    cahier_ID: 2,
    selectedNumbers: [ 69, 53, 80, 23, 20 ],
    money: 20
  },
  {
    ticket_ID: 242,
    shop_ID: 53,
    cahier_ID: 0,
    selectedNumbers: [ 7, 12, 38, 50, 26 ],
    money: 20
  },
  {
    ticket_ID: 243,
    shop_ID: 20,
    cahier_ID: 4,
    selectedNumbers: [ 26, 15, 16, 38, 18 ],
    money: 20
  },
  {
    ticket_ID: 244,
    shop_ID: 17,
    cahier_ID: 0,
    selectedNumbers: [ 58, 63, 51, 2, 70 ],
    money: 20
  },
  {
    ticket_ID: 245,
    shop_ID: 34,
    cahier_ID: 4,
    selectedNumbers: [ 70, 24, 30, 72, 26 ],
    money: 20
  },
  {
    ticket_ID: 246,
    shop_ID: 50,
    cahier_ID:5,
    selectedNumbers: [ 35, 64, 28, 39, 72 ],
    money: 20
  },
  {
    ticket_ID: 247,
    shop_ID: 99,
    cahier_ID: 9,
    selectedNumbers: [ 27, 26, 42, 45, 79 ],
    money: 20
  },
  {
    ticket_ID: 248,
    shop_ID: 30,
    cahier_ID: 9,
    selectedNumbers: [ 47, 78, 10, 37, 72 ],
    money: 20
  },
  {
    ticket_ID: 249,
    shop_ID: 28,
    cahier_ID: 1,
    selectedNumbers: [ 29, 71, 56, 12, 58 ],
    money: 20
  },
  {
    ticket_ID: 250,
    shop_ID: 66,
    cahier_ID: 9,
    selectedNumbers: [ 21, 25, 35, 35, 20 ],
    money: 20
  },
  {
    ticket_ID: 251,
    shop_ID: 94,
    cahier_ID: 6,
    selectedNumbers: [ 51, 69, 70, 47, 7 ],
    money: 20
  },
  {
    ticket_ID: 252,
    shop_ID: 62,
    cahier_ID: 6,
    selectedNumbers: [ 57, 5, 70, 17, 11 ],
    money: 20
  },
  {
    ticket_ID: 253,
    shop_ID: 28,
    cahier_ID: 4,
    selectedNumbers: [ 62, 75, 67, 80, 56 ],
    money: 20
  },
  {
    ticket_ID: 254,
    shop_ID: 66,
    cahier_ID: 2,
    selectedNumbers: [ 4, 51, 9, 23, 58 ],
    money: 20
  },
  {
    ticket_ID: 255,
    shop_ID: 69,
    cahier_ID: 3,
    selectedNumbers: [ 30, 71, 18, 29, 66 ],
    money: 20
  },
  {
    ticket_ID: 256,
    shop_ID: 3,
    cahier_ID: 0,
    selectedNumbers: [ 5, 4, 25, 80, 59 ],
    money: 20
  },
  {
    ticket_ID: 257,
    shop_ID: 84,
    cahier_ID: 2,
    selectedNumbers: [ 41, 65, 74, 6, 12 ],
    money: 20
  },
  {
    ticket_ID: 258,
    shop_ID: 87,
    cahier_ID: 9,
    selectedNumbers: [ 66, 76, 72, 34, 32 ],
    money: 20
  },
  {
    ticket_ID: 259,
    shop_ID: 0,
    cahier_ID: 0,
    selectedNumbers: [ 41, 63, 4, 4, 30 ],
    money: 20
  },
  {
    ticket_ID: 260,
    shop_ID: 94,
    cahier_ID: 9,
    selectedNumbers: [ 79, 3, 24, 62, 6 ],
    money: 20
  },
  {
    ticket_ID: 261,
    shop_ID: 43,
    cahier_ID: 1,
    selectedNumbers: [ 37, 44, 49, 14, 8 ],
    money: 20
  },
  {
    ticket_ID: 262,
    shop_ID: 84,
    cahier_ID: 8,
    selectedNumbers: [ 50, 56, 63, 26, 27 ],
    money: 20
  },
  {
    ticket_ID: 263,
    shop_ID: 45,
    cahier_ID: 4,
    selectedNumbers: [ 1, 4, 40, 14, 1 ],
    money: 20
  },
  {
    ticket_ID: 264,
    shop_ID: 29,
    cahier_ID: 6,
    selectedNumbers: [ 27, 80, 63, 58, 22 ],
    money: 20
  },
  {
    ticket_ID: 265,
    shop_ID: 25,
    cahier_ID: 7,
    selectedNumbers: [ 71, 13, 5, 55, 3 ],
    money: 20
  },
  {
    ticket_ID: 266,
    shop_ID: 52,
    cahier_ID: 5,
    selectedNumbers: [ 9, 7, 47, 68, 42 ],
    money: 20
  },
  {
    ticket_ID: 267,
    shop_ID: 88,
    cahier_ID: 2,
    selectedNumbers: [ 44, 23, 50, 41, 13 ],
    money: 20
  },
  {
    ticket_ID: 268,
    shop_ID: 99,
    cahier_ID: 5,
    selectedNumbers: [ 43, 6, 77, 45, 74 ],
    money: 20
  },
  {
    ticket_ID: 269,
    shop_ID: 16,
    cahier_ID: 0,
    selectedNumbers: [ 67, 79, 47, 73, 30 ],
    money: 20
  },
  {
    ticket_ID: 270,
    shop_ID: 4,
    cahier_ID: 6,
    selectedNumbers: [ 49, 45, 31, 77, 80 ],
    money: 20
  },
  {
    ticket_ID: 271,
    shop_ID: 0,
    cahier_ID: 3,
    selectedNumbers: [ 10, 5, 38, 58, 44 ],
    money: 20
  },
  {
    ticket_ID: 272,
    shop_ID: 58,
    cahier_ID: 9,
    selectedNumbers: [ 2, 37, 30, 55, 19 ],
    money: 20
  },
  {
    ticket_ID: 273,
    shop_ID: 38,
    cahier_ID: 3,
    selectedNumbers: [ 35, 16, 56, 61, 67 ],
    money: 20
  },
  {
    ticket_ID: 274,
    shop_ID: 18,
    cahier_ID: 7,
    selectedNumbers: [ 5, 58, 56, 72, 45 ],
    money: 20
  },
  {
    ticket_ID: 275,
    shop_ID: 26,
    cahier_ID: 2,
    selectedNumbers: [ 48, 67, 47, 5, 61 ],
    money: 20
  },
  {
    ticket_ID: 276,
    shop_ID: 88,
    cahier_ID: 0,
    selectedNumbers: [ 9, 62, 59, 27, 70 ],
    money: 20
  },
  {
    ticket_ID: 277,
    shop_ID: 83,
    cahier_ID: 6,
    selectedNumbers: [ 41, 46, 53, 20, 9 ],
    money: 20
  },
  {
    ticket_ID: 278,
    shop_ID: 73,
    cahier_ID: 1,
    selectedNumbers: [ 54, 56, 43, 16, 77 ],
    money: 20
  },
  {
    ticket_ID: 279,
    shop_ID: 40,
    cahier_ID: 7,
    selectedNumbers: [ 78, 49, 56, 4, 71 ],
    money: 20
  },
  {
    ticket_ID: 280,
    shop_ID: 47,
    cahier_ID: 3,
    selectedNumbers: [ 24, 28, 4, 53, 15 ],
    money: 20
  },
  {
    ticket_ID: 281,
    shop_ID: 62,
    cahier_ID: 3,
    selectedNumbers: [ 5, 45, 22, 18, 16 ],
    money: 20
  },
  {
    ticket_ID: 282,
    shop_ID: 61,
    cahier_ID: 6,
    selectedNumbers: [ 15, 8, 1, 76, 36 ],
    money: 20
  },
  {
    ticket_ID: 283,
    shop_ID: 53,
    cahier_ID: 9,
    selectedNumbers: [ 50, 13, 14, 76, 5 ],
    money: 20
  },
  {
    ticket_ID: 284,
    shop_ID: 81,
    cahier_ID: 7,
    selectedNumbers: [ 7, 29, 25, 10, 62 ],
    money: 20
  },
  {
    ticket_ID: 285,
    shop_ID: 70,
    cahier_ID: 8,
    selectedNumbers: [ 39, 29, 69, 13, 80 ],
    money: 20
  },
  {
    ticket_ID: 286,
    shop_ID: 58,
    cahier_ID: 8,
    selectedNumbers: [ 10, 69, 44, 15, 18 ],
    money: 20
  },
  {
    ticket_ID: 287,
    shop_ID: 0,
    cahier_ID: 2,
    selectedNumbers: [ 46, 1, 52, 31, 42 ],
    money: 20
  },
  {
    ticket_ID: 288,
    shop_ID: 85,
    cahier_ID: 5,
    selectedNumbers: [ 18, 78, 35, 4, 63 ],
    money: 20
  },
  {
    ticket_ID: 289,
    shop_ID: 36,
    cahier_ID: 5,
    selectedNumbers: [ 33, 15, 39, 68, 75 ],
    money: 20
  },
  {
    ticket_ID: 290,
    shop_ID: 41,
    cahier_ID: 9,
    selectedNumbers: [ 30, 72, 16, 9, 74 ],
    money: 20
  },
  {
    ticket_ID: 291,
    shop_ID: 95,
    cahier_ID: 7,
    selectedNumbers: [ 14, 44, 21, 16, 59 ],
    money: 20
  },
  {
    ticket_ID: 292,
    shop_ID: 32,
    cahier_ID: 8,
    selectedNumbers: [ 4, 70, 71, 80, 16 ],
    money: 20
  },
  {
    ticket_ID: 293,
    shop_ID: 41,
    cahier_ID: 7,
    selectedNumbers: [ 43, 9, 51, 35, 62 ],
    money: 20
  },
  {
    ticket_ID: 294,
    shop_ID: 73,
    cahier_ID: 8,
    selectedNumbers: [ 64, 58, 40, 32, 33 ],
    money: 20
  },
  {
    ticket_ID: 295,
    shop_ID: 70,
    cahier_ID: 2,
    selectedNumbers: [ 11, 64, 61, 3, 16 ],
    money: 20
  },
  {
    ticket_ID: 296,
    shop_ID: 81,
    cahier_ID: 7,
    selectedNumbers: [ 41, 78, 66, 70, 35 ],
    money: 20
  },
  {
    ticket_ID: 297,
    shop_ID: 69,
    cahier_ID: 2,
    selectedNumbers: [ 23, 64, 64, 63, 75 ],
    money: 20
  },
  {
    ticket_ID: 298,
    shop_ID: 13,
    cahier_ID: 3,
    selectedNumbers: [ 59, 7, 10, 76, 1 ],
    money: 20
  },
  {
    ticket_ID: 299,
    shop_ID: 73,
    cahier_ID: 3,
    selectedNumbers: [ 45, 57, 59, 41, 57 ],
    money: 20
  },
  {
    ticket_ID: 300,
    shop_ID: 33,
    cahier_ID: 7,
    selectedNumbers: [ 75, 80, 38, 37, 6 ],
    money: 20
  },{
    ticket_ID: 301,
    shop_ID: 51,
    cahier_ID: 9,
    selectedNumbers: [ 62, 64, 48, 68, 36 ],
    money: 20
  },
  {
    ticket_ID: 302,
    shop_ID: 1,
    cahier_ID: 0,
    selectedNumbers: [ 43, 64, 79, 25, 7 ],
    money: 20
  },
  {
    ticket_ID: 303,
    shop_ID: 26,
    cahier_ID: 6,
    selectedNumbers: [ 9, 73, 45, 62, 52 ],
    money: 20
  },
  {
    ticket_ID: 304,
    shop_ID: 14,
    cahier_ID: 4,
    selectedNumbers: [ 28, 27, 5, 24, 4 ],
    money: 20
  },
  {
    ticket_ID: 305,
    shop_ID: 51,
    cahier_ID: 4,
    selectedNumbers: [ 14, 17, 38, 74, 25 ],
    money: 20
  },
  {
    ticket_ID: 306,
    shop_ID: 79,
    cahier_ID: 5,
    selectedNumbers: [ 34, 64, 5, 34, 16 ],
    money: 20
  },
  {
    ticket_ID: 307,
    shop_ID: 36,
    cahier_ID: 3,
    selectedNumbers: [ 61, 2, 72, 38, 63 ],
    money: 20
  },
  {
    ticket_ID: 308,
    shop_ID: 30,
    cahier_ID: 0,
    selectedNumbers: [ 71, 3, 26, 14, 73 ],
    money: 20
  },
  {
    ticket_ID: 309,
    shop_ID: 10,
    cahier_ID: 5,
    selectedNumbers: [ 5, 47, 41, 76, 65 ],
    money: 20
  },
  {
    ticket_ID: 310,
    shop_ID: 48,
    cahier_ID: 9,
    selectedNumbers: [ 80, 33, 8, 41, 73 ],
    money: 20
  },
  {
    ticket_ID: 311,
    shop_ID: 44,
    cahier_ID: 2,
    selectedNumbers: [ 53, 48, 28, 50, 59 ],
    money: 20
  },
  {
    ticket_ID: 312,
    shop_ID: 96,
    cahier_ID: 0,
    selectedNumbers: [ 50, 15, 2, 72, 69 ],
    money: 20
  },
  {
    ticket_ID: 313,
    shop_ID: 74,
    cahier_ID: 8,
    selectedNumbers: [ 29, 22, 14, 36, 18 ],
    money: 20
  },
  {
    ticket_ID: 314,
    shop_ID: 45,
    cahier_ID: 3,
    selectedNumbers: [ 72, 22, 41, 46, 28 ],
    money: 20
  },
  {
    ticket_ID: 315,
    shop_ID: 49,
    cahier_ID: 1,
    selectedNumbers: [ 69, 63, 6, 54, 61 ],
    money: 20
  },
  {
    ticket_ID: 316,
    shop_ID: 84,
    cahier_ID: 8,
    selectedNumbers: [ 59, 35, 79, 51, 42 ],
    money: 20
  },
  {
    ticket_ID: 317,
    shop_ID: 72,
    cahier_ID: 2,
    selectedNumbers: [ 6, 15, 78, 52, 33 ],
    money: 20
  },
  {
    ticket_ID: 318,
    shop_ID: 50,
    cahier_ID: 7,
    selectedNumbers: [ 24, 19, 62, 74, 32 ],
    money: 20
  },
  {
    ticket_ID: 319,
    shop_ID: 6,
    cahier_ID: 6,
    selectedNumbers: [ 53, 51, 59, 80, 68 ],
    money: 20
  },
  {
    ticket_ID: 320,
    shop_ID: 20,
    cahier_ID: 5,
    selectedNumbers: [ 35, 17, 52, 64, 33 ],
    money: 20
  },
  {
    ticket_ID: 321,
    shop_ID: 44,
    cahier_ID: 2,
    selectedNumbers: [ 72, 5, 50, 72, 55 ],
    money: 20
  },
  {
    ticket_ID: 322,
    shop_ID: 13,
    cahier_ID: 5,
    selectedNumbers: [ 48, 40, 59, 19, 44 ],
    money: 20
  },
  {
    ticket_ID: 323,
    shop_ID: 46,
    cahier_ID: 7,
    selectedNumbers: [ 69, 34, 20, 14, 75 ],
    money: 20
  },
  {
    ticket_ID: 324,
    shop_ID: 69,
    cahier_ID: 7,
    selectedNumbers: [ 51, 23, 40, 68, 14 ],
    money: 20
  },
  {
    ticket_ID: 325,
    shop_ID: 66,
    cahier_ID: 3,
    selectedNumbers: [ 64, 68, 44, 56, 75 ],
    money: 20
  },
  {
    ticket_ID: 326,
    shop_ID: 54,
    cahier_ID: 0,
    selectedNumbers: [ 20, 61, 64, 61, 14 ],
    money: 20
  },
  {
    ticket_ID: 327,
    shop_ID: 22,
    cahier_ID: 3,
    selectedNumbers: [ 42, 39, 78, 3, 70 ],
    money: 20
  },
  {
    ticket_ID: 328,
    shop_ID: 29,
    cahier_ID: 8,
    selectedNumbers: [ 67, 2, 40, 79, 46 ],
    money: 20
  },
  {
    ticket_ID: 329,
    shop_ID: 39,
    cahier_ID: 8,
    selectedNumbers: [ 9, 61, 56, 32, 57 ],
    money: 20
  },
  {
    ticket_ID: 330,
    shop_ID: 8,
    cahier_ID: 7,
    selectedNumbers: [ 25, 72, 11, 18, 43 ],
    money: 20
  },
  {
    ticket_ID: 331,
    shop_ID: 70,
    cahier_ID: 5,
    selectedNumbers: [ 79, 31, 44, 12, 25 ],
    money: 20
  },
  {
    ticket_ID: 332,
    shop_ID: 48,
    cahier_ID: 0,
    selectedNumbers: [ 49, 24, 43, 79, 14 ],
    money: 20
  },
  {
    ticket_ID: 333,
    shop_ID: 81,
    cahier_ID: 2,
    selectedNumbers: [ 76, 78, 39, 67, 28 ],
    money: 20
  },
  {
    ticket_ID: 334,
    shop_ID: 25,
    cahier_ID: 8,
    selectedNumbers: [ 64, 26, 7, 79, 29 ],
    money: 20
  },
  {
    ticket_ID: 335,
    shop_ID: 90,
    cahier_ID: 1,
    selectedNumbers: [ 38, 11, 25, 75, 55 ],
    money: 20
  },
  {
    ticket_ID: 336,
    shop_ID: 53,
    cahier_ID: 5,
    selectedNumbers: [ 12, 9, 22, 26, 58 ],
    money: 20
  },
  {
    ticket_ID: 337,
    shop_ID: 25,
    cahier_ID: 5,
selectedNumbers: [ 11, 22, 60, 52, 49 ],
    money: 20
  },
  {
    ticket_ID: 338,
    shop_ID: 75,
    cahier_ID: 9,
    selectedNumbers: [ 73, 37, 25, 12, 25 ],
    money: 20
  },
  {
    ticket_ID: 339,
    shop_ID: 55,
    cahier_ID: 6,
    selectedNumbers: [ 4, 65, 27, 70, 64 ],
    money: 20
  },
  {
    ticket_ID: 340,
    shop_ID: 59,
    cahier_ID: 2,
    selectedNumbers: [ 21, 10, 76, 66, 6 ],
    money: 20
  },
  {
    ticket_ID: 341,
    shop_ID: 37,
    cahier_ID: 0,
    selectedNumbers: [ 54, 26, 73, 66, 10 ],
    money: 20
  },
  {
    ticket_ID: 342,
    shop_ID: 32,
    cahier_ID: 6,
    selectedNumbers: [ 41, 20, 10, 59, 18 ],
    money: 20
  },
  {
    ticket_ID: 343,
    shop_ID: 28,
    cahier_ID: 0,
    selectedNumbers: [ 70, 49, 33, 30, 18 ],
    money: 20
  },
  {
    ticket_ID: 344,
    shop_ID: 9,
    cahier_ID: 1,
    selectedNumbers: [ 64, 74, 78, 75, 13 ],
    money: 20
  },
  {
    ticket_ID: 345,
    shop_ID: 91,
    cahier_ID: 1,
    selectedNumbers: [ 22, 79, 67, 67, 29 ],
    money: 20
  },
  {
    ticket_ID: 346,
    shop_ID: 5,
    cahier_ID: 9,
    selectedNumbers: [ 44, 44, 70, 48, 44 ],
    money: 20
  },
  {
    ticket_ID: 347,
    shop_ID: 25,
    cahier_ID: 3,
    selectedNumbers: [ 10, 42, 79, 56, 32 ],
    money: 20
  },
  {
    ticket_ID: 348,
    shop_ID: 66,
    cahier_ID: 3,
    selectedNumbers: [ 69, 11, 30, 12, 23 ],
    money: 20
  },
  {
    ticket_ID: 349,
    shop_ID: 19,
    cahier_ID: 3,
    selectedNumbers: [ 46, 34, 34, 20, 78 ],
    money: 20
  },
  {
    ticket_ID: 350,
    shop_ID: 19,
    cahier_ID: 1,
    selectedNumbers: [ 23, 46, 79, 64, 8 ],
    money: 20
  },
  {
    ticket_ID: 351,
    shop_ID: 46,
    cahier_ID: 8,
    selectedNumbers: [ 24, 57, 79, 23, 52 ],
    money: 20
  },
  {
    ticket_ID: 352,
    shop_ID: 55,
    cahier_ID: 6,
    selectedNumbers: [ 49, 51, 52, 60, 9 ],
    money: 20
  },
  {
    ticket_ID: 353,
    shop_ID: 96,
    cahier_ID: 0,
    selectedNumbers: [ 1, 66, 60, 68, 39 ],
    money: 20
  },
  {
    ticket_ID: 354,
    shop_ID: 80,
    cahier_ID: 9,
    selectedNumbers: [ 72, 31, 43, 64, 46 ],
    money: 20
  },
  {
    ticket_ID: 355,
    shop_ID: 5,
    cahier_ID: 9,
    selectedNumbers: [ 4, 20, 20, 56, 3 ],
    money: 20
  },
  {
    ticket_ID: 356,
    shop_ID: 4,
    cahier_ID: 9,
    selectedNumbers: [ 2, 42, 25, 71, 4 ],
    money: 20
  },
  {
    ticket_ID: 357,
    shop_ID: 13,
    cahier_ID: 8,
    selectedNumbers: [ 51, 12, 64, 28, 8 ],
    money: 20
  },
  {
    ticket_ID: 358,
    shop_ID: 63,
    cahier_ID: 6,
    selectedNumbers: [ 66, 24, 40, 10, 6 ],
    money: 20
  },
  {
    ticket_ID: 359,
    shop_ID: 21,
    cahier_ID: 7,
    selectedNumbers: [ 3, 76, 56, 48, 72 ],
    money: 20
  },
  {
    ticket_ID: 360,
    shop_ID: 72,
    cahier_ID: 7,
    selectedNumbers: [ 51, 32, 75, 12, 3 ],
    money: 20
  },
  {
    ticket_ID: 361,
    shop_ID: 71,
    cahier_ID: 0,
    selectedNumbers: [ 54, 59, 34, 49, 56 ],
    money: 20
  },
  {
    ticket_ID: 362,
    shop_ID: 82,
    cahier_ID: 2,
    selectedNumbers: [ 69, 74, 12, 6, 26 ],
    money: 20
  },
  {
    ticket_ID: 363,
    shop_ID: 80,
    cahier_ID: 2,
    selectedNumbers: [ 7, 55, 46, 17, 70 ],
    money: 20
  },
  {
    ticket_ID: 364,
    shop_ID: 99,
    cahier_ID: 5,
    selectedNumbers: [ 16, 46, 78, 42, 9 ],
    money: 20
  },
  {
    ticket_ID: 365,
    shop_ID: 60,
    cahier_ID: 2,
    selectedNumbers: [ 21, 70, 1, 6, 55 ],
    money: 20
  },
  {
    ticket_ID: 366,
    shop_ID: 16,
    cahier_ID: 4,
    selectedNumbers: [ 15, 31, 49, 46, 16 ],
    money: 20
  },
  {
    ticket_ID: 367,
    shop_ID: 41,
    cahier_ID: 0,
    selectedNumbers: [ 6, 45, 20, 29, 64 ],
    money: 20
  },
  {
    ticket_ID: 368,
    shop_ID: 84,
    cahier_ID: 2,
    selectedNumbers: [ 35, 80, 55, 28, 9 ],
    money: 20
  },
  {
    ticket_ID: 369,
    shop_ID: 64,
    cahier_ID: 9,
    selectedNumbers: [ 71, 59, 12, 4, 1 ],
    money: 20
  },
  {
    ticket_ID: 370,
    shop_ID: 88,
    cahier_ID: 4,
    selectedNumbers: [ 49, 1, 12, 67, 14 ],
    money: 20
  },
  {
    ticket_ID: 371,
    shop_ID: 59,
    cahier_ID: 8,
    selectedNumbers: [ 41, 20, 26, 44, 46 ],
    money: 20
  },
  {
    ticket_ID: 372,
    shop_ID: 18,
    cahier_ID: 6,
    selectedNumbers: [ 32, 73, 19, 66, 69 ],
    money: 20
  },
  {
    ticket_ID: 373,
    shop_ID: 60,
    cahier_ID: 9,
    selectedNumbers: [ 70, 72, 57, 40, 12 ],
    money: 20
  },
  {
    ticket_ID: 374,
    shop_ID: 87,
    cahier_ID: 2,
    selectedNumbers: [ 14, 74, 24, 3,42 ],
    money: 20
  },
  {
    ticket_ID: 375,
    shop_ID: 47,
    cahier_ID: 8,
    selectedNumbers: [ 36, 60, 29, 18, 5 ],
    money: 20
  },
  {
    ticket_ID: 376,
    shop_ID: 20,
    cahier_ID: 4,
    selectedNumbers: [ 67, 45, 8, 48, 66 ],
    money: 20
  },
  {
    ticket_ID: 377,
    shop_ID: 68,
    cahier_ID: 8,
    selectedNumbers: [ 35, 38, 23, 42, 27 ],
    money: 20
  },
  {
    ticket_ID: 378,
    shop_ID: 20,
    cahier_ID: 9,
    selectedNumbers: [ 25, 52, 43, 23, 22 ],
    money: 20
  },
  {
    ticket_ID: 379,
    shop_ID: 47,
    cahier_ID: 6,
    selectedNumbers: [ 74, 3, 30, 71, 76 ],
    money: 20
  },
  {
    ticket_ID: 380,
    shop_ID: 42,
    cahier_ID: 2,
    selectedNumbers: [ 69, 44, 39, 43, 80 ],
    money: 20
  },
  {
    ticket_ID: 381,
    shop_ID: 8,
    cahier_ID: 2,
    selectedNumbers: [ 51, 72, 14, 57, 39 ],
    money: 20
  },
  {
    ticket_ID: 382,
    shop_ID: 0,
    cahier_ID: 4,
    selectedNumbers: [ 21, 52, 68, 13, 47 ],
    money: 20
  },
  {
    ticket_ID: 383,
    shop_ID: 27,
    cahier_ID: 3,
    selectedNumbers: [ 24, 5, 68, 45, 19 ],
    money: 20
  },
  {
    ticket_ID: 384,
    shop_ID: 9,
    cahier_ID: 1,
    selectedNumbers: [ 66, 24, 49, 15, 39 ],
    money: 20
  },
  {
    ticket_ID: 385,
    shop_ID: 73,
    cahier_ID: 6,
    selectedNumbers: [ 19, 26, 75, 9, 27 ],
    money: 20
  },
  {
    ticket_ID: 386,
    shop_ID: 95,
    cahier_ID: 6,
    selectedNumbers: [ 32, 54, 7, 13, 80 ],
    money: 20
  },
  {
    ticket_ID: 387,
    shop_ID: 39,
    cahier_ID: 3,
    selectedNumbers: [ 24, 74, 68, 59, 21 ],
    money: 20
  },
  {
    ticket_ID: 388,
    shop_ID: 77,
    cahier_ID: 2,
    selectedNumbers: [ 61, 6, 77, 31, 12 ],
    money: 20
  },
  {
    ticket_ID: 389,
    shop_ID: 17,
    cahier_ID: 0,
    selectedNumbers: [ 22, 39, 53, 34, 6 ],
    money: 20
  },
  {
    ticket_ID: 390,
    shop_ID: 24,
    cahier_ID: 5,
    selectedNumbers: [ 71, 61, 27, 41, 43 ],
    money: 20
  },
  {
    ticket_ID: 391,
    shop_ID: 31,
    cahier_ID: 3,
    selectedNumbers: [ 47, 7, 7, 56, 28 ],
    money: 20
  },
  {
    ticket_ID: 392,
    shop_ID: 47,
    cahier_ID: 1,
    selectedNumbers: [ 44, 63, 42, 40, 68 ],
    money: 20
  },
  {
    ticket_ID: 393,
    shop_ID: 14,
    cahier_ID: 3,
    selectedNumbers: [ 43, 64, 66, 40, 36 ],
    money: 20
  },
  {
    ticket_ID: 394,
    shop_ID: 7,
    cahier_ID: 4,
    selectedNumbers: [ 5, 71, 41, 53, 30 ],
    money: 20
  },
  {
    ticket_ID: 395,
    shop_ID: 65,
    cahier_ID: 9,
    selectedNumbers: [ 1, 40, 74, 66, 28 ],
    money: 20
  },
  {
    ticket_ID: 396,
    shop_ID: 71,
    cahier_ID: 6,
    selectedNumbers: [ 4, 35, 24, 53, 64 ],
    money: 20
  },
  {
    ticket_ID: 397,
    shop_ID: 89,
    cahier_ID: 9,
    selectedNumbers: [ 47, 31, 22, 71, 19 ],
    money: 20
  },
  {
    ticket_ID: 398,
    shop_ID: 3,
    cahier_ID: 3,
    selectedNumbers: [ 8, 13, 9, 68, 41 ],
    money: 20
  },
  {
    ticket_ID: 399,
    shop_ID: 39,
    cahier_ID: 1,
    selectedNumbers: [ 46, 10, 75, 19, 14 ],
    money: 20
  },
  {
    ticket_ID: 400,
    shop_ID: 94,
    cahier_ID: 8,
    selectedNumbers: [ 46, 29, 79, 17, 56 ],
    money: 20
  },
  {
    ticket_ID: 401,
    shop_ID: 74,
    cahier_ID: 8,
    selectedNumbers: [ 39, 44, 78, 12, 3 ],
    money: 20
  },
  {
    ticket_ID: 402,
    shop_ID: 18,
    cahier_ID: 2,
    selectedNumbers: [ 59, 66, 29, 40, 17 ],
    money: 20
  },
  {
    ticket_ID: 403,
    shop_ID: 35,
    cahier_ID: 7,
    selectedNumbers: [ 54, 50, 50, 20, 1 ],
    money: 20
  },
  {
    ticket_ID: 404,
    shop_ID: 23,
    cahier_ID: 4,
    selectedNumbers: [ 38, 20, 80, 69, 72 ],
    money: 20
  },
  {
    ticket_ID: 405,
    shop_ID: 47,
    cahier_ID: 1,
    selectedNumbers: [ 19, 69, 50, 34, 33 ],
    money: 20
  },
  {
    ticket_ID: 406,
    shop_ID: 3,
    cahier_ID: 8,
    selectedNumbers: [ 53, 60, 8, 78, 45 ],
    money: 20
  },
  {
    ticket_ID: 407,
    shop_ID: 7,
    cahier_ID: 6,
    selectedNumbers: [ 69, 31, 3, 66, 61 ],
    money: 20
  },
  {
    ticket_ID: 408,
    shop_ID: 39,
    cahier_ID: 3,
    selectedNumbers: [ 14, 59, 35, 37, 17 ],
    money: 20
  },
  {
    ticket_ID: 409,
    shop_ID: 51,
    cahier_ID: 1,
    selectedNumbers: [ 78, 25, 10, 10, 27 ],
    money: 20
  },
  {
    ticket_ID: 410,
    shop_ID: 92,
    cahier_ID: 8,
    selectedNumbers: [ 49, 8, 56, 3, 79 ],
    money: 20
  },
  {
    ticket_ID: 411,
    shop_ID: 76,
    cahier_ID: 4,
    selectedNumbers: [ 47, 38, 23, 9, 25 ],
    money: 20
  },
  {
    ticket_ID: 412,
    shop_ID: 53,
    cahier_ID: 4,
    selectedNumbers: [ 12, 28, 7, 59, 6 ],
    money: 20
  },
  {
    ticket_ID: 413,
    shop_ID: 55,
    cahier_ID: 3,
    selectedNumbers: [ 31, 3, 47, 73, 3 ],
    money: 20
  },
  {
    ticket_ID: 414,
    shop_ID: 29,
    cahier_ID: 8,
    selectedNumbers: [ 68, 26, 27, 8, 47 ],
    money: 20
  },
  {
    ticket_ID: 415,
    shop_ID: 4,
    cahier_ID: 9,
    selectedNumbers: [ 73, 2, 67, 71, 70 ],
    money: 20
  },
  {
    ticket_ID: 416,
    shop_ID: 72,
    cahier_ID: 2,
    selectedNumbers: [ 7, 32, 66, 76, 71 ],
    money: 20
  },
  {
    ticket_ID: 417,
    shop_ID: 59,
    cahier_ID: 7,
    selectedNumbers: [ 65, 61, 32, 72, 17 ],
    money: 20
  },
  {
    ticket_ID: 418,
    shop_ID: 54,
    cahier_ID: 3,
    selectedNumbers: [ 34, 52, 45, 31, 73 ],
    money: 20
  },
  {
    ticket_ID: 419,
    shop_ID: 39,
    cahier_ID: 8,
    selectedNumbers: [ 42, 28, 26, 66, 73 ],
    money: 20
  },
  {
    ticket_ID: 420,
    shop_ID: 44,
    cahier_ID: 3,
    selectedNumbers: [ 61, 67, 15, 49, 78 ],
    money: 20
  },
  {
    ticket_ID: 421,
    shop_ID: 7,
    cahier_ID: 4,
    selectedNumbers: [ 41, 28, 40, 23, 58 ],
    money: 20
  },
  {
    ticket_ID: 422,
    shop_ID: 90,
    cahier_ID: 0,
    selectedNumbers: [ 4, 19, 48, 47, 52 ],
    money: 20
  },
  {
    ticket_ID: 423,
    shop_ID: 48,
    cahier_ID: 7,
    selectedNumbers: [ 27, 47, 80, 62, 79 ],
    money: 20
  },
  {
    ticket_ID: 424,
    shop_ID: 39,
    cahier_ID: 5,
    selectedNumbers: [ 77, 34, 27, 43, 39 ],
    money: 20
  },
  {
    ticket_ID: 425,
    shop_ID: 88,
    cahier_ID: 9,
    selectedNumbers: [ 60, 54, 60, 42, 22 ],
    money: 20
  },
  {
    ticket_ID: 426,
    shop_ID: 6,
    cahier_ID: 1,
    selectedNumbers: [ 6, 30, 62, 56, 44 ],
    money: 20
  },
  {
    ticket_ID: 427,
    shop_ID: 80,
    cahier_ID: 5,
    selectedNumbers: [ 8, 65, 76, 11, 27 ],
    money: 20
  },
  {
    ticket_ID: 428,
    shop_ID: 41,
    cahier_ID: 6,
    selectedNumbers: [ 30, 16, 33, 79, 67 ],
    money: 20
  },
  {
    ticket_ID: 429,
    shop_ID: 91,
    cahier_ID: 4,
    selectedNumbers: [ 55, 21, 30, 79, 1 ],
    money: 20
  },
  {
    ticket_ID: 430,
    shop_ID: 86,
    cahier_ID: 5,
    selectedNumbers: [ 41, 72, 32, 12, 28 ],
    money: 20
  },
  {
    ticket_ID: 431,
    shop_ID: 65,
    cahier_ID: 3,
    selectedNumbers: [ 58, 22, 3, 5, 58 ],
    money: 20
  },
  {
    ticket_ID: 432,
    shop_ID: 34,
    cahier_ID: 1,
    selectedNumbers: [ 4, 63, 41, 26, 35 ],
    money: 20
  },
  {
    ticket_ID: 433,
    shop_ID: 10,
    cahier_ID: 0,
    selectedNumbers: [ 35, 54, 32, 54, 63 ],
    money: 20
  },
  {
    ticket_ID: 434,
    shop_ID: 27,
    cahier_ID: 6,
    selectedNumbers: [ 74, 68, 63, 62, 67 ],
    money: 20
  },
  {
    ticket_ID: 435,
    shop_ID: 86,
    cahier_ID: 0,
    selectedNumbers: [ 66, 64, 29, 57, 16 ],
    money: 20
  },
  {
    ticket_ID: 436,
    shop_ID: 93,
    cahier_ID: 0,
    selectedNumbers: [ 14, 21, 63, 35, 74 ],
    money: 20
  },
  {
    ticket_ID: 437,
    shop_ID: 76,
    cahier_ID: 6,
    selectedNumbers: [ 72, 70, 34, 19, 27 ],
    money: 20
  },
  {
    ticket_ID: 438,
    shop_ID: 77,
    cahier_ID: 4,
    selectedNumbers: [ 24, 10, 40, 74, 44 ],
    money: 20
  },
  {
    ticket_ID: 439,
    shop_ID: 73,
    cahier_ID: 6,
    selectedNumbers: [ 42, 33, 49, 5, 51 ],
    money: 20
  },
  {
    ticket_ID: 440,
    shop_ID: 90,
    cahier_ID: 1,
    selectedNumbers: [ 54, 61, 6, 10, 61 ],
    money: 20
  },
  {
    ticket_ID: 441,
    shop_ID: 61,
    cahier_ID: 3,
    selectedNumbers: [ 29, 40, 20, 6, 55 ],
    money: 20
  },
  {
    ticket_ID: 442,
    shop_ID: 61,
    cahier_ID: 3,
    selectedNumbers: [ 47, 2, 43, 70, 39 ],
    money: 20
  },
  {
    ticket_ID: 443,
    shop_ID: 86,
    cahier_ID: 8,
    selectedNumbers: [ 28, 55, 4, 12, 66 ],
    money: 20
  },
  {
    ticket_ID: 444,
shop_ID: 37,
    cahier_ID: 1,
    selectedNumbers: [ 23, 72, 44, 13, 31 ],
    money: 20
  },
  {
    ticket_ID: 445,
    shop_ID: 45,
    cahier_ID: 0,
    selectedNumbers: [ 1, 35, 52, 50, 13 ],
    money: 20
  },
  {
    ticket_ID: 446,
    shop_ID: 32,
    cahier_ID: 6,
    selectedNumbers: [ 14, 77, 54, 50, 33 ],
    money: 20
  },
  {
    ticket_ID: 447,
    shop_ID: 6,
    cahier_ID: 6,
    selectedNumbers: [ 8, 12, 73, 20, 18 ],
    money: 20
  },
  {
    ticket_ID: 448,
    shop_ID: 67,
    cahier_ID: 9,
    selectedNumbers: [ 24, 25, 5, 78, 64 ],
    money: 20
  },
  {
    ticket_ID: 449,
    shop_ID: 55,
    cahier_ID: 5,
    selectedNumbers: [ 31, 80, 48, 42, 55 ],
    money: 20
  },
  {
    ticket_ID: 450,
    shop_ID: 68,
    cahier_ID: 6,
    selectedNumbers: [ 69, 36, 67, 61, 6 ],
    money: 20
  },
  {
    ticket_ID: 451,
    shop_ID: 2,
    cahier_ID: 1,
    selectedNumbers: [ 11, 23, 47, 78, 24 ],
    money: 20
  },
  {
    ticket_ID: 452,
    shop_ID: 36,
    cahier_ID: 6,
    selectedNumbers: [ 49, 60, 1, 47, 2 ],
    money: 20
  },
  {
    ticket_ID: 453,
    shop_ID: 30,
    cahier_ID: 9,
    selectedNumbers: [ 54, 1, 64, 58, 79 ],
    money: 20
  },
  {
    ticket_ID: 454,
    shop_ID: 91,
    cahier_ID: 2,
    selectedNumbers: [ 14, 57, 22, 11, 52 ],
    money: 20
  },
  {
    ticket_ID: 455,
    shop_ID: 6,
    cahier_ID: 3,
    selectedNumbers: [ 1, 3, 32, 45, 12 ],
    money: 20
  },
  {
    ticket_ID: 456,
    shop_ID: 96,
    cahier_ID: 4,
    selectedNumbers: [ 80, 71, 69, 5, 15 ],
    money: 20
  },
  {
    ticket_ID: 457,
    shop_ID: 20,
    cahier_ID: 4,
    selectedNumbers: [ 41, 71, 40, 79, 42 ],
    money: 20
  },
  {
    ticket_ID: 458,
    shop_ID: 80,
    cahier_ID: 9,
    selectedNumbers: [ 74, 48, 61, 79, 76 ],
    money: 20
  },
  {
    ticket_ID: 459,
    shop_ID: 28,
    cahier_ID: 7,
    selectedNumbers: [ 54, 71, 50, 73, 9 ],
    money: 20
  },
  {
    ticket_ID: 460,
    shop_ID: 6,
    cahier_ID: 1,
    selectedNumbers: [ 78, 70, 40, 72, 79 ],
    money: 20
  },
  {
    ticket_ID: 461,
    shop_ID: 42,
    cahier_ID: 0,
    selectedNumbers: [ 41, 29, 25, 40, 50 ],
    money: 20
  },
  {
    ticket_ID: 462,
    shop_ID: 60,
    cahier_ID: 8,
    selectedNumbers: [ 16, 37, 48, 79, 64 ],
    money: 20
  },
  {
    ticket_ID: 463,
    shop_ID: 50,
    cahier_ID: 0,
    selectedNumbers: [ 31, 69, 17, 14, 11 ],
    money: 20
  },
  {
    ticket_ID: 464,
    shop_ID: 1,
    cahier_ID: 3,
    selectedNumbers: [ 67, 53, 31, 60, 18 ],
    money: 20
  },
  {
    ticket_ID: 465,
    shop_ID: 92,
    cahier_ID: 7,
    selectedNumbers: [ 54, 53, 32, 27, 70 ],
    money: 20
  },
  {
    ticket_ID: 466,
    shop_ID: 56,
    cahier_ID: 7,
    selectedNumbers: [ 20, 52, 29, 32, 20 ],
    money: 20
  },
  {
    ticket_ID: 467,
    shop_ID: 6,
    cahier_ID: 0,
    selectedNumbers: [ 41, 72, 51, 13, 54 ],
    money: 20
  },
  {
    ticket_ID: 468,
    shop_ID: 29,
    cahier_ID: 8,
    selectedNumbers: [ 56, 69, 5, 20, 37 ],
    money: 20
  },
  {
    ticket_ID: 469,
    shop_ID: 65,
    cahier_ID: 5,
    selectedNumbers: [ 45, 22, 72, 45, 63 ],
    money: 20
  },
  {
    ticket_ID: 470,
    shop_ID: 57,
    cahier_ID: 2,
    selectedNumbers: [ 31, 41, 5, 71, 72 ],
    money: 20
  },
  {
    ticket_ID: 471,
    shop_ID: 11,
    cahier_ID: 5,
    selectedNumbers: [ 38, 53, 37, 66, 31 ],
    money: 20
  },
  {
    ticket_ID: 472,
    shop_ID: 85,
    cahier_ID: 0,
    selectedNumbers: [ 37, 71, 49, 63, 15 ],
    money: 20
  },
  {
    ticket_ID: 473,
    shop_ID: 65,
    cahier_ID: 4,
    selectedNumbers: [ 18, 62, 56, 5, 14 ],
    money: 20
  },
  {
    ticket_ID: 474,
    shop_ID: 22,
    cahier_ID: 4,
    selectedNumbers: [ 18, 30, 10, 13, 69 ],
    money: 20
  },
  {
    ticket_ID: 475,
    shop_ID: 90,
    cahier_ID: 4,
    selectedNumbers: [ 1, 61, 42, 78, 8 ],
    money: 20
  },
  {
    ticket_ID: 476,
    shop_ID: 15,
    cahier_ID: 6,
    selectedNumbers: [ 42, 49, 80, 80, 24 ],
    money: 20
  },
  {
    ticket_ID: 477,
    shop_ID: 71,
    cahier_ID: 4,
    selectedNumbers: [ 5, 54, 23, 51, 80 ],
    money: 20
  },
  {
    ticket_ID: 478,
    shop_ID: 1,
    cahier_ID: 7,
    selectedNumbers: [ 46, 57, 74, 60, 71 ],
    money: 20
  },
  {
    ticket_ID: 479,
    shop_ID: 9,
    cahier_ID: 6,
    selectedNumbers: [ 64, 32, 15, 59, 74 ],
    money: 20
  },
  {
    ticket_ID: 480,
    shop_ID: 50,
    cahier_ID: 8,
    selectedNumbers: [ 63, 75, 23, 76, 58 ],
    money: 20
  },
  {
    ticket_ID: 481,
    shop_ID: 87,
    cahier_ID: 2,
    selectedNumbers: [ 77, 47, 38, 54, 66 ],
    money: 20
  },
  {
    ticket_ID: 482,
    shop_ID: 81,
    cahier_ID: 6,
    selectedNumbers: [ 28, 66, 77, 71, 56 ],
    money: 20
  },
  {
    ticket_ID: 483,
    shop_ID: 14,
    cahier_ID: 6,
    selectedNumbers: [ 80, 50, 30, 54, 31 ],
    money: 20
  },
  {
    ticket_ID: 484,
    shop_ID: 41,
    cahier_ID: 5,
    selectedNumbers: [ 79, 35, 35, 10, 37 ],
    money: 20
  },
  {
    ticket_ID: 485,
    shop_ID: 13,
    cahier_ID: 9,
    selectedNumbers: [ 69, 1, 13, 14, 31 ],
    money: 20
  },
  {
    ticket_ID: 486,
    shop_ID: 42,
    cahier_ID: 7,
    selectedNumbers: [ 72, 40, 38, 54, 55 ],
    money: 20
  },
  {
    ticket_ID: 487,
    shop_ID: 45,
    cahier_ID: 9,
    selectedNumbers: [ 58, 25, 64, 79, 23 ],
    money: 20
  },
  {
    ticket_ID: 488,
    shop_ID: 71,
    cahier_ID: 1,
    selectedNumbers: [ 43, 76, 48, 9, 48 ],
    money: 20
  },
  {
    ticket_ID: 489,
    shop_ID: 58,
    cahier_ID: 7,
    selectedNumbers: [ 17, 46, 43, 53, 55 ],
    money: 20
  },
  {
    ticket_ID: 490,
    shop_ID: 92,
    cahier_ID: 9,
    selectedNumbers: [ 79, 58, 65, 74, 72 ],
    money: 20
  },
  {
    ticket_ID: 491,
    shop_ID: 0,
    cahier_ID: 0,
    selectedNumbers: [ 37, 41, 9, 72, 62 ],
    money: 20
  },
  {
    ticket_ID: 492,
    shop_ID: 25,
    cahier_ID: 2,
    selectedNumbers: [ 7, 23, 42, 24, 14 ],
    money: 20
  },
  {
    ticket_ID: 493,
    shop_ID: 58,
    cahier_ID: 6,
    selectedNumbers: [ 79, 41, 31, 28, 64 ],
    money: 20
  },
  {
    ticket_ID: 494,
    shop_ID: 25,
    cahier_ID: 4,
    selectedNumbers: [ 40, 32, 64, 74, 17 ],
    money: 20
  },
  {
    ticket_ID: 495,
    shop_ID: 44,
    cahier_ID: 1,
    selectedNumbers: [ 56, 68, 13, 38, 24 ],
    money: 20
  },
  {
    ticket_ID: 496,
    shop_ID: 18,
    cahier_ID: 8,
    selectedNumbers: [ 48, 54, 40, 20, 20 ],
    money: 20
  },
  {
    ticket_ID: 497,
    shop_ID: 24,
    cahier_ID: 8,
    selectedNumbers: [ 28, 19, 38, 12, 7 ],
    money: 20
  },
  {
    ticket_ID: 498,
    shop_ID: 70,
    cahier_ID: 3,
    selectedNumbers: [ 13, 59, 45, 7, 19 ],
    money: 20
  },
  {
    ticket_ID: 499,
    shop_ID: 44,
    cahier_ID: 0,
    selectedNumbers: [ 61, 65, 28, 23, 27 ],
    money: 20
  },
  {
    ticket_ID: 500,
    shop_ID: 35,
    cahier_ID: 2,
    selectedNumbers: [ 18, 37, 39, 40, 46 ],
    money: 20
  },
  {
    ticket_ID: 501,
    shop_ID: 73,
    cahier_ID: 0,
    selectedNumbers: [ 36, 57, 65, 6, 43 ],
    money: 20
  },
  {
    ticket_ID: 502,
    shop_ID: 34,
    cahier_ID: 8,
    selectedNumbers: [ 35, 57, 80, 45, 24 ],
    money: 20
  },
  {
    ticket_ID: 503,
    shop_ID: 2,
    cahier_ID: 7,
    selectedNumbers: [ 60, 24, 46, 52, 70 ],
    money: 20
  },
  {
    ticket_ID: 504,
    shop_ID: 58,
    cahier_ID: 5,
    selectedNumbers: [ 15, 44, 63, 47, 64 ],
    money: 20
  },
  {
    ticket_ID: 505,
    shop_ID: 45,
    cahier_ID: 7,
    selectedNumbers: [ 51, 37, 62, 35, 51 ],
    money: 20
  },
  {
    ticket_ID: 506,
    shop_ID: 37,
    cahier_ID: 4,
    selectedNumbers: [ 50, 12, 62, 71, 53 ],
    money: 20
  },
  {
    ticket_ID: 507,
    shop_ID: 80,
    cahier_ID: 2,
    selectedNumbers: [ 61, 8, 31, 31, 72 ],
    money: 20
  },
  {
    ticket_ID: 508,
    shop_ID: 73,
    cahier_ID: 0,
    selectedNumbers: [ 78, 56, 41, 41, 22 ],
    money: 20
  },
  {
    ticket_ID: 509,
    shop_ID: 45,
    cahier_ID: 7,
    selectedNumbers: [ 80, 62, 27, 72, 42 ],
    money: 20
  },
  {
    ticket_ID: 510,
    shop_ID: 62,
    cahier_ID: 6,
    selectedNumbers: [ 78, 20, 37, 19, 33 ],
    money: 20
  },
  {
    ticket_ID: 511,
    shop_ID: 70,
    cahier_ID: 2,
    selectedNumbers: [ 7, 78, 77, 64, 53 ],
    money: 20
  },
  {
    ticket_ID: 512,
    shop_ID: 94,
    cahier_ID: 1,
    selectedNumbers: [ 33, 54, 24, 22, 34 ],
    money: 20
  },
  {
    ticket_ID: 513,
    shop_ID: 93,
    cahier_ID: 2,
    selectedNumbers: [ 35, 67, 38, 5, 29 ],
    money: 20
  },
  {
    ticket_ID: 514,
    shop_ID: 32,
    cahier_ID: 7,
    selectedNumbers: [ 29, 58, 12, 28, 51 ],
    money: 20
  },
  {
    ticket_ID: 515,
    shop_ID: 41,
    cahier_ID: 5,
    selectedNumbers: [ 69, 72, 5, 70, 45 ],
    money: 20
  },
  {
    ticket_ID: 516,
    shop_ID: 29,
    cahier_ID: 5,
    selectedNumbers: [ 37, 78, 1, 56, 46 ],
    money: 20
  },
  {
    ticket_ID: 517,
    shop_ID: 33,
    cahier_ID: 2,
    selectedNumbers: [ 30, 17, 48, 75, 59 ],
    money: 20
  },
  {
    ticket_ID: 518,
    shop_ID: 43,
    cahier_ID: 4,
    selectedNumbers: [ 23, 30, 37, 51, 45 ],
    money: 20
  },
  {
    ticket_ID: 519,
    shop_ID: 34,
    cahier_ID: 0,
    selectedNumbers: [ 62, 29, 17, 47, 80 ],
    money: 20
  },
  {
    ticket_ID: 520,
    shop_ID: 90,
    cahier_ID: 7,
    selectedNumbers: [ 54, 21, 19, 10, 52 ],
    money: 20
  },
  {
    ticket_ID: 521,
    shop_ID: 30,
    cahier_ID: 9,
    selectedNumbers: [ 60, 20, 41, 3, 5 ],
    money: 20
  },
  {
    ticket_ID: 522,
    shop_ID: 98,
    cahier_ID: 4,
    selectedNumbers: [ 53, 22, 30, 71, 67 ],
    money: 20
  },
  {
    ticket_ID: 523,
    shop_ID: 47,
    cahier_ID: 0,
    selectedNumbers: [ 28, 7, 52, 37, 33 ],
    money: 20
  },
  {
    ticket_ID: 524,
    shop_ID: 64,
    cahier_ID: 3,
    selectedNumbers: [ 21, 61, 44, 55, 5 ],
    money: 20
  },
  {
    ticket_ID: 525,
    shop_ID: 87,
    cahier_ID: 2,
    selectedNumbers: [ 59, 79, 26, 17, 20 ],
    money: 20
  },
  {
    ticket_ID: 526,
    shop_ID: 5,
    cahier_ID: 3,
    selectedNumbers: [ 15, 45, 3, 70, 44 ],
    money: 20
  },
  {
    ticket_ID: 527,
    shop_ID: 93,
    cahier_ID: 4,
    selectedNumbers: [ 16, 29, 6, 9, 33 ],
    money: 20
  },
  {
    ticket_ID: 528,
    shop_ID: 13,
    cahier_ID: 0,
    selectedNumbers: [ 59, 43, 45, 1, 56 ],
    money: 20
  },
  {
    ticket_ID: 529,
    shop_ID: 2,
    cahier_ID: 7,
    selectedNumbers: [ 25, 11, 1, 45, 34 ],
    money: 20
  },
  {
    ticket_ID: 530,
    shop_ID: 43,
    cahier_ID: 9,
    selectedNumbers: [ 22, 49, 36, 68, 80 ],
    money: 20
  },
  {
    ticket_ID: 531,
    shop_ID: 87,
    cahier_ID: 7,
    selectedNumbers: [ 5, 54, 55, 62, 25 ],
    money: 20
  },
  {
    ticket_ID: 532,
    shop_ID: 61,
    cahier_ID: 7,
    selectedNumbers: [ 19, 75, 80, 20, 58 ],
    money: 20
  },
  {
    ticket_ID: 533,
    shop_ID: 77,
    cahier_ID: 6,
    selectedNumbers: [ 46, 39, 22, 47, 70 ],
    money: 20
  },
  {
    ticket_ID: 534,
    shop_ID: 19,
    cahier_ID: 3,
    selectedNumbers: [ 55, 58, 58, 14, 79 ],
    money: 20
  },
  {
    ticket_ID: 535,
    shop_ID: 53,
    cahier_ID: 0,
    selectedNumbers: [ 75, 35, 57, 38, 31 ],
    money: 20
  },
  {
    ticket_ID: 536,
    shop_ID: 91,
    cahier_ID: 0,
    selectedNumbers: [ 65, 23, 14, 45, 62 ],
    money: 20
  },
  {
    ticket_ID: 537,
    shop_ID: 49,
    cahier_ID: 2,
    selectedNumbers: [ 79, 14, 75, 59, 32 ],
    money: 20
  },
  {
    ticket_ID: 538,
    shop_ID: 20,
  cahier_ID: 6,
    selectedNumbers: [ 3, 26, 19, 61, 26 ],
    money: 20
  },
  {
    ticket_ID: 539,
    shop_ID: 48,
    cahier_ID: 4,
    selectedNumbers: [ 64, 33, 22, 52, 39 ],
    money: 20
  },
  {
    ticket_ID: 540,
    shop_ID: 17,
    cahier_ID: 0,
    selectedNumbers: [ 24, 68, 74, 59, 20 ],
    money: 20
  },
  {
    ticket_ID: 541,
    shop_ID: 46,
    cahier_ID: 7,
    selectedNumbers: [ 77, 35, 18, 21, 68 ],
    money: 20
  },
  {
    ticket_ID: 542,
    shop_ID: 54,
    cahier_ID: 7,
    selectedNumbers: [ 51, 30, 8, 18, 55 ],
    money: 20
  },
  {
    ticket_ID: 543,
    shop_ID: 63,
    cahier_ID: 4,
    selectedNumbers: [ 38, 38, 63, 41, 44 ],
    money: 20
  },
  {
    ticket_ID: 544,
    shop_ID: 70,
    cahier_ID: 1,
    selectedNumbers: [ 46, 9, 5, 73, 58 ],
    money: 20
  },
  {
    ticket_ID: 545,
    shop_ID: 39,
    cahier_ID: 5,
    selectedNumbers: [ 43, 58, 56, 25, 64 ],
    money: 20
  },
  {
    ticket_ID: 546,
    shop_ID: 19,
    cahier_ID: 5,
    selectedNumbers: [ 37, 64, 53, 35, 62 ],
    money: 20
  },
  {
    ticket_ID: 547,
    shop_ID: 14,
    cahier_ID: 0,
    selectedNumbers: [ 74, 3, 11, 37, 53 ],
    money: 20
  },
  {
    ticket_ID: 548,
    shop_ID: 0,
    cahier_ID: 4,
    selectedNumbers: [ 1, 75, 67, 78, 34 ],
    money: 20
  },
  {
    ticket_ID: 549,
    shop_ID: 29,
    cahier_ID: 9,
    selectedNumbers: [ 15, 55, 39, 27, 58 ],
    money: 20
  },
  {
    ticket_ID: 550,
    shop_ID: 90,
    cahier_ID: 2,
    selectedNumbers: [ 24, 29, 8, 6, 45 ],
    money: 20
  },
  {
    ticket_ID: 551,
    shop_ID: 35,
    cahier_ID: 3,
    selectedNumbers: [ 48, 61, 77, 22, 74 ],
    money: 20
  },
  {
    ticket_ID: 552,
    shop_ID: 72,
    cahier_ID: 3,
    selectedNumbers: [ 39, 76, 45, 76, 12 ],
    money: 20
  },
  {
    ticket_ID: 553,
    shop_ID: 25,
    cahier_ID: 9,
    selectedNumbers: [ 3, 25, 59, 23, 79 ],
    money: 20
  },
  {
    ticket_ID: 554,
    shop_ID: 57,
    cahier_ID: 3,
    selectedNumbers: [ 17, 64, 45, 40, 39 ],
    money: 20
  },
  {
    ticket_ID: 555,
    shop_ID: 48,
    cahier_ID: 8,
    selectedNumbers: [ 60, 67, 61, 29, 55 ],
    money: 20
  },
  {
    ticket_ID: 556,
    shop_ID: 9,
    cahier_ID: 0,
    selectedNumbers: [ 73, 18, 51, 51, 3 ],
    money: 20
},
  {
    ticket_ID: 557,
    shop_ID: 51,
    cahier_ID: 0,
    selectedNumbers: [ 2, 43, 19, 75, 77 ],
    money: 20
  },
  {
    ticket_ID: 558,
    shop_ID: 33,
    cahier_ID: 3,
    selectedNumbers: [ 9, 52, 46, 77, 73 ],
    money: 20
  },
  {
    ticket_ID: 559,
    shop_ID: 86,
    cahier_ID: 9,
    selectedNumbers: [ 21, 54, 67, 66, 17 ],
    money: 20
  },
  {
    ticket_ID: 560,
    shop_ID: 73,
    cahier_ID: 3,
    selectedNumbers: [ 23, 56, 56, 4, 33 ],
    money: 20
  },
  {
    ticket_ID: 561,
    shop_ID: 76,
    cahier_ID: 7,
    selectedNumbers: [ 49, 78, 23, 30, 51 ],
    money: 20
  },
  {
    ticket_ID: 562,
    shop_ID: 73,
    cahier_ID: 4,
    selectedNumbers: [ 26, 49, 78, 40, 67 ],
    money: 20
  },
  {
    ticket_ID: 563,
    shop_ID: 82,
    cahier_ID: 7,
    selectedNumbers: [ 53, 5, 22, 18, 8 ],
    money: 20
  },
  {
    ticket_ID: 564,
    shop_ID: 5,
    cahier_ID: 8,
    selectedNumbers: [ 78, 71, 54, 9, 65 ],
    money: 20
  },
  {
    ticket_ID: 565,
    shop_ID: 99,
    cahier_ID: 5,
    selectedNumbers: [ 9, 74, 66, 12, 70 ],
    money: 20
  },
  {
    ticket_ID: 566,
    shop_ID: 86,
    cahier_ID: 3,
    selectedNumbers: [ 1, 69, 17, 2, 80 ],
    money: 20
  },
  {
    ticket_ID: 567,
    shop_ID: 66,
    cahier_ID: 2,
    selectedNumbers: [ 51, 23, 25, 33, 28 ],
    money: 20
  },
  {
    ticket_ID: 568,
    shop_ID: 58,
    cahier_ID: 3,
    selectedNumbers: [ 71, 44, 26, 20, 21 ],
    money: 20
  },
  {
    ticket_ID: 569,
    shop_ID: 10,
    cahier_ID: 8,
    selectedNumbers: [ 69, 42, 29, 46, 20 ],
    money: 20
  },
  {
    ticket_ID: 570,
    shop_ID: 73,
    cahier_ID: 1,
    selectedNumbers: [ 45, 62, 54, 41, 54 ],
    money: 20
  },
  {
    ticket_ID: 571,
    shop_ID: 13,
    cahier_ID: 5,
    selectedNumbers: [ 8, 59, 43, 52, 34 ],
    money: 20
  },
  {
    ticket_ID: 572,
    shop_ID: 77,
    cahier_ID: 4,
    selectedNumbers: [ 1, 27, 69, 56, 65 ],
    money: 20
  },
  {
    ticket_ID: 573,
    shop_ID: 43,
    cahier_ID: 1,
    selectedNumbers: [ 70, 41, 35, 30, 41 ],
    money: 20
  },
  {
    ticket_ID: 574,
    shop_ID: 38,
    cahier_ID: 4,
    selectedNumbers: [ 79, 80, 72, 65, 33 ],
    money: 20
  },
  {
    ticket_ID: 575,
    shop_ID: 64,
    cahier_ID: 4,
    selectedNumbers: [ 23, 70, 73, 45, 45 ],
    money: 20
  },
  {
    ticket_ID: 576,
    shop_ID: 1,
    cahier_ID: 1,
    selectedNumbers: [ 72, 71, 75, 22, 4 ],
    money: 20
  },
  {
    ticket_ID: 577,
    shop_ID: 57,
    cahier_ID: 9,
    selectedNumbers: [ 43, 51, 79, 64, 40 ],
    money: 20
  },
  {
    ticket_ID: 578,
    shop_ID: 30,
    cahier_ID: 3,
    selectedNumbers: [ 44, 49, 21, 2, 16 ],
    money: 20
  },
  {
    ticket_ID: 579,
    shop_ID: 85,
    cahier_ID: 4,
    selectedNumbers: [ 61, 39, 26, 46, 12 ],
    money: 20
  },
  {
    ticket_ID: 580,
    shop_ID: 21,
    cahier_ID: 7,
    selectedNumbers: [ 27, 75, 61, 73, 77 ],
    money: 20
  },
  {
    ticket_ID: 581,
    shop_ID: 78,
    cahier_ID: 2,
    selectedNumbers: [ 13, 16, 51, 32, 39 ],
    money: 20
  },
  {
    ticket_ID: 582,
    shop_ID: 44,
    cahier_ID: 1,
    selectedNumbers: [ 36, 1, 68, 55, 40 ],
    money: 20
  },
  {
    ticket_ID: 583,
    shop_ID: 16,
    cahier_ID: 2,
    selectedNumbers: [ 70, 76, 70, 34, 50 ],
    money: 20
  },
  {
    ticket_ID: 584,
    shop_ID: 81,
    cahier_ID: 4,
    selectedNumbers: [ 14, 44, 7, 16, 27 ],
    money: 20
  },
  {
    ticket_ID: 585,
    shop_ID: 61,
    cahier_ID: 7,
    selectedNumbers: [ 25, 42, 68, 74, 3 ],
    money: 20
  },
  {
    ticket_ID: 586,
    shop_ID: 10,
    cahier_ID: 8,
    selectedNumbers: [ 73, 32, 51, 9, 30 ],
    money: 20
  },
  {
    ticket_ID: 587,
    shop_ID: 25,
    cahier_ID: 3,
    selectedNumbers: [ 24, 48, 69, 50, 66 ],
    money: 20
  },
  {
    ticket_ID: 588,
    shop_ID: 22,
    cahier_ID: 1,
    selectedNumbers: [ 54, 29, 4, 63, 63 ],
    money: 20
  },
  {
    ticket_ID: 589,
    shop_ID: 35,
    cahier_ID: 1,
    selectedNumbers: [ 13, 3, 22, 74, 73 ],
    money: 20
  },
  {
    ticket_ID: 590,
    shop_ID: 88,
    cahier_ID: 9,
    selectedNumbers: [ 54, 1, 31, 48, 48 ],
    money: 20
  },
  {
    ticket_ID: 591,
    shop_ID: 53,
    cahier_ID: 3,
    selectedNumbers: [ 45, 24, 74, 33, 40 ],
    money: 20
  },
  {
    ticket_ID: 592,
    shop_ID: 98,
    cahier_ID: 1,
    selectedNumbers: [ 3, 46, 3, 69, 58 ],
    money: 20
  },
  {
    ticket_ID: 593,
    shop_ID: 49,
    cahier_ID: 0,
    selectedNumbers: [ 69, 3, 48, 11, 38 ],
    money: 20
  },
  {
    ticket_ID: 594,
    shop_ID: 73,
    cahier_ID: 6,
    selectedNumbers: [ 1, 80, 79, 5, 25 ],
    money: 20
  },
  {
    ticket_ID: 595,
    shop_ID: 77,
    cahier_ID: 6,
    selectedNumbers: [ 64, 1, 74, 26, 6 ],
    money: 20
  },
  {
    ticket_ID: 596,
    shop_ID: 23,
    cahier_ID: 2,
    selectedNumbers: [ 21, 76, 6, 30, 15 ],
    money: 20
  },
  {
    ticket_ID: 597,
    shop_ID: 2,
    cahier_ID: 6,
    selectedNumbers: [ 59, 45, 51, 68, 32 ],
    money: 20
  },
  {
    ticket_ID: 598,
    shop_ID: 86,
    cahier_ID: 8,
    selectedNumbers: [ 71, 45, 72, 45, 7 ],
    money: 20
  },
  {
    ticket_ID: 599,
    shop_ID: 65,
    cahier_ID: 5,
    selectedNumbers: [ 77, 76, 47, 66, 58 ],
    money: 20
  },
  {
    ticket_ID: 600,
    shop_ID: 24,
    cahier_ID: 6,
    selectedNumbers: [ 14, 72, 49, 44, 59 ],
    money: 20
  },
  {
    ticket_ID: 601,
    shop_ID: 28,
    cahier_ID: 1,
    selectedNumbers: [ 73, 78, 43, 46, 38 ],
    money: 20
  },
  {
    ticket_ID: 602,
    shop_ID: 87,
    cahier_ID: 9,
    selectedNumbers: [ 42, 79, 75, 76, 35 ],
    money: 20
  },
  {
    ticket_ID: 603,
    shop_ID: 47,
    cahier_ID: 7,
    selectedNumbers: [ 22, 54, 80, 28, 38 ],
    money: 20
  },
  {
    ticket_ID: 604,
    shop_ID: 17,
    cahier_ID: 3,
    selectedNumbers: [ 35, 75, 41, 69, 69 ],
    money: 20
  },
  {
    ticket_ID: 605,
    shop_ID: 41,
    cahier_ID: 0,
    selectedNumbers: [ 45, 78, 52, 42, 37 ],
    money: 20
  },
  {
    ticket_ID: 606,
    shop_ID: 27,
    cahier_ID: 0,
    selectedNumbers: [ 41, 24, 62, 21, 59 ],
    money: 20
  },
  {
    ticket_ID: 607,
    shop_ID: 72,
    cahier_ID: 1,
    selectedNumbers: [ 50, 24, 59, 53, 63 ],
    money: 20
  },
  {
    ticket_ID: 608,
    shop_ID: 90,
    cahier_ID: 3,
    selectedNumbers: [ 8, 5, 27, 75, 56 ],
    money: 20
  },
  {
    ticket_ID: 609,
    shop_ID: 84,
    cahier_ID: 2,
    selectedNumbers: [ 41, 23, 28, 46, 36 ],
    money: 20
  },
  {
    ticket_ID: 610,
    shop_ID: 13,
    cahier_ID: 1,
    selectedNumbers: [ 29, 13, 22, 72, 59 ],
    money: 20
  },
  {
    ticket_ID: 611,
    shop_ID: 35,
    cahier_ID: 1,
    selectedNumbers: [ 20, 27, 47, 53, 23 ],
    money: 20
  },
  {
    ticket_ID: 612,
    shop_ID: 0,
    cahier_ID: 8,
    selectedNumbers: [ 66, 66, 61, 6, 21 ],
    money: 20
  },
  {
    ticket_ID: 613,
    shop_ID: 2,
    cahier_ID: 2,
    selectedNumbers: [ 6, 17, 68, 66, 72 ],
    money: 20
  },
  {
    ticket_ID: 614,
    shop_ID: 39,
    cahier_ID: 8,
    selectedNumbers: [ 43, 18, 20, 51, 29 ],
    money: 20
  },
  {
    ticket_ID: 615,
    shop_ID: 91,
    cahier_ID: 3,
    selectedNumbers: [ 57, 55, 43, 47, 14 ],
    money: 20
  },
  {
    ticket_ID: 616,
    shop_ID: 55,
    cahier_ID: 3,
    selectedNumbers: [ 14, 71, 80, 60, 39 ],
    money: 20
  },
  {
    ticket_ID: 617,
    shop_ID: 26,
    cahier_ID: 4,
    selectedNumbers: [ 79, 74, 22, 45, 60 ],
    money: 20
  },
  {
    ticket_ID: 618,
    shop_ID: 95,
    cahier_ID: 6,
    selectedNumbers: [ 65, 74, 5, 60, 79 ],
    money: 20
  },
  {
    ticket_ID: 619,
    shop_ID: 78,
    cahier_ID: 7,
    selectedNumbers: [ 54, 39, 40, 3, 66 ],
    money: 20
  },
  {
    ticket_ID: 620,
    shop_ID: 43,
    cahier_ID: 6,
    selectedNumbers: [ 74, 8, 27, 49, 28 ],
    money: 20
  },
  {
    ticket_ID: 621,
    shop_ID: 89,
    cahier_ID: 7,
    selectedNumbers: [ 37, 45, 6, 42, 62 ],
    money: 20
  },
  {
    ticket_ID: 622,
    shop_ID: 81,
    cahier_ID: 9,
    selectedNumbers: [ 50, 24, 58, 12, 70 ],
    money: 20
  },
  {
    ticket_ID: 623,
    shop_ID: 98,
    cahier_ID: 8,
    selectedNumbers: [ 18, 7, 58, 20, 39 ],
    money: 20
  },
  {
    ticket_ID: 624,
    shop_ID: 75,
    cahier_ID: 8,
    selectedNumbers: [ 80, 30, 65, 72, 27 ],
    money: 20
  },
  {
    ticket_ID: 625,
    shop_ID: 82,
    cahier_ID: 1,
    selectedNumbers: [ 45, 55, 49, 70, 1 ],
    money: 20
  },
  {
    ticket_ID: 626,
    shop_ID: 52,
    cahier_ID: 5,
    selectedNumbers: [ 39, 76, 53, 72, 67 ],
    money: 20
  },
  {
    ticket_ID: 627,
    shop_ID: 90,
    cahier_ID: 9,
    selectedNumbers: [ 1, 38, 3, 21, 1 ],
    money: 20
  },
  {
    ticket_ID: 628,
    shop_ID: 19,
    cahier_ID: 7,
    selectedNumbers: [ 57, 15, 10, 32, 39 ],
    money: 20
  },
  {
    ticket_ID: 629,
    shop_ID: 81,
    cahier_ID: 8,
    selectedNumbers: [ 45, 58, 71, 62, 37 ],
    money: 20
  },
  {
    ticket_ID: 630,
    shop_ID: 1,
    cahier_ID: 1,
    selectedNumbers: [ 22, 1, 26, 56, 3 ],
    money: 20
  },
  {
    ticket_ID: 631,
    shop_ID: 93,
    cahier_ID: 2,
    selectedNumbers: [ 33, 60, 39, 77, 42 ],
    money: 20
  },
  {
    ticket_ID: 632,
    shop_ID: 8,
    cahier_ID: 0,
    selectedNumbers: [ 28, 55, 1, 3, 16 ],
    money: 20
  },
  {
    ticket_ID: 633,
    shop_ID: 99,
    cahier_ID: 7,
    selectedNumbers: [ 77, 43, 72, 16, 53 ],
    money: 20
  },
  {
    ticket_ID: 634,
    shop_ID: 8,
    cahier_ID: 4,
    selectedNumbers: [ 55, 2, 56, 42, 65 ],
    money: 20
  },
  {
    ticket_ID: 635,
    shop_ID: 66,
    cahier_ID: 0,
    selectedNumbers: [ 50, 20, 42, 38, 66 ],
    money: 20
  },
  {
    ticket_ID: 636,
    shop_ID: 58,
    cahier_ID: 3,
    selectedNumbers: [ 61, 34, 17, 3, 75 ],
    money: 20
  },
  {
    ticket_ID: 637,
    shop_ID: 48,
    cahier_ID: 4,
    selectedNumbers: [ 4, 18, 14, 37, 69 ],
    money: 20
  },
  {
    ticket_ID: 638,
    shop_ID: 85,
    cahier_ID: 4,
    selectedNumbers: [ 37, 10, 16, 48, 15 ],
    money: 20
  },
  {
    ticket_ID: 639,
    shop_ID: 1,
    cahier_ID: 0,
    selectedNumbers: [ 48, 62, 70, 12, 44 ],
    money: 20
  },
  {
    ticket_ID: 640,
    shop_ID: 50,
    cahier_ID: 8,
    selectedNumbers: [ 6, 29, 55, 12, 58 ],
    money: 20
  },
  {
    ticket_ID: 641,
    shop_ID: 85,
    cahier_ID: 1,
    selectedNumbers: [ 21, 77, 30, 44, 27 ],
    money: 20
  },
  {
    ticket_ID: 642,
    shop_ID: 26,
    cahier_ID: 2,
    selectedNumbers: [ 9, 42, 5, 32, 70 ],
    money: 20
  },
  {
    ticket_ID: 643,
    shop_ID: 2,
    cahier_ID: 2,
    selectedNumbers: [ 3, 63, 58, 52, 69 ],
    money: 20
  },
  {
    ticket_ID: 644,
    shop_ID: 43,
    cahier_ID: 6,
    selectedNumbers: [ 72, 49, 58, 51, 54 ],
    money: 20
  },
  {
    ticket_ID: 645,
    shop_ID: 45,
    cahier_ID: 6,
    selectedNumbers: [ 76, 30, 78, 21, 2 ],
    money: 20
  },
  {
    ticket_ID: 646,
    shop_ID: 4,
    cahier_ID: 3,
    selectedNumbers: [ 53, 18, 53, 44, 33 ],
    money: 20
  },
  {
    ticket_ID: 647,
    shop_ID: 45,
    cahier_ID: 9,
    selectedNumbers: [ 25, 72, 31, 47, 41 ],
    money: 20
  },
  {
    ticket_ID: 648,
    shop_ID: 85,
    cahier_ID: 7,
    selectedNumbers: [ 70, 26, 28, 72, 25 ],
    money: 20
  },
  {
    ticket_ID: 649,
    shop_ID: 69,
    cahier_ID: 9,
    selectedNumbers: [ 5, 9, 9, 6, 22 ],
    money: 20
  },
  {
    ticket_ID: 650,
    shop_ID: 64,
    cahier_ID: 3,
    selectedNumbers: [ 56, 80, 14, 66, 23 ],
    money: 20
  },
  {
    ticket_ID: 651,
    shop_ID: 35,
    cahier_ID: 5,
    selectedNumbers: [ 52, 72, 73, 7, 38 ],
    money: 20
  },
  {
    ticket_ID: 652,
    shop_ID: 85,
    cahier_ID: 9,
    selectedNumbers: [ 2, 33, 72, 33, 24 ],
    money: 20
  },
  {
    ticket_ID: 653,
    shop_ID: 3,
    cahier_ID: 2,
    selectedNumbers: [ 44, 78, 21, 54, 20 ],
    money: 20
  },
  {
    ticket_ID: 654,
    shop_ID: 62,
    cahier_ID: 1,
    selectedNumbers: [ 75, 29, 76, 73, 49 ],
    money: 20
  },
  {
    ticket_ID: 655,
    shop_ID: 42,
    cahier_ID: 6,
    selectedNumbers: [ 52, 8, 57, 62, 55 ],
    money: 20
  },
  {
    ticket_ID: 656,
    shop_ID: 58,
    cahier_ID: 8,
    selectedNumbers: [ 49, 14, 29, 59, 21 ],
    money: 20
  },
  {ticket_ID: 657,
    shop_ID: 15,
    cahier_ID: 1,
    selectedNumbers: [ 66, 26, 33, 10, 32 ],
    money: 20
  },
  {
    ticket_ID: 658,
    shop_ID: 97,
    cahier_ID: 2,
    selectedNumbers: [ 69, 46, 11, 75, 14 ],
    money: 20
  },
  {
    ticket_ID: 659,
    shop_ID: 70,
    cahier_ID: 3,
    selectedNumbers: [ 13, 78, 44, 25, 57 ],
    money: 20
  },
  {
    ticket_ID: 660,
    shop_ID: 67,
    cahier_ID: 7,
    selectedNumbers: [ 45, 58, 40, 23, 50 ],
    money: 20
  },
  {
    ticket_ID: 661,
    shop_ID: 15,
    cahier_ID: 7,
    selectedNumbers: [ 74, 45, 7, 57, 1 ],
    money: 20
  },
  {
    ticket_ID: 662,
    shop_ID: 2,
    cahier_ID: 2,
    selectedNumbers: [ 66, 76, 31, 38, 16 ],
    money: 20
  },
  {
    ticket_ID: 663,
    shop_ID: 5,
    cahier_ID: 4,
    selectedNumbers: [ 68, 27, 19, 29, 6 ],
    money: 20
  },
  {
    ticket_ID: 664,
    shop_ID: 81,
    cahier_ID: 1,
    selectedNumbers: [ 53, 43, 12, 72, 46 ],
    money: 20
  },
  {
    ticket_ID: 665,
    shop_ID: 59,
    cahier_ID: 8,
    selectedNumbers: [ 74, 43, 21, 17, 67 ],
    money: 20
  },
  {
    ticket_ID: 666,
    shop_ID: 94,
    cahier_ID: 8,
    selectedNumbers: [ 37, 36, 6, 59, 78 ],
    money: 20
  },
  {
    ticket_ID: 667,
    shop_ID: 93,
    cahier_ID: 0,
    selectedNumbers: [ 43, 19, 46, 71, 20 ],
    money: 20
  },
  {
    ticket_ID: 668,
    shop_ID: 57,
    cahier_ID: 4,
    selectedNumbers: [ 5, 55, 58, 4, 31 ],
    money: 20
  },
  {
    ticket_ID: 669,
    shop_ID: 48,
    cahier_ID: 6,
    selectedNumbers: [ 76, 57, 14, 60, 4 ],
    money: 20
  },
  {
    ticket_ID: 670,
    shop_ID: 8,
    cahier_ID: 9,
    selectedNumbers: [ 65, 74, 33, 7, 68 ],
    money: 20
  },
  {
    ticket_ID: 671,
    shop_ID: 55,
    cahier_ID: 6,
    selectedNumbers: [ 74, 1, 37, 12, 34 ],
    money: 20
  },
  {
    ticket_ID: 672,
    shop_ID: 36,
    cahier_ID: 0,
    selectedNumbers: [ 51, 52, 75, 31, 65 ],
    money: 20
  },
  {
    ticket_ID: 673,
    shop_ID: 31,
    cahier_ID: 7,
    selectedNumbers: [ 20, 66, 35, 28, 22 ],
    money: 20
  },
  {
    ticket_ID: 674,
    shop_ID: 86,
    cahier_ID: 9,
    selectedNumbers: [ 51, 2, 72, 77, 69 ],
    money: 20
  },
  {
    ticket_ID: 675,
    shop_ID: 79,
    cahier_ID: 5,
    selectedNumbers: [ 66, 72, 28, 45, 68 ],
    money: 20
  },
  {
    ticket_ID: 676,
    shop_ID: 91,
    cahier_ID: 9,
    selectedNumbers: [ 54, 10, 20, 51, 46 ],
    money: 20
  },
  {
    ticket_ID: 677,
    shop_ID: 22,
    cahier_ID: 7,
    selectedNumbers: [ 61, 33, 3, 50, 20 ],
    money: 20
  },
  {
    ticket_ID: 678,
    shop_ID: 22,
    cahier_ID: 1,
    selectedNumbers: [ 19, 12, 77, 18, 76 ],
    money: 20
  },
  {
    ticket_ID: 679,
    shop_ID: 13,
    cahier_ID: 4,
    selectedNumbers: [ 9, 28, 71, 30, 20 ],
    money: 20
  },
  {
    ticket_ID: 680,
    shop_ID: 98,
    cahier_ID: 7,
    selectedNumbers: [ 36, 64, 78, 9, 38 ],
    money: 20
  },
  {
    ticket_ID: 681,
    shop_ID: 88,
    cahier_ID: 3,
    selectedNumbers: [ 61, 65, 66, 19, 22 ],
    money: 20
  },
  {
    ticket_ID: 682,
    shop_ID: 83,
    cahier_ID: 2,
    selectedNumbers: [ 70, 76, 6, 79, 50 ],
    money: 20
  },
  {
    ticket_ID: 683,
    shop_ID: 56,
    cahier_ID: 7,
    selectedNumbers: [ 37, 28, 23, 4, 41 ],
    money: 20
  },
  {
    ticket_ID: 684,
    shop_ID: 15,
    cahier_ID: 5,
    selectedNumbers: [ 12, 64, 48, 26, 68 ],
    money: 20
  },
  {
    ticket_ID: 685,
    shop_ID: 14,
    cahier_ID: 4,
    selectedNumbers: [ 10, 59, 74, 67, 62 ],
    money: 20
  },
  {
    ticket_ID: 686,
    shop_ID: 1,
    cahier_ID: 5,
    selectedNumbers: [ 15, 8, 26, 45, 9 ],
    money: 20
  },
  {
    ticket_ID: 687,
    shop_ID: 65,
    cahier_ID: 2,
    selectedNumbers: [ 57, 24, 55, 24, 6 ],
    money: 20
  },
  {
    ticket_ID: 688,
    shop_ID: 30,
    cahier_ID: 8,
    selectedNumbers: [ 77, 22, 35, 60, 65 ],
    money: 20
  },
  {
    ticket_ID: 689,
    shop_ID: 1,
    cahier_ID: 7,
    selectedNumbers: [ 78, 1, 19, 34, 15 ],
    money: 20
  },
  {
    ticket_ID: 690,
    shop_ID: 89,
    cahier_ID: 7,
    selectedNumbers: [ 39, 56, 63, 67, 36 ],
    money: 20
  },
  {
    ticket_ID: 691,
    shop_ID: 76,
    cahier_ID: 5,
    selectedNumbers: [ 57, 37, 24, 21, 33 ],
    money: 20
  },
  {
    ticket_ID: 692,
    shop_ID: 7,
    cahier_ID: 4,
    selectedNumbers: [ 78, 61, 46, 60, 33 ],
    money: 20
  },
  {
    ticket_ID: 693,
    shop_ID: 66,
    cahier_ID: 0,
    selectedNumbers: [ 41, 77, 59, 61, 63 ],
    money: 20
  },
  {
    ticket_ID: 694,
    shop_ID: 82,
    cahier_ID:1,
    selectedNumbers: [ 65, 50, 27, 42, 62 ],
    money: 20
  },
  {
    ticket_ID: 695,
    shop_ID: 69,
    cahier_ID: 2,
    selectedNumbers: [ 15, 29, 25, 12, 41 ],
    money: 20
  },
  {
    ticket_ID: 696,
    shop_ID: 93,
    cahier_ID: 0,
    selectedNumbers: [ 59, 32, 10, 10, 42 ],
    money: 20
  },
  {
    ticket_ID: 697,
    shop_ID: 92,
    cahier_ID: 2,
    selectedNumbers: [ 56, 76, 68, 66, 70 ],
    money: 20
  },
  {
    ticket_ID: 698,
    shop_ID: 75,
    cahier_ID: 9,
    selectedNumbers: [ 25, 55, 36, 35, 38 ],
    money: 20
  },
  {
    ticket_ID: 699,
    shop_ID: 36,
    cahier_ID: 7,
    selectedNumbers: [ 33, 58, 55, 36, 17 ],
    money: 20
  },
  {
    ticket_ID: 700,
    shop_ID: 55,
    cahier_ID: 4,
    selectedNumbers: [ 68, 44, 49, 18, 11 ],
    money: 20
  },
  {
    ticket_ID: 701,
    shop_ID: 90,
    cahier_ID: 5,
    selectedNumbers: [ 38, 40, 22, 24, 13 ],
    money: 20
  },
  {
    ticket_ID: 702,
    shop_ID: 59,
    cahier_ID: 7,
    selectedNumbers: [ 74, 34, 58, 69, 71 ],
    money: 20
  },
  {
    ticket_ID: 703,
    shop_ID: 20,
    cahier_ID: 0,
    selectedNumbers: [ 52, 34, 29, 7, 67 ],
    money: 20
  },
  {
    ticket_ID: 704,
    shop_ID: 65,
    cahier_ID: 5,
    selectedNumbers: [ 58, 48, 80, 60, 70 ],
    money: 20
  },
  {
    ticket_ID: 705,
    shop_ID: 64,
    cahier_ID: 2,
    selectedNumbers: [ 10, 17, 51, 44, 74 ],
    money: 20
  },
  {
    ticket_ID: 706,
    shop_ID: 92,
    cahier_ID: 9,
    selectedNumbers: [ 48, 35, 39, 59, 10 ],
    money: 20
  },
  {
    ticket_ID: 707,
    shop_ID: 0,
    cahier_ID: 5,
    selectedNumbers: [ 6, 53, 5, 30, 1 ],
    money: 20
  },
  {
    ticket_ID: 708,
    shop_ID: 0,
    cahier_ID: 7,
    selectedNumbers: [ 62, 72, 59, 78, 6 ],
    money: 20
  },
  {
    ticket_ID: 709,
    shop_ID: 25,
    cahier_ID: 4,
    selectedNumbers: [ 32, 73, 47, 40, 48 ],
    money: 20
  },
  {
    ticket_ID: 710,
    shop_ID: 63,
    cahier_ID: 9,
    selectedNumbers: [ 38, 29, 39, 56, 1 ],
    money: 20
  },
  {
    ticket_ID: 711,
    shop_ID: 31,
    cahier_ID: 0,
    selectedNumbers: [ 10, 10, 65, 37, 20 ],
    money: 20
  },
  {
    ticket_ID: 712,
    shop_ID: 36,
    cahier_ID: 8,
    selectedNumbers: [ 11, 34, 23, 57, 15 ],
    money: 20
  },
  {
    ticket_ID: 713,
    shop_ID: 35,
    cahier_ID: 3,
    selectedNumbers: [ 45, 15, 30, 3, 53 ],
    money: 20
  },
  {
    ticket_ID: 714,
    shop_ID: 64,
    cahier_ID: 8,
    selectedNumbers: [ 28, 53, 40, 69, 64 ],
    money: 20
  },
  {
    ticket_ID: 715,
    shop_ID: 29,
    cahier_ID: 4,
    selectedNumbers: [ 42, 30, 34, 46, 32 ],
    money: 20
  },
  {
    ticket_ID: 716,
    shop_ID: 80,
    cahier_ID: 0,
    selectedNumbers: [ 79, 59, 31, 17, 37 ],
    money: 20
  },
  {
    ticket_ID: 717,
    shop_ID: 84,
    cahier_ID: 3,
    selectedNumbers: [ 8, 70, 56, 62, 35 ],
    money: 20
  },
  {
    ticket_ID: 718,
    shop_ID: 2,
    cahier_ID: 5,
    selectedNumbers: [ 55, 41, 42, 10, 27 ],
    money: 20
  },
  {
    ticket_ID: 719,
    shop_ID: 93,
    cahier_ID: 7,
    selectedNumbers: [ 73, 35, 19, 73, 80 ],
    money: 20
  },
  {
    ticket_ID: 720,
    shop_ID: 86,
    cahier_ID: 4,
    selectedNumbers: [ 8, 58, 44, 62, 62 ],
    money: 20
  },
  {
    ticket_ID: 721,
    shop_ID: 67,
    cahier_ID: 6,
    selectedNumbers: [ 56, 52, 22, 36, 80 ],
    money: 20
  },
  {
    ticket_ID: 722,
    shop_ID: 49,
    cahier_ID: 8,
    selectedNumbers: [ 19, 56, 53, 1, 41 ],
    money: 20
  },
  {
    ticket_ID: 723,
    shop_ID: 82,
    cahier_ID: 8,
    selectedNumbers: [ 67, 15, 72, 42, 79 ],
    money: 20
  },
  {
    ticket_ID: 724,
    shop_ID: 73,
    cahier_ID: 3,
    selectedNumbers: [ 38, 3, 49, 34, 33 ],
    money: 20
  },
  {
    ticket_ID: 725,
    shop_ID: 57,
    cahier_ID: 6,
    selectedNumbers: [ 45, 64, 18, 35, 16 ],
    money: 20
  },
  {
    ticket_ID: 726,
    shop_ID: 56,
    cahier_ID: 2,
    selectedNumbers: [ 18, 49, 26, 55, 48 ],
    money: 20
  },
  {
    ticket_ID: 727,
    shop_ID: 76,
    cahier_ID: 7,
    selectedNumbers: [ 40, 4, 39, 9, 40 ],
    money: 20
  },
  {
    ticket_ID: 728,
    shop_ID: 74,
    cahier_ID: 5,
    selectedNumbers: [ 61, 54, 15, 32, 39 ],
    money: 20
  },
  {
    ticket_ID: 729,
    shop_ID: 88,
    cahier_ID: 3,
    selectedNumbers: [ 67, 68, 51, 33, 5 ],
    money: 20
  },
  {
    ticket_ID: 730,
    shop_ID: 38,
    cahier_ID: 1,
    selectedNumbers: [ 61, 26, 54, 29, 7 ],
    money: 20
  },
  {
    ticket_ID: 731,
    shop_ID: 70,
    cahier_ID: 6,
    selectedNumbers: [ 40, 13, 49, 36, 56 ],
    money: 20
  },
  {
    ticket_ID: 732,
    shop_ID: 63,
    cahier_ID: 1,
    selectedNumbers: [ 37, 67, 67, 57, 24 ],
    money: 20
  },
  {
    ticket_ID: 733,
    shop_ID: 74,
    cahier_ID: 3,
    selectedNumbers: [ 79, 36, 30, 18, 66 ],
    money: 20
  },
  {
    ticket_ID: 734,
    shop_ID: 56,
    cahier_ID: 9,
    selectedNumbers: [ 4, 79, 69, 72, 40 ],
    money: 20
  },
  {
    ticket_ID: 735,
    shop_ID: 27,
    cahier_ID: 1,
    selectedNumbers: [ 46, 80, 4, 68, 56 ],
    money: 20
  },
  {
    ticket_ID: 736,
    shop_ID: 44,
    cahier_ID: 4,
    selectedNumbers: [ 68, 44, 54, 69, 66 ],
    money: 20
  },
  {
    ticket_ID: 737,
    shop_ID: 77,
    cahier_ID: 4,
    selectedNumbers: [ 55, 12, 28, 30, 44 ],
    money: 20
  },
  {
    ticket_ID: 738,
    shop_ID: 4,
    cahier_ID: 3,
    selectedNumbers: [ 28, 66, 55, 47, 57 ],
    money: 20
  },
  {
    ticket_ID: 739,
    shop_ID: 16,
    cahier_ID: 1,
    selectedNumbers: [ 72, 63, 5, 51, 47 ],
    money: 20
  },
  {
    ticket_ID: 740,
    shop_ID: 7,
    cahier_ID: 4,
    selectedNumbers: [ 14, 5, 58, 63, 11 ],
    money: 20
  },
  {
    ticket_ID: 741,
    shop_ID: 21,
    cahier_ID: 7,
    selectedNumbers: [ 55, 65, 45, 61, 36 ],
    money: 20
  },
  {
    ticket_ID: 742,
    shop_ID: 21,
    cahier_ID: 7,
    selectedNumbers: [ 68, 24, 26, 53, 79 ],
    money: 20
  },
  {
    ticket_ID: 743,
    shop_ID: 20,
    cahier_ID: 4,
    selectedNumbers: [ 75, 71, 57, 35, 63 ],
    money: 20
  },
  {
    ticket_ID: 744,
    shop_ID: 68,
    cahier_ID: 0,
    selectedNumbers: [ 2, 77, 43, 12, 13 ],
    money: 20
  },
  {
    ticket_ID: 745,
    shop_ID: 97,
    cahier_ID: 1,
    selectedNumbers: [ 4, 51, 56, 11, 21 ],
    money: 20
  },
  {
    ticket_ID: 746,
    shop_ID: 68,
    cahier_ID: 8,
    selectedNumbers: [ 64, 57, 67, 29, 80 ],
    money: 20
  },
  {
    ticket_ID: 747,
    shop_ID: 75,
    cahier_ID: 6,
    selectedNumbers: [ 61, 48, 39, 44, 57 ],
    money: 20
  },
  {
    ticket_ID: 748,
    shop_ID: 70,
    cahier_ID: 8,
    selectedNumbers: [ 63, 53, 68, 24, 67 ],
    money: 20
  },
  {
    ticket_ID: 749,
    shop_ID: 84,
    cahier_ID: 6,
    selectedNumbers: [ 19, 28, 60, 62, 36 ],
    money: 20
  },
  {
    ticket_ID: 750,
    shop_ID: 87,
    cahier_ID: 9,
    selectedNumbers: [ 65, 28, 18, 22, 72 ],
    money: 20
  },
  {
    ticket_ID: 751,
    shop_ID: 86,
    cahier_ID: 5,
    selectedNumbers: [ 22, 30, 16, 76, 19 ],
    money: 20
  },
  {
    ticket_ID: 752,
    shop_ID: 45,
    cahier_ID: 8,
    selectedNumbers: [ 7, 15, 63, 58, 57 ],
    money: 20
  },
  {
    ticket_ID: 753,
    shop_ID: 92,
    cahier_ID: 0,
    selectedNumbers: [ 36, 22, 43, 3, 25 ],
    money: 20
  },
  {
    ticket_ID: 754,
    shop_ID: 28,
    cahier_ID: 4,
    selectedNumbers: [ 50, 52, 53, 79, 48 ],
    money: 20
  },
  {
    ticket_ID: 755,
    shop_ID: 43,
    cahier_ID: 0,
    selectedNumbers: [ 27, 47, 9, 51, 26 ],
    money: 20
  },
  {
    ticket_ID: 756,
    shop_ID: 1,
    cahier_ID: 6,
    selectedNumbers: [ 24, 41, 68, 12, 54 ],
    money: 20
  },
  {
    ticket_ID: 757,
    shop_ID: 2,
    cahier_ID: 4,
    selectedNumbers: [ 3, 68, 14, 53, 68 ],
    money: 20
  },
  {
    ticket_ID: 758,
    shop_ID: 6,
    cahier_ID: 2,
    selectedNumbers: [ 59, 3, 4, 6, 57 ],
    money: 20
  },
  {
    ticket_ID: 759,
    shop_ID: 12,
    cahier_ID: 7,
    selectedNumbers: [ 75, 27, 66, 5, 79 ],
    money: 20
  },
  {
    ticket_ID: 760,
    shop_ID: 25,
    cahier_ID: 5,
    selectedNumbers: [ 3, 77, 68, 45, 33 ],
    money: 20
  },
  {
    ticket_ID: 761,
    shop_ID: 81,
    cahier_ID: 9,
    selectedNumbers: [ 43, 28, 42, 41, 58 ],
    money: 20
  },
  {
    ticket_ID: 762,
    shop_ID: 91,
    cahier_ID: 2,
    selectedNumbers: [ 67, 67, 35, 1, 21 ],
    money: 20
  },
  {
    ticket_ID: 763,
    shop_ID: 50,
    cahier_ID: 5,
    selectedNumbers: [ 59, 28, 38, 74, 25 ],
    money: 20
  },
  {
    ticket_ID: 764,
    shop_ID: 14,
    cahier_ID: 1,
    selectedNumbers: [ 16, 6, 1, 62, 51 ],
    money: 20
  },
  {
    ticket_ID: 765,
    shop_ID: 86,
    cahier_ID: 7,
    selectedNumbers: [ 8, 69, 46, 29, 69 ],
    money: 20
  },
  {
    ticket_ID: 766,
    shop_ID: 66,
    cahier_ID: 4,
    selectedNumbers: [ 61, 33, 33, 12, 9 ],
    money: 20
  },
  {
    ticket_ID: 767,
    shop_ID: 51,
    cahier_ID: 1,
    selectedNumbers: [ 77, 8, 1, 80, 8 ],
    money: 20
  },
  {
    ticket_ID: 768,
    shop_ID: 11,
    cahier_ID: 5,
    selectedNumbers: [ 62, 30, 39, 5, 17 ],
    money: 20
  },
  {
    ticket_ID: 769,
    shop_ID: 33,
    cahier_ID: 6,
    selectedNumbers: [ 64, 15, 57, 64, 23 ],
    money: 20
  },
  {
    ticket_ID: 770,
    shop_ID: 35,
    cahier_ID: 4,
    selectedNumbers: [ 2, 57, 46, 21, 23 ],
    money: 20
  },
  {
    ticket_ID: 771,
    shop_ID: 52,
    cahier_ID: 0,
    selectedNumbers: [ 36, 30, 57, 50, 78 ],
    money: 20
  },
  {
    ticket_ID: 772,
    shop_ID: 32,
    cahier_ID: 1,
    selectedNumbers: [ 21, 51, 69, 11, 71 ],
    money: 20
  },
  {
    ticket_ID: 773,
    shop_ID: 81,
    cahier_ID: 9,
    selectedNumbers: [ 68, 53, 30, 67, 16 ],
    money: 20
  },
  {
    ticket_ID: 774,
    shop_ID: 52,
    cahier_ID: 1,
    selectedNumbers: [ 31, 4, 29, 60, 10 ],
    money: 20
  },
  {
    ticket_ID: 775,
    shop_ID: 93,
    cahier_ID: 2,
    selectedNumbers: [ 12, 4, 60, 11, 19 ],
    money: 20
  },
  {
    ticket_ID: 776,
    shop_ID: 86,
    cahier_ID: 9,
    selectedNumbers: [ 33, 66, 15, 73, 58 ],
    money: 20
  },
  {
    ticket_ID: 777,
    shop_ID: 60,
    cahier_ID: 3,
    selectedNumbers: [ 79, 39, 75, 8, 38 ],
    money: 20
  },
  {
    ticket_ID: 778,
    shop_ID: 93,
    cahier_ID: 4,
    selectedNumbers: [ 41, 29, 50, 63, 72 ],
    money: 20
  },
  {
    ticket_ID: 779,
    shop_ID: 84,
    cahier_ID: 4,
    selectedNumbers: [ 31, 73, 6, 44, 69 ],
    money: 20
  },
  {
    ticket_ID: 780,
    shop_ID: 37,
    cahier_ID: 5,
    selectedNumbers: [ 73, 44, 1, 17, 19 ],
    money: 20
  },
  {
    ticket_ID: 781,
    shop_ID: 5,
    cahier_ID: 1,
    selectedNumbers: [ 43, 48, 17, 53, 15 ],
    money: 20
  },
  {
    ticket_ID: 782,
    shop_ID: 14,
    cahier_ID: 8,
    selectedNumbers: [ 38, 16, 30, 74, 29 ],
    money: 20
  },
  {
    ticket_ID: 783,
    shop_ID: 21,
    cahier_ID: 0,
    selectedNumbers: [ 50, 33, 21, 11, 32 ],
    money: 20
  },
  {
    ticket_ID: 784,
    shop_ID: 54,
    cahier_ID: 4,
    selectedNumbers: [ 52, 61, 57, 17, 62 ],
    money: 20
  },
  {
    ticket_ID: 785,
    shop_ID: 88,
    cahier_ID: 9,
    selectedNumbers: [ 23, 2, 35, 29, 26 ],
    money: 20
  },
  {
    ticket_ID: 786,
    shop_ID: 73,
    cahier_ID: 8,
    selectedNumbers: [ 46, 30, 58, 22, 23 ],
    money: 20
  },
  {
    ticket_ID: 787,
    shop_ID: 23,
    cahier_ID: 1,
    selectedNumbers: [ 25, 38, 36, 66, 78 ],
    money: 20
  },
  {
    ticket_ID: 788,
    shop_ID: 89,
    cahier_ID: 2,
    selectedNumbers: [ 16, 24, 67, 19, 53 ],
    money: 20
  },
  {
    ticket_ID: 789,
    shop_ID: 28,
    cahier_ID: 2,
    selectedNumbers: [ 35, 55, 34, 60, 44 ],
    money: 20
  },
  {
    ticket_ID: 790,
    shop_ID: 18,
    cahier_ID: 6,
    selectedNumbers: [ 38, 32, 12, 7, 50 ],
    money: 20
  },
  {
    ticket_ID: 791,
    shop_ID: 51,
    cahier_ID: 5,
    selectedNumbers: [ 68, 6, 78, 11, 57 ],
    money: 20
  },
  {
    ticket_ID: 792,
    shop_ID: 4,
    cahier_ID: 9,
    selectedNumbers: [ 80, 70, 10, 75, 21 ],
    money: 20
  },
  {
    ticket_ID: 793,
    shop_ID: 25,
    cahier_ID: 6,
    selectedNumbers: [ 11, 40, 27, 59, 59 ],
    money: 20
  },
  {
    ticket_ID: 794,
    shop_ID: 98,
    cahier_ID: 0,
    selectedNumbers: [ 52, 16, 58, 43, 41 ],
    money: 20
  },
  {
    ticket_ID: 795,
    shop_ID: 61,
    cahier_ID: 6,
    selectedNumbers: [ 69, 70, 35, 24, 46 ],
    money: 20
  },
  {
    ticket_ID: 796,
    shop_ID: 43,
    cahier_ID: 2,
    selectedNumbers: [ 38, 79, 35, 30, 21 ],
    money: 20
  },
  {
    ticket_ID: 797,
    shop_ID: 93,
    cahier_ID: 3,
    selectedNumbers: [ 54, 63, 79, 15, 75 ],
    money: 20
  },
  {
    ticket_ID: 798,
    shop_ID: 51,
    cahier_ID: 8,
    selectedNumbers: [ 51, 60, 34, 79, 20 ],
    money: 20
  },
  {
    ticket_ID: 799,
    shop_ID: 68,
    cahier_ID: 0,
    selectedNumbers: [ 24, 65, 56, 5, 41 ],
    money: 20
  },
  {
    ticket_ID: 800,
    shop_ID: 84,
    cahier_ID: 6,
    selectedNumbers: [ 64, 58, 53, 16, 5 ],
    money: 20
  },
  {
    ticket_ID: 801,
    shop_ID: 14,
    cahier_ID: 2,
    selectedNumbers: [ 41, 8, 6, 65, 26 ],
    money: 20
  },
  {
    ticket_ID: 802,
    shop_ID: 38,
    cahier_ID: 8,
    selectedNumbers: [ 71, 40, 13, 3, 64 ],
    money: 20
  },
  {
    ticket_ID: 803,
    shop_ID: 81,
    cahier_ID: 5,
    selectedNumbers: [ 21, 56, 18, 80, 1 ],
    money: 20
  },
  {
    ticket_ID: 804,
    shop_ID: 26,
    cahier_ID: 9,
    selectedNumbers: [ 73, 50, 27, 9, 16 ],
    money: 20
  },
  {
    ticket_ID: 805,
    shop_ID: 10,
    cahier_ID: 2,
    selectedNumbers: [ 10, 57, 46, 80, 79 ],
    money: 20
  },
  {
    ticket_ID: 806,
    shop_ID: 34,
    cahier_ID: 7,
    selectedNumbers: [ 74, 34, 16, 20, 35 ],
    money: 20
  },
  {
    ticket_ID: 807,
    shop_ID: 35,
    cahier_ID: 3,
    selectedNumbers: [ 24, 3, 40, 58, 19 ],
    money: 20
  },
  {
    ticket_ID: 808,
    shop_ID: 90,
    cahier_ID: 1,
    selectedNumbers: [ 13, 14, 1, 78, 77 ],
    money: 20
  },
  {
    ticket_ID: 809,
    shop_ID: 66,
    cahier_ID: 3,
    selectedNumbers: [ 44, 70, 35, 7, 25 ],
    money: 20
  },
  {
    ticket_ID: 810,
    shop_ID: 21,
    cahier_ID: 6,
    selectedNumbers: [ 41, 75, 17, 79, 54 ],
    money: 20
  },
  {
    ticket_ID: 811,
    shop_ID: 88,
    cahier_ID: 6,
    selectedNumbers: [ 80, 58, 27, 30, 25 ],
    money: 20
  },
  {
    ticket_ID: 812,
    shop_ID: 86,
    cahier_ID: 0,
    selectedNumbers: [ 6, 40, 39, 30, 16 ],
    money: 20
  },
  {
    ticket_ID: 813,
    shop_ID: 68,
    cahier_ID: 6,
    selectedNumbers: [ 1, 57, 57, 78, 61 ],
    money: 20
  },
  {
    ticket_ID: 814,
    shop_ID: 87,
    cahier_ID: 6,
    selectedNumbers: [ 78, 67, 70, 72, 40 ],
    money: 20
  },
  {
    ticket_ID: 815,
    shop_ID: 46,
    cahier_ID: 2,
    selectedNumbers: [ 8, 56, 55, 54, 61 ],
    money: 20
  },
  {
    ticket_ID: 816,
    shop_ID: 97,
    cahier_ID: 4,
    selectedNumbers: [ 32, 35, 33, 47, 30 ],
    money: 20
  },
  {
    ticket_ID: 817,
    shop_ID: 65,
    cahier_ID: 5,
    selectedNumbers: [ 64, 33, 23, 70, 78 ],
    money: 20
  },
  {
    ticket_ID: 818,
    shop_ID: 82,
    cahier_ID: 0,
    selectedNumbers: [ 7, 49, 17, 34, 73 ],
    money: 20
  },
  {
    ticket_ID: 819,
    shop_ID: 64,
    cahier_ID: 1,
    selectedNumbers: [ 59, 64, 59, 74, 25 ],
    money: 20
  },
  {
    ticket_ID: 820,
    shop_ID: 42,
    cahier_ID: 7,
    selectedNumbers: [ 67, 57, 47, 59, 39 ],
    money: 20
  },
  {
    ticket_ID: 821,
    shop_ID: 26,
    cahier_ID: 9,
    selectedNumbers: [ 16, 54, 4, 76, 11 ],
    money: 20
  },
  {
    ticket_ID: 822,
    shop_ID: 98,
    cahier_ID: 0,
    selectedNumbers: [ 33, 6, 57, 39, 39 ],
    money: 20
  },
  {
    ticket_ID: 823,
    shop_ID: 32,
    cahier_ID: 1,
    selectedNumbers: [ 9, 51, 29, 32, 21 ],
    money: 20
  },
  {
    ticket_ID: 824,
    shop_ID: 71,
    cahier_ID: 5,
    selectedNumbers: [ 19, 47, 80, 79, 32 ],
    money: 20
  },
  {
    ticket_ID: 825,
    shop_ID: 2,
    cahier_ID: 9,
    selectedNumbers: [ 11, 68, 80, 7, 20 ],
    money: 20
  },
  {
    ticket_ID: 826,
    shop_ID: 32,
    cahier_ID: 7,
    selectedNumbers: [ 52, 60, 6, 24, 66 ],
    money: 20
  },
  {
    ticket_ID: 827,
    shop_ID: 98,
    cahier_ID: 5,
    selectedNumbers: [ 25, 66, 19, 9, 69 ],
    money: 20
  },
  {
    ticket_ID: 828,
    shop_ID: 96,
    cahier_ID: 9,
    selectedNumbers: [ 17, 67, 36, 56, 33 ],
    money: 20
  },
  {
    ticket_ID: 829,
    shop_ID: 55,
    cahier_ID: 4,
    selectedNumbers: [ 7, 42, 77, 51, 20 ],
    money: 20
  },
  {
    ticket_ID: 830,
    shop_ID: 45,
    cahier_ID: 6,
    selectedNumbers: [ 43, 68, 20, 25, 52 ],
    money: 20
  },
  {
    ticket_ID: 831,
    shop_ID: 4,
    cahier_ID: 3,
    selectedNumbers: [ 49, 50, 11, 24, 10 ],
    money: 20
  },
  {
    ticket_ID: 832,
    shop_ID: 64,
    cahier_ID: 8,
    selectedNumbers: [ 61, 27, 6, 61, 53 ],
    money: 20
  },
  {
    ticket_ID: 833,
    shop_ID: 75,
    cahier_ID: 9,
    selectedNumbers: [ 3, 39, 61, 15, 74 ],
    money: 20
  },
  {
    ticket_ID: 834,
    shop_ID: 83,
    cahier_ID: 6,
    selectedNumbers: [ 71, 46, 77, 69, 16 ],
    money: 20
  },
  {
    ticket_ID: 835,
    shop_ID: 97,
    cahier_ID: 1,
    selectedNumbers: [ 30, 74, 4, 73, 77 ],
    money: 20
  },
  {
    ticket_ID: 836,
    shop_ID: 70,
    cahier_ID: 8,
    selectedNumbers: [ 42, 57, 44, 22, 58 ],
    money: 20
  },
  {
    ticket_ID: 837,
    shop_ID: 86,
    cahier_ID: 2,
    selectedNumbers: [ 28, 74, 45, 40, 32 ],
    money: 20
  },
  {
    ticket_ID: 838,
    shop_ID: 75,
    cahier_ID: 8,
    selectedNumbers: [ 66, 19, 60, 24, 75 ],
    money: 20
  },
  {
    ticket_ID: 839,
    shop_ID: 68,
    cahier_ID: 6,
    selectedNumbers: [ 40, 77, 73, 53, 26 ],
    money: 20
  },
  {
    ticket_ID: 840,
    shop_ID: 29,
    cahier_ID: 7,
    selectedNumbers: [ 3, 33, 72, 40, 15 ],
    money: 20
  },
  {
    ticket_ID: 841,
    shop_ID: 42,
    cahier_ID: 4,
    selectedNumbers: [ 32, 36, 74, 72, 6 ],
    money: 20
  },
  {
    ticket_ID: 842,
    shop_ID: 80,
    cahier_ID: 2,
    selectedNumbers: [ 35, 72, 66, 5, 42 ],
    money: 20
  },
  {
    ticket_ID: 843,
    shop_ID: 37,
    cahier_ID: 7,
    selectedNumbers: [ 62, 53, 70, 72, 64 ],
    money: 20
  },
  {
    ticket_ID: 844,
    shop_ID: 57,
    cahier_ID: 7,
    selectedNumbers: [ 10, 41, 20, 48, 49 ],
    money: 20
  },
  {
    ticket_ID: 845,
    shop_ID: 8,
    cahier_ID: 6,
    selectedNumbers: [ 40, 7, 44, 2, 66 ],
    money: 20
  },
  {
    ticket_ID: 846,
    shop_ID: 52,
    cahier_ID: 2,
    selectedNumbers: [ 79, 7, 19, 58, 2 ],
    money: 20
  },
  {
    ticket_ID: 847,
    shop_ID: 50,
    cahier_ID: 4,
    selectedNumbers: [ 50, 69, 8, 14, 72 ],
    money: 20
  },
  {
    ticket_ID: 848,
    shop_ID: 73,
    cahier_ID: 2,
    selectedNumbers: [ 56, 9, 65, 1, 20 ],
    money: 20
  },
  {
    ticket_ID: 849,
    shop_ID: 46,
    cahier_ID: 9,
    selectedNumbers: [ 79, 8, 22, 7, 68 ],
    money: 20
  },
  {
    ticket_ID: 850,
    shop_ID: 5,
    cahier_ID: 6,
    selectedNumbers: [ 54, 21, 23, 43, 68 ],
    money: 20
  },
  {
    ticket_ID: 851,
    shop_ID: 62,
    cahier_ID: 0,
    selectedNumbers: [ 25, 74, 37, 26, 70 ],
    money: 20
  },
  {
    ticket_ID: 852,
    shop_ID: 52,
    cahier_ID: 2,
    selectedNumbers: [ 67, 28, 4, 51, 9 ],
    money: 20
  },
  {
    ticket_ID: 853,
    shop_ID: 32,
    cahier_ID: 5,
    selectedNumbers: [ 46, 65, 8, 76, 57 ],
    money: 20
  },
  {
    ticket_ID: 854,
    shop_ID: 99,
    cahier_ID: 7,
    selectedNumbers: [ 3, 23, 18, 76, 54 ],
    money: 20
  },
  {
    ticket_ID: 855,
    shop_ID: 53,
    cahier_ID: 5,
    selectedNumbers: [ 21, 55, 11, 2, 37 ],
    money: 20
  },
  {
    ticket_ID: 856,
    shop_ID: 13,
    cahier_ID: 9,
    selectedNumbers: [ 71, 21, 6, 58, 7 ],
    money: 20
  },
  {
  ticket_ID: 857,
    shop_ID: 66,
    cahier_ID: 9,
    selectedNumbers: [ 53, 57, 47, 14, 51 ],
    money: 20
  },
  {
    ticket_ID: 858,
    shop_ID: 37,
    cahier_ID: 5,
    selectedNumbers: [ 13, 31, 15, 71, 44 ],
    money: 20
  },
  {
    ticket_ID: 859,
    shop_ID: 98,
    cahier_ID: 0,
    selectedNumbers: [ 44, 59, 60, 45, 60 ],
    money: 20
  },
  {
    ticket_ID: 860,
    shop_ID: 10,
    cahier_ID: 3,
    selectedNumbers: [ 2, 49, 18, 50, 38 ],
    money: 20
  },
  {
    ticket_ID: 861,
    shop_ID: 83,
    cahier_ID: 9,
    selectedNumbers: [ 9, 51, 6, 70, 7 ],
    money: 20
  },
  {
    ticket_ID: 862,
    shop_ID: 11,
    cahier_ID: 0,
    selectedNumbers: [ 61, 45, 18, 24, 42 ],
    money: 20
  },
  {
    ticket_ID: 863,
    shop_ID: 15,
    cahier_ID: 1,
    selectedNumbers: [ 28, 21, 65, 57, 13 ],
    money: 20
  },
  {
    ticket_ID: 864,
    shop_ID: 16,
    cahier_ID: 1,
    selectedNumbers: [ 11, 26, 75, 48, 47 ],
    money: 20
  },
  {
    ticket_ID: 865,
    shop_ID: 18,
    cahier_ID: 8,
    selectedNumbers: [ 63, 74, 6, 2, 17 ],
    money: 20
  },
  {
    ticket_ID: 866,
    shop_ID: 88,
    cahier_ID: 9,
    selectedNumbers: [ 62, 62, 44, 35, 32 ],
    money: 20
  },
  {
    ticket_ID: 867,
    shop_ID: 7,
    cahier_ID: 4,
    selectedNumbers: [ 24, 32, 1, 14, 60 ],
    money: 20
  },
  {
    ticket_ID: 868,
    shop_ID: 27,
    cahier_ID: 1,
    selectedNumbers: [ 28, 58, 58, 12, 67 ],
    money: 20
  },
  {
    ticket_ID: 869,
    shop_ID: 34,
    cahier_ID: 5,
    selectedNumbers: [ 2, 46, 50, 61, 39 ],
    money: 20
  },
  {
    ticket_ID: 870,
    shop_ID: 36,
    cahier_ID: 5,
    selectedNumbers: [ 1, 2, 44, 33, 77 ],
    money: 20
  },
  {
    ticket_ID: 871,
    shop_ID: 91,
    cahier_ID: 7,
    selectedNumbers: [ 72, 23, 52, 62, 29 ],
    money: 20
  },
  {
    ticket_ID: 872,
    shop_ID: 41,
    cahier_ID: 2,
    selectedNumbers: [ 31, 18, 70, 37, 42 ],
    money: 20
  },
  {
    ticket_ID: 873,
    shop_ID: 85,
    cahier_ID: 6,
    selectedNumbers: [ 44, 53, 62, 74, 62 ],
    money: 20
  },
  {
    ticket_ID: 874,
    shop_ID: 28,
    cahier_ID: 7,
    selectedNumbers: [ 14, 3, 41, 7, 80 ],
    money: 20
  },
  {
    ticket_ID: 875,
    shop_ID: 25,
    cahier_ID: 3,
    selectedNumbers: [ 69, 23, 14, 19, 46 ],
    money: 20
  },
  {
    ticket_ID: 876,
    shop_ID: 62,
    cahier_ID: 6,
    selectedNumbers: [ 51, 58, 66, 62, 63 ],
    money: 20
  },
  {
    ticket_ID: 877,
    shop_ID: 83,
    cahier_ID: 8,
    selectedNumbers: [ 65, 19, 63, 72, 25 ],
    money: 20
  },
  {
    ticket_ID: 878,
    shop_ID: 19,
    cahier_ID: 1,
    selectedNumbers: [ 78, 21, 60, 78, 46 ],
    money: 20
  },
  {
    ticket_ID: 879,
    shop_ID: 76,
    cahier_ID: 2,
    selectedNumbers: [ 33, 66, 7, 77, 77 ],
    money: 20
  },
  {
    ticket_ID: 880,
    shop_ID: 59,
    cahier_ID: 3,
    selectedNumbers: [ 39, 60, 2, 23, 34 ],
    money: 20
  },
  {
    ticket_ID: 881,
    shop_ID: 19,
    cahier_ID: 3,
    selectedNumbers: [ 25, 74, 27, 18, 11 ],
    money: 20
  },
  {
    ticket_ID: 882,
    shop_ID: 42,
    cahier_ID: 7,
    selectedNumbers: [ 42, 58, 5, 22, 25 ],
    money: 20
  },
  {
    ticket_ID: 883,
    shop_ID: 74,
    cahier_ID: 4,
    selectedNumbers: [ 34, 71, 68, 40, 54 ],
    money: 20
  },
  {
    ticket_ID: 884,
    shop_ID: 59,
    cahier_ID: 1,
    selectedNumbers: [ 22, 40, 75, 33, 5 ],
    money: 20
  },
  {
    ticket_ID: 885,
    shop_ID: 12,
    cahier_ID: 0,
    selectedNumbers: [ 29, 49, 53, 76, 1 ],
    money: 20
  },
  {
    ticket_ID: 886,
    shop_ID: 71,
    cahier_ID: 0,
    selectedNumbers: [ 70, 70, 50, 3, 49 ],
    money: 20
  },
  {
    ticket_ID: 887,
    shop_ID: 69,
    cahier_ID: 1,
    selectedNumbers: [ 60, 39, 22, 10, 79 ],
    money: 20
  },
  {
    ticket_ID: 888,
    shop_ID: 45,
    cahier_ID: 1,
    selectedNumbers: [ 43, 31, 59, 70, 54 ],
    money: 20
  },
  {
    ticket_ID: 889,
    shop_ID: 61,
    cahier_ID: 7,
    selectedNumbers: [ 30, 68, 67, 23, 44 ],
    money: 20
  },
  {
    ticket_ID: 890,
    shop_ID: 99,
    cahier_ID: 8,
    selectedNumbers: [ 53, 28, 55, 15, 51 ],
    money: 20
  },
  {
    ticket_ID: 891,
    shop_ID: 0,
    cahier_ID: 2,
    selectedNumbers: [ 18, 16, 45, 32, 12 ],
    money: 20
  },
  {
    ticket_ID: 892,
    shop_ID: 56,
    cahier_ID: 6,
    selectedNumbers: [ 43, 78, 32, 78, 64 ],
    money: 20
  },
  {
    ticket_ID: 893,
    shop_ID: 58,
    cahier_ID: 4,
    selectedNumbers: [ 32, 58, 28, 54, 22 ],
    money: 20
  },
  {
    ticket_ID: 894,
    shop_ID: 77,
    cahier_ID: 1,
    selectedNumbers: [ 36, 31, 41, 53, 18 ],
    money: 20
  },
  {
    ticket_ID: 895,
    shop_ID: 93,
    cahier_ID: 6,
    selectedNumbers: [ 55, 50, 50, 28, 61 ],
    money: 20
  },
  {
    ticket_ID: 896,
    shop_ID: 41,
    cahier_ID: 8,
    selectedNumbers: [ 19, 20, 63, 20, 66 ],
    money: 20
  },
  {
    ticket_ID: 897,
    shop_ID: 57,
    cahier_ID: 1,
    selectedNumbers: [ 76, 24, 36, 3, 1 ],
    money: 20
  },
  {
    ticket_ID: 898,
    shop_ID: 95,
    cahier_ID: 9,
    selectedNumbers: [ 79, 63, 43, 73, 29 ],
    money: 20
  },
  {
    ticket_ID: 899,
    shop_ID: 11,
    cahier_ID: 4,
    selectedNumbers: [ 61, 11, 2, 71, 57 ],
    money: 20
  },
  {
    ticket_ID: 900,
    shop_ID: 32,
    cahier_ID: 5,
    selectedNumbers: [ 1, 25, 64, 1, 55 ],
    money: 20
  },
  {
    ticket_ID: 901,
    shop_ID: 53,
    cahier_ID: 9,
    selectedNumbers: [ 13, 54, 58, 12, 57 ],
    money: 20
  },
  {
    ticket_ID: 902,
    shop_ID: 98,
    cahier_ID: 5,
    selectedNumbers: [ 11, 30, 39, 73, 50 ],
    money: 20
  },
  {
    ticket_ID: 903,
    shop_ID: 26,
    cahier_ID: 5,
    selectedNumbers: [ 26, 64, 44, 77, 13 ],
    money: 20
  },
  {
    ticket_ID: 904,
    shop_ID: 78,
    cahier_ID: 5,
    selectedNumbers: [ 47, 14, 28, 54, 21 ],
    money: 20
  },
  {
    ticket_ID: 905,
    shop_ID: 56,
    cahier_ID: 4,
    selectedNumbers: [ 63, 68, 8, 23, 38 ],
    money: 20
  },
  {
    ticket_ID: 906,
    shop_ID: 9,
    cahier_ID: 3,
    selectedNumbers: [ 51, 19, 13, 20, 74 ],
    money: 20
  },
  {
    ticket_ID: 907,
    shop_ID: 25,
    cahier_ID: 1,
    selectedNumbers: [ 17, 52, 10, 70, 71 ],
    money: 20
  },
  {
    ticket_ID: 908,
    shop_ID: 52,
    cahier_ID: 1,
    selectedNumbers: [ 48, 11, 48, 65, 9 ],
    money: 20
  },
  {
    ticket_ID: 909,
    shop_ID: 76,
    cahier_ID: 5,
    selectedNumbers: [ 4, 60, 5, 59, 53 ],
    money: 20
  },
  {
    ticket_ID: 910,
    shop_ID: 41,
    cahier_ID: 8,
    selectedNumbers: [ 42, 14, 20, 79, 7 ],
    money: 20
  },
  {
    ticket_ID: 911,
    shop_ID: 44,
    cahier_ID: 9,
    selectedNumbers: [ 54, 32, 65, 62, 62 ],
    money: 20
  },
  {
    ticket_ID: 912,
    shop_ID: 20,
    cahier_ID: 4,
    selectedNumbers: [ 46, 42, 21, 77, 78 ],
    money: 20
  },
  {
    ticket_ID: 913,
    shop_ID: 91,
    cahier_ID: 0,
    selectedNumbers: [ 15, 9, 32, 9, 1 ],
    money: 20
  },
  {
    ticket_ID: 914,
    shop_ID: 35,
    cahier_ID: 8,
    selectedNumbers: [ 40, 7, 63, 50, 73 ],
    money: 20
  },
  {
    ticket_ID: 915,
    shop_ID: 43,
    cahier_ID: 8,
    selectedNumbers: [ 5, 15, 26, 27, 34 ],
    money: 20
  },
  {
    ticket_ID: 916,
    shop_ID: 19,
    cahier_ID: 9,
    selectedNumbers: [ 48, 64, 3, 56, 16 ],
    money: 20
  },
  {
    ticket_ID: 917,
    shop_ID: 23,
    cahier_ID: 8,
    selectedNumbers: [ 18, 41, 26, 46, 22 ],
    money: 20
  },
  {
    ticket_ID: 918,
    shop_ID: 41,
    cahier_ID: 6,
    selectedNumbers: [ 39, 56, 76, 72, 54 ],
    money: 20
  },
  {
    ticket_ID: 919,
    shop_ID: 86,
    cahier_ID: 1,
    selectedNumbers: [ 63, 20, 73, 75, 70 ],
    money: 20
  },
  {
    ticket_ID: 920,
    shop_ID: 81,
    cahier_ID: 5,
    selectedNumbers: [ 27, 52, 58, 56, 40 ],
    money: 20
  },
  {
    ticket_ID: 921,
    shop_ID: 91,
    cahier_ID: 1,
    selectedNumbers: [ 54, 29, 22, 12, 63 ],
    money: 20
  },
  {
    ticket_ID: 922,
    shop_ID: 66,
    cahier_ID: 0,
    selectedNumbers: [ 38, 72, 78, 5, 27 ],
    money: 20
  },
  {
    ticket_ID: 923,
    shop_ID: 96,
    cahier_ID: 5,
    selectedNumbers: [ 7, 38, 19, 17, 47 ],
    money: 20
  },
  {
    ticket_ID: 924,
    shop_ID: 2,
    cahier_ID: 4,
    selectedNumbers: [ 24, 51, 12, 58, 49 ],
    money: 20
  },
  {
    ticket_ID: 925,
    shop_ID: 67,
    cahier_ID: 1,
    selectedNumbers: [ 6, 75, 59, 14, 57 ],
    money: 20
  },
  {
    ticket_ID: 926,
    shop_ID: 96,
    cahier_ID: 9,
    selectedNumbers: [ 63, 9, 15, 27, 57 ],
    money: 20
  },
  {
    ticket_ID: 927,
    shop_ID: 48,
    cahier_ID: 9,
    selectedNumbers: [ 2, 19, 80, 9, 79 ],
    money: 20
  },
  {
    ticket_ID: 928,
    shop_ID: 79,
    cahier_ID: 8,
    selectedNumbers: [ 26, 18, 51, 57, 55 ],
    money: 20
  },
  {
    ticket_ID: 929,
    shop_ID: 68,
    cahier_ID: 8,
    selectedNumbers: [ 25, 17, 50, 32, 3 ],
    money: 20
  },
  {
    ticket_ID: 930,
    shop_ID: 29,
    cahier_ID: 6,
    selectedNumbers: [ 49, 62, 16, 31, 34 ],
    money: 20
  },
  {
    ticket_ID: 931,
    shop_ID: 98,
    cahier_ID: 5,
    selectedNumbers: [ 31, 69, 70, 36, 77 ],
    money: 20
  },
  {
    ticket_ID: 932,
    shop_ID: 84,
    cahier_ID: 0,
    selectedNumbers: [ 31, 77, 8, 31, 17 ],
    money: 20
  },
  {
    ticket_ID: 933,
    shop_ID: 99,
    cahier_ID: 0,
    selectedNumbers: [ 68, 60, 53, 43, 19 ],
    money: 20
  },
  {
    ticket_ID: 934,
    shop_ID: 36,
    cahier_ID: 1,
    selectedNumbers: [ 47, 54, 10, 62, 63 ],
    money: 20
  },
  {
    ticket_ID: 935,
    shop_ID: 73,
    cahier_ID: 9,
    selectedNumbers: [ 79, 1, 49, 15, 55 ],
    money: 20
  },
  {
    ticket_ID: 936,shop_ID: 45,
    cahier_ID: 3,
    selectedNumbers: [ 41, 77, 62, 55, 69 ],
    money: 20
  },
  {
    ticket_ID: 937,
    shop_ID: 85,
    cahier_ID: 1,
    selectedNumbers: [ 68, 10, 75, 73, 1 ],
    money: 20
  },
  {
    ticket_ID: 938,
    shop_ID: 13,
    cahier_ID: 3,
    selectedNumbers: [ 41, 54, 5, 34, 60 ],
    money: 20
  },
  {
    ticket_ID: 939,
    shop_ID: 88,
    cahier_ID: 7,
    selectedNumbers: [ 61, 28, 14, 30, 57 ],
    money: 20
  },
  {
    ticket_ID: 940,
    shop_ID: 24,
    cahier_ID: 8,
    selectedNumbers: [ 36, 72, 59, 75, 5 ],
    money: 20
  },
  {
    ticket_ID: 941,
    shop_ID: 81,
    cahier_ID: 1,
    selectedNumbers: [ 61, 2, 5, 12, 47 ],
    money: 20
  },
  {
    ticket_ID: 942,
    shop_ID: 42,
    cahier_ID: 6,
    selectedNumbers: [ 35, 70, 62, 14, 27 ],
    money: 20
  },
  {
    ticket_ID: 943,
    shop_ID: 6,
    cahier_ID: 3,
    selectedNumbers: [ 17, 18, 76, 29, 67 ],
    money: 20
  },
  {
    ticket_ID: 944,
    shop_ID: 49,
    cahier_ID: 8,
    selectedNumbers: [ 57, 12, 47, 49, 75 ],
    money: 20
  },
  {
    ticket_ID: 945,
    shop_ID: 79,
    cahier_ID: 9,
    selectedNumbers: [ 72, 39, 22, 1, 21 ],
    money: 20
  },
  {
    ticket_ID: 946,
    shop_ID: 2,
    cahier_ID: 8,
    selectedNumbers: [ 34, 63, 37, 78, 36 ],
    money: 20
  },
  {
    ticket_ID: 947,
    shop_ID: 44,
    cahier_ID: 6,
    selectedNumbers: [ 44, 12, 80, 48, 64 ],
    money: 20
  },
  {
    ticket_ID: 948,
    shop_ID: 59,
    cahier_ID: 8,
    selectedNumbers: [ 75, 37, 12, 79, 63 ],
    money: 20
  },
  {
    ticket_ID: 949,
    shop_ID: 46,
    cahier_ID: 4,
    selectedNumbers: [ 62, 10, 47, 62, 79 ],
    money: 20
  },
  {
    ticket_ID: 950,
    shop_ID: 32,
    cahier_ID: 1,
    selectedNumbers: [ 46, 32, 10, 47, 24 ],
    money: 20
  },
  {
    ticket_ID: 951,
    shop_ID: 66,
    cahier_ID: 6,
    selectedNumbers: [ 72, 10, 38, 9, 34 ],
    money: 20
  },
  {
    ticket_ID: 952,
    shop_ID: 4,
    cahier_ID: 2,
    selectedNumbers: [ 64, 61, 75, 8, 3 ],
    money: 20
  },
  {
    ticket_ID: 953,
    shop_ID: 56,
    cahier_ID: 9,
    selectedNumbers: [ 36, 22, 12, 31, 78 ],
    money: 20
  },
  {
    ticket_ID: 954,
    shop_ID: 21,
    cahier_ID: 3,
    selectedNumbers: [ 62, 66, 22, 14, 72],
    money: 20
  },
  {
    ticket_ID: 955,
    shop_ID: 57,
    cahier_ID: 8,
    selectedNumbers: [ 29, 24, 68, 65, 71 ],
    money: 20
  },
  {
    ticket_ID: 956,
    shop_ID: 7,
    cahier_ID: 3,
    selectedNumbers: [ 45, 67, 38, 65, 15 ],
    money: 20
  },
  {
    ticket_ID: 957,
    shop_ID: 48,
    cahier_ID: 5,
    selectedNumbers: [ 46, 71, 51, 26, 49 ],
    money: 20
  },
  {
    ticket_ID: 958,
    shop_ID: 64,
    cahier_ID: 2,
    selectedNumbers: [ 78, 20, 16, 47, 6 ],
    money: 20
  },
  {
    ticket_ID: 959,
    shop_ID: 14,
    cahier_ID: 5,
    selectedNumbers: [ 79, 9, 49, 63, 74 ],
    money: 20
  },
  {
    ticket_ID: 960,
    shop_ID: 58,
    cahier_ID: 0,
    selectedNumbers: [ 43, 72, 48, 39, 72 ],
    money: 20
  },
  {
    ticket_ID: 961,
    shop_ID: 51,
    cahier_ID: 3,
    selectedNumbers: [ 73, 25, 66, 63, 32 ],
    money: 20
  },
  {
    ticket_ID: 962,
    shop_ID: 22,
    cahier_ID: 5,
    selectedNumbers: [ 74, 75, 45, 29, 16 ],
    money: 20
  },
  {
    ticket_ID: 963,
    shop_ID: 39,
    cahier_ID: 0,
    selectedNumbers: [ 32, 19, 28, 51, 50 ],
    money: 20
  },
  {
    ticket_ID: 964,
    shop_ID: 11,
    cahier_ID: 4,
    selectedNumbers: [ 42, 80, 8, 48, 21 ],
    money: 20
  },
  {
    ticket_ID: 965,
    shop_ID: 13,
    cahier_ID: 4,
    selectedNumbers: [ 42, 73, 3, 65, 41 ],
    money: 20
  },
  {
    ticket_ID: 966,
    shop_ID: 98,
    cahier_ID: 6,
    selectedNumbers: [ 56, 77, 37, 33, 39 ],
    money: 20
  },
  {
    ticket_ID: 967,
    shop_ID: 16,
    cahier_ID: 1,
    selectedNumbers: [ 41, 80, 14, 19, 13 ],
    money: 20
  },
  {
    ticket_ID: 968,
    shop_ID: 85,
    cahier_ID: 2,
    selectedNumbers: [ 49, 61, 12, 19, 78 ],
    money: 20
  },
  {
    ticket_ID: 969,
    shop_ID: 90,
    cahier_ID: 2,
    selectedNumbers: [ 67, 17, 65, 56, 36 ],
    money: 20
  },
  {
    ticket_ID: 970,
    shop_ID: 88,
    cahier_ID: 7,
    selectedNumbers: [ 3, 23, 43, 18, 73 ],
    money: 20
  },
  {
    ticket_ID: 971,
    shop_ID: 98,
    cahier_ID: 6,
    selectedNumbers: [ 42, 46, 38, 30, 53 ],
    money: 20
  },
  {
    ticket_ID: 972,
    shop_ID: 94,
    cahier_ID: 3,
    selectedNumbers: [ 31, 46, 70, 63, 15 ],
    money: 20
  },
  {
    ticket_ID: 973,
    shop_ID: 60,
    cahier_ID: 8,
    selectedNumbers: [ 30, 20, 39, 76, 24 ],
    money: 20
  },
  {
    ticket_ID: 974,
    shop_ID: 58,
    cahier_ID: 6,
    selectedNumbers: [ 13, 31, 60, 9, 61 ],
    money: 20
  },
  {
    ticket_ID: 975,
    shop_ID: 1,
    cahier_ID: 3,
    selectedNumbers: [ 64, 28, 10, 60, 54 ],
    money: 20
  },
  {
    ticket_ID: 976,
    shop_ID: 58,
    cahier_ID: 8,
    selectedNumbers: [ 40, 61, 77, 48, 53 ],
    money: 20
  },
  {
    ticket_ID: 977,
    shop_ID: 50,
    cahier_ID: 1,
    selectedNumbers: [ 10, 7, 72, 53, 18 ],
    money: 20
  },
  {
    ticket_ID: 978,
    shop_ID: 43,
    cahier_ID: 4,
    selectedNumbers: [ 39, 72, 23, 32, 64 ],
    money: 20
  },
  {
    ticket_ID: 979,
    shop_ID: 85,
    cahier_ID: 0,
    selectedNumbers: [ 40, 44, 59, 22, 33 ],
    money: 20
  },
  {
    ticket_ID: 980,
    shop_ID: 65,
    cahier_ID: 9,
    selectedNumbers: [ 48, 23, 24, 25, 27 ],
    money: 20
  },
  {
    ticket_ID: 981,
    shop_ID: 41,
    cahier_ID: 5,
    selectedNumbers: [ 35, 2, 22, 77, 53 ],
    money: 20
  },
  {
    ticket_ID: 982,
    shop_ID: 98,
    cahier_ID: 8,
    selectedNumbers: [ 25, 57, 59, 67, 64 ],
    money: 20
  },
  {
    ticket_ID: 983,
    shop_ID: 26,
    cahier_ID: 3,
    selectedNumbers: [ 28, 66, 33, 22, 37 ],
    money: 20
  },
  {
    ticket_ID: 984,
    shop_ID: 77,
    cahier_ID: 5,
    selectedNumbers: [ 16, 26, 12, 15, 11 ],
    money: 20
  },
  {
    ticket_ID: 985,
    shop_ID: 66,
    cahier_ID: 0,
    selectedNumbers: [ 30, 73, 49, 42, 52 ],
    money: 20
  },
  {
    ticket_ID: 986,
    shop_ID: 64,
    cahier_ID: 4,
    selectedNumbers: [ 35, 71, 49, 3, 54 ],
    money: 20
  },
  {
    ticket_ID: 987,
    shop_ID: 60,
    cahier_ID: 0,
    selectedNumbers: [ 22, 36, 31, 13, 54 ],
    money: 20
  },
  {
    ticket_ID: 988,
    shop_ID: 78,
    cahier_ID: 5,
    selectedNumbers: [ 50, 26, 4, 15, 28 ],
    money: 20
  },
  {
    ticket_ID: 989,
    shop_ID: 95,
    cahier_ID: 9,
    selectedNumbers: [ 8, 58, 4, 50, 41 ],
    money: 20
  },
  {
    ticket_ID: 990,
    shop_ID: 19,
    cahier_ID: 9,
    selectedNumbers: [ 21, 77, 11, 35, 19 ],
    money: 20
  },
  {
    ticket_ID: 991,
    shop_ID: 55,
    cahier_ID: 7,
    selectedNumbers: [ 33, 1, 59, 58, 75 ],
    money: 20
  },
  {
    ticket_ID: 992,
    shop_ID: 62,
    cahier_ID: 3,
    selectedNumbers: [ 40, 11, 67, 64, 72 ],
    money: 20
  },
  {
    ticket_ID: 993,
    shop_ID: 20,
    cahier_ID: 0,
    selectedNumbers: [ 39, 36, 54, 44, 21 ],
    money: 20
  },
  {
    ticket_ID: 994,
    shop_ID: 19,
    cahier_ID: 9,
    selectedNumbers: [ 36, 18, 41, 32, 56 ],
    money: 20
  },
  {
    ticket_ID: 995,
    shop_ID: 37,
    cahier_ID: 6,
    selectedNumbers: [ 49, 44, 19, 45, 4 ],
    money: 20
  },
  {
    ticket_ID: 996,
    shop_ID: 89,
    cahier_ID: 1,
    selectedNumbers: [ 5, 69, 54, 12, 19 ],
    money: 20
  },
  {
    ticket_ID: 997,
    shop_ID: 44,
    cahier_ID: 2,
    selectedNumbers: [ 73, 18, 21, 80, 27 ],
    money: 20
  },
  {
    ticket_ID: 998,
    shop_ID: 76,
    cahier_ID: 0,
    selectedNumbers: [ 65, 9, 55, 76, 50 ],
    money: 20
  },
  {
    ticket_ID: 999,
    shop_ID: 61,
    cahier_ID: 7,
    selectedNumbers: [ 54, 11, 78, 60, 76 ],
    money: 20
  },
  {
    ticket_ID: 1000,
    shop_ID: 78,
    cahier_ID: 9,
    selectedNumbers: [ 35, 71, 2, 59, 41 ],
    money: 20
  }
]

export default tickets;