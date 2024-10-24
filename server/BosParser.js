// Generated from server/Bos.g4 by ANTLR 4.13.2
// jshint ignore: start
const antlr4 = require('antlr4').default;

const BosListener = require('./BosListener.js').default;

const serializedATN = [4,1,88,559,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,1,0,1,0,1,0,1,0,1,
0,3,0,130,8,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,0,144,8,
0,1,1,1,1,4,1,148,8,1,11,1,12,1,149,1,2,1,2,1,2,3,2,155,8,2,1,3,1,3,1,3,
1,3,5,3,161,8,3,10,3,12,3,164,9,3,1,3,1,3,1,4,1,4,1,4,1,4,5,4,172,8,4,10,
4,12,4,175,9,4,1,4,1,4,1,5,1,5,1,5,3,5,182,8,5,1,5,1,5,1,5,1,6,1,6,1,6,5,
6,190,8,6,10,6,12,6,193,9,6,1,7,1,7,5,7,197,8,7,10,7,12,7,200,9,7,1,7,1,
7,3,7,204,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,
8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,227,8,8,1,9,1,9,1,9,1,9,1,9,1,9,3,9,235,8,
9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,
1,12,3,12,252,8,12,1,13,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,
1,14,1,14,1,14,3,14,268,8,14,1,14,1,14,1,14,1,15,1,15,1,15,1,16,1,16,1,16,
1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,
16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,301,8,16,1,17,1,17,1,17,1,17,
1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,
19,1,19,1,20,1,20,3,20,325,8,20,1,21,1,21,1,21,1,21,1,21,1,21,1,22,1,22,
3,22,335,8,22,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,
1,24,1,24,1,25,1,25,1,25,3,25,354,8,25,1,26,1,26,1,26,1,26,1,26,1,27,1,27,
1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,30,1,30,1,30,1,
31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,34,1,34,1,34,1,35,
1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,38,1,38,1,
38,1,39,1,39,3,39,409,8,39,1,40,1,40,1,40,1,40,1,40,3,40,416,8,40,1,40,1,
40,1,41,1,41,1,41,1,42,1,42,1,42,1,43,1,43,1,43,1,44,1,44,1,44,1,45,1,45,
1,45,1,45,5,45,436,8,45,10,45,12,45,439,9,45,1,46,1,46,1,46,1,46,1,46,1,
46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,3,46,454,8,46,1,47,1,47,1,47,3,47,
459,8,47,1,47,1,47,1,47,1,47,1,47,3,47,466,8,47,1,47,1,47,1,47,1,47,3,47,
472,8,47,3,47,474,8,47,1,48,1,48,1,48,1,48,1,48,1,48,1,48,3,48,483,8,48,
1,48,1,48,1,48,1,48,3,48,489,8,48,3,48,491,8,48,1,49,1,49,1,50,1,50,1,50,
1,50,1,50,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,52,1,52,1,52,1,53,1,53,1,
53,1,53,1,53,3,53,515,8,53,1,53,3,53,518,8,53,1,53,3,53,521,8,53,1,53,1,
53,1,53,1,53,3,53,527,8,53,1,54,1,54,1,55,1,55,1,55,5,55,534,8,55,10,55,
12,55,537,9,55,3,55,539,8,55,1,56,1,56,1,57,1,57,1,58,1,58,1,59,1,59,1,60,
1,60,1,60,3,60,552,8,60,1,61,1,61,1,61,3,61,557,8,61,1,61,0,0,62,0,2,4,6,
8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,
58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,
106,108,110,112,114,116,118,120,122,0,3,2,0,58,58,71,71,3,0,57,61,63,70,
72,73,1,0,1,3,584,0,143,1,0,0,0,2,147,1,0,0,0,4,154,1,0,0,0,6,156,1,0,0,
0,8,167,1,0,0,0,10,178,1,0,0,0,12,186,1,0,0,0,14,203,1,0,0,0,16,226,1,0,
0,0,18,234,1,0,0,0,20,236,1,0,0,0,22,240,1,0,0,0,24,244,1,0,0,0,26,253,1,
0,0,0,28,259,1,0,0,0,30,272,1,0,0,0,32,300,1,0,0,0,34,302,1,0,0,0,36,308,
1,0,0,0,38,314,1,0,0,0,40,324,1,0,0,0,42,326,1,0,0,0,44,334,1,0,0,0,46,336,
1,0,0,0,48,343,1,0,0,0,50,353,1,0,0,0,52,355,1,0,0,0,54,360,1,0,0,0,56,365,
1,0,0,0,58,370,1,0,0,0,60,373,1,0,0,0,62,376,1,0,0,0,64,379,1,0,0,0,66,384,
1,0,0,0,68,387,1,0,0,0,70,390,1,0,0,0,72,395,1,0,0,0,74,398,1,0,0,0,76,403,
1,0,0,0,78,406,1,0,0,0,80,410,1,0,0,0,82,419,1,0,0,0,84,422,1,0,0,0,86,425,
1,0,0,0,88,428,1,0,0,0,90,431,1,0,0,0,92,453,1,0,0,0,94,473,1,0,0,0,96,490,
1,0,0,0,98,492,1,0,0,0,100,494,1,0,0,0,102,499,1,0,0,0,104,506,1,0,0,0,106,
526,1,0,0,0,108,528,1,0,0,0,110,538,1,0,0,0,112,540,1,0,0,0,114,542,1,0,
0,0,116,544,1,0,0,0,118,546,1,0,0,0,120,551,1,0,0,0,122,556,1,0,0,0,124,
125,5,4,0,0,125,129,3,112,56,0,126,130,5,87,0,0,127,130,3,94,47,0,128,130,
5,88,0,0,129,126,1,0,0,0,129,127,1,0,0,0,129,128,1,0,0,0,129,130,1,0,0,0,
130,144,1,0,0,0,131,132,5,5,0,0,132,144,5,88,0,0,133,134,5,6,0,0,134,144,
3,112,56,0,135,136,5,7,0,0,136,144,3,112,56,0,137,138,5,8,0,0,138,144,3,
112,56,0,139,140,5,10,0,0,140,144,3,90,45,0,141,144,5,11,0,0,142,144,5,9,
0,0,143,124,1,0,0,0,143,131,1,0,0,0,143,133,1,0,0,0,143,135,1,0,0,0,143,
137,1,0,0,0,143,139,1,0,0,0,143,141,1,0,0,0,143,142,1,0,0,0,144,1,1,0,0,
0,145,148,3,0,0,0,146,148,3,4,2,0,147,145,1,0,0,0,147,146,1,0,0,0,148,149,
1,0,0,0,149,147,1,0,0,0,149,150,1,0,0,0,150,3,1,0,0,0,151,155,3,6,3,0,152,
155,3,8,4,0,153,155,3,10,5,0,154,151,1,0,0,0,154,152,1,0,0,0,154,153,1,0,
0,0,155,5,1,0,0,0,156,157,5,51,0,0,157,162,3,114,57,0,158,159,5,80,0,0,159,
161,3,114,57,0,160,158,1,0,0,0,161,164,1,0,0,0,162,160,1,0,0,0,162,163,1,
0,0,0,163,165,1,0,0,0,164,162,1,0,0,0,165,166,5,81,0,0,166,7,1,0,0,0,167,
168,5,52,0,0,168,173,3,112,56,0,169,170,5,80,0,0,170,172,3,112,56,0,171,
169,1,0,0,0,172,175,1,0,0,0,173,171,1,0,0,0,173,174,1,0,0,0,174,176,1,0,
0,0,175,173,1,0,0,0,176,177,5,81,0,0,177,9,1,0,0,0,178,179,3,116,58,0,179,
181,5,74,0,0,180,182,3,12,6,0,181,180,1,0,0,0,181,182,1,0,0,0,182,183,1,
0,0,0,183,184,5,75,0,0,184,185,3,14,7,0,185,11,1,0,0,0,186,191,3,112,56,
0,187,188,5,80,0,0,188,190,3,112,56,0,189,187,1,0,0,0,190,193,1,0,0,0,191,
189,1,0,0,0,191,192,1,0,0,0,192,13,1,0,0,0,193,191,1,0,0,0,194,198,5,76,
0,0,195,197,3,16,8,0,196,195,1,0,0,0,197,200,1,0,0,0,198,196,1,0,0,0,198,
199,1,0,0,0,199,201,1,0,0,0,200,198,1,0,0,0,201,204,5,77,0,0,202,204,3,16,
8,0,203,194,1,0,0,0,203,202,1,0,0,0,204,15,1,0,0,0,205,206,3,18,9,0,206,
207,5,81,0,0,207,227,1,0,0,0,208,227,3,0,0,0,209,227,3,24,12,0,210,227,3,
26,13,0,211,227,3,28,14,0,212,213,3,32,16,0,213,214,5,81,0,0,214,227,1,0,
0,0,215,216,3,30,15,0,216,217,5,81,0,0,217,227,1,0,0,0,218,219,3,20,10,0,
219,220,5,81,0,0,220,227,1,0,0,0,221,222,3,112,56,0,222,223,5,81,0,0,223,
227,1,0,0,0,224,227,3,100,50,0,225,227,5,81,0,0,226,205,1,0,0,0,226,208,
1,0,0,0,226,209,1,0,0,0,226,210,1,0,0,0,226,211,1,0,0,0,226,212,1,0,0,0,
226,215,1,0,0,0,226,218,1,0,0,0,226,221,1,0,0,0,226,224,1,0,0,0,226,225,
1,0,0,0,227,17,1,0,0,0,228,229,3,112,56,0,229,230,5,62,0,0,230,231,3,90,
45,0,231,235,1,0,0,0,232,235,3,20,10,0,233,235,3,22,11,0,234,228,1,0,0,0,
234,232,1,0,0,0,234,233,1,0,0,0,235,19,1,0,0,0,236,237,5,57,0,0,237,238,
5,57,0,0,238,239,3,112,56,0,239,21,1,0,0,0,240,241,5,58,0,0,241,242,5,58,
0,0,242,243,3,112,56,0,243,23,1,0,0,0,244,245,5,42,0,0,245,246,5,74,0,0,
246,247,3,90,45,0,247,248,5,75,0,0,248,251,3,14,7,0,249,250,5,43,0,0,250,
252,3,14,7,0,251,249,1,0,0,0,251,252,1,0,0,0,252,25,1,0,0,0,253,254,5,44,
0,0,254,255,5,74,0,0,255,256,3,90,45,0,256,257,5,75,0,0,257,258,3,14,7,0,
258,27,1,0,0,0,259,260,5,45,0,0,260,261,5,74,0,0,261,262,3,90,45,0,262,263,
5,81,0,0,263,264,3,90,45,0,264,265,5,81,0,0,265,267,3,90,45,0,266,268,5,
81,0,0,267,266,1,0,0,0,267,268,1,0,0,0,268,269,1,0,0,0,269,270,5,75,0,0,
270,271,3,14,7,0,271,29,1,0,0,0,272,273,5,53,0,0,273,274,3,12,6,0,274,31,
1,0,0,0,275,301,3,34,17,0,276,301,3,36,18,0,277,301,3,38,19,0,278,301,3,
42,21,0,279,301,3,46,23,0,280,301,3,48,24,0,281,301,3,52,26,0,282,301,3,
54,27,0,283,301,3,56,28,0,284,301,3,58,29,0,285,301,3,60,30,0,286,301,3,
62,31,0,287,301,3,64,32,0,288,301,3,66,33,0,289,301,3,68,34,0,290,301,3,
70,35,0,291,301,3,72,36,0,292,301,3,74,37,0,293,301,3,76,38,0,294,301,3,
78,39,0,295,301,3,80,40,0,296,301,3,82,41,0,297,301,3,84,42,0,298,301,3,
86,43,0,299,301,3,88,44,0,300,275,1,0,0,0,300,276,1,0,0,0,300,277,1,0,0,
0,300,278,1,0,0,0,300,279,1,0,0,0,300,280,1,0,0,0,300,281,1,0,0,0,300,282,
1,0,0,0,300,283,1,0,0,0,300,284,1,0,0,0,300,285,1,0,0,0,300,286,1,0,0,0,
300,287,1,0,0,0,300,288,1,0,0,0,300,289,1,0,0,0,300,290,1,0,0,0,300,291,
1,0,0,0,300,292,1,0,0,0,300,293,1,0,0,0,300,294,1,0,0,0,300,295,1,0,0,0,
300,296,1,0,0,0,300,297,1,0,0,0,300,298,1,0,0,0,300,299,1,0,0,0,301,33,1,
0,0,0,302,303,5,34,0,0,303,304,3,116,58,0,304,305,5,74,0,0,305,306,3,110,
55,0,306,307,5,75,0,0,307,35,1,0,0,0,308,309,5,33,0,0,309,310,3,116,58,0,
310,311,5,74,0,0,311,312,3,110,55,0,312,313,5,75,0,0,313,37,1,0,0,0,314,
315,5,14,0,0,315,316,3,114,57,0,316,317,5,38,0,0,317,318,3,118,59,0,318,
319,5,36,0,0,319,320,3,90,45,0,320,321,3,40,20,0,321,39,1,0,0,0,322,323,
5,49,0,0,323,325,3,90,45,0,324,322,1,0,0,0,324,325,1,0,0,0,325,41,1,0,0,
0,326,327,5,15,0,0,327,328,3,114,57,0,328,329,5,38,0,0,329,330,3,118,59,
0,330,331,3,44,22,0,331,43,1,0,0,0,332,333,5,50,0,0,333,335,3,90,45,0,334,
332,1,0,0,0,334,335,1,0,0,0,335,45,1,0,0,0,336,337,5,13,0,0,337,338,3,114,
57,0,338,339,5,35,0,0,339,340,3,118,59,0,340,341,3,90,45,0,341,342,3,50,
25,0,342,47,1,0,0,0,343,344,5,12,0,0,344,345,3,114,57,0,345,346,5,35,0,0,
346,347,3,118,59,0,347,348,3,90,45,0,348,349,3,50,25,0,349,49,1,0,0,0,350,
354,5,37,0,0,351,352,5,36,0,0,352,354,3,90,45,0,353,350,1,0,0,0,353,351,
1,0,0,0,354,51,1,0,0,0,355,356,5,24,0,0,356,357,3,114,57,0,357,358,5,38,
0,0,358,359,3,118,59,0,359,53,1,0,0,0,360,361,5,25,0,0,361,362,3,114,57,
0,362,363,5,39,0,0,363,364,3,118,59,0,364,55,1,0,0,0,365,366,5,22,0,0,366,
367,3,90,45,0,367,368,5,41,0,0,368,369,3,114,57,0,369,57,1,0,0,0,370,371,
5,23,0,0,371,372,3,90,45,0,372,59,1,0,0,0,373,374,5,17,0,0,374,375,3,114,
57,0,375,61,1,0,0,0,376,377,5,16,0,0,377,378,3,114,57,0,378,63,1,0,0,0,379,
380,5,26,0,0,380,381,3,114,57,0,381,382,5,40,0,0,382,383,3,90,45,0,383,65,
1,0,0,0,384,385,5,55,0,0,385,386,3,90,45,0,386,67,1,0,0,0,387,388,5,56,0,
0,388,389,3,90,45,0,389,69,1,0,0,0,390,391,5,27,0,0,391,392,3,90,45,0,392,
393,5,35,0,0,393,394,3,90,45,0,394,71,1,0,0,0,395,396,5,32,0,0,396,397,3,
90,45,0,397,73,1,0,0,0,398,399,5,28,0,0,399,400,3,90,45,0,400,401,5,35,0,
0,401,402,3,90,45,0,402,75,1,0,0,0,403,404,5,29,0,0,404,405,3,90,45,0,405,
77,1,0,0,0,406,408,5,30,0,0,407,409,3,90,45,0,408,407,1,0,0,0,408,409,1,
0,0,0,409,79,1,0,0,0,410,411,5,54,0,0,411,412,5,74,0,0,412,415,5,88,0,0,
413,414,5,80,0,0,414,416,3,90,45,0,415,413,1,0,0,0,415,416,1,0,0,0,416,417,
1,0,0,0,417,418,5,75,0,0,418,81,1,0,0,0,419,420,5,18,0,0,420,421,3,114,57,
0,421,83,1,0,0,0,422,423,5,19,0,0,423,424,3,114,57,0,424,85,1,0,0,0,425,
426,5,20,0,0,426,427,3,114,57,0,427,87,1,0,0,0,428,429,5,21,0,0,429,430,
3,114,57,0,430,89,1,0,0,0,431,437,3,92,46,0,432,433,3,108,54,0,433,434,3,
92,46,0,434,436,1,0,0,0,435,432,1,0,0,0,436,439,1,0,0,0,437,435,1,0,0,0,
437,438,1,0,0,0,438,91,1,0,0,0,439,437,1,0,0,0,440,454,3,106,53,0,441,442,
5,74,0,0,442,443,3,90,45,0,443,444,5,75,0,0,444,454,1,0,0,0,445,446,3,98,
49,0,446,447,3,92,46,0,447,454,1,0,0,0,448,454,3,112,56,0,449,454,3,94,47,
0,450,454,3,96,48,0,451,454,3,102,51,0,452,454,3,100,50,0,453,440,1,0,0,
0,453,441,1,0,0,0,453,445,1,0,0,0,453,448,1,0,0,0,453,449,1,0,0,0,453,450,
1,0,0,0,453,451,1,0,0,0,453,452,1,0,0,0,454,93,1,0,0,0,455,458,5,65,0,0,
456,459,3,122,61,0,457,459,3,120,60,0,458,456,1,0,0,0,458,457,1,0,0,0,459,
460,1,0,0,0,460,461,5,67,0,0,461,474,1,0,0,0,462,465,5,78,0,0,463,466,3,
122,61,0,464,466,3,120,60,0,465,463,1,0,0,0,465,464,1,0,0,0,466,467,1,0,
0,0,467,468,5,79,0,0,468,474,1,0,0,0,469,472,3,122,61,0,470,472,3,120,60,
0,471,469,1,0,0,0,471,470,1,0,0,0,472,474,1,0,0,0,473,455,1,0,0,0,473,462,
1,0,0,0,473,471,1,0,0,0,474,95,1,0,0,0,475,491,5,46,0,0,476,491,5,47,0,0,
477,482,5,48,0,0,478,479,5,74,0,0,479,480,3,90,45,0,480,481,5,75,0,0,481,
483,1,0,0,0,482,478,1,0,0,0,482,483,1,0,0,0,483,488,1,0,0,0,484,485,5,74,
0,0,485,486,3,90,45,0,486,487,5,75,0,0,487,489,1,0,0,0,488,484,1,0,0,0,488,
489,1,0,0,0,489,491,1,0,0,0,490,475,1,0,0,0,490,476,1,0,0,0,490,477,1,0,
0,0,491,97,1,0,0,0,492,493,7,0,0,0,493,99,1,0,0,0,494,495,3,116,58,0,495,
496,5,74,0,0,496,497,3,110,55,0,497,498,5,75,0,0,498,101,1,0,0,0,499,500,
5,31,0,0,500,501,5,74,0,0,501,502,3,90,45,0,502,503,5,80,0,0,503,504,3,90,
45,0,504,505,5,75,0,0,505,103,1,0,0,0,506,507,5,80,0,0,507,508,3,90,45,0,
508,105,1,0,0,0,509,510,5,32,0,0,510,511,3,92,46,0,511,512,5,74,0,0,512,
514,3,90,45,0,513,515,3,104,52,0,514,513,1,0,0,0,514,515,1,0,0,0,515,517,
1,0,0,0,516,518,3,104,52,0,517,516,1,0,0,0,517,518,1,0,0,0,518,520,1,0,0,
0,519,521,3,104,52,0,520,519,1,0,0,0,520,521,1,0,0,0,521,522,1,0,0,0,522,
523,5,75,0,0,523,527,1,0,0,0,524,525,5,32,0,0,525,527,3,92,46,0,526,509,
1,0,0,0,526,524,1,0,0,0,527,107,1,0,0,0,528,529,7,1,0,0,529,109,1,0,0,0,
530,535,3,90,45,0,531,532,5,80,0,0,532,534,3,90,45,0,533,531,1,0,0,0,534,
537,1,0,0,0,535,533,1,0,0,0,535,536,1,0,0,0,536,539,1,0,0,0,537,535,1,0,
0,0,538,530,1,0,0,0,538,539,1,0,0,0,539,111,1,0,0,0,540,541,5,87,0,0,541,
113,1,0,0,0,542,543,5,87,0,0,543,115,1,0,0,0,544,545,5,87,0,0,545,117,1,
0,0,0,546,547,7,2,0,0,547,119,1,0,0,0,548,549,5,58,0,0,549,552,5,85,0,0,
550,552,5,85,0,0,551,548,1,0,0,0,551,550,1,0,0,0,552,121,1,0,0,0,553,554,
5,58,0,0,554,557,5,86,0,0,555,557,5,86,0,0,556,553,1,0,0,0,556,555,1,0,0,
0,557,123,1,0,0,0,38,129,143,147,149,154,162,173,181,191,198,203,226,234,
251,267,300,324,334,353,408,415,437,453,458,465,471,473,482,488,490,514,
517,520,526,535,538,551,556];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

