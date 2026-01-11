// app.js

/* ===== CSVから変換されたデータを直接埋め込み ===== */
const data = [
{"src": 1, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "奇数", "g": "30G", "veteran": "あり,ノーマル,狙い,平均pt,平均pt,奇数,30G,あり"}
{"src": 2, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "奇数", "g": "30G", "veteran": "なし,ノーマル,狙い,平均pt,平均pt,奇数,30G,なし"}
{"src": 3, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "奇数", "g": "50G", "veteran": "あり,ノーマル,狙い,平均pt,平均pt,奇数,50G,あり"}
{"src": 4, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "奇数", "g": "50G", "veteran": "なし,ノーマル,狙い,平均pt,平均pt,奇数,50G,なし"}
{"src": 5, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "奇数", "g": "70G", "veteran": "あり,ノーマル,狙い,平均pt,平均pt,奇数,70G,あり"}
{"src": 6, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "奇数", "g": "70G", "veteran": "なし,ノーマル,狙い,平均pt,平均pt,奇数,70G,なし"}
{"src": 7, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "奇数", "g": "90G", "veteran": "あり,ノーマル,狙い,平均pt,平均pt,奇数,90G,あり"}
{"src": 8, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "奇数", "g": "90G", "veteran": "なし,ノーマル,狙い,平均pt,平均pt,奇数,90G,なし"}
{"src": 9, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "偶数", "g": "30G", "veteran": "あり,ノーマル,狙い,平均pt,平均pt,偶数,30G,あり"}
{"src": 10, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "偶数", "g": "30G", "veteran": "なし,ノーマル,狙い,平均pt,平均pt,偶数,30G,なし"}
{"src": 11, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "偶数", "g": "50G", "veteran": "あり,ノーマル,狙い,平均pt,平均pt,偶数,50G,あり"}
{"src": 12, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "偶数", "g": "50G", "veteran": "なし,ノーマル,狙い,平均pt,平均pt,偶数,50G,なし"}
{"src": 13, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "偶数", "g": "70G", "veteran": "あり,ノーマル,狙い,平均pt,平均pt,偶数,70G,あり"}
{"src": 14, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "偶数", "g": "70G", "veteran": "なし,ノーマル,狙い,平均pt,平均pt,偶数,70G,なし"}
{"src": 15, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "偶数", "g": "90G", "veteran": "あり,ノーマル,狙い,平均pt,平均pt,偶数,90G,あり"}
{"src": 16, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "偶数", "g": "90G", "veteran": "なし,ノーマル,狙い,平均pt,平均pt,偶数,90G,なし"}
{"src": 17, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "奇数", "g": "30G", "veteran": "あり,ノーマル,狙い,初期pt,平均pt,奇数,30G,あり"}
{"src": 18, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "奇数", "g": "30G", "veteran": "なし,ノーマル,狙い,初期pt,平均pt,奇数,30G,なし"}
{"src": 19, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "奇数", "g": "50G", "veteran": "あり,ノーマル,狙い,初期pt,平均pt,奇数,50G,あり"}
{"src": 20, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "奇数", "g": "50G", "veteran": "なし,ノーマル,狙い,初期pt,平均pt,奇数,50G,なし"}
{"src": 21, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "奇数", "g": "70G", "veteran": "あり,ノーマル,狙い,初期pt,平均pt,奇数,70G,あり"}
{"src": 22, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "奇数", "g": "70G", "veteran": "なし,ノーマル,狙い,初期pt,平均pt,奇数,70G,なし"}
{"src": 23, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "奇数", "g": "90G", "veteran": "あり,ノーマル,狙い,初期pt,平均pt,奇数,90G,あり"}
{"src": 24, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "奇数", "g": "90G", "veteran": "なし,ノーマル,狙い,初期pt,平均pt,奇数,90G,なし"}
{"src": 25, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "偶数", "g": "30G", "veteran": "あり,ノーマル,狙い,初期pt,平均pt,偶数,30G,あり"}
{"src": 26, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "偶数", "g": "30G", "veteran": "なし,ノーマル,狙い,初期pt,平均pt,偶数,30G,なし"}
{"src": 27, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "偶数", "g": "50G", "veteran": "あり,ノーマル,狙い,初期pt,平均pt,偶数,50G,あり"}
{"src": 28, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "偶数", "g": "50G", "veteran": "なし,ノーマル,狙い,初期pt,平均pt,偶数,50G,なし"}
{"src": 29, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "偶数", "g": "70G", "veteran": "あり,ノーマル,狙い,初期pt,平均pt,偶数,70G,あり"}
{"src": 30, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "偶数", "g": "70G", "veteran": "なし,ノーマル,狙い,初期pt,平均pt,偶数,70G,なし"}
{"src": 31, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "偶数", "g": "90G", "veteran": "あり,ノーマル,狙い,初期pt,平均pt,偶数,90G,あり"}
{"src": 32, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "偶数", "g": "90G", "veteran": "なし,ノーマル,狙い,初期pt,平均pt,偶数,90G,なし"}
{"src": 33, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "奇数", "g": "30G", "veteran": "あり,ノーマル,狙い,平均pt,初期pt,奇数,30G,あり"}
{"src": 34, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "奇数", "g": "30G", "veteran": "なし,ノーマル,狙い,平均pt,初期pt,奇数,30G,なし"}
{"src": 35, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "奇数", "g": "50G", "veteran": "あり,ノーマル,狙い,平均pt,初期pt,奇数,50G,あり"}
{"src": 36, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "奇数", "g": "50G", "veteran": "なし,ノーマル,狙い,平均pt,初期pt,奇数,50G,なし"}
{"src": 37, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "奇数", "g": "70G", "veteran": "あり,ノーマル,狙い,平均pt,初期pt,奇数,70G,あり"}
{"src": 38, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "奇数", "g": "70G", "veteran": "なし,ノーマル,狙い,平均pt,初期pt,奇数,70G,なし"}
{"src": 39, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "奇数", "g": "90G", "veteran": "あり,ノーマル,狙い,平均pt,初期pt,奇数,90G,あり"}
{"src": 40, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "奇数", "g": "90G", "veteran": "なし,ノーマル,狙い,平均pt,初期pt,奇数,90G,なし"}
{"src": 41, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "偶数", "g": "30G", "veteran": "あり,ノーマル,狙い,平均pt,初期pt,偶数,30G,あり"}
{"src": 42, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "偶数", "g": "30G", "veteran": "なし,ノーマル,狙い,平均pt,初期pt,偶数,30G,なし"}
{"src": 43, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "偶数", "g": "50G", "veteran": "あり,ノーマル,狙い,平均pt,初期pt,偶数,50G,あり"}
{"src": 44, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "偶数", "g": "50G", "veteran": "なし,ノーマル,狙い,平均pt,初期pt,偶数,50G,なし"}
{"src": 45, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "偶数", "g": "70G", "veteran": "あり,ノーマル,狙い,平均pt,初期pt,偶数,70G,あり"}
{"src": 46, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "偶数", "g": "70G", "veteran": "なし,ノーマル,狙い,平均pt,初期pt,偶数,70G,なし"}
{"src": 47, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "偶数", "g": "90G", "veteran": "あり,ノーマル,狙い,平均pt,初期pt,偶数,90G,あり"}
{"src": 48, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "偶数", "g": "90G", "veteran": "なし,ノーマル,狙い,平均pt,初期pt,偶数,90G,なし"}
{"src": 49, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "奇数", "g": "30G", "veteran": "あり,ノーマル,狙い,初期pt,初期pt,奇数,30G,あり"}
{"src": 50, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "奇数", "g": "30G", "veteran": "なし,ノーマル,狙い,初期pt,初期pt,奇数,30G,なし"}
{"src": 51, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "奇数", "g": "50G", "veteran": "あり,ノーマル,狙い,初期pt,初期pt,奇数,50G,あり"}
{"src": 52, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "奇数", "g": "50G", "veteran": "なし,ノーマル,狙い,初期pt,初期pt,奇数,50G,なし"}
{"src": 53, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "奇数", "g": "70G", "veteran": "あり,ノーマル,狙い,初期pt,初期pt,奇数,70G,あり"}
{"src": 54, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "奇数", "g": "70G", "veteran": "なし,ノーマル,狙い,初期pt,初期pt,奇数,70G,なし"}
{"src": 55, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "奇数", "g": "90G", "veteran": "あり,ノーマル,狙い,初期pt,初期pt,奇数,90G,あり"}
{"src": 56, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "奇数", "g": "90G", "veteran": "なし,ノーマル,狙い,初期pt,初期pt,奇数,90G,なし"}
{"src": 57, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "偶数", "g": "30G", "veteran": "あり,ノーマル,狙い,初期pt,初期pt,偶数,30G,あり"}
{"src": 58, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "偶数", "g": "30G", "veteran": "なし,ノーマル,狙い,初期pt,初期pt,偶数,30G,なし"}
{"src": 59, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "偶数", "g": "50G", "veteran": "あり,ノーマル,狙い,初期pt,初期pt,偶数,50G,あり"}
{"src": 60, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "偶数", "g": "50G", "veteran": "なし,ノーマル,狙い,初期pt,初期pt,偶数,50G,なし"}
{"src": 61, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "偶数", "g": "70G", "veteran": "あり,ノーマル,狙い,初期pt,初期pt,偶数,70G,あり"}
{"src": 62, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "偶数", "g": "70G", "veteran": "なし,ノーマル,狙い,初期pt,初期pt,偶数,70G,なし"}
{"src": 63, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "偶数", "g": "90G", "veteran": "あり,ノーマル,狙い,初期pt,初期pt,偶数,90G,あり"}
{"src": 64, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "偶数", "g": "90G", "veteran": "なし,ノーマル,狙い,初期pt,初期pt,偶数,90G,なし"}
{"src": 65, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "30G", "veteran": "あり,ノーマル,平均pt,狙い,平均pt,奇数,30G,あり"}
{"src": 66, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "30G", "veteran": "なし,ノーマル,平均pt,狙い,平均pt,奇数,30G,なし"}
{"src": 67, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "50G", "veteran": "あり,ノーマル,平均pt,狙い,平均pt,奇数,50G,あり"}
{"src": 68, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "50G", "veteran": "なし,ノーマル,平均pt,狙い,平均pt,奇数,50G,なし"}
{"src": 69, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "70G", "veteran": "あり,ノーマル,平均pt,狙い,平均pt,奇数,70G,あり"}
{"src": 70, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "70G", "veteran": "なし,ノーマル,平均pt,狙い,平均pt,奇数,70G,なし"}
{"src": 71, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "90G", "veteran": "あり,ノーマル,平均pt,狙い,平均pt,奇数,90G,あり"}
{"src": 72, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "90G", "veteran": "なし,ノーマル,平均pt,狙い,平均pt,奇数,90G,なし"}
{"src": 73, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "30G", "veteran": "あり,ノーマル,平均pt,狙い,平均pt,偶数,30G,あり"}
{"src": 74, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "30G", "veteran": "なし,ノーマル,平均pt,狙い,平均pt,偶数,30G,なし"}
{"src": 75, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "50G", "veteran": "あり,ノーマル,平均pt,狙い,平均pt,偶数,50G,あり"}
{"src": 76, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "50G", "veteran": "なし,ノーマル,平均pt,狙い,平均pt,偶数,50G,なし"}
{"src": 77, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "70G", "veteran": "あり,ノーマル,平均pt,狙い,平均pt,偶数,70G,あり"}
{"src": 78, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "70G", "veteran": "なし,ノーマル,平均pt,狙い,平均pt,偶数,70G,なし"}
{"src": 79, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "90G", "veteran": "あり,ノーマル,平均pt,狙い,平均pt,偶数,90G,あり"}
{"src": 80, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "90G", "veteran": "なし,ノーマル,平均pt,狙い,平均pt,偶数,90G,なし"}
{"src": 81, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "30G", "veteran": "あり,ノーマル,初期pt,狙い,平均pt,奇数,30G,あり"}
{"src": 82, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "30G", "veteran": "なし,ノーマル,初期pt,狙い,平均pt,奇数,30G,なし"}
{"src": 83, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "50G", "veteran": "あり,ノーマル,初期pt,狙い,平均pt,奇数,50G,あり"}
{"src": 84, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "50G", "veteran": "なし,ノーマル,初期pt,狙い,平均pt,奇数,50G,なし"}
{"src": 85, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "70G", "veteran": "あり,ノーマル,初期pt,狙い,平均pt,奇数,70G,あり"}
{"src": 86, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "70G", "veteran": "なし,ノーマル,初期pt,狙い,平均pt,奇数,70G,なし"}
{"src": 87, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "90G", "veteran": "あり,ノーマル,初期pt,狙い,平均pt,奇数,90G,あり"}
{"src": 88, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "90G", "veteran": "なし,ノーマル,初期pt,狙い,平均pt,奇数,90G,なし"}
{"src": 89, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "30G", "veteran": "あり,ノーマル,初期pt,狙い,平均pt,偶数,30G,あり"}
{"src": 90, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "30G", "veteran": "なし,ノーマル,初期pt,狙い,平均pt,偶数,30G,なし"}
{"src": 91, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "50G", "veteran": "あり,ノーマル,初期pt,狙い,平均pt,偶数,50G,あり"}
{"src": 92, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "50G", "veteran": "なし,ノーマル,初期pt,狙い,平均pt,偶数,50G,なし"}
{"src": 93, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "70G", "veteran": "あり,ノーマル,初期pt,狙い,平均pt,偶数,70G,あり"}
{"src": 94, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "70G", "veteran": "なし,ノーマル,初期pt,狙い,平均pt,偶数,70G,なし"}
{"src": 95, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "90G", "veteran": "あり,ノーマル,初期pt,狙い,平均pt,偶数,90G,あり"}
{"src": 96, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "90G", "veteran": "なし,ノーマル,初期pt,狙い,平均pt,偶数,90G,なし"}
{"src": 97, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "30G", "veteran": "あり,ノーマル,平均pt,狙い,初期pt,奇数,30G,あり"}
{"src": 98, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "30G", "veteran": "なし,ノーマル,平均pt,狙い,初期pt,奇数,30G,なし"}
{"src": 99, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "50G", "veteran": "あり,ノーマル,平均pt,狙い,初期pt,奇数,50G,あり"}
{"src": 100, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "50G", "veteran": "なし,ノーマル,平均pt,狙い,初期pt,奇数,50G,なし"}
{"src": 101, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "70G", "veteran": "あり,ノーマル,平均pt,狙い,初期pt,奇数,70G,あり"}
{"src": 102, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "70G", "veteran": "なし,ノーマル,平均pt,狙い,初期pt,奇数,70G,なし"}
{"src": 103, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "90G", "veteran": "あり,ノーマル,平均pt,狙い,初期pt,奇数,90G,あり"}
{"src": 104, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "90G", "veteran": "なし,ノーマル,平均pt,狙い,初期pt,奇数,90G,なし"}
{"src": 105, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "30G", "veteran": "あり,ノーマル,平均pt,狙い,初期pt,偶数,30G,あり"}
{"src": 106, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "30G", "veteran": "なし,ノーマル,平均pt,狙い,初期pt,偶数,30G,なし"}
{"src": 107, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "50G", "veteran": "あり,ノーマル,平均pt,狙い,初期pt,偶数,50G,あり"}
{"src": 108, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "50G", "veteran": "なし,ノーマル,平均pt,狙い,初期pt,偶数,50G,なし"}
{"src": 109, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "70G", "veteran": "あり,ノーマル,平均pt,狙い,初期pt,偶数,70G,あり"}
{"src": 110, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "70G", "veteran": "なし,ノーマル,平均pt,狙い,初期pt,偶数,70G,なし"}
{"src": 111, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "90G", "veteran": "あり,ノーマル,平均pt,狙い,初期pt,偶数,90G,あり"}
{"src": 112, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "90G", "veteran": "なし,ノーマル,平均pt,狙い,初期pt,偶数,90G,なし"}
{"src": 113, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "30G", "veteran": "あり,ノーマル,初期pt,狙い,初期pt,奇数,30G,あり"}
{"src": 114, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "30G", "veteran": "なし,ノーマル,初期pt,狙い,初期pt,奇数,30G,なし"}
{"src": 115, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "50G", "veteran": "あり,ノーマル,初期pt,狙い,初期pt,奇数,50G,あり"}
{"src": 116, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "50G", "veteran": "なし,ノーマル,初期pt,狙い,初期pt,奇数,50G,なし"}
{"src": 117, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "70G", "veteran": "あり,ノーマル,初期pt,狙い,初期pt,奇数,70G,あり"}
{"src": 118, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "70G", "veteran": "なし,ノーマル,初期pt,狙い,初期pt,奇数,70G,なし"}
{"src": 119, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "90G", "veteran": "あり,ノーマル,初期pt,狙い,初期pt,奇数,90G,あり"}
{"src": 120, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "90G", "veteran": "なし,ノーマル,初期pt,狙い,初期pt,奇数,90G,なし"}
{"src": 121, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "30G", "veteran": "あり,ノーマル,初期pt,狙い,初期pt,偶数,30G,あり"}
{"src": 122, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "30G", "veteran": "なし,ノーマル,初期pt,狙い,初期pt,偶数,30G,なし"}
{"src": 123, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "50G", "veteran": "あり,ノーマル,初期pt,狙い,初期pt,偶数,50G,あり"}
{"src": 124, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "50G", "veteran": "なし,ノーマル,初期pt,狙い,初期pt,偶数,50G,なし"}
{"src": 125, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "70G", "veteran": "あり,ノーマル,初期pt,狙い,初期pt,偶数,70G,あり"}
{"src": 126, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "70G", "veteran": "なし,ノーマル,初期pt,狙い,初期pt,偶数,70G,なし"}
{"src": 127, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "90G", "veteran": "あり,ノーマル,初期pt,狙い,初期pt,偶数,90G,あり"}
{"src": 128, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "90G", "veteran": "なし,ノーマル,初期pt,狙い,初期pt,偶数,90G,なし"}
{"src": 129, "machine": "ノーマル", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "30G", "veteran": "あり,ノーマル,平均pt,平均pt,狙い,奇数,30G,あり"}
{"src": 130, "machine": "ノーマル", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "30G", "veteran": "なし,ノーマル,平均pt,平均pt,狙い,奇数,30G,なし"}
{"src": 131, "machine": "ノーマル", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "50G", "veteran": "あり,ノーマル,平均pt,平均pt,狙い,奇数,50G,あり"}
{"src": 132, "machine": "ノーマル", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "50G", "veteran": "なし,ノーマル,平均pt,平均pt,狙い,奇数,50G,なし"}
{"src": 133, "machine": "ノーマル", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "70G", "veteran": "あり,ノーマル,平均pt,平均pt,狙い,奇数,70G,あり"}
{"src": 134, "machine": "ノーマル", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "70G", "veteran": "なし,ノーマル,平均pt,平均pt,狙い,奇数,70G,なし"}
{"src": 135, "machine": "ノーマル", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "90G", "veteran": "あり,ノーマル,平均pt,平均pt,狙い,奇数,90G,あり"}
{"src": 136, "machine": "ノーマル", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "90G", "veteran": "なし,ノーマル,平均pt,平均pt,狙い,奇数,90G,なし"}
{"src": 137, "machine": "ノーマル", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "30G", "veteran": "あり,ノーマル,平均pt,平均pt,狙い,偶数,30G,あり"}
{"src": 138, "machine": "ノーマル", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "30G", "veteran": "なし,ノーマル,平均pt,平均pt,狙い,偶数,30G,なし"}
{"src": 139, "machine": "ノーマル", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "50G", "veteran": "あり,ノーマル,平均pt,平均pt,狙い,偶数,50G,あり"}
{"src": 140, "machine": "ノーマル", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "50G", "veteran": "なし,ノーマル,平均pt,平均pt,狙い,偶数,50G,なし"}
{"src": 141, "machine": "ノーマル", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "70G", "veteran": "あり,ノーマル,平均pt,平均pt,狙い,偶数,70G,あり"}
{"src": 142, "machine": "ノーマル", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "70G", "veteran": "なし,ノーマル,平均pt,平均pt,狙い,偶数,70G,なし"}
{"src": 143, "machine": "ノーマル", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "90G", "veteran": "あり,ノーマル,平均pt,平均pt,狙い,偶数,90G,あり"}
{"src": 144, "machine": "ノーマル", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "90G", "veteran": "なし,ノーマル,平均pt,平均pt,狙い,偶数,90G,なし"}
{"src": 145, "machine": "ノーマル", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "30G", "veteran": "あり,ノーマル,初期pt,平均pt,狙い,奇数,30G,あり"}
{"src": 146, "machine": "ノーマル", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "30G", "veteran": "なし,ノーマル,初期pt,平均pt,狙い,奇数,30G,なし"}
{"src": 147, "machine": "ノーマル", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "50G", "veteran": "あり,ノーマル,初期pt,平均pt,狙い,奇数,50G,あり"}
{"src": 148, "machine": "ノーマル", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "50G", "veteran": "なし,ノーマル,初期pt,平均pt,狙い,奇数,50G,なし"}
{"src": 149, "machine": "ノーマル", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "70G", "veteran": "あり,ノーマル,初期pt,平均pt,狙い,奇数,70G,あり"}
{"src": 150, "machine": "ノーマル", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "70G", "veteran": "なし,ノーマル,初期pt,平均pt,狙い,奇数,70G,なし"}
{"src": 151, "machine": "ノーマル", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "90G", "veteran": "あり,ノーマル,初期pt,平均pt,狙い,奇数,90G,あり"}
{"src": 152, "machine": "ノーマル", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "90G", "veteran": "なし,ノーマル,初期pt,平均pt,狙い,奇数,90G,なし"}
{"src": 153, "machine": "ノーマル", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "30G", "veteran": "あり,ノーマル,初期pt,平均pt,狙い,偶数,30G,あり"}
{"src": 154, "machine": "ノーマル", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "30G", "veteran": "なし,ノーマル,初期pt,平均pt,狙い,偶数,30G,なし"}
{"src": 155, "machine": "ノーマル", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "50G", "veteran": "あり,ノーマル,初期pt,平均pt,狙い,偶数,50G,あり"}
{"src": 156, "machine": "ノーマル", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "50G", "veteran": "なし,ノーマル,初期pt,平均pt,狙い,偶数,50G,なし"}
{"src": 157, "machine": "ノーマル", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "70G", "veteran": "あり,ノーマル,初期pt,平均pt,狙い,偶数,70G,あり"}
{"src": 158, "machine": "ノーマル", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "70G", "veteran": "なし,ノーマル,初期pt,平均pt,狙い,偶数,70G,なし"}
{"src": 159, "machine": "ノーマル", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "90G", "veteran": "あり,ノーマル,初期pt,平均pt,狙い,偶数,90G,あり"}
{"src": 160, "machine": "ノーマル", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "90G", "veteran": "なし,ノーマル,初期pt,平均pt,狙い,偶数,90G,なし"}
{"src": 161, "machine": "ノーマル", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "30G", "veteran": "あり,ノーマル,平均pt,初期pt,狙い,奇数,30G,あり"}
{"src": 162, "machine": "ノーマル", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "30G", "veteran": "なし,ノーマル,平均pt,初期pt,狙い,奇数,30G,なし"}
{"src": 163, "machine": "ノーマル", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "50G", "veteran": "あり,ノーマル,平均pt,初期pt,狙い,奇数,50G,あり"}
{"src": 164, "machine": "ノーマル", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "50G", "veteran": "なし,ノーマル,平均pt,初期pt,狙い,奇数,50G,なし"}
{"src": 165, "machine": "ノーマル", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "70G", "veteran": "あり,ノーマル,平均pt,初期pt,狙い,奇数,70G,あり"}
{"src": 166, "machine": "ノーマル", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "70G", "veteran": "なし,ノーマル,平均pt,初期pt,狙い,奇数,70G,なし"}
{"src": 167, "machine": "ノーマル", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "90G", "veteran": "あり,ノーマル,平均pt,初期pt,狙い,奇数,90G,あり"}
{"src": 168, "machine": "ノーマル", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "90G", "veteran": "なし,ノーマル,平均pt,初期pt,狙い,奇数,90G,なし"}
{"src": 169, "machine": "ノーマル", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "30G", "veteran": "あり,ノーマル,平均pt,初期pt,狙い,偶数,30G,あり"}
{"src": 170, "machine": "ノーマル", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "30G", "veteran": "なし,ノーマル,平均pt,初期pt,狙い,偶数,30G,なし"}
{"src": 171, "machine": "ノーマル", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "50G", "veteran": "あり,ノーマル,平均pt,初期pt,狙い,偶数,50G,あり"}
{"src": 172, "machine": "ノーマル", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "50G", "veteran": "なし,ノーマル,平均pt,初期pt,狙い,偶数,50G,なし"}
{"src": 173, "machine": "ノーマル", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "70G", "veteran": "あり,ノーマル,平均pt,初期pt,狙い,偶数,70G,あり"}
{"src": 174, "machine": "ノーマル", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "70G", "veteran": "なし,ノーマル,平均pt,初期pt,狙い,偶数,70G,なし"}
{"src": 175, "machine": "ノーマル", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "90G", "veteran": "あり,ノーマル,平均pt,初期pt,狙い,偶数,90G,あり"}
{"src": 176, "machine": "ノーマル", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "90G", "veteran": "なし,ノーマル,平均pt,初期pt,狙い,偶数,90G,なし"}
{"src": 177, "machine": "ノーマル", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "30G", "veteran": "あり,ノーマル,初期pt,初期pt,狙い,奇数,30G,あり"}
{"src": 178, "machine": "ノーマル", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "30G", "veteran": "なし,ノーマル,初期pt,初期pt,狙い,奇数,30G,なし"}
{"src": 179, "machine": "ノーマル", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "50G", "veteran": "あり,ノーマル,初期pt,初期pt,狙い,奇数,50G,あり"}
{"src": 180, "machine": "ノーマル", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "50G", "veteran": "なし,ノーマル,初期pt,初期pt,狙い,奇数,50G,なし"}
{"src": 181, "machine": "ノーマル", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "70G", "veteran": "あり,ノーマル,初期pt,初期pt,狙い,奇数,70G,あり"}
{"src": 182, "machine": "ノーマル", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "70G", "veteran": "なし,ノーマル,初期pt,初期pt,狙い,奇数,70G,なし"}
{"src": 183, "machine": "ノーマル", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "90G", "veteran": "あり,ノーマル,初期pt,初期pt,狙い,奇数,90G,あり"}
{"src": 184, "machine": "ノーマル", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "90G", "veteran": "なし,ノーマル,初期pt,初期pt,狙い,奇数,90G,なし"}
{"src": 185, "machine": "ノーマル", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "30G", "veteran": "あり,ノーマル,初期pt,初期pt,狙い,偶数,30G,あり"}
{"src": 186, "machine": "ノーマル", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "30G", "veteran": "なし,ノーマル,初期pt,初期pt,狙い,偶数,30G,なし"}
{"src": 187, "machine": "ノーマル", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "50G", "veteran": "あり,ノーマル,初期pt,初期pt,狙い,偶数,50G,あり"}
{"src": 188, "machine": "ノーマル", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "50G", "veteran": "なし,ノーマル,初期pt,初期pt,狙い,偶数,50G,なし"}
{"src": 189, "machine": "ノーマル", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "70G", "veteran": "あり,ノーマル,初期pt,初期pt,狙い,偶数,70G,あり"}
{"src": 190, "machine": "ノーマル", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "70G", "veteran": "なし,ノーマル,初期pt,初期pt,狙い,偶数,70G,なし"}
{"src": 191, "machine": "ノーマル", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "90G", "veteran": "あり,ノーマル,初期pt,初期pt,狙い,偶数,90G,あり"}
{"src": 192, "machine": "ノーマル", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "90G", "veteran": "なし,ノーマル,初期pt,初期pt,狙い,偶数,90G,なし"}
{"src": 193, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "奇数", "g": "30G", "veteran": "あり,トランス,狙い,平均pt,平均pt,奇数,30G,あり"}
{"src": 194, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "奇数", "g": "30G", "veteran": "なし,トランス,狙い,平均pt,平均pt,奇数,30G,なし"}
{"src": 195, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "奇数", "g": "50G", "veteran": "あり,トランス,狙い,平均pt,平均pt,奇数,50G,あり"}
{"src": 196, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "奇数", "g": "50G", "veteran": "なし,トランス,狙い,平均pt,平均pt,奇数,50G,なし"}
{"src": 197, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "奇数", "g": "70G", "veteran": "あり,トランス,狙い,平均pt,平均pt,奇数,70G,あり"}
{"src": 198, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "奇数", "g": "70G", "veteran": "なし,トランス,狙い,平均pt,平均pt,奇数,70G,なし"}
{"src": 199, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "奇数", "g": "90G", "veteran": "あり,トランス,狙い,平均pt,平均pt,奇数,90G,あり"}
{"src": 200, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "奇数", "g": "90G", "veteran": "なし,トランス,狙い,平均pt,平均pt,奇数,90G,なし"}
{"src": 201, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "偶数", "g": "30G", "veteran": "あり,トランス,狙い,平均pt,平均pt,偶数,30G,あり"}
{"src": 202, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "偶数", "g": "30G", "veteran": "なし,トランス,狙い,平均pt,平均pt,偶数,30G,なし"}
{"src": 203, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "偶数", "g": "50G", "veteran": "あり,トランス,狙い,平均pt,平均pt,偶数,50G,あり"}
{"src": 204, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "偶数", "g": "50G", "veteran": "なし,トランス,狙い,平均pt,平均pt,偶数,50G,なし"}
{"src": 205, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "偶数", "g": "70G", "veteran": "あり,トランス,狙い,平均pt,平均pt,偶数,70G,あり"}
{"src": 206, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "偶数", "g": "70G", "veteran": "なし,トランス,狙い,平均pt,平均pt,偶数,70G,なし"}
{"src": 207, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "偶数", "g": "90G", "veteran": "あり,トランス,狙い,平均pt,平均pt,偶数,90G,あり"}
{"src": 208, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "偶数", "g": "90G", "veteran": "なし,トランス,狙い,平均pt,平均pt,偶数,90G,なし"}
{"src": 209, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "奇数", "g": "30G", "veteran": "あり,トランス,狙い,初期pt,平均pt,奇数,30G,あり"}
{"src": 210, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "奇数", "g": "30G", "veteran": "なし,トランス,狙い,初期pt,平均pt,奇数,30G,なし"}
{"src": 211, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "奇数", "g": "50G", "veteran": "あり,トランス,狙い,初期pt,平均pt,奇数,50G,あり"}
{"src": 212, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "奇数", "g": "50G", "veteran": "なし,トランス,狙い,初期pt,平均pt,奇数,50G,なし"}
{"src": 213, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "奇数", "g": "70G", "veteran": "あり,トランス,狙い,初期pt,平均pt,奇数,70G,あり"}
{"src": 214, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "奇数", "g": "70G", "veteran": "なし,トランス,狙い,初期pt,平均pt,奇数,70G,なし"}
{"src": 215, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "奇数", "g": "90G", "veteran": "あり,トランス,狙い,初期pt,平均pt,奇数,90G,あり"}
{"src": 216, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "奇数", "g": "90G", "veteran": "なし,トランス,狙い,初期pt,平均pt,奇数,90G,なし"}
{"src": 217, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "偶数", "g": "30G", "veteran": "あり,トランス,狙い,初期pt,平均pt,偶数,30G,あり"}
{"src": 218, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "偶数", "g": "30G", "veteran": "なし,トランス,狙い,初期pt,平均pt,偶数,30G,なし"}
{"src": 219, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "偶数", "g": "50G", "veteran": "あり,トランス,狙い,初期pt,平均pt,偶数,50G,あり"}
{"src": 220, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "偶数", "g": "50G", "veteran": "なし,トランス,狙い,初期pt,平均pt,偶数,50G,なし"}
{"src": 221, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "偶数", "g": "70G", "veteran": "あり,トランス,狙い,初期pt,平均pt,偶数,70G,あり"}
{"src": 222, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "偶数", "g": "70G", "veteran": "なし,トランス,狙い,初期pt,平均pt,偶数,70G,なし"}
{"src": 223, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "偶数", "g": "90G", "veteran": "あり,トランス,狙い,初期pt,平均pt,偶数,90G,あり"}
{"src": 224, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "偶数", "g": "90G", "veteran": "なし,トランス,狙い,初期pt,平均pt,偶数,90G,なし"}
{"src": 225, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "奇数", "g": "30G", "veteran": "あり,トランス,狙い,平均pt,初期pt,奇数,30G,あり"}
{"src": 226, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "奇数", "g": "30G", "veteran": "なし,トランス,狙い,平均pt,初期pt,奇数,30G,なし"}
{"src": 227, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "奇数", "g": "50G", "veteran": "あり,トランス,狙い,平均pt,初期pt,奇数,50G,あり"}
{"src": 228, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "奇数", "g": "50G", "veteran": "なし,トランス,狙い,平均pt,初期pt,奇数,50G,なし"}
{"src": 229, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "奇数", "g": "70G", "veteran": "あり,トランス,狙い,平均pt,初期pt,奇数,70G,あり"}
{"src": 230, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "奇数", "g": "70G", "veteran": "なし,トランス,狙い,平均pt,初期pt,奇数,70G,なし"}
{"src": 231, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "奇数", "g": "90G", "veteran": "あり,トランス,狙い,平均pt,初期pt,奇数,90G,あり"}
{"src": 232, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "奇数", "g": "90G", "veteran": "なし,トランス,狙い,平均pt,初期pt,奇数,90G,なし"}
{"src": 233, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "偶数", "g": "30G", "veteran": "あり,トランス,狙い,平均pt,初期pt,偶数,30G,あり"}
{"src": 234, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "偶数", "g": "30G", "veteran": "なし,トランス,狙い,平均pt,初期pt,偶数,30G,なし"}
{"src": 235, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "偶数", "g": "50G", "veteran": "あり,トランス,狙い,平均pt,初期pt,偶数,50G,あり"}
{"src": 236, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "偶数", "g": "50G", "veteran": "なし,トランス,狙い,平均pt,初期pt,偶数,50G,なし"}
{"src": 237, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "偶数", "g": "70G", "veteran": "あり,トランス,狙い,平均pt,初期pt,偶数,70G,あり"}
{"src": 238, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "偶数", "g": "70G", "veteran": "なし,トランス,狙い,平均pt,初期pt,偶数,70G,なし"}
{"src": 239, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "偶数", "g": "90G", "veteran": "あり,トランス,狙い,平均pt,初期pt,偶数,90G,あり"}
{"src": 240, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "偶数", "g": "90G", "veteran": "なし,トランス,狙い,平均pt,初期pt,偶数,90G,なし"}
{"src": 241, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "奇数", "g": "30G", "veteran": "あり,トランス,狙い,初期pt,初期pt,奇数,30G,あり"}
{"src": 242, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "奇数", "g": "30G", "veteran": "なし,トランス,狙い,初期pt,初期pt,奇数,30G,なし"}
{"src": 243, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "奇数", "g": "50G", "veteran": "あり,トランス,狙い,初期pt,初期pt,奇数,50G,あり"}
{"src": 244, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "奇数", "g": "50G", "veteran": "なし,トランス,狙い,初期pt,初期pt,奇数,50G,なし"}
{"src": 245, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "奇数", "g": "70G", "veteran": "あり,トランス,狙い,初期pt,初期pt,奇数,70G,あり"}
{"src": 246, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "奇数", "g": "70G", "veteran": "なし,トランス,狙い,初期pt,初期pt,奇数,70G,なし"}
{"src": 247, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "奇数", "g": "90G", "veteran": "あり,トランス,狙い,初期pt,初期pt,奇数,90G,あり"}
{"src": 248, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "奇数", "g": "90G", "veteran": "なし,トランス,狙い,初期pt,初期pt,奇数,90G,なし"}
{"src": 249, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "偶数", "g": "30G", "veteran": "あり,トランス,狙い,初期pt,初期pt,偶数,30G,あり"}
{"src": 250, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "偶数", "g": "30G", "veteran": "なし,トランス,狙い,初期pt,初期pt,偶数,30G,なし"}
{"src": 251, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "偶数", "g": "50G", "veteran": "あり,トランス,狙い,初期pt,初期pt,偶数,50G,あり"}
{"src": 252, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "偶数", "g": "50G", "veteran": "なし,トランス,狙い,初期pt,初期pt,偶数,50G,なし"}
{"src": 253, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "偶数", "g": "70G", "veteran": "あり,トランス,狙い,初期pt,初期pt,偶数,70G,あり"}
{"src": 254, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "偶数", "g": "70G", "veteran": "なし,トランス,狙い,初期pt,初期pt,偶数,70G,なし"}
{"src": 255, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "偶数", "g": "90G", "veteran": "あり,トランス,狙い,初期pt,初期pt,偶数,90G,あり"}
{"src": 256, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "偶数", "g": "90G", "veteran": "なし,トランス,狙い,初期pt,初期pt,偶数,90G,なし"}
{"src": 257, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "30G", "veteran": "あり,トランス,平均pt,狙い,平均pt,奇数,30G,あり"}
{"src": 258, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "30G", "veteran": "なし,トランス,平均pt,狙い,平均pt,奇数,30G,なし"}
{"src": 259, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "50G", "veteran": "あり,トランス,平均pt,狙い,平均pt,奇数,50G,あり"}
{"src": 260, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "50G", "veteran": "なし,トランス,平均pt,狙い,平均pt,奇数,50G,なし"}
{"src": 261, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "70G", "veteran": "あり,トランス,平均pt,狙い,平均pt,奇数,70G,あり"}
{"src": 262, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "70G", "veteran": "なし,トランス,平均pt,狙い,平均pt,奇数,70G,なし"}
{"src": 263, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "90G", "veteran": "あり,トランス,平均pt,狙い,平均pt,奇数,90G,あり"}
{"src": 264, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "90G", "veteran": "なし,トランス,平均pt,狙い,平均pt,奇数,90G,なし"}
{"src": 265, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "30G", "veteran": "あり,トランス,平均pt,狙い,平均pt,偶数,30G,あり"}
{"src": 266, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "30G", "veteran": "なし,トランス,平均pt,狙い,平均pt,偶数,30G,なし"}
{"src": 267, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "50G", "veteran": "あり,トランス,平均pt,狙い,平均pt,偶数,50G,あり"}
{"src": 268, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "50G", "veteran": "なし,トランス,平均pt,狙い,平均pt,偶数,50G,なし"}
{"src": 269, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "70G", "veteran": "あり,トランス,平均pt,狙い,平均pt,偶数,70G,あり"}
{"src": 270, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "70G", "veteran": "なし,トランス,平均pt,狙い,平均pt,偶数,70G,なし"}
{"src": 271, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "90G", "veteran": "あり,トランス,平均pt,狙い,平均pt,偶数,90G,あり"}
{"src": 272, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "90G", "veteran": "なし,トランス,平均pt,狙い,平均pt,偶数,90G,なし"}
{"src": 273, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "30G", "veteran": "あり,トランス,初期pt,狙い,平均pt,奇数,30G,あり"}
{"src": 274, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "30G", "veteran": "なし,トランス,初期pt,狙い,平均pt,奇数,30G,なし"}
{"src": 275, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "50G", "veteran": "あり,トランス,初期pt,狙い,平均pt,奇数,50G,あり"}
{"src": 276, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "50G", "veteran": "なし,トランス,初期pt,狙い,平均pt,奇数,50G,なし"}
{"src": 277, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "70G", "veteran": "あり,トランス,初期pt,狙い,平均pt,奇数,70G,あり"}
{"src": 278, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "70G", "veteran": "なし,トランス,初期pt,狙い,平均pt,奇数,70G,なし"}
{"src": 279, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "90G", "veteran": "あり,トランス,初期pt,狙い,平均pt,奇数,90G,あり"}
{"src": 280, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "90G", "veteran": "なし,トランス,初期pt,狙い,平均pt,奇数,90G,なし"}
{"src": 281, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "30G", "veteran": "あり,トランス,初期pt,狙い,平均pt,偶数,30G,あり"}
{"src": 282, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "30G", "veteran": "なし,トランス,初期pt,狙い,平均pt,偶数,30G,なし"}
{"src": 283, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "50G", "veteran": "あり,トランス,初期pt,狙い,平均pt,偶数,50G,あり"}
{"src": 284, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "50G", "veteran": "なし,トランス,初期pt,狙い,平均pt,偶数,50G,なし"}
{"src": 285, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "70G", "veteran": "あり,トランス,初期pt,狙い,平均pt,偶数,70G,あり"}
{"src": 286, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "70G", "veteran": "なし,トランス,初期pt,狙い,平均pt,偶数,70G,なし"}
{"src": 287, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "90G", "veteran": "あり,トランス,初期pt,狙い,平均pt,偶数,90G,あり"}
{"src": 288, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "90G", "veteran": "なし,トランス,初期pt,狙い,平均pt,偶数,90G,なし"}
{"src": 289, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "30G", "veteran": "あり,トランス,平均pt,狙い,初期pt,奇数,30G,あり"}
{"src": 290, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "30G", "veteran": "なし,トランス,平均pt,狙い,初期pt,奇数,30G,なし"}
{"src": 291, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "50G", "veteran": "あり,トランス,平均pt,狙い,初期pt,奇数,50G,あり"}
{"src": 292, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "50G", "veteran": "なし,トランス,平均pt,狙い,初期pt,奇数,50G,なし"}
{"src": 293, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "70G", "veteran": "あり,トランス,平均pt,狙い,初期pt,奇数,70G,あり"}
{"src": 294, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "70G", "veteran": "なし,トランス,平均pt,狙い,初期pt,奇数,70G,なし"}
{"src": 295, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "90G", "veteran": "あり,トランス,平均pt,狙い,初期pt,奇数,90G,あり"}
{"src": 296, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "90G", "veteran": "なし,トランス,平均pt,狙い,初期pt,奇数,90G,なし"}
{"src": 297, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "30G", "veteran": "あり,トランス,平均pt,狙い,初期pt,偶数,30G,あり"}
{"src": 298, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "30G", "veteran": "なし,トランス,平均pt,狙い,初期pt,偶数,30G,なし"}
{"src": 299, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "50G", "veteran": "あり,トランス,平均pt,狙い,初期pt,偶数,50G,あり"}
{"src": 300, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "50G", "veteran": "なし,トランス,平均pt,狙い,初期pt,偶数,50G,なし"}
{"src": 301, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "70G", "veteran": "あり,トランス,平均pt,狙い,初期pt,偶数,70G,あり"}
{"src": 302, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "70G", "veteran": "なし,トランス,平均pt,狙い,初期pt,偶数,70G,なし"}
{"src": 303, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "90G", "veteran": "あり,トランス,平均pt,狙い,初期pt,偶数,90G,あり"}
{"src": 304, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "90G", "veteran": "なし,トランス,平均pt,狙い,初期pt,偶数,90G,なし"}
{"src": 305, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "30G", "veteran": "あり,トランス,初期pt,狙い,初期pt,奇数,30G,あり"}
{"src": 306, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "30G", "veteran": "なし,トランス,初期pt,狙い,初期pt,奇数,30G,なし"}
{"src": 307, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "50G", "veteran": "あり,トランス,初期pt,狙い,初期pt,奇数,50G,あり"}
{"src": 308, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "50G", "veteran": "なし,トランス,初期pt,狙い,初期pt,奇数,50G,なし"}
{"src": 309, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "70G", "veteran": "あり,トランス,初期pt,狙い,初期pt,奇数,70G,あり"}
{"src": 310, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "70G", "veteran": "なし,トランス,初期pt,狙い,初期pt,奇数,70G,なし"}
{"src": 311, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "90G", "veteran": "あり,トランス,初期pt,狙い,初期pt,奇数,90G,あり"}
{"src": 312, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "90G", "veteran": "なし,トランス,初期pt,狙い,初期pt,奇数,90G,なし"}
{"src": 313, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "30G", "veteran": "あり,トランス,初期pt,狙い,初期pt,偶数,30G,あり"}
{"src": 314, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "30G", "veteran": "なし,トランス,初期pt,狙い,初期pt,偶数,30G,なし"}
{"src": 315, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "50G", "veteran": "あり,トランス,初期pt,狙い,初期pt,偶数,50G,あり"}
{"src": 316, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "50G", "veteran": "なし,トランス,初期pt,狙い,初期pt,偶数,50G,なし"}
{"src": 317, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "70G", "veteran": "あり,トランス,初期pt,狙い,初期pt,偶数,70G,あり"}
{"src": 318, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "70G", "veteran": "なし,トランス,初期pt,狙い,初期pt,偶数,70G,なし"}
{"src": 319, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "90G", "veteran": "あり,トランス,初期pt,狙い,初期pt,偶数,90G,あり"}
{"src": 320, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "90G", "veteran": "なし,トランス,初期pt,狙い,初期pt,偶数,90G,なし"}
{"src": 321, "machine": "トランス", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "30G", "veteran": "あり,トランス,平均pt,平均pt,狙い,奇数,30G,あり"}
{"src": 322, "machine": "トランス", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "30G", "veteran": "なし,トランス,平均pt,平均pt,狙い,奇数,30G,なし"}
{"src": 323, "machine": "トランス", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "50G", "veteran": "あり,トランス,平均pt,平均pt,狙い,奇数,50G,あり"}
{"src": 324, "machine": "トランス", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "50G", "veteran": "なし,トランス,平均pt,平均pt,狙い,奇数,50G,なし"}
{"src": 325, "machine": "トランス", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "70G", "veteran": "あり,トランス,平均pt,平均pt,狙い,奇数,70G,あり"}
{"src": 326, "machine": "トランス", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "70G", "veteran": "なし,トランス,平均pt,平均pt,狙い,奇数,70G,なし"}
{"src": 327, "machine": "トランス", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "90G", "veteran": "あり,トランス,平均pt,平均pt,狙い,奇数,90G,あり"}
{"src": 328, "machine": "トランス", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "90G", "veteran": "なし,トランス,平均pt,平均pt,狙い,奇数,90G,なし"}
{"src": 329, "machine": "トランス", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "30G", "veteran": "あり,トランス,平均pt,平均pt,狙い,偶数,30G,あり"}
{"src": 330, "machine": "トランス", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "30G", "veteran": "なし,トランス,平均pt,平均pt,狙い,偶数,30G,なし"}
{"src": 331, "machine": "トランス", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "50G", "veteran": "あり,トランス,平均pt,平均pt,狙い,偶数,50G,あり"}
{"src": 332, "machine": "トランス", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "50G", "veteran": "なし,トランス,平均pt,平均pt,狙い,偶数,50G,なし"}
{"src": 333, "machine": "トランス", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "70G", "veteran": "あり,トランス,平均pt,平均pt,狙い,偶数,70G,あり"}
{"src": 334, "machine": "トランス", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "70G", "veteran": "なし,トランス,平均pt,平均pt,狙い,偶数,70G,なし"}
{"src": 335, "machine": "トランス", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "90G", "veteran": "あり,トランス,平均pt,平均pt,狙い,偶数,90G,あり"}
{"src": 336, "machine": "トランス", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "90G", "veteran": "なし,トランス,平均pt,平均pt,狙い,偶数,90G,なし"}
{"src": 337, "machine": "トランス", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "30G", "veteran": "あり,トランス,初期pt,平均pt,狙い,奇数,30G,あり"}
{"src": 338, "machine": "トランス", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "30G", "veteran": "なし,トランス,初期pt,平均pt,狙い,奇数,30G,なし"}
{"src": 339, "machine": "トランス", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "50G", "veteran": "あり,トランス,初期pt,平均pt,狙い,奇数,50G,あり"}
{"src": 340, "machine": "トランス", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "50G", "veteran": "なし,トランス,初期pt,平均pt,狙い,奇数,50G,なし"}
{"src": 341, "machine": "トランス", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "70G", "veteran": "あり,トランス,初期pt,平均pt,狙い,奇数,70G,あり"}
{"src": 342, "machine": "トランス", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "70G", "veteran": "なし,トランス,初期pt,平均pt,狙い,奇数,70G,なし"}
{"src": 343, "machine": "トランス", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "90G", "veteran": "あり,トランス,初期pt,平均pt,狙い,奇数,90G,あり"}
{"src": 344, "machine": "トランス", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "90G", "veteran": "なし,トランス,初期pt,平均pt,狙い,奇数,90G,なし"}
{"src": 345, "machine": "トランス", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "30G", "veteran": "あり,トランス,初期pt,平均pt,狙い,偶数,30G,あり"}
{"src": 346, "machine": "トランス", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "30G", "veteran": "なし,トランス,初期pt,平均pt,狙い,偶数,30G,なし"}
{"src": 347, "machine": "トランス", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "50G", "veteran": "あり,トランス,初期pt,平均pt,狙い,偶数,50G,あり"}
{"src": 348, "machine": "トランス", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "50G", "veteran": "なし,トランス,初期pt,平均pt,狙い,偶数,50G,なし"}
{"src": 349, "machine": "トランス", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "70G", "veteran": "あり,トランス,初期pt,平均pt,狙い,偶数,70G,あり"}
{"src": 350, "machine": "トランス", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "70G", "veteran": "なし,トランス,初期pt,平均pt,狙い,偶数,70G,なし"}
{"src": 351, "machine": "トランス", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "90G", "veteran": "あり,トランス,初期pt,平均pt,狙い,偶数,90G,あり"}
{"src": 352, "machine": "トランス", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "90G", "veteran": "なし,トランス,初期pt,平均pt,狙い,偶数,90G,なし"}
{"src": 353, "machine": "トランス", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "30G", "veteran": "あり,トランス,平均pt,初期pt,狙い,奇数,30G,あり"}
{"src": 354, "machine": "トランス", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "30G", "veteran": "なし,トランス,平均pt,初期pt,狙い,奇数,30G,なし"}
{"src": 355, "machine": "トランス", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "50G", "veteran": "あり,トランス,平均pt,初期pt,狙い,奇数,50G,あり"}
{"src": 356, "machine": "トランス", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "50G", "veteran": "なし,トランス,平均pt,初期pt,狙い,奇数,50G,なし"}
{"src": 357, "machine": "トランス", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "70G", "veteran": "あり,トランス,平均pt,初期pt,狙い,奇数,70G,あり"}
{"src": 358, "machine": "トランス", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "70G", "veteran": "なし,トランス,平均pt,初期pt,狙い,奇数,70G,なし"}
{"src": 359, "machine": "トランス", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "90G", "veteran": "あり,トランス,平均pt,初期pt,狙い,奇数,90G,あり"}
{"src": 360, "machine": "トランス", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "90G", "veteran": "なし,トランス,平均pt,初期pt,狙い,奇数,90G,なし"}
{"src": 361, "machine": "トランス", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "30G", "veteran": "あり,トランス,平均pt,初期pt,狙い,偶数,30G,あり"}
{"src": 362, "machine": "トランス", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "30G", "veteran": "なし,トランス,平均pt,初期pt,狙い,偶数,30G,なし"}
{"src": 363, "machine": "トランス", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "50G", "veteran": "あり,トランス,平均pt,初期pt,狙い,偶数,50G,あり"}
{"src": 364, "machine": "トランス", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "50G", "veteran": "なし,トランス,平均pt,初期pt,狙い,偶数,50G,なし"}
{"src": 365, "machine": "トランス", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "70G", "veteran": "あり,トランス,平均pt,初期pt,狙い,偶数,70G,あり"}
{"src": 366, "machine": "トランス", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "70G", "veteran": "なし,トランス,平均pt,初期pt,狙い,偶数,70G,なし"}
{"src": 367, "machine": "トランス", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "90G", "veteran": "あり,トランス,平均pt,初期pt,狙い,偶数,90G,あり"}
{"src": 368, "machine": "トランス", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "90G", "veteran": "なし,トランス,平均pt,初期pt,狙い,偶数,90G,なし"}
{"src": 369, "machine": "トランス", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "30G", "veteran": "あり,トランス,初期pt,初期pt,狙い,奇数,30G,あり"}
{"src": 370, "machine": "トランス", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "30G", "veteran": "なし,トランス,初期pt,初期pt,狙い,奇数,30G,なし"}
{"src": 371, "machine": "トランス", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "50G", "veteran": "あり,トランス,初期pt,初期pt,狙い,奇数,50G,あり"}
{"src": 372, "machine": "トランス", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "50G", "veteran": "なし,トランス,初期pt,初期pt,狙い,奇数,50G,なし"}
{"src": 373, "machine": "トランス", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "70G", "veteran": "あり,トランス,初期pt,初期pt,狙い,奇数,70G,あり"}
{"src": 374, "machine": "トランス", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "70G", "veteran": "なし,トランス,初期pt,初期pt,狙い,奇数,70G,なし"}
{"src": 375, "machine": "トランス", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "90G", "veteran": "あり,トランス,初期pt,初期pt,狙い,奇数,90G,あり"}
{"src": 376, "machine": "トランス", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "90G", "veteran": "なし,トランス,初期pt,初期pt,狙い,奇数,90G,なし"}
{"src": 377, "machine": "トランス", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "30G", "veteran": "あり,トランス,初期pt,初期pt,狙い,偶数,30G,あり"}
{"src": 378, "machine": "トランス", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "30G", "veteran": "なし,トランス,初期pt,初期pt,狙い,偶数,30G,なし"}
{"src": 379, "machine": "トランス", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "50G", "veteran": "あり,トランス,初期pt,初期pt,狙い,偶数,50G,あり"}
{"src": 380, "machine": "トランス", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "50G", "veteran": "なし,トランス,初期pt,初期pt,狙い,偶数,50G,なし"}
{"src": 381, "machine": "トランス", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "70G", "veteran": "あり,トランス,初期pt,初期pt,狙い,偶数,70G,あり"}
{"src": 382, "machine": "トランス", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "70G", "veteran": "なし,トランス,初期pt,初期pt,狙い,偶数,70G,なし"}
{"src": 383, "machine": "トランス", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "90G", "veteran": "あり,トランス,初期pt,初期pt,狙い,偶数,90G,あり"}
{"src": 384, "machine": "トランス", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "90G", "veteran": "なし,トランス,初期pt,初期pt,狙い,偶数,90G,なし"}

  {
    src: "0003_ノーマル_狙い_平均pt_平均pt_奇数_50G_あり",
    機種: "ノーマル",
    きゅんきゅん: "狙い",
    ときめき: "平均pt",
    ぷっちゅん: "平均pt",
    百の位G: "奇数",
    下２桁G: "50G",
    ベトラン: "あり"
  }
];

/* ===== 列名（条件）取得 ===== */
const columns = Object.keys(data[0]).filter(k => k !== "src");

/* ===== 各条件の選択肢を生成 ===== */
const controls = document.getElementById("controls");
const selected = {};

columns.forEach(col => {
  const select = document.createElement("select");

  const values = [...new Set(data.map(row => row[col]))];

  values.forEach(v => {
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = v;
    select.appendChild(opt);
  });

  selected[col] = values[0]; // 初期値は先頭

  select.addEventListener("change", () => {
    selected[col] = select.value;
    render();
  });

  controls.appendChild(select);
});

/* ===== 画像表示 ===== */
const gallery = document.getElementById("gallery");

function render() {
  gallery.innerHTML = "";

  const filtered = data.filter(row => {
    return columns.every(col => row[col] === selected[col]);
  });

  filtered.forEach(row => {
    const img = document.createElement("img");
    img.src = "images/" + row.src;
    gallery.appendChild(img);
  });
}

render();

