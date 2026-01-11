// app.js

/* ===== CSVから変換されたデータを直接埋め込み ===== */
const data = [

{"src": 0001, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "奇数", "g": "30G", "veteran": "あり,ノーマル,狙い,平均pt,平均pt,奇数,30G,あり"}
{"src": 0002, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "奇数", "g": "30G", "veteran": "なし,ノーマル,狙い,平均pt,平均pt,奇数,30G,なし"}
{"src": 0003, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "奇数", "g": "50G", "veteran": "あり,ノーマル,狙い,平均pt,平均pt,奇数,50G,あり"}
{"src": 0004, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "奇数", "g": "50G", "veteran": "なし,ノーマル,狙い,平均pt,平均pt,奇数,50G,なし"}
{"src": 0005, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "奇数", "g": "70G", "veteran": "あり,ノーマル,狙い,平均pt,平均pt,奇数,70G,あり"}
{"src": 0006, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "奇数", "g": "70G", "veteran": "なし,ノーマル,狙い,平均pt,平均pt,奇数,70G,なし"}
{"src": 0007, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "奇数", "g": "90G", "veteran": "あり,ノーマル,狙い,平均pt,平均pt,奇数,90G,あり"}
{"src": 0008, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "奇数", "g": "90G", "veteran": "なし,ノーマル,狙い,平均pt,平均pt,奇数,90G,なし"}
{"src": 0009, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "偶数", "g": "30G", "veteran": "あり,ノーマル,狙い,平均pt,平均pt,偶数,30G,あり"}
{"src": 0010, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "偶数", "g": "30G", "veteran": "なし,ノーマル,狙い,平均pt,平均pt,偶数,30G,なし"}
{"src": 0011, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "偶数", "g": "50G", "veteran": "あり,ノーマル,狙い,平均pt,平均pt,偶数,50G,あり"}
{"src": 0012, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "偶数", "g": "50G", "veteran": "なし,ノーマル,狙い,平均pt,平均pt,偶数,50G,なし"}
{"src": 0013, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "偶数", "g": "70G", "veteran": "あり,ノーマル,狙い,平均pt,平均pt,偶数,70G,あり"}
{"src": 0014, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "偶数", "g": "70G", "veteran": "なし,ノーマル,狙い,平均pt,平均pt,偶数,70G,なし"}
{"src": 0015, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "偶数", "g": "90G", "veteran": "あり,ノーマル,狙い,平均pt,平均pt,偶数,90G,あり"}
{"src": 0016, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "偶数", "g": "90G", "veteran": "なし,ノーマル,狙い,平均pt,平均pt,偶数,90G,なし"}
{"src": 0017, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "奇数", "g": "30G", "veteran": "あり,ノーマル,狙い,初期pt,平均pt,奇数,30G,あり"}
{"src": 0018, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "奇数", "g": "30G", "veteran": "なし,ノーマル,狙い,初期pt,平均pt,奇数,30G,なし"}
{"src": 0019, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "奇数", "g": "50G", "veteran": "あり,ノーマル,狙い,初期pt,平均pt,奇数,50G,あり"}
{"src": 0020, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "奇数", "g": "50G", "veteran": "なし,ノーマル,狙い,初期pt,平均pt,奇数,50G,なし"}
{"src": 0021, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "奇数", "g": "70G", "veteran": "あり,ノーマル,狙い,初期pt,平均pt,奇数,70G,あり"}
{"src": 0022, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "奇数", "g": "70G", "veteran": "なし,ノーマル,狙い,初期pt,平均pt,奇数,70G,なし"}
{"src": 0023, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "奇数", "g": "90G", "veteran": "あり,ノーマル,狙い,初期pt,平均pt,奇数,90G,あり"}
{"src": 0024, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "奇数", "g": "90G", "veteran": "なし,ノーマル,狙い,初期pt,平均pt,奇数,90G,なし"}
{"src": 0025, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "偶数", "g": "30G", "veteran": "あり,ノーマル,狙い,初期pt,平均pt,偶数,30G,あり"}
{"src": 0026, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "偶数", "g": "30G", "veteran": "なし,ノーマル,狙い,初期pt,平均pt,偶数,30G,なし"}
{"src": 0027, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "偶数", "g": "50G", "veteran": "あり,ノーマル,狙い,初期pt,平均pt,偶数,50G,あり"}
{"src": 0028, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "偶数", "g": "50G", "veteran": "なし,ノーマル,狙い,初期pt,平均pt,偶数,50G,なし"}
{"src": 0029, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "偶数", "g": "70G", "veteran": "あり,ノーマル,狙い,初期pt,平均pt,偶数,70G,あり"}
{"src": 0030, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "偶数", "g": "70G", "veteran": "なし,ノーマル,狙い,初期pt,平均pt,偶数,70G,なし"}
{"src": 0031, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "偶数", "g": "90G", "veteran": "あり,ノーマル,狙い,初期pt,平均pt,偶数,90G,あり"}
{"src": 0032, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "偶数", "g": "90G", "veteran": "なし,ノーマル,狙い,初期pt,平均pt,偶数,90G,なし"}
{"src": 0033, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "奇数", "g": "30G", "veteran": "あり,ノーマル,狙い,平均pt,初期pt,奇数,30G,あり"}
{"src": 0034, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "奇数", "g": "30G", "veteran": "なし,ノーマル,狙い,平均pt,初期pt,奇数,30G,なし"}
{"src": 0035, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "奇数", "g": "50G", "veteran": "あり,ノーマル,狙い,平均pt,初期pt,奇数,50G,あり"}
{"src": 0036, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "奇数", "g": "50G", "veteran": "なし,ノーマル,狙い,平均pt,初期pt,奇数,50G,なし"}
{"src": 0037, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "奇数", "g": "70G", "veteran": "あり,ノーマル,狙い,平均pt,初期pt,奇数,70G,あり"}
{"src": 0038, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "奇数", "g": "70G", "veteran": "なし,ノーマル,狙い,平均pt,初期pt,奇数,70G,なし"}
{"src": 0039, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "奇数", "g": "90G", "veteran": "あり,ノーマル,狙い,平均pt,初期pt,奇数,90G,あり"}
{"src": 0040, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "奇数", "g": "90G", "veteran": "なし,ノーマル,狙い,平均pt,初期pt,奇数,90G,なし"}
{"src": 0041, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "偶数", "g": "30G", "veteran": "あり,ノーマル,狙い,平均pt,初期pt,偶数,30G,あり"}
{"src": 0042, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "偶数", "g": "30G", "veteran": "なし,ノーマル,狙い,平均pt,初期pt,偶数,30G,なし"}
{"src": 0043, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "偶数", "g": "50G", "veteran": "あり,ノーマル,狙い,平均pt,初期pt,偶数,50G,あり"}
{"src": 0044, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "偶数", "g": "50G", "veteran": "なし,ノーマル,狙い,平均pt,初期pt,偶数,50G,なし"}
{"src": 0045, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "偶数", "g": "70G", "veteran": "あり,ノーマル,狙い,平均pt,初期pt,偶数,70G,あり"}
{"src": 0046, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "偶数", "g": "70G", "veteran": "なし,ノーマル,狙い,平均pt,初期pt,偶数,70G,なし"}
{"src": 0047, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "偶数", "g": "90G", "veteran": "あり,ノーマル,狙い,平均pt,初期pt,偶数,90G,あり"}
{"src": 0048, "machine": "ノーマル", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "偶数", "g": "90G", "veteran": "なし,ノーマル,狙い,平均pt,初期pt,偶数,90G,なし"}
{"src": 0049, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "奇数", "g": "30G", "veteran": "あり,ノーマル,狙い,初期pt,初期pt,奇数,30G,あり"}
{"src": 0050, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "奇数", "g": "30G", "veteran": "なし,ノーマル,狙い,初期pt,初期pt,奇数,30G,なし"}
{"src": 0051, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "奇数", "g": "50G", "veteran": "あり,ノーマル,狙い,初期pt,初期pt,奇数,50G,あり"}
{"src": 0052, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "奇数", "g": "50G", "veteran": "なし,ノーマル,狙い,初期pt,初期pt,奇数,50G,なし"}
{"src": 0053, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "奇数", "g": "70G", "veteran": "あり,ノーマル,狙い,初期pt,初期pt,奇数,70G,あり"}
{"src": 0054, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "奇数", "g": "70G", "veteran": "なし,ノーマル,狙い,初期pt,初期pt,奇数,70G,なし"}
{"src": 0055, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "奇数", "g": "90G", "veteran": "あり,ノーマル,狙い,初期pt,初期pt,奇数,90G,あり"}
{"src": 0056, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "奇数", "g": "90G", "veteran": "なし,ノーマル,狙い,初期pt,初期pt,奇数,90G,なし"}
{"src": 0057, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "偶数", "g": "30G", "veteran": "あり,ノーマル,狙い,初期pt,初期pt,偶数,30G,あり"}
{"src": 0058, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "偶数", "g": "30G", "veteran": "なし,ノーマル,狙い,初期pt,初期pt,偶数,30G,なし"}
{"src": 0059, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "偶数", "g": "50G", "veteran": "あり,ノーマル,狙い,初期pt,初期pt,偶数,50G,あり"}
{"src": 0060, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "偶数", "g": "50G", "veteran": "なし,ノーマル,狙い,初期pt,初期pt,偶数,50G,なし"}
{"src": 0061, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "偶数", "g": "70G", "veteran": "あり,ノーマル,狙い,初期pt,初期pt,偶数,70G,あり"}
{"src": 0062, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "偶数", "g": "70G", "veteran": "なし,ノーマル,狙い,初期pt,初期pt,偶数,70G,なし"}
{"src": 0063, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "偶数", "g": "90G", "veteran": "あり,ノーマル,狙い,初期pt,初期pt,偶数,90G,あり"}
{"src": 0064, "machine": "ノーマル", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "偶数", "g": "90G", "veteran": "なし,ノーマル,狙い,初期pt,初期pt,偶数,90G,なし"}
{"src": 0065, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "30G", "veteran": "あり,ノーマル,平均pt,狙い,平均pt,奇数,30G,あり"}
{"src": 0066, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "30G", "veteran": "なし,ノーマル,平均pt,狙い,平均pt,奇数,30G,なし"}
{"src": 0067, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "50G", "veteran": "あり,ノーマル,平均pt,狙い,平均pt,奇数,50G,あり"}
{"src": 0068, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "50G", "veteran": "なし,ノーマル,平均pt,狙い,平均pt,奇数,50G,なし"}
{"src": 0069, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "70G", "veteran": "あり,ノーマル,平均pt,狙い,平均pt,奇数,70G,あり"}
{"src": 0070, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "70G", "veteran": "なし,ノーマル,平均pt,狙い,平均pt,奇数,70G,なし"}
{"src": 0071, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "90G", "veteran": "あり,ノーマル,平均pt,狙い,平均pt,奇数,90G,あり"}
{"src": 0072, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "90G", "veteran": "なし,ノーマル,平均pt,狙い,平均pt,奇数,90G,なし"}
{"src": 0073, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "30G", "veteran": "あり,ノーマル,平均pt,狙い,平均pt,偶数,30G,あり"}
{"src": 0074, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "30G", "veteran": "なし,ノーマル,平均pt,狙い,平均pt,偶数,30G,なし"}
{"src": 0075, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "50G", "veteran": "あり,ノーマル,平均pt,狙い,平均pt,偶数,50G,あり"}
{"src": 0076, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "50G", "veteran": "なし,ノーマル,平均pt,狙い,平均pt,偶数,50G,なし"}
{"src": 0077, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "70G", "veteran": "あり,ノーマル,平均pt,狙い,平均pt,偶数,70G,あり"}
{"src": 0078, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "70G", "veteran": "なし,ノーマル,平均pt,狙い,平均pt,偶数,70G,なし"}
{"src": 0079, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "90G", "veteran": "あり,ノーマル,平均pt,狙い,平均pt,偶数,90G,あり"}
{"src": 0080, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "90G", "veteran": "なし,ノーマル,平均pt,狙い,平均pt,偶数,90G,なし"}
{"src": 0081, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "30G", "veteran": "あり,ノーマル,初期pt,狙い,平均pt,奇数,30G,あり"}
{"src": 0082, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "30G", "veteran": "なし,ノーマル,初期pt,狙い,平均pt,奇数,30G,なし"}
{"src": 0083, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "50G", "veteran": "あり,ノーマル,初期pt,狙い,平均pt,奇数,50G,あり"}
{"src": 0084, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "50G", "veteran": "なし,ノーマル,初期pt,狙い,平均pt,奇数,50G,なし"}
{"src": 0085, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "70G", "veteran": "あり,ノーマル,初期pt,狙い,平均pt,奇数,70G,あり"}
{"src": 0086, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "70G", "veteran": "なし,ノーマル,初期pt,狙い,平均pt,奇数,70G,なし"}
{"src": 0087, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "90G", "veteran": "あり,ノーマル,初期pt,狙い,平均pt,奇数,90G,あり"}
{"src": 0088, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "90G", "veteran": "なし,ノーマル,初期pt,狙い,平均pt,奇数,90G,なし"}
{"src": 0089, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "30G", "veteran": "あり,ノーマル,初期pt,狙い,平均pt,偶数,30G,あり"}
{"src": 0090, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "30G", "veteran": "なし,ノーマル,初期pt,狙い,平均pt,偶数,30G,なし"}
{"src": 0091, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "50G", "veteran": "あり,ノーマル,初期pt,狙い,平均pt,偶数,50G,あり"}
{"src": 0092, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "50G", "veteran": "なし,ノーマル,初期pt,狙い,平均pt,偶数,50G,なし"}
{"src": 0093, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "70G", "veteran": "あり,ノーマル,初期pt,狙い,平均pt,偶数,70G,あり"}
{"src": 0094, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "70G", "veteran": "なし,ノーマル,初期pt,狙い,平均pt,偶数,70G,なし"}
{"src": 0095, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "90G", "veteran": "あり,ノーマル,初期pt,狙い,平均pt,偶数,90G,あり"}
{"src": 0096, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "90G", "veteran": "なし,ノーマル,初期pt,狙い,平均pt,偶数,90G,なし"}
{"src": 0097, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "30G", "veteran": "あり,ノーマル,平均pt,狙い,初期pt,奇数,30G,あり"}
{"src": 0098, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "30G", "veteran": "なし,ノーマル,平均pt,狙い,初期pt,奇数,30G,なし"}
{"src": 0099, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "50G", "veteran": "あり,ノーマル,平均pt,狙い,初期pt,奇数,50G,あり"}
{"src": 00100, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "50G", "veteran": "なし,ノーマル,平均pt,狙い,初期pt,奇数,50G,なし"}
{"src": 00101, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "70G", "veteran": "あり,ノーマル,平均pt,狙い,初期pt,奇数,70G,あり"}
{"src": 00102, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "70G", "veteran": "なし,ノーマル,平均pt,狙い,初期pt,奇数,70G,なし"}
{"src": 00103, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "90G", "veteran": "あり,ノーマル,平均pt,狙い,初期pt,奇数,90G,あり"}
{"src": 00104, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "90G", "veteran": "なし,ノーマル,平均pt,狙い,初期pt,奇数,90G,なし"}
{"src": 00105, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "30G", "veteran": "あり,ノーマル,平均pt,狙い,初期pt,偶数,30G,あり"}
{"src": 00106, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "30G", "veteran": "なし,ノーマル,平均pt,狙い,初期pt,偶数,30G,なし"}
{"src": 00107, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "50G", "veteran": "あり,ノーマル,平均pt,狙い,初期pt,偶数,50G,あり"}
{"src": 00108, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "50G", "veteran": "なし,ノーマル,平均pt,狙い,初期pt,偶数,50G,なし"}
{"src": 00109, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "70G", "veteran": "あり,ノーマル,平均pt,狙い,初期pt,偶数,70G,あり"}
{"src": 00110, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "70G", "veteran": "なし,ノーマル,平均pt,狙い,初期pt,偶数,70G,なし"}
{"src": 00111, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "90G", "veteran": "あり,ノーマル,平均pt,狙い,初期pt,偶数,90G,あり"}
{"src": 00112, "machine": "ノーマル", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "90G", "veteran": "なし,ノーマル,平均pt,狙い,初期pt,偶数,90G,なし"}
{"src": 00113, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "30G", "veteran": "あり,ノーマル,初期pt,狙い,初期pt,奇数,30G,あり"}
{"src": 00114, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "30G", "veteran": "なし,ノーマル,初期pt,狙い,初期pt,奇数,30G,なし"}
{"src": 00115, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "50G", "veteran": "あり,ノーマル,初期pt,狙い,初期pt,奇数,50G,あり"}
{"src": 00116, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "50G", "veteran": "なし,ノーマル,初期pt,狙い,初期pt,奇数,50G,なし"}
{"src": 00117, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "70G", "veteran": "あり,ノーマル,初期pt,狙い,初期pt,奇数,70G,あり"}
{"src": 00118, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "70G", "veteran": "なし,ノーマル,初期pt,狙い,初期pt,奇数,70G,なし"}
{"src": 00119, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "90G", "veteran": "あり,ノーマル,初期pt,狙い,初期pt,奇数,90G,あり"}
{"src": 00120, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "90G", "veteran": "なし,ノーマル,初期pt,狙い,初期pt,奇数,90G,なし"}
{"src": 00121, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "30G", "veteran": "あり,ノーマル,初期pt,狙い,初期pt,偶数,30G,あり"}
{"src": 00122, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "30G", "veteran": "なし,ノーマル,初期pt,狙い,初期pt,偶数,30G,なし"}
{"src": 00123, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "50G", "veteran": "あり,ノーマル,初期pt,狙い,初期pt,偶数,50G,あり"}
{"src": 00124, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "50G", "veteran": "なし,ノーマル,初期pt,狙い,初期pt,偶数,50G,なし"}
{"src": 00125, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "70G", "veteran": "あり,ノーマル,初期pt,狙い,初期pt,偶数,70G,あり"}
{"src": 00126, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "70G", "veteran": "なし,ノーマル,初期pt,狙い,初期pt,偶数,70G,なし"}
{"src": 00127, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "90G", "veteran": "あり,ノーマル,初期pt,狙い,初期pt,偶数,90G,あり"}
{"src": 00128, "machine": "ノーマル", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "90G", "veteran": "なし,ノーマル,初期pt,狙い,初期pt,偶数,90G,なし"}
{"src": 00129, "machine": "ノーマル", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "30G", "veteran": "あり,ノーマル,平均pt,平均pt,狙い,奇数,30G,あり"}
{"src": 00130, "machine": "ノーマル", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "30G", "veteran": "なし,ノーマル,平均pt,平均pt,狙い,奇数,30G,なし"}
{"src": 00131, "machine": "ノーマル", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "50G", "veteran": "あり,ノーマル,平均pt,平均pt,狙い,奇数,50G,あり"}
{"src": 00132, "machine": "ノーマル", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "50G", "veteran": "なし,ノーマル,平均pt,平均pt,狙い,奇数,50G,なし"}
{"src": 00133, "machine": "ノーマル", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "70G", "veteran": "あり,ノーマル,平均pt,平均pt,狙い,奇数,70G,あり"}
{"src": 00134, "machine": "ノーマル", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "70G", "veteran": "なし,ノーマル,平均pt,平均pt,狙い,奇数,70G,なし"}
{"src": 00135, "machine": "ノーマル", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "90G", "veteran": "あり,ノーマル,平均pt,平均pt,狙い,奇数,90G,あり"}
{"src": 00136, "machine": "ノーマル", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "90G", "veteran": "なし,ノーマル,平均pt,平均pt,狙い,奇数,90G,なし"}
{"src": 00137, "machine": "ノーマル", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "30G", "veteran": "あり,ノーマル,平均pt,平均pt,狙い,偶数,30G,あり"}
{"src": 00138, "machine": "ノーマル", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "30G", "veteran": "なし,ノーマル,平均pt,平均pt,狙い,偶数,30G,なし"}
{"src": 00139, "machine": "ノーマル", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "50G", "veteran": "あり,ノーマル,平均pt,平均pt,狙い,偶数,50G,あり"}
{"src": 00140, "machine": "ノーマル", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "50G", "veteran": "なし,ノーマル,平均pt,平均pt,狙い,偶数,50G,なし"}
{"src": 00141, "machine": "ノーマル", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "70G", "veteran": "あり,ノーマル,平均pt,平均pt,狙い,偶数,70G,あり"}
{"src": 00142, "machine": "ノーマル", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "70G", "veteran": "なし,ノーマル,平均pt,平均pt,狙い,偶数,70G,なし"}
{"src": 00143, "machine": "ノーマル", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "90G", "veteran": "あり,ノーマル,平均pt,平均pt,狙い,偶数,90G,あり"}
{"src": 00144, "machine": "ノーマル", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "90G", "veteran": "なし,ノーマル,平均pt,平均pt,狙い,偶数,90G,なし"}
{"src": 00145, "machine": "ノーマル", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "30G", "veteran": "あり,ノーマル,初期pt,平均pt,狙い,奇数,30G,あり"}
{"src": 00146, "machine": "ノーマル", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "30G", "veteran": "なし,ノーマル,初期pt,平均pt,狙い,奇数,30G,なし"}
{"src": 00147, "machine": "ノーマル", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "50G", "veteran": "あり,ノーマル,初期pt,平均pt,狙い,奇数,50G,あり"}
{"src": 00148, "machine": "ノーマル", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "50G", "veteran": "なし,ノーマル,初期pt,平均pt,狙い,奇数,50G,なし"}
{"src": 00149, "machine": "ノーマル", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "70G", "veteran": "あり,ノーマル,初期pt,平均pt,狙い,奇数,70G,あり"}
{"src": 00150, "machine": "ノーマル", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "70G", "veteran": "なし,ノーマル,初期pt,平均pt,狙い,奇数,70G,なし"}
{"src": 00151, "machine": "ノーマル", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "90G", "veteran": "あり,ノーマル,初期pt,平均pt,狙い,奇数,90G,あり"}
{"src": 00152, "machine": "ノーマル", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "90G", "veteran": "なし,ノーマル,初期pt,平均pt,狙い,奇数,90G,なし"}
{"src": 00153, "machine": "ノーマル", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "30G", "veteran": "あり,ノーマル,初期pt,平均pt,狙い,偶数,30G,あり"}
{"src": 00154, "machine": "ノーマル", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "30G", "veteran": "なし,ノーマル,初期pt,平均pt,狙い,偶数,30G,なし"}
{"src": 00155, "machine": "ノーマル", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "50G", "veteran": "あり,ノーマル,初期pt,平均pt,狙い,偶数,50G,あり"}
{"src": 00156, "machine": "ノーマル", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "50G", "veteran": "なし,ノーマル,初期pt,平均pt,狙い,偶数,50G,なし"}
{"src": 00157, "machine": "ノーマル", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "70G", "veteran": "あり,ノーマル,初期pt,平均pt,狙い,偶数,70G,あり"}
{"src": 00158, "machine": "ノーマル", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "70G", "veteran": "なし,ノーマル,初期pt,平均pt,狙い,偶数,70G,なし"}
{"src": 00159, "machine": "ノーマル", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "90G", "veteran": "あり,ノーマル,初期pt,平均pt,狙い,偶数,90G,あり"}
{"src": 00160, "machine": "ノーマル", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "90G", "veteran": "なし,ノーマル,初期pt,平均pt,狙い,偶数,90G,なし"}
{"src": 00161, "machine": "ノーマル", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "30G", "veteran": "あり,ノーマル,平均pt,初期pt,狙い,奇数,30G,あり"}
{"src": 00162, "machine": "ノーマル", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "30G", "veteran": "なし,ノーマル,平均pt,初期pt,狙い,奇数,30G,なし"}
{"src": 00163, "machine": "ノーマル", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "50G", "veteran": "あり,ノーマル,平均pt,初期pt,狙い,奇数,50G,あり"}
{"src": 00164, "machine": "ノーマル", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "50G", "veteran": "なし,ノーマル,平均pt,初期pt,狙い,奇数,50G,なし"}
{"src": 00165, "machine": "ノーマル", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "70G", "veteran": "あり,ノーマル,平均pt,初期pt,狙い,奇数,70G,あり"}
{"src": 00166, "machine": "ノーマル", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "70G", "veteran": "なし,ノーマル,平均pt,初期pt,狙い,奇数,70G,なし"}
{"src": 00167, "machine": "ノーマル", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "90G", "veteran": "あり,ノーマル,平均pt,初期pt,狙い,奇数,90G,あり"}
{"src": 00168, "machine": "ノーマル", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "90G", "veteran": "なし,ノーマル,平均pt,初期pt,狙い,奇数,90G,なし"}
{"src": 00169, "machine": "ノーマル", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "30G", "veteran": "あり,ノーマル,平均pt,初期pt,狙い,偶数,30G,あり"}
{"src": 00170, "machine": "ノーマル", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "30G", "veteran": "なし,ノーマル,平均pt,初期pt,狙い,偶数,30G,なし"}
{"src": 00171, "machine": "ノーマル", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "50G", "veteran": "あり,ノーマル,平均pt,初期pt,狙い,偶数,50G,あり"}
{"src": 00172, "machine": "ノーマル", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "50G", "veteran": "なし,ノーマル,平均pt,初期pt,狙い,偶数,50G,なし"}
{"src": 00173, "machine": "ノーマル", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "70G", "veteran": "あり,ノーマル,平均pt,初期pt,狙い,偶数,70G,あり"}
{"src": 00174, "machine": "ノーマル", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "70G", "veteran": "なし,ノーマル,平均pt,初期pt,狙い,偶数,70G,なし"}
{"src": 00175, "machine": "ノーマル", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "90G", "veteran": "あり,ノーマル,平均pt,初期pt,狙い,偶数,90G,あり"}
{"src": 00176, "machine": "ノーマル", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "90G", "veteran": "なし,ノーマル,平均pt,初期pt,狙い,偶数,90G,なし"}
{"src": 00177, "machine": "ノーマル", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "30G", "veteran": "あり,ノーマル,初期pt,初期pt,狙い,奇数,30G,あり"}
{"src": 00178, "machine": "ノーマル", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "30G", "veteran": "なし,ノーマル,初期pt,初期pt,狙い,奇数,30G,なし"}
{"src": 00179, "machine": "ノーマル", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "50G", "veteran": "あり,ノーマル,初期pt,初期pt,狙い,奇数,50G,あり"}
{"src": 00180, "machine": "ノーマル", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "50G", "veteran": "なし,ノーマル,初期pt,初期pt,狙い,奇数,50G,なし"}
{"src": 00181, "machine": "ノーマル", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "70G", "veteran": "あり,ノーマル,初期pt,初期pt,狙い,奇数,70G,あり"}
{"src": 00182, "machine": "ノーマル", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "70G", "veteran": "なし,ノーマル,初期pt,初期pt,狙い,奇数,70G,なし"}
{"src": 00183, "machine": "ノーマル", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "90G", "veteran": "あり,ノーマル,初期pt,初期pt,狙い,奇数,90G,あり"}
{"src": 00184, "machine": "ノーマル", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "90G", "veteran": "なし,ノーマル,初期pt,初期pt,狙い,奇数,90G,なし"}
{"src": 00185, "machine": "ノーマル", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "30G", "veteran": "あり,ノーマル,初期pt,初期pt,狙い,偶数,30G,あり"}
{"src": 00186, "machine": "ノーマル", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "30G", "veteran": "なし,ノーマル,初期pt,初期pt,狙い,偶数,30G,なし"}
{"src": 00187, "machine": "ノーマル", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "50G", "veteran": "あり,ノーマル,初期pt,初期pt,狙い,偶数,50G,あり"}
{"src": 00188, "machine": "ノーマル", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "50G", "veteran": "なし,ノーマル,初期pt,初期pt,狙い,偶数,50G,なし"}
{"src": 00189, "machine": "ノーマル", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "70G", "veteran": "あり,ノーマル,初期pt,初期pt,狙い,偶数,70G,あり"}
{"src": 00190, "machine": "ノーマル", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "70G", "veteran": "なし,ノーマル,初期pt,初期pt,狙い,偶数,70G,なし"}
{"src": 00191, "machine": "ノーマル", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "90G", "veteran": "あり,ノーマル,初期pt,初期pt,狙い,偶数,90G,あり"}
{"src": 00192, "machine": "ノーマル", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "90G", "veteran": "なし,ノーマル,初期pt,初期pt,狙い,偶数,90G,なし"}
{"src": 00193, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "奇数", "g": "30G", "veteran": "あり,トランス,狙い,平均pt,平均pt,奇数,30G,あり"}
{"src": 00194, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "奇数", "g": "30G", "veteran": "なし,トランス,狙い,平均pt,平均pt,奇数,30G,なし"}
{"src": 00195, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "奇数", "g": "50G", "veteran": "あり,トランス,狙い,平均pt,平均pt,奇数,50G,あり"}
{"src": 00196, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "奇数", "g": "50G", "veteran": "なし,トランス,狙い,平均pt,平均pt,奇数,50G,なし"}
{"src": 00197, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "奇数", "g": "70G", "veteran": "あり,トランス,狙い,平均pt,平均pt,奇数,70G,あり"}
{"src": 00198, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "奇数", "g": "70G", "veteran": "なし,トランス,狙い,平均pt,平均pt,奇数,70G,なし"}
{"src": 00199, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "奇数", "g": "90G", "veteran": "あり,トランス,狙い,平均pt,平均pt,奇数,90G,あり"}
{"src": 00200, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "奇数", "g": "90G", "veteran": "なし,トランス,狙い,平均pt,平均pt,奇数,90G,なし"}
{"src": 00201, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "偶数", "g": "30G", "veteran": "あり,トランス,狙い,平均pt,平均pt,偶数,30G,あり"}
{"src": 00202, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "偶数", "g": "30G", "veteran": "なし,トランス,狙い,平均pt,平均pt,偶数,30G,なし"}
{"src": 00203, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "偶数", "g": "50G", "veteran": "あり,トランス,狙い,平均pt,平均pt,偶数,50G,あり"}
{"src": 00204, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "偶数", "g": "50G", "veteran": "なし,トランス,狙い,平均pt,平均pt,偶数,50G,なし"}
{"src": 00205, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "偶数", "g": "70G", "veteran": "あり,トランス,狙い,平均pt,平均pt,偶数,70G,あり"}
{"src": 00206, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "偶数", "g": "70G", "veteran": "なし,トランス,狙い,平均pt,平均pt,偶数,70G,なし"}
{"src": 00207, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "偶数", "g": "90G", "veteran": "あり,トランス,狙い,平均pt,平均pt,偶数,90G,あり"}
{"src": 00208, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "平均pt", "parity": "偶数", "g": "90G", "veteran": "なし,トランス,狙い,平均pt,平均pt,偶数,90G,なし"}
{"src": 00209, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "奇数", "g": "30G", "veteran": "あり,トランス,狙い,初期pt,平均pt,奇数,30G,あり"}
{"src": 00210, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "奇数", "g": "30G", "veteran": "なし,トランス,狙い,初期pt,平均pt,奇数,30G,なし"}
{"src": 00211, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "奇数", "g": "50G", "veteran": "あり,トランス,狙い,初期pt,平均pt,奇数,50G,あり"}
{"src": 00212, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "奇数", "g": "50G", "veteran": "なし,トランス,狙い,初期pt,平均pt,奇数,50G,なし"}
{"src": 00213, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "奇数", "g": "70G", "veteran": "あり,トランス,狙い,初期pt,平均pt,奇数,70G,あり"}
{"src": 00214, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "奇数", "g": "70G", "veteran": "なし,トランス,狙い,初期pt,平均pt,奇数,70G,なし"}
{"src": 00215, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "奇数", "g": "90G", "veteran": "あり,トランス,狙い,初期pt,平均pt,奇数,90G,あり"}
{"src": 00216, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "奇数", "g": "90G", "veteran": "なし,トランス,狙い,初期pt,平均pt,奇数,90G,なし"}
{"src": 00217, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "偶数", "g": "30G", "veteran": "あり,トランス,狙い,初期pt,平均pt,偶数,30G,あり"}
{"src": 00218, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "偶数", "g": "30G", "veteran": "なし,トランス,狙い,初期pt,平均pt,偶数,30G,なし"}
{"src": 00219, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "偶数", "g": "50G", "veteran": "あり,トランス,狙い,初期pt,平均pt,偶数,50G,あり"}
{"src": 00220, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "偶数", "g": "50G", "veteran": "なし,トランス,狙い,初期pt,平均pt,偶数,50G,なし"}
{"src": 00221, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "偶数", "g": "70G", "veteran": "あり,トランス,狙い,初期pt,平均pt,偶数,70G,あり"}
{"src": 00222, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "偶数", "g": "70G", "veteran": "なし,トランス,狙い,初期pt,平均pt,偶数,70G,なし"}
{"src": 00223, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "偶数", "g": "90G", "veteran": "あり,トランス,狙い,初期pt,平均pt,偶数,90G,あり"}
{"src": 00224, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "平均pt", "parity": "偶数", "g": "90G", "veteran": "なし,トランス,狙い,初期pt,平均pt,偶数,90G,なし"}
{"src": 00225, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "奇数", "g": "30G", "veteran": "あり,トランス,狙い,平均pt,初期pt,奇数,30G,あり"}
{"src": 00226, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "奇数", "g": "30G", "veteran": "なし,トランス,狙い,平均pt,初期pt,奇数,30G,なし"}
{"src": 00227, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "奇数", "g": "50G", "veteran": "あり,トランス,狙い,平均pt,初期pt,奇数,50G,あり"}
{"src": 00228, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "奇数", "g": "50G", "veteran": "なし,トランス,狙い,平均pt,初期pt,奇数,50G,なし"}
{"src": 00229, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "奇数", "g": "70G", "veteran": "あり,トランス,狙い,平均pt,初期pt,奇数,70G,あり"}
{"src": 00230, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "奇数", "g": "70G", "veteran": "なし,トランス,狙い,平均pt,初期pt,奇数,70G,なし"}
{"src": 00231, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "奇数", "g": "90G", "veteran": "あり,トランス,狙い,平均pt,初期pt,奇数,90G,あり"}
{"src": 00232, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "奇数", "g": "90G", "veteran": "なし,トランス,狙い,平均pt,初期pt,奇数,90G,なし"}
{"src": 00233, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "偶数", "g": "30G", "veteran": "あり,トランス,狙い,平均pt,初期pt,偶数,30G,あり"}
{"src": 00234, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "偶数", "g": "30G", "veteran": "なし,トランス,狙い,平均pt,初期pt,偶数,30G,なし"}
{"src": 00235, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "偶数", "g": "50G", "veteran": "あり,トランス,狙い,平均pt,初期pt,偶数,50G,あり"}
{"src": 00236, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "偶数", "g": "50G", "veteran": "なし,トランス,狙い,平均pt,初期pt,偶数,50G,なし"}
{"src": 00237, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "偶数", "g": "70G", "veteran": "あり,トランス,狙い,平均pt,初期pt,偶数,70G,あり"}
{"src": 00238, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "偶数", "g": "70G", "veteran": "なし,トランス,狙い,平均pt,初期pt,偶数,70G,なし"}
{"src": 00239, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "偶数", "g": "90G", "veteran": "あり,トランス,狙い,平均pt,初期pt,偶数,90G,あり"}
{"src": 00240, "machine": "トランス", "mode1": "狙い", "mode2": "平均pt", "mode3": "初期pt", "parity": "偶数", "g": "90G", "veteran": "なし,トランス,狙い,平均pt,初期pt,偶数,90G,なし"}
{"src": 00241, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "奇数", "g": "30G", "veteran": "あり,トランス,狙い,初期pt,初期pt,奇数,30G,あり"}
{"src": 00242, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "奇数", "g": "30G", "veteran": "なし,トランス,狙い,初期pt,初期pt,奇数,30G,なし"}
{"src": 00243, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "奇数", "g": "50G", "veteran": "あり,トランス,狙い,初期pt,初期pt,奇数,50G,あり"}
{"src": 00244, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "奇数", "g": "50G", "veteran": "なし,トランス,狙い,初期pt,初期pt,奇数,50G,なし"}
{"src": 00245, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "奇数", "g": "70G", "veteran": "あり,トランス,狙い,初期pt,初期pt,奇数,70G,あり"}
{"src": 00246, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "奇数", "g": "70G", "veteran": "なし,トランス,狙い,初期pt,初期pt,奇数,70G,なし"}
{"src": 00247, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "奇数", "g": "90G", "veteran": "あり,トランス,狙い,初期pt,初期pt,奇数,90G,あり"}
{"src": 00248, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "奇数", "g": "90G", "veteran": "なし,トランス,狙い,初期pt,初期pt,奇数,90G,なし"}
{"src": 00249, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "偶数", "g": "30G", "veteran": "あり,トランス,狙い,初期pt,初期pt,偶数,30G,あり"}
{"src": 00250, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "偶数", "g": "30G", "veteran": "なし,トランス,狙い,初期pt,初期pt,偶数,30G,なし"}
{"src": 00251, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "偶数", "g": "50G", "veteran": "あり,トランス,狙い,初期pt,初期pt,偶数,50G,あり"}
{"src": 00252, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "偶数", "g": "50G", "veteran": "なし,トランス,狙い,初期pt,初期pt,偶数,50G,なし"}
{"src": 00253, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "偶数", "g": "70G", "veteran": "あり,トランス,狙い,初期pt,初期pt,偶数,70G,あり"}
{"src": 00254, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "偶数", "g": "70G", "veteran": "なし,トランス,狙い,初期pt,初期pt,偶数,70G,なし"}
{"src": 00255, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "偶数", "g": "90G", "veteran": "あり,トランス,狙い,初期pt,初期pt,偶数,90G,あり"}
{"src": 00256, "machine": "トランス", "mode1": "狙い", "mode2": "初期pt", "mode3": "初期pt", "parity": "偶数", "g": "90G", "veteran": "なし,トランス,狙い,初期pt,初期pt,偶数,90G,なし"}
{"src": 00257, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "30G", "veteran": "あり,トランス,平均pt,狙い,平均pt,奇数,30G,あり"}
{"src": 00258, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "30G", "veteran": "なし,トランス,平均pt,狙い,平均pt,奇数,30G,なし"}
{"src": 00259, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "50G", "veteran": "あり,トランス,平均pt,狙い,平均pt,奇数,50G,あり"}
{"src": 00260, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "50G", "veteran": "なし,トランス,平均pt,狙い,平均pt,奇数,50G,なし"}
{"src": 00261, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "70G", "veteran": "あり,トランス,平均pt,狙い,平均pt,奇数,70G,あり"}
{"src": 00262, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "70G", "veteran": "なし,トランス,平均pt,狙い,平均pt,奇数,70G,なし"}
{"src": 00263, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "90G", "veteran": "あり,トランス,平均pt,狙い,平均pt,奇数,90G,あり"}
{"src": 00264, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "90G", "veteran": "なし,トランス,平均pt,狙い,平均pt,奇数,90G,なし"}
{"src": 00265, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "30G", "veteran": "あり,トランス,平均pt,狙い,平均pt,偶数,30G,あり"}
{"src": 00266, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "30G", "veteran": "なし,トランス,平均pt,狙い,平均pt,偶数,30G,なし"}
{"src": 00267, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "50G", "veteran": "あり,トランス,平均pt,狙い,平均pt,偶数,50G,あり"}
{"src": 00268, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "50G", "veteran": "なし,トランス,平均pt,狙い,平均pt,偶数,50G,なし"}
{"src": 00269, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "70G", "veteran": "あり,トランス,平均pt,狙い,平均pt,偶数,70G,あり"}
{"src": 00270, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "70G", "veteran": "なし,トランス,平均pt,狙い,平均pt,偶数,70G,なし"}
{"src": 00271, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "90G", "veteran": "あり,トランス,平均pt,狙い,平均pt,偶数,90G,あり"}
{"src": 00272, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "90G", "veteran": "なし,トランス,平均pt,狙い,平均pt,偶数,90G,なし"}
{"src": 00273, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "30G", "veteran": "あり,トランス,初期pt,狙い,平均pt,奇数,30G,あり"}
{"src": 00274, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "30G", "veteran": "なし,トランス,初期pt,狙い,平均pt,奇数,30G,なし"}
{"src": 00275, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "50G", "veteran": "あり,トランス,初期pt,狙い,平均pt,奇数,50G,あり"}
{"src": 00276, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "50G", "veteran": "なし,トランス,初期pt,狙い,平均pt,奇数,50G,なし"}
{"src": 00277, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "70G", "veteran": "あり,トランス,初期pt,狙い,平均pt,奇数,70G,あり"}
{"src": 00278, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "70G", "veteran": "なし,トランス,初期pt,狙い,平均pt,奇数,70G,なし"}
{"src": 00279, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "90G", "veteran": "あり,トランス,初期pt,狙い,平均pt,奇数,90G,あり"}
{"src": 00280, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "奇数", "g": "90G", "veteran": "なし,トランス,初期pt,狙い,平均pt,奇数,90G,なし"}
{"src": 00281, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "30G", "veteran": "あり,トランス,初期pt,狙い,平均pt,偶数,30G,あり"}
{"src": 00282, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "30G", "veteran": "なし,トランス,初期pt,狙い,平均pt,偶数,30G,なし"}
{"src": 00283, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "50G", "veteran": "あり,トランス,初期pt,狙い,平均pt,偶数,50G,あり"}
{"src": 00284, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "50G", "veteran": "なし,トランス,初期pt,狙い,平均pt,偶数,50G,なし"}
{"src": 00285, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "70G", "veteran": "あり,トランス,初期pt,狙い,平均pt,偶数,70G,あり"}
{"src": 00286, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "70G", "veteran": "なし,トランス,初期pt,狙い,平均pt,偶数,70G,なし"}
{"src": 00287, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "90G", "veteran": "あり,トランス,初期pt,狙い,平均pt,偶数,90G,あり"}
{"src": 00288, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "平均pt", "parity": "偶数", "g": "90G", "veteran": "なし,トランス,初期pt,狙い,平均pt,偶数,90G,なし"}
{"src": 00289, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "30G", "veteran": "あり,トランス,平均pt,狙い,初期pt,奇数,30G,あり"}
{"src": 00290, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "30G", "veteran": "なし,トランス,平均pt,狙い,初期pt,奇数,30G,なし"}
{"src": 00291, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "50G", "veteran": "あり,トランス,平均pt,狙い,初期pt,奇数,50G,あり"}
{"src": 00292, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "50G", "veteran": "なし,トランス,平均pt,狙い,初期pt,奇数,50G,なし"}
{"src": 00293, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "70G", "veteran": "あり,トランス,平均pt,狙い,初期pt,奇数,70G,あり"}
{"src": 00294, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "70G", "veteran": "なし,トランス,平均pt,狙い,初期pt,奇数,70G,なし"}
{"src": 00295, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "90G", "veteran": "あり,トランス,平均pt,狙い,初期pt,奇数,90G,あり"}
{"src": 00296, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "90G", "veteran": "なし,トランス,平均pt,狙い,初期pt,奇数,90G,なし"}
{"src": 00297, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "30G", "veteran": "あり,トランス,平均pt,狙い,初期pt,偶数,30G,あり"}
{"src": 00298, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "30G", "veteran": "なし,トランス,平均pt,狙い,初期pt,偶数,30G,なし"}
{"src": 00299, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "50G", "veteran": "あり,トランス,平均pt,狙い,初期pt,偶数,50G,あり"}
{"src": 00300, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "50G", "veteran": "なし,トランス,平均pt,狙い,初期pt,偶数,50G,なし"}
{"src": 00301, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "70G", "veteran": "あり,トランス,平均pt,狙い,初期pt,偶数,70G,あり"}
{"src": 00302, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "70G", "veteran": "なし,トランス,平均pt,狙い,初期pt,偶数,70G,なし"}
{"src": 00303, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "90G", "veteran": "あり,トランス,平均pt,狙い,初期pt,偶数,90G,あり"}
{"src": 00304, "machine": "トランス", "mode1": "平均pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "90G", "veteran": "なし,トランス,平均pt,狙い,初期pt,偶数,90G,なし"}
{"src": 00305, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "30G", "veteran": "あり,トランス,初期pt,狙い,初期pt,奇数,30G,あり"}
{"src": 00306, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "30G", "veteran": "なし,トランス,初期pt,狙い,初期pt,奇数,30G,なし"}
{"src": 00307, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "50G", "veteran": "あり,トランス,初期pt,狙い,初期pt,奇数,50G,あり"}
{"src": 00308, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "50G", "veteran": "なし,トランス,初期pt,狙い,初期pt,奇数,50G,なし"}
{"src": 00309, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "70G", "veteran": "あり,トランス,初期pt,狙い,初期pt,奇数,70G,あり"}
{"src": 00310, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "70G", "veteran": "なし,トランス,初期pt,狙い,初期pt,奇数,70G,なし"}
{"src": 00311, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "90G", "veteran": "あり,トランス,初期pt,狙い,初期pt,奇数,90G,あり"}
{"src": 00312, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "奇数", "g": "90G", "veteran": "なし,トランス,初期pt,狙い,初期pt,奇数,90G,なし"}
{"src": 00313, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "30G", "veteran": "あり,トランス,初期pt,狙い,初期pt,偶数,30G,あり"}
{"src": 00314, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "30G", "veteran": "なし,トランス,初期pt,狙い,初期pt,偶数,30G,なし"}
{"src": 00315, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "50G", "veteran": "あり,トランス,初期pt,狙い,初期pt,偶数,50G,あり"}
{"src": 00316, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "50G", "veteran": "なし,トランス,初期pt,狙い,初期pt,偶数,50G,なし"}
{"src": 00317, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "70G", "veteran": "あり,トランス,初期pt,狙い,初期pt,偶数,70G,あり"}
{"src": 00318, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "70G", "veteran": "なし,トランス,初期pt,狙い,初期pt,偶数,70G,なし"}
{"src": 00319, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "90G", "veteran": "あり,トランス,初期pt,狙い,初期pt,偶数,90G,あり"}
{"src": 00320, "machine": "トランス", "mode1": "初期pt", "mode2": "狙い", "mode3": "初期pt", "parity": "偶数", "g": "90G", "veteran": "なし,トランス,初期pt,狙い,初期pt,偶数,90G,なし"}
{"src": 00321, "machine": "トランス", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "30G", "veteran": "あり,トランス,平均pt,平均pt,狙い,奇数,30G,あり"}
{"src": 00322, "machine": "トランス", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "30G", "veteran": "なし,トランス,平均pt,平均pt,狙い,奇数,30G,なし"}
{"src": 00323, "machine": "トランス", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "50G", "veteran": "あり,トランス,平均pt,平均pt,狙い,奇数,50G,あり"}
{"src": 00324, "machine": "トランス", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "50G", "veteran": "なし,トランス,平均pt,平均pt,狙い,奇数,50G,なし"}
{"src": 00325, "machine": "トランス", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "70G", "veteran": "あり,トランス,平均pt,平均pt,狙い,奇数,70G,あり"}
{"src": 00326, "machine": "トランス", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "70G", "veteran": "なし,トランス,平均pt,平均pt,狙い,奇数,70G,なし"}
{"src": 00327, "machine": "トランス", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "90G", "veteran": "あり,トランス,平均pt,平均pt,狙い,奇数,90G,あり"}
{"src": 00328, "machine": "トランス", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "90G", "veteran": "なし,トランス,平均pt,平均pt,狙い,奇数,90G,なし"}
{"src": 00329, "machine": "トランス", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "30G", "veteran": "あり,トランス,平均pt,平均pt,狙い,偶数,30G,あり"}
{"src": 00330, "machine": "トランス", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "30G", "veteran": "なし,トランス,平均pt,平均pt,狙い,偶数,30G,なし"}
{"src": 00331, "machine": "トランス", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "50G", "veteran": "あり,トランス,平均pt,平均pt,狙い,偶数,50G,あり"}
{"src": 00332, "machine": "トランス", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "50G", "veteran": "なし,トランス,平均pt,平均pt,狙い,偶数,50G,なし"}
{"src": 00333, "machine": "トランス", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "70G", "veteran": "あり,トランス,平均pt,平均pt,狙い,偶数,70G,あり"}
{"src": 00334, "machine": "トランス", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "70G", "veteran": "なし,トランス,平均pt,平均pt,狙い,偶数,70G,なし"}
{"src": 00335, "machine": "トランス", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "90G", "veteran": "あり,トランス,平均pt,平均pt,狙い,偶数,90G,あり"}
{"src": 00336, "machine": "トランス", "mode1": "平均pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "90G", "veteran": "なし,トランス,平均pt,平均pt,狙い,偶数,90G,なし"}
{"src": 00337, "machine": "トランス", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "30G", "veteran": "あり,トランス,初期pt,平均pt,狙い,奇数,30G,あり"}
{"src": 00338, "machine": "トランス", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "30G", "veteran": "なし,トランス,初期pt,平均pt,狙い,奇数,30G,なし"}
{"src": 00339, "machine": "トランス", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "50G", "veteran": "あり,トランス,初期pt,平均pt,狙い,奇数,50G,あり"}
{"src": 00340, "machine": "トランス", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "50G", "veteran": "なし,トランス,初期pt,平均pt,狙い,奇数,50G,なし"}
{"src": 00341, "machine": "トランス", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "70G", "veteran": "あり,トランス,初期pt,平均pt,狙い,奇数,70G,あり"}
{"src": 00342, "machine": "トランス", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "70G", "veteran": "なし,トランス,初期pt,平均pt,狙い,奇数,70G,なし"}
{"src": 00343, "machine": "トランス", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "90G", "veteran": "あり,トランス,初期pt,平均pt,狙い,奇数,90G,あり"}
{"src": 00344, "machine": "トランス", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "奇数", "g": "90G", "veteran": "なし,トランス,初期pt,平均pt,狙い,奇数,90G,なし"}
{"src": 00345, "machine": "トランス", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "30G", "veteran": "あり,トランス,初期pt,平均pt,狙い,偶数,30G,あり"}
{"src": 00346, "machine": "トランス", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "30G", "veteran": "なし,トランス,初期pt,平均pt,狙い,偶数,30G,なし"}
{"src": 00347, "machine": "トランス", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "50G", "veteran": "あり,トランス,初期pt,平均pt,狙い,偶数,50G,あり"}
{"src": 00348, "machine": "トランス", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "50G", "veteran": "なし,トランス,初期pt,平均pt,狙い,偶数,50G,なし"}
{"src": 00349, "machine": "トランス", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "70G", "veteran": "あり,トランス,初期pt,平均pt,狙い,偶数,70G,あり"}
{"src": 00350, "machine": "トランス", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "70G", "veteran": "なし,トランス,初期pt,平均pt,狙い,偶数,70G,なし"}
{"src": 00351, "machine": "トランス", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "90G", "veteran": "あり,トランス,初期pt,平均pt,狙い,偶数,90G,あり"}
{"src": 00352, "machine": "トランス", "mode1": "初期pt", "mode2": "平均pt", "mode3": "狙い", "parity": "偶数", "g": "90G", "veteran": "なし,トランス,初期pt,平均pt,狙い,偶数,90G,なし"}
{"src": 00353, "machine": "トランス", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "30G", "veteran": "あり,トランス,平均pt,初期pt,狙い,奇数,30G,あり"}
{"src": 00354, "machine": "トランス", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "30G", "veteran": "なし,トランス,平均pt,初期pt,狙い,奇数,30G,なし"}
{"src": 00355, "machine": "トランス", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "50G", "veteran": "あり,トランス,平均pt,初期pt,狙い,奇数,50G,あり"}
{"src": 00356, "machine": "トランス", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "50G", "veteran": "なし,トランス,平均pt,初期pt,狙い,奇数,50G,なし"}
{"src": 00357, "machine": "トランス", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "70G", "veteran": "あり,トランス,平均pt,初期pt,狙い,奇数,70G,あり"}
{"src": 00358, "machine": "トランス", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "70G", "veteran": "なし,トランス,平均pt,初期pt,狙い,奇数,70G,なし"}
{"src": 00359, "machine": "トランス", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "90G", "veteran": "あり,トランス,平均pt,初期pt,狙い,奇数,90G,あり"}
{"src": 00360, "machine": "トランス", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "90G", "veteran": "なし,トランス,平均pt,初期pt,狙い,奇数,90G,なし"}
{"src": 00361, "machine": "トランス", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "30G", "veteran": "あり,トランス,平均pt,初期pt,狙い,偶数,30G,あり"}
{"src": 00362, "machine": "トランス", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "30G", "veteran": "なし,トランス,平均pt,初期pt,狙い,偶数,30G,なし"}
{"src": 00363, "machine": "トランス", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "50G", "veteran": "あり,トランス,平均pt,初期pt,狙い,偶数,50G,あり"}
{"src": 00364, "machine": "トランス", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "50G", "veteran": "なし,トランス,平均pt,初期pt,狙い,偶数,50G,なし"}
{"src": 00365, "machine": "トランス", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "70G", "veteran": "あり,トランス,平均pt,初期pt,狙い,偶数,70G,あり"}
{"src": 00366, "machine": "トランス", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "70G", "veteran": "なし,トランス,平均pt,初期pt,狙い,偶数,70G,なし"}
{"src": 00367, "machine": "トランス", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "90G", "veteran": "あり,トランス,平均pt,初期pt,狙い,偶数,90G,あり"}
{"src": 00368, "machine": "トランス", "mode1": "平均pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "90G", "veteran": "なし,トランス,平均pt,初期pt,狙い,偶数,90G,なし"}
{"src": 00369, "machine": "トランス", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "30G", "veteran": "あり,トランス,初期pt,初期pt,狙い,奇数,30G,あり"}
{"src": 00370, "machine": "トランス", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "30G", "veteran": "なし,トランス,初期pt,初期pt,狙い,奇数,30G,なし"}
{"src": 00371, "machine": "トランス", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "50G", "veteran": "あり,トランス,初期pt,初期pt,狙い,奇数,50G,あり"}
{"src": 00372, "machine": "トランス", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "50G", "veteran": "なし,トランス,初期pt,初期pt,狙い,奇数,50G,なし"}
{"src": 00373, "machine": "トランス", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "70G", "veteran": "あり,トランス,初期pt,初期pt,狙い,奇数,70G,あり"}
{"src": 00374, "machine": "トランス", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "70G", "veteran": "なし,トランス,初期pt,初期pt,狙い,奇数,70G,なし"}
{"src": 00375, "machine": "トランス", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "90G", "veteran": "あり,トランス,初期pt,初期pt,狙い,奇数,90G,あり"}
{"src": 00376, "machine": "トランス", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "奇数", "g": "90G", "veteran": "なし,トランス,初期pt,初期pt,狙い,奇数,90G,なし"}
{"src": 00377, "machine": "トランス", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "30G", "veteran": "あり,トランス,初期pt,初期pt,狙い,偶数,30G,あり"}
{"src": 00378, "machine": "トランス", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "30G", "veteran": "なし,トランス,初期pt,初期pt,狙い,偶数,30G,なし"}
{"src": 00379, "machine": "トランス", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "50G", "veteran": "あり,トランス,初期pt,初期pt,狙い,偶数,50G,あり"}
{"src": 00380, "machine": "トランス", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "50G", "veteran": "なし,トランス,初期pt,初期pt,狙い,偶数,50G,なし"}
{"src": 00381, "machine": "トランス", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "70G", "veteran": "あり,トランス,初期pt,初期pt,狙い,偶数,70G,あり"}
{"src": 00382, "machine": "トランス", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "70G", "veteran": "なし,トランス,初期pt,初期pt,狙い,偶数,70G,なし"}
{"src": 00383, "machine": "トランス", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "90G", "veteran": "あり,トランス,初期pt,初期pt,狙い,偶数,90G,あり"}
{"src": 00384, "machine": "トランス", "mode1": "初期pt", "mode2": "初期pt", "mode3": "狙い", "parity": "偶数", "g": "90G", "veteran": "なし,トランス,初期pt,初期pt,狙い,偶数,90G,なし"}

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