class BosParser extends antlr4.Parser {

    static grammarFileName = "Bos.g4";
    static literalNames = [ null, "'x-axis'", "'y-axis'", "'z-axis'", "'#define'", 
                            "'#include'", "'#undef'", "'#ifdef'", "'#ifndef'", 
                            "'#endif'", "'#if'", "'#else'", "'move'", "'turn'", 
                            "'spin'", "'stop-spin'", "'show'", "'hide'", 
                            "'cache'", "'dont-cache'", "'dont-shadow'", 
                            "'dont-shade'", "'emit-sfx'", "'sleep'", "'wait-for-turn'", 
                            "'wait-for-move'", "'explode'", "'set'", "'attach-unit'", 
                            "'drop-unit'", "'return'", "'rand'", null, "'start-script'", 
                            "'call-script'", "'to'", "'speed'", "'now'", 
                            "'around'", "'along'", "'type'", "'from'", "'if'", 
                            "'else'", "'while'", "'for'", "'TRUE'", "'FALSE'", 
                            "'UNKNOWN_UNIT_VALUE'", "'accelerate'", "'decelerate'", 
                            "'piece'", "'static-var'", "'var'", "'sound'", 
                            "'signal'", "'set-signal-mask'", "'+'", "'-'", 
                            "'*'", "'/'", "'%'", "'='", "'=='", "'!='", 
                            "'<'", "'<='", "'>'", "'>='", null, null, null, 
                            "'&'", "'|'", "'('", "')'", "'{'", "'}'", "'['", 
                            "']'", "','", "';'" ];
    static symbolicNames = [ null, null, null, null, "D_DEFINE", "D_INCLUDE", 
                             "D_UNDEF", "D_IFDEF", "D_IFNDEF", "D_ENDIF", 
                             "D_IF", "D_ELSE", "MOVE", "TURN", "SPIN", "STOP_SPIN", 
                             "SHOW", "HIDE", "CACHE", "DONT_CACHE", "DONT_SHADOW", 
                             "DONT_SHADE", "EMIT_SFX", "SLEEP", "WAIT_FOR_TURN", 
                             "WAIT_FOR_MOVE", "EXPLODE", "SET", "ATTACH_UNIT", 
                             "DROP_UNIT", "RETURN", "RAND", "GET", "START_SCRIPT", 
                             "CALL_SCRIPT", "TO", "SPEED", "NOW", "AROUND", 
                             "ALONG", "TYPE", "FROM", "IF", "ELSE", "WHILE", 
                             "FOR", "TRUE", "FALSE", "UNKNOWN_UNIT_VALUE", 
                             "ACCELERATE", "DECELERATE", "PIECE", "STATIC_VAR", 
                             "VAR", "SOUND", "SIGNAL", "SET_SIGNAL_MASK", 
                             "PLUS", "MINUS", "MULTIPLY", "DIVIDE", "MODULO", 
                             "EQUAL", "DOUBLE_EQUAL", "NOT_EQUAL", "LESS_THAN", 
                             "LESS_EQUAL", "GREATER_THAN", "GREATER_EQUAL", 
                             "LOGICAL_AND", "LOGICAL_OR", "NOT", "BITWISE_AND", 
                             "BITWISE_OR", "LPAREN", "RPAREN", "LBRACE", 
                             "RBRACE", "LBRACKET", "RBRACKET", "COMMA", 
                             "SEMICOLON", "WS", "COMMENT", "BLOCK_COMMENT", 
                             "INTEGER_CONSTANT", "FLOAT_CONSTANT", "IDENTIFIER", 
                             "STRING" ];
    static ruleNames = [ "preprocessor", "file", "declaration", "pieceDec", 
                         "staticVarDec", "funcDec", "arguments", "statementBlock", 
                         "statement", "assignStatement", "incrementStatement", 
                         "decrementStatement", "ifStatement", "whileStatement", 
                         "forStatement", "varStatement", "keywordStatement", 
                         "callStatement", "startStatement", "spinStatement", 
                         "optionalAcceleration", "stopSpinStatement", "optionalDeceleration", 
                         "turnStatement", "moveStatement", "speedNow", "waitForTurnStatement", 
                         "waitForMoveStatement", "emitSfxStatement", "sleepStatement", 
                         "hideStatement", "showStatement", "explodeStatement", 
                         "signalStatement", "setSignalMaskStatement", "setStatement", 
                         "getStatement", "attachUnitStatement", "dropUnitStatement", 
                         "returnStatement", "playSoundStatement", "cacheStatement", 
                         "dontCacheStatement", "dontShadowStatement", "dontShadeStatement", 
                         "expression", "term", "constant", "globalConstant", 
                         "unaryOp", "funcCall", "randCall", "commaExpression", 
                         "getTerm", "op", "expressionList", "varName", "pieceName", 
                         "funcName", "axis", "signedIntegerConstant", "signedFloatConstant" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = BosParser.ruleNames;
        this.literalNames = BosParser.literalNames;
        this.symbolicNames = BosParser.symbolicNames;
    }



	preprocessor() {
	    let localctx = new PreprocessorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, BosParser.RULE_preprocessor);
	    try {
	        this.state = 143;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 124;
	            this.match(BosParser.D_DEFINE);
	            this.state = 125;
	            this.varName();
	            this.state = 129;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            if(la_===1) {
	                this.state = 126;
	                this.match(BosParser.IDENTIFIER);

	            } else if(la_===2) {
	                this.state = 127;
	                this.constant();

	            } else if(la_===3) {
	                this.state = 128;
	                this.match(BosParser.STRING);

	            }
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 131;
	            this.match(BosParser.D_INCLUDE);
	            this.state = 132;
	            this.match(BosParser.STRING);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 133;
	            this.match(BosParser.D_UNDEF);
	            this.state = 134;
	            this.varName();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 135;
	            this.match(BosParser.D_IFDEF);
	            this.state = 136;
	            this.varName();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 137;
	            this.match(BosParser.D_IFNDEF);
	            this.state = 138;
	            this.varName();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 139;
	            this.match(BosParser.D_IF);
	            this.state = 140;
	            this.expression();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 141;
	            this.match(BosParser.D_ELSE);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 142;
	            this.match(BosParser.D_ENDIF);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	file() {
	    let localctx = new FileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, BosParser.RULE_file);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 147;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 4:
	            case 5:
	            case 6:
	            case 7:
	            case 8:
	            case 9:
	            case 10:
	            case 11:
	                this.state = 145;
	                this.preprocessor();
	                break;
	            case 51:
	            case 52:
	            case 87:
	                this.state = 146;
	                this.declaration();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 149; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4080) !== 0) || _la===51 || _la===52 || _la===87);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, BosParser.RULE_declaration);
	    try {
	        this.state = 154;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 51:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 151;
	            this.pieceDec();
	            break;
	        case 52:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 152;
	            this.staticVarDec();
	            break;
	        case 87:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 153;
	            this.funcDec();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pieceDec() {
	    let localctx = new PieceDecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, BosParser.RULE_pieceDec);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        this.match(BosParser.PIECE);
	        this.state = 157;
	        this.pieceName();
	        this.state = 162;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===80) {
	            this.state = 158;
	            this.match(BosParser.COMMA);
	            this.state = 159;
	            this.pieceName();
	            this.state = 164;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 165;
	        this.match(BosParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	staticVarDec() {
	    let localctx = new StaticVarDecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, BosParser.RULE_staticVarDec);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this.match(BosParser.STATIC_VAR);
	        this.state = 168;
	        this.varName();
	        this.state = 173;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===80) {
	            this.state = 169;
	            this.match(BosParser.COMMA);
	            this.state = 170;
	            this.varName();
	            this.state = 175;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 176;
	        this.match(BosParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcDec() {
	    let localctx = new FuncDecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, BosParser.RULE_funcDec);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this.funcName();
	        this.state = 179;
	        this.match(BosParser.LPAREN);
	        this.state = 181;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===87) {
	            this.state = 180;
	            this.arguments();
	        }

	        this.state = 183;
	        this.match(BosParser.RPAREN);
	        this.state = 184;
	        this.statementBlock();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arguments() {
	    let localctx = new ArgumentsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, BosParser.RULE_arguments);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        this.varName();
	        this.state = 191;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===80) {
	            this.state = 187;
	            this.match(BosParser.COMMA);
	            this.state = 188;
	            this.varName();
	            this.state = 193;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statementBlock() {
	    let localctx = new StatementBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, BosParser.RULE_statementBlock);
	    var _la = 0;
	    try {
	        this.state = 203;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 76:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 194;
	            this.match(BosParser.LBRACE);
	            this.state = 198;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2147483632) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 132133895) !== 0) || _la===81 || _la===87) {
	                this.state = 195;
	                this.statement();
	                this.state = 200;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 201;
	            this.match(BosParser.RBRACE);
	            break;
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 32:
	        case 33:
	        case 34:
	        case 42:
	        case 44:
	        case 45:
	        case 53:
	        case 54:
	        case 55:
	        case 56:
	        case 57:
	        case 58:
	        case 81:
	        case 87:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 202;
	            this.statement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, BosParser.RULE_statement);
	    try {
	        this.state = 226;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 205;
	            this.assignStatement();
	            this.state = 206;
	            this.match(BosParser.SEMICOLON);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 208;
	            this.preprocessor();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 209;
	            this.ifStatement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 210;
	            this.whileStatement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 211;
	            this.forStatement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 212;
	            this.keywordStatement();
	            this.state = 213;
	            this.match(BosParser.SEMICOLON);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 215;
	            this.varStatement();
	            this.state = 216;
	            this.match(BosParser.SEMICOLON);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 218;
	            this.incrementStatement();
	            this.state = 219;
	            this.match(BosParser.SEMICOLON);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 221;
	            this.varName();
	            this.state = 222;
	            this.match(BosParser.SEMICOLON);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 224;
	            this.funcCall();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 225;
	            this.match(BosParser.SEMICOLON);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignStatement() {
	    let localctx = new AssignStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, BosParser.RULE_assignStatement);
	    try {
	        this.state = 234;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 87:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 228;
	            this.varName();
	            this.state = 229;
	            this.match(BosParser.EQUAL);
	            this.state = 230;
	            this.expression();
	            break;
	        case 57:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 232;
	            this.incrementStatement();
	            break;
	        case 58:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 233;
	            this.decrementStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	incrementStatement() {
	    let localctx = new IncrementStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, BosParser.RULE_incrementStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 236;
	        this.match(BosParser.PLUS);
	        this.state = 237;
	        this.match(BosParser.PLUS);
	        this.state = 238;
	        this.varName();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	decrementStatement() {
	    let localctx = new DecrementStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, BosParser.RULE_decrementStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 240;
	        this.match(BosParser.MINUS);
	        this.state = 241;
	        this.match(BosParser.MINUS);
	        this.state = 242;
	        this.varName();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, BosParser.RULE_ifStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 244;
	        this.match(BosParser.IF);
	        this.state = 245;
	        this.match(BosParser.LPAREN);
	        this.state = 246;
	        this.expression();
	        this.state = 247;
	        this.match(BosParser.RPAREN);
	        this.state = 248;
	        this.statementBlock();
	        this.state = 251;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        if(la_===1) {
	            this.state = 249;
	            this.match(BosParser.ELSE);
	            this.state = 250;
	            this.statementBlock();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	whileStatement() {
	    let localctx = new WhileStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, BosParser.RULE_whileStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 253;
	        this.match(BosParser.WHILE);
	        this.state = 254;
	        this.match(BosParser.LPAREN);
	        this.state = 255;
	        this.expression();
	        this.state = 256;
	        this.match(BosParser.RPAREN);
	        this.state = 257;
	        this.statementBlock();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	forStatement() {
	    let localctx = new ForStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, BosParser.RULE_forStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 259;
	        this.match(BosParser.FOR);
	        this.state = 260;
	        this.match(BosParser.LPAREN);
	        this.state = 261;
	        this.expression();
	        this.state = 262;
	        this.match(BosParser.SEMICOLON);
	        this.state = 263;
	        this.expression();
	        this.state = 264;
	        this.match(BosParser.SEMICOLON);
	        this.state = 265;
	        this.expression();
	        this.state = 267;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===81) {
	            this.state = 266;
	            this.match(BosParser.SEMICOLON);
	        }

	        this.state = 269;
	        this.match(BosParser.RPAREN);
	        this.state = 270;
	        this.statementBlock();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varStatement() {
	    let localctx = new VarStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, BosParser.RULE_varStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 272;
	        this.match(BosParser.VAR);
	        this.state = 273;
	        this.arguments();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	keywordStatement() {
	    let localctx = new KeywordStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, BosParser.RULE_keywordStatement);
	    try {
	        this.state = 300;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 34:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 275;
	            this.callStatement();
	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 276;
	            this.startStatement();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 277;
	            this.spinStatement();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 278;
	            this.stopSpinStatement();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 279;
	            this.turnStatement();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 280;
	            this.moveStatement();
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 281;
	            this.waitForTurnStatement();
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 282;
	            this.waitForMoveStatement();
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 283;
	            this.emitSfxStatement();
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 284;
	            this.sleepStatement();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 285;
	            this.hideStatement();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 286;
	            this.showStatement();
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 287;
	            this.explodeStatement();
	            break;
	        case 55:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 288;
	            this.signalStatement();
	            break;
	        case 56:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 289;
	            this.setSignalMaskStatement();
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 290;
	            this.setStatement();
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 291;
	            this.getStatement();
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 292;
	            this.attachUnitStatement();
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 293;
	            this.dropUnitStatement();
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 294;
	            this.returnStatement();
	            break;
	        case 54:
	            this.enterOuterAlt(localctx, 21);
	            this.state = 295;
	            this.playSoundStatement();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 22);
	            this.state = 296;
	            this.cacheStatement();
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 23);
	            this.state = 297;
	            this.dontCacheStatement();
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 24);
	            this.state = 298;
	            this.dontShadowStatement();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 25);
	            this.state = 299;
	            this.dontShadeStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	callStatement() {
	    let localctx = new CallStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, BosParser.RULE_callStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 302;
	        this.match(BosParser.CALL_SCRIPT);
	        this.state = 303;
	        this.funcName();
	        this.state = 304;
	        this.match(BosParser.LPAREN);
	        this.state = 305;
	        this.expressionList();
	        this.state = 306;
	        this.match(BosParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	startStatement() {
	    let localctx = new StartStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, BosParser.RULE_startStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 308;
	        this.match(BosParser.START_SCRIPT);
	        this.state = 309;
	        this.funcName();
	        this.state = 310;
	        this.match(BosParser.LPAREN);
	        this.state = 311;
	        this.expressionList();
	        this.state = 312;
	        this.match(BosParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	spinStatement() {
	    let localctx = new SpinStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, BosParser.RULE_spinStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 314;
	        this.match(BosParser.SPIN);
	        this.state = 315;
	        this.pieceName();
	        this.state = 316;
	        this.match(BosParser.AROUND);
	        this.state = 317;
	        this.axis();
	        this.state = 318;
	        this.match(BosParser.SPEED);
	        this.state = 319;
	        this.expression();
	        this.state = 320;
	        this.optionalAcceleration();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	optionalAcceleration() {
	    let localctx = new OptionalAccelerationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, BosParser.RULE_optionalAcceleration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 324;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===49) {
	            this.state = 322;
	            this.match(BosParser.ACCELERATE);
	            this.state = 323;
	            this.expression();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stopSpinStatement() {
	    let localctx = new StopSpinStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, BosParser.RULE_stopSpinStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 326;
	        this.match(BosParser.STOP_SPIN);
	        this.state = 327;
	        this.pieceName();
	        this.state = 328;
	        this.match(BosParser.AROUND);
	        this.state = 329;
	        this.axis();
	        this.state = 330;
	        this.optionalDeceleration();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	optionalDeceleration() {
	    let localctx = new OptionalDecelerationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, BosParser.RULE_optionalDeceleration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 334;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===50) {
	            this.state = 332;
	            this.match(BosParser.DECELERATE);
	            this.state = 333;
	            this.expression();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	turnStatement() {
	    let localctx = new TurnStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, BosParser.RULE_turnStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 336;
	        this.match(BosParser.TURN);
	        this.state = 337;
	        this.pieceName();
	        this.state = 338;
	        this.match(BosParser.TO);
	        this.state = 339;
	        this.axis();
	        this.state = 340;
	        this.expression();
	        this.state = 341;
	        this.speedNow();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	moveStatement() {
	    let localctx = new MoveStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, BosParser.RULE_moveStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 343;
	        this.match(BosParser.MOVE);
	        this.state = 344;
	        this.pieceName();
	        this.state = 345;
	        this.match(BosParser.TO);
	        this.state = 346;
	        this.axis();
	        this.state = 347;
	        this.expression();
	        this.state = 348;
	        this.speedNow();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	speedNow() {
	    let localctx = new SpeedNowContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, BosParser.RULE_speedNow);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 353;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 37:
	            this.state = 350;
	            this.match(BosParser.NOW);
	            break;
	        case 36:
	            this.state = 351;
	            this.match(BosParser.SPEED);
	            this.state = 352;
	            this.expression();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	waitForTurnStatement() {
	    let localctx = new WaitForTurnStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, BosParser.RULE_waitForTurnStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 355;
	        this.match(BosParser.WAIT_FOR_TURN);
	        this.state = 356;
	        this.pieceName();
	        this.state = 357;
	        this.match(BosParser.AROUND);
	        this.state = 358;
	        this.axis();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	waitForMoveStatement() {
	    let localctx = new WaitForMoveStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, BosParser.RULE_waitForMoveStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 360;
	        this.match(BosParser.WAIT_FOR_MOVE);
	        this.state = 361;
	        this.pieceName();
	        this.state = 362;
	        this.match(BosParser.ALONG);
	        this.state = 363;
	        this.axis();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	emitSfxStatement() {
	    let localctx = new EmitSfxStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, BosParser.RULE_emitSfxStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 365;
	        this.match(BosParser.EMIT_SFX);
	        this.state = 366;
	        this.expression();
	        this.state = 367;
	        this.match(BosParser.FROM);
	        this.state = 368;
	        this.pieceName();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sleepStatement() {
	    let localctx = new SleepStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, BosParser.RULE_sleepStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 370;
	        this.match(BosParser.SLEEP);
	        this.state = 371;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	hideStatement() {
	    let localctx = new HideStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, BosParser.RULE_hideStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 373;
	        this.match(BosParser.HIDE);
	        this.state = 374;
	        this.pieceName();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	showStatement() {
	    let localctx = new ShowStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, BosParser.RULE_showStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 376;
	        this.match(BosParser.SHOW);
	        this.state = 377;
	        this.pieceName();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	explodeStatement() {
	    let localctx = new ExplodeStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, BosParser.RULE_explodeStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 379;
	        this.match(BosParser.EXPLODE);
	        this.state = 380;
	        this.pieceName();
	        this.state = 381;
	        this.match(BosParser.TYPE);
	        this.state = 382;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	signalStatement() {
	    let localctx = new SignalStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, BosParser.RULE_signalStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 384;
	        this.match(BosParser.SIGNAL);
	        this.state = 385;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	setSignalMaskStatement() {
	    let localctx = new SetSignalMaskStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, BosParser.RULE_setSignalMaskStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 387;
	        this.match(BosParser.SET_SIGNAL_MASK);
	        this.state = 388;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	setStatement() {
	    let localctx = new SetStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, BosParser.RULE_setStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 390;
	        this.match(BosParser.SET);
	        this.state = 391;
	        this.expression();
	        this.state = 392;
	        this.match(BosParser.TO);
	        this.state = 393;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	getStatement() {
	    let localctx = new GetStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, BosParser.RULE_getStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 395;
	        this.match(BosParser.GET);
	        this.state = 396;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	attachUnitStatement() {
	    let localctx = new AttachUnitStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, BosParser.RULE_attachUnitStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 398;
	        this.match(BosParser.ATTACH_UNIT);
	        this.state = 399;
	        this.expression();
	        this.state = 400;
	        this.match(BosParser.TO);
	        this.state = 401;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dropUnitStatement() {
	    let localctx = new DropUnitStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, BosParser.RULE_dropUnitStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 403;
	        this.match(BosParser.DROP_UNIT);
	        this.state = 404;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	returnStatement() {
	    let localctx = new ReturnStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, BosParser.RULE_returnStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 406;
	        this.match(BosParser.RETURN);
	        this.state = 408;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 134447107) !== 0) || ((((_la - 65)) & ~0x1f) === 0 && ((1 << (_la - 65)) & 7348801) !== 0)) {
	            this.state = 407;
	            this.expression();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	playSoundStatement() {
	    let localctx = new PlaySoundStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, BosParser.RULE_playSoundStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 410;
	        this.match(BosParser.SOUND);
	        this.state = 411;
	        this.match(BosParser.LPAREN);
	        this.state = 412;
	        this.match(BosParser.STRING);
	        this.state = 415;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===80) {
	            this.state = 413;
	            this.match(BosParser.COMMA);
	            this.state = 414;
	            this.expression();
	        }

	        this.state = 417;
	        this.match(BosParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cacheStatement() {
	    let localctx = new CacheStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, BosParser.RULE_cacheStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 419;
	        this.match(BosParser.CACHE);
	        this.state = 420;
	        this.pieceName();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dontCacheStatement() {
	    let localctx = new DontCacheStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, BosParser.RULE_dontCacheStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 422;
	        this.match(BosParser.DONT_CACHE);
	        this.state = 423;
	        this.pieceName();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dontShadowStatement() {
	    let localctx = new DontShadowStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, BosParser.RULE_dontShadowStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 425;
	        this.match(BosParser.DONT_SHADOW);
	        this.state = 426;
	        this.pieceName();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dontShadeStatement() {
	    let localctx = new DontShadeStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, BosParser.RULE_dontShadeStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 428;
	        this.match(BosParser.DONT_SHADE);
	        this.state = 429;
	        this.pieceName();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, BosParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 431;
	        this.term();
	        this.state = 437;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 432;
	                this.op();
	                this.state = 433;
	                this.term(); 
	            }
	            this.state = 439;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, BosParser.RULE_term);
	    try {
	        this.state = 453;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 440;
	            this.getTerm();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 441;
	            this.match(BosParser.LPAREN);
	            this.state = 442;
	            this.expression();
	            this.state = 443;
	            this.match(BosParser.RPAREN);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 445;
	            this.unaryOp();
	            this.state = 446;
	            this.term();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 448;
	            this.varName();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 449;
	            this.constant();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 450;
	            this.globalConstant();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 451;
	            this.randCall();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 452;
	            this.funcCall();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constant() {
	    let localctx = new ConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, BosParser.RULE_constant);
	    try {
	        this.state = 473;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 65:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 455;
	            this.match(BosParser.LESS_THAN);
	            this.state = 458;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 456;
	                this.signedFloatConstant();
	                break;

	            case 2:
	                this.state = 457;
	                this.signedIntegerConstant();
	                break;

	            }
	            this.state = 460;
	            this.match(BosParser.GREATER_THAN);
	            break;
	        case 78:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 462;
	            this.match(BosParser.LBRACKET);
	            this.state = 465;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 463;
	                this.signedFloatConstant();
	                break;

	            case 2:
	                this.state = 464;
	                this.signedIntegerConstant();
	                break;

	            }
	            this.state = 467;
	            this.match(BosParser.RBRACKET);
	            break;
	        case 58:
	        case 85:
	        case 86:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 471;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 469;
	                this.signedFloatConstant();
	                break;

	            case 2:
	                this.state = 470;
	                this.signedIntegerConstant();
	                break;

	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	globalConstant() {
	    let localctx = new GlobalConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, BosParser.RULE_globalConstant);
	    try {
	        this.state = 490;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 46:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 475;
	            this.match(BosParser.TRUE);
	            break;
	        case 47:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 476;
	            this.match(BosParser.FALSE);
	            break;
	        case 48:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 477;
	            this.match(BosParser.UNKNOWN_UNIT_VALUE);
	            this.state = 482;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	            if(la_===1) {
	                this.state = 478;
	                this.match(BosParser.LPAREN);
	                this.state = 479;
	                this.expression();
	                this.state = 480;
	                this.match(BosParser.RPAREN);

	            }
	            this.state = 488;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	            if(la_===1) {
	                this.state = 484;
	                this.match(BosParser.LPAREN);
	                this.state = 485;
	                this.expression();
	                this.state = 486;
	                this.match(BosParser.RPAREN);

	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unaryOp() {
	    let localctx = new UnaryOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, BosParser.RULE_unaryOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 492;
	        _la = this._input.LA(1);
	        if(!(_la===58 || _la===71)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcCall() {
	    let localctx = new FuncCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, BosParser.RULE_funcCall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 494;
	        this.funcName();
	        this.state = 495;
	        this.match(BosParser.LPAREN);
	        this.state = 496;
	        this.expressionList();
	        this.state = 497;
	        this.match(BosParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	randCall() {
	    let localctx = new RandCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, BosParser.RULE_randCall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 499;
	        this.match(BosParser.RAND);
	        this.state = 500;
	        this.match(BosParser.LPAREN);
	        this.state = 501;
	        this.expression();
	        this.state = 502;
	        this.match(BosParser.COMMA);
	        this.state = 503;
	        this.expression();
	        this.state = 504;
	        this.match(BosParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	commaExpression() {
	    let localctx = new CommaExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 104, BosParser.RULE_commaExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 506;
	        this.match(BosParser.COMMA);
	        this.state = 507;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	getTerm() {
	    let localctx = new GetTermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 106, BosParser.RULE_getTerm);
	    var _la = 0;
	    try {
	        this.state = 526;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 509;
	            this.match(BosParser.GET);
	            this.state = 510;
	            this.term();
	            this.state = 511;
	            this.match(BosParser.LPAREN);
	            this.state = 512;
	            this.expression();
	            this.state = 514;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	            if(la_===1) {
	                this.state = 513;
	                this.commaExpression();

	            }
	            this.state = 517;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	            if(la_===1) {
	                this.state = 516;
	                this.commaExpression();

	            }
	            this.state = 520;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===80) {
	                this.state = 519;
	                this.commaExpression();
	            }

	            this.state = 522;
	            this.match(BosParser.RPAREN);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 524;
	            this.match(BosParser.GET);
	            this.state = 525;
	            this.term();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	op() {
	    let localctx = new OpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 108, BosParser.RULE_op);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 528;
	        _la = this._input.LA(1);
	        if(!(((((_la - 57)) & ~0x1f) === 0 && ((1 << (_la - 57)) & 114655) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expressionList() {
	    let localctx = new ExpressionListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 110, BosParser.RULE_expressionList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 538;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 134447107) !== 0) || ((((_la - 65)) & ~0x1f) === 0 && ((1 << (_la - 65)) & 7348801) !== 0)) {
	            this.state = 530;
	            this.expression();
	            this.state = 535;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===80) {
	                this.state = 531;
	                this.match(BosParser.COMMA);
	                this.state = 532;
	                this.expression();
	                this.state = 537;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varName() {
	    let localctx = new VarNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 112, BosParser.RULE_varName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 540;
	        this.match(BosParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pieceName() {
	    let localctx = new PieceNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 114, BosParser.RULE_pieceName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 542;
	        this.match(BosParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcName() {
	    let localctx = new FuncNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 116, BosParser.RULE_funcName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 544;
	        this.match(BosParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	axis() {
	    let localctx = new AxisContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 118, BosParser.RULE_axis);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 546;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	signedIntegerConstant() {
	    let localctx = new SignedIntegerConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 120, BosParser.RULE_signedIntegerConstant);
	    try {
	        this.state = 551;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 58:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 548;
	            this.match(BosParser.MINUS);
	            this.state = 549;
	            this.match(BosParser.INTEGER_CONSTANT);
	            break;
	        case 85:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 550;
	            this.match(BosParser.INTEGER_CONSTANT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	signedFloatConstant() {
	    let localctx = new SignedFloatConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 122, BosParser.RULE_signedFloatConstant);
	    try {
	        this.state = 556;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 58:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 553;
	            this.match(BosParser.MINUS);
	            this.state = 554;
	            this.match(BosParser.FLOAT_CONSTANT);
	            break;
	        case 86:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 555;
	            this.match(BosParser.FLOAT_CONSTANT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

BosParser.EOF = antlr4.Token.EOF;
BosParser.T__0 = 1;
BosParser.T__1 = 2;
BosParser.T__2 = 3;
BosParser.D_DEFINE = 4;
BosParser.D_INCLUDE = 5;
BosParser.D_UNDEF = 6;
BosParser.D_IFDEF = 7;
BosParser.D_IFNDEF = 8;
BosParser.D_ENDIF = 9;
BosParser.D_IF = 10;
BosParser.D_ELSE = 11;
BosParser.MOVE = 12;
BosParser.TURN = 13;
BosParser.SPIN = 14;
BosParser.STOP_SPIN = 15;
BosParser.SHOW = 16;
BosParser.HIDE = 17;
BosParser.CACHE = 18;
BosParser.DONT_CACHE = 19;
BosParser.DONT_SHADOW = 20;
BosParser.DONT_SHADE = 21;
BosParser.EMIT_SFX = 22;
BosParser.SLEEP = 23;
BosParser.WAIT_FOR_TURN = 24;
BosParser.WAIT_FOR_MOVE = 25;
BosParser.EXPLODE = 26;
BosParser.SET = 27;
BosParser.ATTACH_UNIT = 28;
BosParser.DROP_UNIT = 29;
BosParser.RETURN = 30;
BosParser.RAND = 31;
BosParser.GET = 32;
BosParser.START_SCRIPT = 33;
BosParser.CALL_SCRIPT = 34;
BosParser.TO = 35;
BosParser.SPEED = 36;
BosParser.NOW = 37;
BosParser.AROUND = 38;
BosParser.ALONG = 39;
BosParser.TYPE = 40;
BosParser.FROM = 41;
BosParser.IF = 42;
BosParser.ELSE = 43;
BosParser.WHILE = 44;
BosParser.FOR = 45;
BosParser.TRUE = 46;
BosParser.FALSE = 47;
BosParser.UNKNOWN_UNIT_VALUE = 48;
BosParser.ACCELERATE = 49;
BosParser.DECELERATE = 50;
BosParser.PIECE = 51;
BosParser.STATIC_VAR = 52;
BosParser.VAR = 53;
BosParser.SOUND = 54;
BosParser.SIGNAL = 55;
BosParser.SET_SIGNAL_MASK = 56;
BosParser.PLUS = 57;
BosParser.MINUS = 58;
BosParser.MULTIPLY = 59;
BosParser.DIVIDE = 60;
BosParser.MODULO = 61;
BosParser.EQUAL = 62;
BosParser.DOUBLE_EQUAL = 63;
BosParser.NOT_EQUAL = 64;
BosParser.LESS_THAN = 65;
BosParser.LESS_EQUAL = 66;
BosParser.GREATER_THAN = 67;
BosParser.GREATER_EQUAL = 68;
BosParser.LOGICAL_AND = 69;
BosParser.LOGICAL_OR = 70;
BosParser.NOT = 71;
BosParser.BITWISE_AND = 72;
BosParser.BITWISE_OR = 73;
BosParser.LPAREN = 74;
BosParser.RPAREN = 75;
BosParser.LBRACE = 76;
BosParser.RBRACE = 77;
BosParser.LBRACKET = 78;
BosParser.RBRACKET = 79;
BosParser.COMMA = 80;
BosParser.SEMICOLON = 81;
BosParser.WS = 82;
BosParser.COMMENT = 83;
BosParser.BLOCK_COMMENT = 84;
BosParser.INTEGER_CONSTANT = 85;
BosParser.FLOAT_CONSTANT = 86;
BosParser.IDENTIFIER = 87;
BosParser.STRING = 88;

BosParser.RULE_preprocessor = 0;
BosParser.RULE_file = 1;
BosParser.RULE_declaration = 2;
BosParser.RULE_pieceDec = 3;
BosParser.RULE_staticVarDec = 4;
BosParser.RULE_funcDec = 5;
BosParser.RULE_arguments = 6;
BosParser.RULE_statementBlock = 7;
BosParser.RULE_statement = 8;
BosParser.RULE_assignStatement = 9;
BosParser.RULE_incrementStatement = 10;
BosParser.RULE_decrementStatement = 11;
BosParser.RULE_ifStatement = 12;
BosParser.RULE_whileStatement = 13;
BosParser.RULE_forStatement = 14;
BosParser.RULE_varStatement = 15;
BosParser.RULE_keywordStatement = 16;
BosParser.RULE_callStatement = 17;
BosParser.RULE_startStatement = 18;
BosParser.RULE_spinStatement = 19;
BosParser.RULE_optionalAcceleration = 20;
BosParser.RULE_stopSpinStatement = 21;
BosParser.RULE_optionalDeceleration = 22;
BosParser.RULE_turnStatement = 23;
BosParser.RULE_moveStatement = 24;
BosParser.RULE_speedNow = 25;
BosParser.RULE_waitForTurnStatement = 26;
BosParser.RULE_waitForMoveStatement = 27;
BosParser.RULE_emitSfxStatement = 28;
BosParser.RULE_sleepStatement = 29;
BosParser.RULE_hideStatement = 30;
BosParser.RULE_showStatement = 31;
BosParser.RULE_explodeStatement = 32;
BosParser.RULE_signalStatement = 33;
BosParser.RULE_setSignalMaskStatement = 34;
BosParser.RULE_setStatement = 35;
BosParser.RULE_getStatement = 36;
BosParser.RULE_attachUnitStatement = 37;
BosParser.RULE_dropUnitStatement = 38;
BosParser.RULE_returnStatement = 39;
BosParser.RULE_playSoundStatement = 40;
BosParser.RULE_cacheStatement = 41;
BosParser.RULE_dontCacheStatement = 42;
BosParser.RULE_dontShadowStatement = 43;
BosParser.RULE_dontShadeStatement = 44;
BosParser.RULE_expression = 45;
BosParser.RULE_term = 46;
BosParser.RULE_constant = 47;
BosParser.RULE_globalConstant = 48;
BosParser.RULE_unaryOp = 49;
BosParser.RULE_funcCall = 50;
BosParser.RULE_randCall = 51;
BosParser.RULE_commaExpression = 52;
BosParser.RULE_getTerm = 53;
BosParser.RULE_op = 54;
BosParser.RULE_expressionList = 55;
BosParser.RULE_varName = 56;
BosParser.RULE_pieceName = 57;
BosParser.RULE_funcName = 58;
BosParser.RULE_axis = 59;
BosParser.RULE_signedIntegerConstant = 60;
BosParser.RULE_signedFloatConstant = 61;

class PreprocessorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_preprocessor;
    }

	D_DEFINE() {
	    return this.getToken(BosParser.D_DEFINE, 0);
	};

	varName() {
	    return this.getTypedRuleContext(VarNameContext,0);
	};

	IDENTIFIER() {
	    return this.getToken(BosParser.IDENTIFIER, 0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	STRING() {
	    return this.getToken(BosParser.STRING, 0);
	};

	D_INCLUDE() {
	    return this.getToken(BosParser.D_INCLUDE, 0);
	};

	D_UNDEF() {
	    return this.getToken(BosParser.D_UNDEF, 0);
	};

	D_IFDEF() {
	    return this.getToken(BosParser.D_IFDEF, 0);
	};

	D_IFNDEF() {
	    return this.getToken(BosParser.D_IFNDEF, 0);
	};

	D_IF() {
	    return this.getToken(BosParser.D_IF, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	D_ELSE() {
	    return this.getToken(BosParser.D_ELSE, 0);
	};

	D_ENDIF() {
	    return this.getToken(BosParser.D_ENDIF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterPreprocessor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitPreprocessor(this);
		}
	}


}



class FileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_file;
    }

	preprocessor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PreprocessorContext);
	    } else {
	        return this.getTypedRuleContext(PreprocessorContext,i);
	    }
	};

	declaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclarationContext);
	    } else {
	        return this.getTypedRuleContext(DeclarationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitFile(this);
		}
	}


}



class DeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_declaration;
    }

	pieceDec() {
	    return this.getTypedRuleContext(PieceDecContext,0);
	};

	staticVarDec() {
	    return this.getTypedRuleContext(StaticVarDecContext,0);
	};

	funcDec() {
	    return this.getTypedRuleContext(FuncDecContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitDeclaration(this);
		}
	}


}



class PieceDecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_pieceDec;
    }

	PIECE() {
	    return this.getToken(BosParser.PIECE, 0);
	};

	pieceName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PieceNameContext);
	    } else {
	        return this.getTypedRuleContext(PieceNameContext,i);
	    }
	};

	SEMICOLON() {
	    return this.getToken(BosParser.SEMICOLON, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BosParser.COMMA);
	    } else {
	        return this.getToken(BosParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterPieceDec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitPieceDec(this);
		}
	}


}



class StaticVarDecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_staticVarDec;
    }

	STATIC_VAR() {
	    return this.getToken(BosParser.STATIC_VAR, 0);
	};

	varName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VarNameContext);
	    } else {
	        return this.getTypedRuleContext(VarNameContext,i);
	    }
	};

	SEMICOLON() {
	    return this.getToken(BosParser.SEMICOLON, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BosParser.COMMA);
	    } else {
	        return this.getToken(BosParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterStaticVarDec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitStaticVarDec(this);
		}
	}


}



class FuncDecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_funcDec;
    }

	funcName() {
	    return this.getTypedRuleContext(FuncNameContext,0);
	};

	LPAREN() {
	    return this.getToken(BosParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(BosParser.RPAREN, 0);
	};

	statementBlock() {
	    return this.getTypedRuleContext(StatementBlockContext,0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterFuncDec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitFuncDec(this);
		}
	}


}



class ArgumentsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_arguments;
    }

	varName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VarNameContext);
	    } else {
	        return this.getTypedRuleContext(VarNameContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BosParser.COMMA);
	    } else {
	        return this.getToken(BosParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterArguments(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitArguments(this);
		}
	}


}



class StatementBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_statementBlock;
    }

	LBRACE() {
	    return this.getToken(BosParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(BosParser.RBRACE, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterStatementBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitStatementBlock(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_statement;
    }

	assignStatement() {
	    return this.getTypedRuleContext(AssignStatementContext,0);
	};

	SEMICOLON() {
	    return this.getToken(BosParser.SEMICOLON, 0);
	};

	preprocessor() {
	    return this.getTypedRuleContext(PreprocessorContext,0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	whileStatement() {
	    return this.getTypedRuleContext(WhileStatementContext,0);
	};

	forStatement() {
	    return this.getTypedRuleContext(ForStatementContext,0);
	};

	keywordStatement() {
	    return this.getTypedRuleContext(KeywordStatementContext,0);
	};

	varStatement() {
	    return this.getTypedRuleContext(VarStatementContext,0);
	};

	incrementStatement() {
	    return this.getTypedRuleContext(IncrementStatementContext,0);
	};

	varName() {
	    return this.getTypedRuleContext(VarNameContext,0);
	};

	funcCall() {
	    return this.getTypedRuleContext(FuncCallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitStatement(this);
		}
	}


}



class AssignStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_assignStatement;
    }

	varName() {
	    return this.getTypedRuleContext(VarNameContext,0);
	};

	EQUAL() {
	    return this.getToken(BosParser.EQUAL, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	incrementStatement() {
	    return this.getTypedRuleContext(IncrementStatementContext,0);
	};

	decrementStatement() {
	    return this.getTypedRuleContext(DecrementStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterAssignStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitAssignStatement(this);
		}
	}


}



class IncrementStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_incrementStatement;
    }

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BosParser.PLUS);
	    } else {
	        return this.getToken(BosParser.PLUS, i);
	    }
	};


	varName() {
	    return this.getTypedRuleContext(VarNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterIncrementStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitIncrementStatement(this);
		}
	}


}



class DecrementStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_decrementStatement;
    }

	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BosParser.MINUS);
	    } else {
	        return this.getToken(BosParser.MINUS, i);
	    }
	};


	varName() {
	    return this.getTypedRuleContext(VarNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterDecrementStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitDecrementStatement(this);
		}
	}


}



class IfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_ifStatement;
    }

	IF() {
	    return this.getToken(BosParser.IF, 0);
	};

	LPAREN() {
	    return this.getToken(BosParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(BosParser.RPAREN, 0);
	};

	statementBlock = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementBlockContext);
	    } else {
	        return this.getTypedRuleContext(StatementBlockContext,i);
	    }
	};

	ELSE() {
	    return this.getToken(BosParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitIfStatement(this);
		}
	}


}



class WhileStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_whileStatement;
    }

	WHILE() {
	    return this.getToken(BosParser.WHILE, 0);
	};

	LPAREN() {
	    return this.getToken(BosParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(BosParser.RPAREN, 0);
	};

	statementBlock() {
	    return this.getTypedRuleContext(StatementBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterWhileStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitWhileStatement(this);
		}
	}


}



class ForStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_forStatement;
    }

	FOR() {
	    return this.getToken(BosParser.FOR, 0);
	};

	LPAREN() {
	    return this.getToken(BosParser.LPAREN, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	SEMICOLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BosParser.SEMICOLON);
	    } else {
	        return this.getToken(BosParser.SEMICOLON, i);
	    }
	};


	RPAREN() {
	    return this.getToken(BosParser.RPAREN, 0);
	};

	statementBlock() {
	    return this.getTypedRuleContext(StatementBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterForStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitForStatement(this);
		}
	}


}



class VarStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_varStatement;
    }

	VAR() {
	    return this.getToken(BosParser.VAR, 0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterVarStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitVarStatement(this);
		}
	}


}



class KeywordStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_keywordStatement;
    }

	callStatement() {
	    return this.getTypedRuleContext(CallStatementContext,0);
	};

	startStatement() {
	    return this.getTypedRuleContext(StartStatementContext,0);
	};

	spinStatement() {
	    return this.getTypedRuleContext(SpinStatementContext,0);
	};

	stopSpinStatement() {
	    return this.getTypedRuleContext(StopSpinStatementContext,0);
	};

	turnStatement() {
	    return this.getTypedRuleContext(TurnStatementContext,0);
	};

	moveStatement() {
	    return this.getTypedRuleContext(MoveStatementContext,0);
	};

	waitForTurnStatement() {
	    return this.getTypedRuleContext(WaitForTurnStatementContext,0);
	};

	waitForMoveStatement() {
	    return this.getTypedRuleContext(WaitForMoveStatementContext,0);
	};

	emitSfxStatement() {
	    return this.getTypedRuleContext(EmitSfxStatementContext,0);
	};

	sleepStatement() {
	    return this.getTypedRuleContext(SleepStatementContext,0);
	};

	hideStatement() {
	    return this.getTypedRuleContext(HideStatementContext,0);
	};

	showStatement() {
	    return this.getTypedRuleContext(ShowStatementContext,0);
	};

	explodeStatement() {
	    return this.getTypedRuleContext(ExplodeStatementContext,0);
	};

	signalStatement() {
	    return this.getTypedRuleContext(SignalStatementContext,0);
	};

	setSignalMaskStatement() {
	    return this.getTypedRuleContext(SetSignalMaskStatementContext,0);
	};

	setStatement() {
	    return this.getTypedRuleContext(SetStatementContext,0);
	};

	getStatement() {
	    return this.getTypedRuleContext(GetStatementContext,0);
	};

	attachUnitStatement() {
	    return this.getTypedRuleContext(AttachUnitStatementContext,0);
	};

	dropUnitStatement() {
	    return this.getTypedRuleContext(DropUnitStatementContext,0);
	};

	returnStatement() {
	    return this.getTypedRuleContext(ReturnStatementContext,0);
	};

	playSoundStatement() {
	    return this.getTypedRuleContext(PlaySoundStatementContext,0);
	};

	cacheStatement() {
	    return this.getTypedRuleContext(CacheStatementContext,0);
	};

	dontCacheStatement() {
	    return this.getTypedRuleContext(DontCacheStatementContext,0);
	};

	dontShadowStatement() {
	    return this.getTypedRuleContext(DontShadowStatementContext,0);
	};

	dontShadeStatement() {
	    return this.getTypedRuleContext(DontShadeStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterKeywordStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitKeywordStatement(this);
		}
	}


}



class CallStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_callStatement;
    }

	CALL_SCRIPT() {
	    return this.getToken(BosParser.CALL_SCRIPT, 0);
	};

	funcName() {
	    return this.getTypedRuleContext(FuncNameContext,0);
	};

	LPAREN() {
	    return this.getToken(BosParser.LPAREN, 0);
	};

	expressionList() {
	    return this.getTypedRuleContext(ExpressionListContext,0);
	};

	RPAREN() {
	    return this.getToken(BosParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterCallStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitCallStatement(this);
		}
	}


}



class StartStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_startStatement;
    }

	START_SCRIPT() {
	    return this.getToken(BosParser.START_SCRIPT, 0);
	};

	funcName() {
	    return this.getTypedRuleContext(FuncNameContext,0);
	};

	LPAREN() {
	    return this.getToken(BosParser.LPAREN, 0);
	};

	expressionList() {
	    return this.getTypedRuleContext(ExpressionListContext,0);
	};

	RPAREN() {
	    return this.getToken(BosParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterStartStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitStartStatement(this);
		}
	}


}



class SpinStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_spinStatement;
    }

	SPIN() {
	    return this.getToken(BosParser.SPIN, 0);
	};

	pieceName() {
	    return this.getTypedRuleContext(PieceNameContext,0);
	};

	AROUND() {
	    return this.getToken(BosParser.AROUND, 0);
	};

	axis() {
	    return this.getTypedRuleContext(AxisContext,0);
	};

	SPEED() {
	    return this.getToken(BosParser.SPEED, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	optionalAcceleration() {
	    return this.getTypedRuleContext(OptionalAccelerationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterSpinStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitSpinStatement(this);
		}
	}


}



class OptionalAccelerationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_optionalAcceleration;
    }

	ACCELERATE() {
	    return this.getToken(BosParser.ACCELERATE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterOptionalAcceleration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitOptionalAcceleration(this);
		}
	}


}



class StopSpinStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_stopSpinStatement;
    }

	STOP_SPIN() {
	    return this.getToken(BosParser.STOP_SPIN, 0);
	};

	pieceName() {
	    return this.getTypedRuleContext(PieceNameContext,0);
	};

	AROUND() {
	    return this.getToken(BosParser.AROUND, 0);
	};

	axis() {
	    return this.getTypedRuleContext(AxisContext,0);
	};

	optionalDeceleration() {
	    return this.getTypedRuleContext(OptionalDecelerationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterStopSpinStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitStopSpinStatement(this);
		}
	}


}



class OptionalDecelerationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_optionalDeceleration;
    }

	DECELERATE() {
	    return this.getToken(BosParser.DECELERATE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterOptionalDeceleration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitOptionalDeceleration(this);
		}
	}


}



class TurnStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_turnStatement;
    }

	TURN() {
	    return this.getToken(BosParser.TURN, 0);
	};

	pieceName() {
	    return this.getTypedRuleContext(PieceNameContext,0);
	};

	TO() {
	    return this.getToken(BosParser.TO, 0);
	};

	axis() {
	    return this.getTypedRuleContext(AxisContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	speedNow() {
	    return this.getTypedRuleContext(SpeedNowContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterTurnStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitTurnStatement(this);
		}
	}


}



class MoveStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_moveStatement;
    }

	MOVE() {
	    return this.getToken(BosParser.MOVE, 0);
	};

	pieceName() {
	    return this.getTypedRuleContext(PieceNameContext,0);
	};

	TO() {
	    return this.getToken(BosParser.TO, 0);
	};

	axis() {
	    return this.getTypedRuleContext(AxisContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	speedNow() {
	    return this.getTypedRuleContext(SpeedNowContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterMoveStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitMoveStatement(this);
		}
	}


}



class SpeedNowContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_speedNow;
    }

	NOW() {
	    return this.getToken(BosParser.NOW, 0);
	};

	SPEED() {
	    return this.getToken(BosParser.SPEED, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterSpeedNow(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitSpeedNow(this);
		}
	}


}



class WaitForTurnStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_waitForTurnStatement;
    }

	WAIT_FOR_TURN() {
	    return this.getToken(BosParser.WAIT_FOR_TURN, 0);
	};

	pieceName() {
	    return this.getTypedRuleContext(PieceNameContext,0);
	};

	AROUND() {
	    return this.getToken(BosParser.AROUND, 0);
	};

	axis() {
	    return this.getTypedRuleContext(AxisContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterWaitForTurnStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitWaitForTurnStatement(this);
		}
	}


}



class WaitForMoveStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_waitForMoveStatement;
    }

	WAIT_FOR_MOVE() {
	    return this.getToken(BosParser.WAIT_FOR_MOVE, 0);
	};

	pieceName() {
	    return this.getTypedRuleContext(PieceNameContext,0);
	};

	ALONG() {
	    return this.getToken(BosParser.ALONG, 0);
	};

	axis() {
	    return this.getTypedRuleContext(AxisContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterWaitForMoveStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitWaitForMoveStatement(this);
		}
	}


}



class EmitSfxStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_emitSfxStatement;
    }

	EMIT_SFX() {
	    return this.getToken(BosParser.EMIT_SFX, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	FROM() {
	    return this.getToken(BosParser.FROM, 0);
	};

	pieceName() {
	    return this.getTypedRuleContext(PieceNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterEmitSfxStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitEmitSfxStatement(this);
		}
	}


}



class SleepStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_sleepStatement;
    }

	SLEEP() {
	    return this.getToken(BosParser.SLEEP, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterSleepStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitSleepStatement(this);
		}
	}


}



class HideStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_hideStatement;
    }

	HIDE() {
	    return this.getToken(BosParser.HIDE, 0);
	};

	pieceName() {
	    return this.getTypedRuleContext(PieceNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterHideStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitHideStatement(this);
		}
	}


}



class ShowStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_showStatement;
    }

	SHOW() {
	    return this.getToken(BosParser.SHOW, 0);
	};

	pieceName() {
	    return this.getTypedRuleContext(PieceNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterShowStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitShowStatement(this);
		}
	}


}



class ExplodeStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_explodeStatement;
    }

	EXPLODE() {
	    return this.getToken(BosParser.EXPLODE, 0);
	};

	pieceName() {
	    return this.getTypedRuleContext(PieceNameContext,0);
	};

	TYPE() {
	    return this.getToken(BosParser.TYPE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterExplodeStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitExplodeStatement(this);
		}
	}


}



class SignalStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_signalStatement;
    }

	SIGNAL() {
	    return this.getToken(BosParser.SIGNAL, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterSignalStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitSignalStatement(this);
		}
	}


}



class SetSignalMaskStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_setSignalMaskStatement;
    }

	SET_SIGNAL_MASK() {
	    return this.getToken(BosParser.SET_SIGNAL_MASK, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterSetSignalMaskStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitSetSignalMaskStatement(this);
		}
	}


}



class SetStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_setStatement;
    }

	SET() {
	    return this.getToken(BosParser.SET, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	TO() {
	    return this.getToken(BosParser.TO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterSetStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitSetStatement(this);
		}
	}


}



class GetStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_getStatement;
    }

	GET() {
	    return this.getToken(BosParser.GET, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterGetStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitGetStatement(this);
		}
	}


}



class AttachUnitStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_attachUnitStatement;
    }

	ATTACH_UNIT() {
	    return this.getToken(BosParser.ATTACH_UNIT, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	TO() {
	    return this.getToken(BosParser.TO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterAttachUnitStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitAttachUnitStatement(this);
		}
	}


}



class DropUnitStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_dropUnitStatement;
    }

	DROP_UNIT() {
	    return this.getToken(BosParser.DROP_UNIT, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterDropUnitStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitDropUnitStatement(this);
		}
	}


}



class ReturnStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_returnStatement;
    }

	RETURN() {
	    return this.getToken(BosParser.RETURN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterReturnStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitReturnStatement(this);
		}
	}


}



class PlaySoundStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_playSoundStatement;
    }

	SOUND() {
	    return this.getToken(BosParser.SOUND, 0);
	};

	LPAREN() {
	    return this.getToken(BosParser.LPAREN, 0);
	};

	STRING() {
	    return this.getToken(BosParser.STRING, 0);
	};

	RPAREN() {
	    return this.getToken(BosParser.RPAREN, 0);
	};

	COMMA() {
	    return this.getToken(BosParser.COMMA, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterPlaySoundStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitPlaySoundStatement(this);
		}
	}


}



class CacheStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_cacheStatement;
    }

	CACHE() {
	    return this.getToken(BosParser.CACHE, 0);
	};

	pieceName() {
	    return this.getTypedRuleContext(PieceNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterCacheStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitCacheStatement(this);
		}
	}


}



class DontCacheStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_dontCacheStatement;
    }

	DONT_CACHE() {
	    return this.getToken(BosParser.DONT_CACHE, 0);
	};

	pieceName() {
	    return this.getTypedRuleContext(PieceNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterDontCacheStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitDontCacheStatement(this);
		}
	}


}



class DontShadowStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_dontShadowStatement;
    }

	DONT_SHADOW() {
	    return this.getToken(BosParser.DONT_SHADOW, 0);
	};

	pieceName() {
	    return this.getTypedRuleContext(PieceNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterDontShadowStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitDontShadowStatement(this);
		}
	}


}



class DontShadeStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_dontShadeStatement;
    }

	DONT_SHADE() {
	    return this.getToken(BosParser.DONT_SHADE, 0);
	};

	pieceName() {
	    return this.getTypedRuleContext(PieceNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterDontShadeStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitDontShadeStatement(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_expression;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	op = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OpContext);
	    } else {
	        return this.getTypedRuleContext(OpContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitExpression(this);
		}
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_term;
    }

	getTerm() {
	    return this.getTypedRuleContext(GetTermContext,0);
	};

	LPAREN() {
	    return this.getToken(BosParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(BosParser.RPAREN, 0);
	};

	unaryOp() {
	    return this.getTypedRuleContext(UnaryOpContext,0);
	};

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	varName() {
	    return this.getTypedRuleContext(VarNameContext,0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	globalConstant() {
	    return this.getTypedRuleContext(GlobalConstantContext,0);
	};

	randCall() {
	    return this.getTypedRuleContext(RandCallContext,0);
	};

	funcCall() {
	    return this.getTypedRuleContext(FuncCallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitTerm(this);
		}
	}


}



class ConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_constant;
    }

	LESS_THAN() {
	    return this.getToken(BosParser.LESS_THAN, 0);
	};

	GREATER_THAN() {
	    return this.getToken(BosParser.GREATER_THAN, 0);
	};

	signedFloatConstant() {
	    return this.getTypedRuleContext(SignedFloatConstantContext,0);
	};

	signedIntegerConstant() {
	    return this.getTypedRuleContext(SignedIntegerConstantContext,0);
	};

	LBRACKET() {
	    return this.getToken(BosParser.LBRACKET, 0);
	};

	RBRACKET() {
	    return this.getToken(BosParser.RBRACKET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitConstant(this);
		}
	}


}



class GlobalConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_globalConstant;
    }

	TRUE() {
	    return this.getToken(BosParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(BosParser.FALSE, 0);
	};

	UNKNOWN_UNIT_VALUE() {
	    return this.getToken(BosParser.UNKNOWN_UNIT_VALUE, 0);
	};

	LPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BosParser.LPAREN);
	    } else {
	        return this.getToken(BosParser.LPAREN, i);
	    }
	};


	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	RPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BosParser.RPAREN);
	    } else {
	        return this.getToken(BosParser.RPAREN, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterGlobalConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitGlobalConstant(this);
		}
	}


}



class UnaryOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_unaryOp;
    }

	MINUS() {
	    return this.getToken(BosParser.MINUS, 0);
	};

	NOT() {
	    return this.getToken(BosParser.NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterUnaryOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitUnaryOp(this);
		}
	}


}



class FuncCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_funcCall;
    }

	funcName() {
	    return this.getTypedRuleContext(FuncNameContext,0);
	};

	LPAREN() {
	    return this.getToken(BosParser.LPAREN, 0);
	};

	expressionList() {
	    return this.getTypedRuleContext(ExpressionListContext,0);
	};

	RPAREN() {
	    return this.getToken(BosParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterFuncCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitFuncCall(this);
		}
	}


}



class RandCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_randCall;
    }

	RAND() {
	    return this.getToken(BosParser.RAND, 0);
	};

	LPAREN() {
	    return this.getToken(BosParser.LPAREN, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	COMMA() {
	    return this.getToken(BosParser.COMMA, 0);
	};

	RPAREN() {
	    return this.getToken(BosParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterRandCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitRandCall(this);
		}
	}


}



class CommaExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_commaExpression;
    }

	COMMA() {
	    return this.getToken(BosParser.COMMA, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterCommaExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitCommaExpression(this);
		}
	}


}



class GetTermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_getTerm;
    }

	GET() {
	    return this.getToken(BosParser.GET, 0);
	};

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	LPAREN() {
	    return this.getToken(BosParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(BosParser.RPAREN, 0);
	};

	commaExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommaExpressionContext);
	    } else {
	        return this.getTypedRuleContext(CommaExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterGetTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitGetTerm(this);
		}
	}


}



class OpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_op;
    }

	PLUS() {
	    return this.getToken(BosParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(BosParser.MINUS, 0);
	};

	MULTIPLY() {
	    return this.getToken(BosParser.MULTIPLY, 0);
	};

	DIVIDE() {
	    return this.getToken(BosParser.DIVIDE, 0);
	};

	MODULO() {
	    return this.getToken(BosParser.MODULO, 0);
	};

	BITWISE_AND() {
	    return this.getToken(BosParser.BITWISE_AND, 0);
	};

	BITWISE_OR() {
	    return this.getToken(BosParser.BITWISE_OR, 0);
	};

	LESS_THAN() {
	    return this.getToken(BosParser.LESS_THAN, 0);
	};

	GREATER_THAN() {
	    return this.getToken(BosParser.GREATER_THAN, 0);
	};

	DOUBLE_EQUAL() {
	    return this.getToken(BosParser.DOUBLE_EQUAL, 0);
	};

	LESS_EQUAL() {
	    return this.getToken(BosParser.LESS_EQUAL, 0);
	};

	GREATER_EQUAL() {
	    return this.getToken(BosParser.GREATER_EQUAL, 0);
	};

	NOT_EQUAL() {
	    return this.getToken(BosParser.NOT_EQUAL, 0);
	};

	LOGICAL_AND() {
	    return this.getToken(BosParser.LOGICAL_AND, 0);
	};

	LOGICAL_OR() {
	    return this.getToken(BosParser.LOGICAL_OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitOp(this);
		}
	}


}



class ExpressionListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_expressionList;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BosParser.COMMA);
	    } else {
	        return this.getToken(BosParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterExpressionList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitExpressionList(this);
		}
	}


}



class VarNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_varName;
    }

	IDENTIFIER() {
	    return this.getToken(BosParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterVarName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitVarName(this);
		}
	}


}



class PieceNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_pieceName;
    }

	IDENTIFIER() {
	    return this.getToken(BosParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterPieceName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitPieceName(this);
		}
	}


}



class FuncNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_funcName;
    }

	IDENTIFIER() {
	    return this.getToken(BosParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterFuncName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitFuncName(this);
		}
	}


}



class AxisContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_axis;
    }


	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterAxis(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitAxis(this);
		}
	}


}



class SignedIntegerConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_signedIntegerConstant;
    }

	MINUS() {
	    return this.getToken(BosParser.MINUS, 0);
	};

	INTEGER_CONSTANT() {
	    return this.getToken(BosParser.INTEGER_CONSTANT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterSignedIntegerConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitSignedIntegerConstant(this);
		}
	}


}



class SignedFloatConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_signedFloatConstant;
    }

	MINUS() {
	    return this.getToken(BosParser.MINUS, 0);
	};

	FLOAT_CONSTANT() {
	    return this.getToken(BosParser.FLOAT_CONSTANT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterSignedFloatConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitSignedFloatConstant(this);
		}
	}


}




BosParser.PreprocessorContext = PreprocessorContext; 
BosParser.FileContext = FileContext; 
BosParser.DeclarationContext = DeclarationContext; 
BosParser.PieceDecContext = PieceDecContext; 
BosParser.StaticVarDecContext = StaticVarDecContext; 
BosParser.FuncDecContext = FuncDecContext; 
BosParser.ArgumentsContext = ArgumentsContext; 
BosParser.StatementBlockContext = StatementBlockContext; 
BosParser.StatementContext = StatementContext; 
BosParser.AssignStatementContext = AssignStatementContext; 
BosParser.IncrementStatementContext = IncrementStatementContext; 
BosParser.DecrementStatementContext = DecrementStatementContext; 
BosParser.IfStatementContext = IfStatementContext; 
BosParser.WhileStatementContext = WhileStatementContext; 
BosParser.ForStatementContext = ForStatementContext; 
BosParser.VarStatementContext = VarStatementContext; 
BosParser.KeywordStatementContext = KeywordStatementContext; 
BosParser.CallStatementContext = CallStatementContext; 
BosParser.StartStatementContext = StartStatementContext; 
BosParser.SpinStatementContext = SpinStatementContext; 
BosParser.OptionalAccelerationContext = OptionalAccelerationContext; 
BosParser.StopSpinStatementContext = StopSpinStatementContext; 
BosParser.OptionalDecelerationContext = OptionalDecelerationContext; 
BosParser.TurnStatementContext = TurnStatementContext; 
BosParser.MoveStatementContext = MoveStatementContext; 
BosParser.SpeedNowContext = SpeedNowContext; 
BosParser.WaitForTurnStatementContext = WaitForTurnStatementContext; 
BosParser.WaitForMoveStatementContext = WaitForMoveStatementContext; 
BosParser.EmitSfxStatementContext = EmitSfxStatementContext; 
BosParser.SleepStatementContext = SleepStatementContext; 
BosParser.HideStatementContext = HideStatementContext; 
BosParser.ShowStatementContext = ShowStatementContext; 
BosParser.ExplodeStatementContext = ExplodeStatementContext; 
BosParser.SignalStatementContext = SignalStatementContext; 
BosParser.SetSignalMaskStatementContext = SetSignalMaskStatementContext; 
BosParser.SetStatementContext = SetStatementContext; 
BosParser.GetStatementContext = GetStatementContext; 
BosParser.AttachUnitStatementContext = AttachUnitStatementContext; 
BosParser.DropUnitStatementContext = DropUnitStatementContext; 
BosParser.ReturnStatementContext = ReturnStatementContext; 
BosParser.PlaySoundStatementContext = PlaySoundStatementContext; 
BosParser.CacheStatementContext = CacheStatementContext; 
BosParser.DontCacheStatementContext = DontCacheStatementContext; 
BosParser.DontShadowStatementContext = DontShadowStatementContext; 
BosParser.DontShadeStatementContext = DontShadeStatementContext; 
BosParser.ExpressionContext = ExpressionContext; 
BosParser.TermContext = TermContext; 
BosParser.ConstantContext = ConstantContext; 
BosParser.GlobalConstantContext = GlobalConstantContext; 
BosParser.UnaryOpContext = UnaryOpContext; 
BosParser.FuncCallContext = FuncCallContext; 
BosParser.RandCallContext = RandCallContext; 
BosParser.CommaExpressionContext = CommaExpressionContext; 
BosParser.GetTermContext = GetTermContext; 
BosParser.OpContext = OpContext; 
BosParser.ExpressionListContext = ExpressionListContext; 
BosParser.VarNameContext = VarNameContext; 
BosParser.PieceNameContext = PieceNameContext; 
BosParser.FuncNameContext = FuncNameContext; 
BosParser.AxisContext = AxisContext; 
BosParser.SignedIntegerConstantContext = SignedIntegerConstantContext; 
BosParser.SignedFloatConstantContext = SignedFloatConstantContext; 

module.exports = BosParser;
