// Generated from server/Bos.g4 by ANTLR 4.13.2
// jshint ignore: start
const antlr4 = require('antlr4').default;

const BosListener = require('./BosListener.js').default;

const serializedATN = [4,1,95,581,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,
63,2,64,7,64,1,0,1,0,1,0,1,0,1,0,3,0,136,8,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
1,0,1,0,1,0,1,0,1,0,3,0,150,8,0,1,1,1,1,5,1,154,8,1,10,1,12,1,157,9,1,1,
2,1,2,1,2,3,2,162,8,2,1,3,1,3,1,3,1,3,5,3,168,8,3,10,3,12,3,171,9,3,1,3,
1,3,1,4,1,4,1,4,1,4,5,4,179,8,4,10,4,12,4,182,9,4,1,4,1,4,1,5,1,5,1,5,3,
5,189,8,5,1,5,1,5,1,5,1,6,1,6,1,6,5,6,197,8,6,10,6,12,6,200,9,6,1,7,1,7,
5,7,204,8,7,10,7,12,7,207,9,7,1,7,1,7,3,7,211,8,7,1,8,1,8,1,8,1,8,1,8,1,
8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,229,8,8,1,9,1,9,1,9,1,9,1,
9,1,9,3,9,237,8,9,1,10,1,10,3,10,241,8,10,1,11,1,11,1,11,1,11,1,12,1,12,
1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,258,8,13,1,14,1,14,1,14,
1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,274,8,15,1,15,
1,15,1,15,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,
17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,
1,17,1,17,1,17,3,17,309,8,17,1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,
1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,3,20,330,8,20,1,21,1,21,
1,21,1,22,1,22,1,22,1,22,1,22,3,22,340,8,22,1,23,1,23,1,23,1,24,1,24,1,24,
1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,
26,1,26,1,26,1,26,1,27,1,27,1,27,3,27,369,8,27,1,28,1,28,1,28,1,28,1,28,
1,29,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,
31,1,32,1,32,1,32,1,33,1,33,1,33,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,
1,36,1,36,1,36,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,
40,1,40,1,40,1,40,1,40,1,41,1,41,1,41,1,42,1,42,3,42,429,8,42,1,43,1,43,
1,43,1,43,1,43,3,43,436,8,43,1,43,1,43,1,44,1,44,1,44,1,45,1,45,1,45,1,46,
1,46,1,46,1,47,1,47,1,47,1,48,1,48,1,48,1,48,5,48,456,8,48,10,48,12,48,459,
9,48,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,3,
49,474,8,49,1,50,1,50,1,50,1,50,3,50,480,8,50,1,50,1,50,1,50,1,50,1,50,1,
50,3,50,488,8,50,1,50,1,50,1,50,1,50,3,50,494,8,50,3,50,496,8,50,1,51,1,
51,1,51,1,51,1,51,1,51,1,51,3,51,505,8,51,1,51,1,51,1,51,1,51,3,51,511,8,
51,3,51,513,8,51,1,52,1,52,1,53,1,53,1,53,1,53,1,53,1,54,1,54,1,54,1,54,
1,54,1,54,1,54,1,55,1,55,1,55,1,56,1,56,1,56,1,56,1,56,3,56,537,8,56,1,56,
3,56,540,8,56,1,56,3,56,543,8,56,1,56,1,56,1,56,1,56,3,56,549,8,56,1,57,
1,57,1,58,1,58,1,58,5,58,556,8,58,10,58,12,58,559,9,58,3,58,561,8,58,1,59,
1,59,1,60,1,60,1,61,1,61,1,62,1,62,1,63,1,63,1,63,3,63,574,8,63,1,64,1,64,
1,64,3,64,579,8,64,1,64,0,0,65,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,
80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,
122,124,126,128,0,3,2,0,60,60,73,73,3,0,59,63,65,72,74,77,1,0,1,3,607,0,
149,1,0,0,0,2,155,1,0,0,0,4,161,1,0,0,0,6,163,1,0,0,0,8,174,1,0,0,0,10,185,
1,0,0,0,12,193,1,0,0,0,14,210,1,0,0,0,16,228,1,0,0,0,18,236,1,0,0,0,20,238,
1,0,0,0,22,242,1,0,0,0,24,246,1,0,0,0,26,250,1,0,0,0,28,259,1,0,0,0,30,265,
1,0,0,0,32,278,1,0,0,0,34,308,1,0,0,0,36,310,1,0,0,0,38,316,1,0,0,0,40,322,
1,0,0,0,42,331,1,0,0,0,44,334,1,0,0,0,46,341,1,0,0,0,48,344,1,0,0,0,50,351,
1,0,0,0,52,358,1,0,0,0,54,368,1,0,0,0,56,370,1,0,0,0,58,375,1,0,0,0,60,380,
1,0,0,0,62,385,1,0,0,0,64,390,1,0,0,0,66,393,1,0,0,0,68,396,1,0,0,0,70,399,
1,0,0,0,72,404,1,0,0,0,74,407,1,0,0,0,76,410,1,0,0,0,78,415,1,0,0,0,80,418,
1,0,0,0,82,423,1,0,0,0,84,426,1,0,0,0,86,430,1,0,0,0,88,439,1,0,0,0,90,442,
1,0,0,0,92,445,1,0,0,0,94,448,1,0,0,0,96,451,1,0,0,0,98,473,1,0,0,0,100,
495,1,0,0,0,102,512,1,0,0,0,104,514,1,0,0,0,106,516,1,0,0,0,108,521,1,0,
0,0,110,528,1,0,0,0,112,548,1,0,0,0,114,550,1,0,0,0,116,560,1,0,0,0,118,
562,1,0,0,0,120,564,1,0,0,0,122,566,1,0,0,0,124,568,1,0,0,0,126,573,1,0,
0,0,128,578,1,0,0,0,130,131,5,4,0,0,131,135,3,118,59,0,132,136,5,94,0,0,
133,136,3,100,50,0,134,136,5,95,0,0,135,132,1,0,0,0,135,133,1,0,0,0,135,
134,1,0,0,0,135,136,1,0,0,0,136,150,1,0,0,0,137,138,5,5,0,0,138,150,5,95,
0,0,139,140,5,6,0,0,140,150,3,118,59,0,141,142,5,7,0,0,142,150,3,118,59,
0,143,144,5,8,0,0,144,150,3,118,59,0,145,146,5,10,0,0,146,150,3,96,48,0,
147,150,5,11,0,0,148,150,5,9,0,0,149,130,1,0,0,0,149,137,1,0,0,0,149,139,
1,0,0,0,149,141,1,0,0,0,149,143,1,0,0,0,149,145,1,0,0,0,149,147,1,0,0,0,
149,148,1,0,0,0,150,1,1,0,0,0,151,154,3,0,0,0,152,154,3,4,2,0,153,151,1,
0,0,0,153,152,1,0,0,0,154,157,1,0,0,0,155,153,1,0,0,0,155,156,1,0,0,0,156,
3,1,0,0,0,157,155,1,0,0,0,158,162,3,6,3,0,159,162,3,8,4,0,160,162,3,10,5,
0,161,158,1,0,0,0,161,159,1,0,0,0,161,160,1,0,0,0,162,5,1,0,0,0,163,164,
5,53,0,0,164,169,3,120,60,0,165,166,5,84,0,0,166,168,3,120,60,0,167,165,
1,0,0,0,168,171,1,0,0,0,169,167,1,0,0,0,169,170,1,0,0,0,170,172,1,0,0,0,
171,169,1,0,0,0,172,173,5,85,0,0,173,7,1,0,0,0,174,175,5,54,0,0,175,180,
3,118,59,0,176,177,5,84,0,0,177,179,3,118,59,0,178,176,1,0,0,0,179,182,1,
0,0,0,180,178,1,0,0,0,180,181,1,0,0,0,181,183,1,0,0,0,182,180,1,0,0,0,183,
184,5,85,0,0,184,9,1,0,0,0,185,186,3,122,61,0,186,188,5,78,0,0,187,189,3,
12,6,0,188,187,1,0,0,0,188,189,1,0,0,0,189,190,1,0,0,0,190,191,5,79,0,0,
191,192,3,14,7,0,192,11,1,0,0,0,193,198,3,118,59,0,194,195,5,84,0,0,195,
197,3,118,59,0,196,194,1,0,0,0,197,200,1,0,0,0,198,196,1,0,0,0,198,199,1,
0,0,0,199,13,1,0,0,0,200,198,1,0,0,0,201,205,5,80,0,0,202,204,3,16,8,0,203,
202,1,0,0,0,204,207,1,0,0,0,205,203,1,0,0,0,205,206,1,0,0,0,206,208,1,0,
0,0,207,205,1,0,0,0,208,211,5,81,0,0,209,211,3,16,8,0,210,201,1,0,0,0,210,
209,1,0,0,0,211,15,1,0,0,0,212,213,3,18,9,0,213,214,5,85,0,0,214,229,1,0,
0,0,215,229,3,0,0,0,216,229,3,26,13,0,217,229,3,28,14,0,218,229,3,30,15,
0,219,220,3,34,17,0,220,221,5,85,0,0,221,229,1,0,0,0,222,223,3,32,16,0,223,
224,5,85,0,0,224,229,1,0,0,0,225,229,3,20,10,0,226,229,3,106,53,0,227,229,
5,85,0,0,228,212,1,0,0,0,228,215,1,0,0,0,228,216,1,0,0,0,228,217,1,0,0,0,
228,218,1,0,0,0,228,219,1,0,0,0,228,222,1,0,0,0,228,225,1,0,0,0,228,226,
1,0,0,0,228,227,1,0,0,0,229,17,1,0,0,0,230,231,3,118,59,0,231,232,5,64,0,
0,232,233,3,96,48,0,233,237,1,0,0,0,234,237,3,22,11,0,235,237,3,24,12,0,
236,230,1,0,0,0,236,234,1,0,0,0,236,235,1,0,0,0,237,19,1,0,0,0,238,240,3,
118,59,0,239,241,5,85,0,0,240,239,1,0,0,0,240,241,1,0,0,0,241,21,1,0,0,0,
242,243,5,59,0,0,243,244,5,59,0,0,244,245,3,118,59,0,245,23,1,0,0,0,246,
247,5,60,0,0,247,248,5,60,0,0,248,249,3,118,59,0,249,25,1,0,0,0,250,251,
5,44,0,0,251,252,5,78,0,0,252,253,3,96,48,0,253,254,5,79,0,0,254,257,3,14,
7,0,255,256,5,45,0,0,256,258,3,14,7,0,257,255,1,0,0,0,257,258,1,0,0,0,258,
27,1,0,0,0,259,260,5,46,0,0,260,261,5,78,0,0,261,262,3,96,48,0,262,263,5,
79,0,0,263,264,3,14,7,0,264,29,1,0,0,0,265,266,5,47,0,0,266,267,5,78,0,0,
267,268,3,96,48,0,268,269,5,85,0,0,269,270,3,96,48,0,270,271,5,85,0,0,271,
273,3,96,48,0,272,274,5,85,0,0,273,272,1,0,0,0,273,274,1,0,0,0,274,275,1,
0,0,0,275,276,5,79,0,0,276,277,3,14,7,0,277,31,1,0,0,0,278,279,5,55,0,0,
279,280,3,12,6,0,280,33,1,0,0,0,281,309,3,36,18,0,282,309,3,38,19,0,283,
309,3,40,20,0,284,309,3,44,22,0,285,309,3,48,24,0,286,309,3,50,25,0,287,
309,3,52,26,0,288,309,3,56,28,0,289,309,3,58,29,0,290,309,3,60,30,0,291,
309,3,62,31,0,292,309,3,64,32,0,293,309,3,66,33,0,294,309,3,68,34,0,295,
309,3,70,35,0,296,309,3,72,36,0,297,309,3,74,37,0,298,309,3,76,38,0,299,
309,3,78,39,0,300,309,3,80,40,0,301,309,3,82,41,0,302,309,3,84,42,0,303,
309,3,86,43,0,304,309,3,88,44,0,305,309,3,90,45,0,306,309,3,92,46,0,307,
309,3,94,47,0,308,281,1,0,0,0,308,282,1,0,0,0,308,283,1,0,0,0,308,284,1,
0,0,0,308,285,1,0,0,0,308,286,1,0,0,0,308,287,1,0,0,0,308,288,1,0,0,0,308,
289,1,0,0,0,308,290,1,0,0,0,308,291,1,0,0,0,308,292,1,0,0,0,308,293,1,0,
0,0,308,294,1,0,0,0,308,295,1,0,0,0,308,296,1,0,0,0,308,297,1,0,0,0,308,
298,1,0,0,0,308,299,1,0,0,0,308,300,1,0,0,0,308,301,1,0,0,0,308,302,1,0,
0,0,308,303,1,0,0,0,308,304,1,0,0,0,308,305,1,0,0,0,308,306,1,0,0,0,308,
307,1,0,0,0,309,35,1,0,0,0,310,311,5,36,0,0,311,312,3,122,61,0,312,313,5,
78,0,0,313,314,3,116,58,0,314,315,5,79,0,0,315,37,1,0,0,0,316,317,5,35,0,
0,317,318,3,122,61,0,318,319,5,78,0,0,319,320,3,116,58,0,320,321,5,79,0,
0,321,39,1,0,0,0,322,323,5,15,0,0,323,324,3,120,60,0,324,325,5,40,0,0,325,
326,3,124,62,0,326,327,5,38,0,0,327,329,3,96,48,0,328,330,3,42,21,0,329,
328,1,0,0,0,329,330,1,0,0,0,330,41,1,0,0,0,331,332,5,51,0,0,332,333,3,96,
48,0,333,43,1,0,0,0,334,335,5,16,0,0,335,336,3,120,60,0,336,337,5,40,0,0,
337,339,3,124,62,0,338,340,3,46,23,0,339,338,1,0,0,0,339,340,1,0,0,0,340,
45,1,0,0,0,341,342,5,52,0,0,342,343,3,96,48,0,343,47,1,0,0,0,344,345,5,13,
0,0,345,346,3,120,60,0,346,347,5,37,0,0,347,348,3,124,62,0,348,349,3,96,
48,0,349,350,3,54,27,0,350,49,1,0,0,0,351,352,5,12,0,0,352,353,3,120,60,
0,353,354,5,37,0,0,354,355,3,124,62,0,355,356,3,96,48,0,356,357,3,54,27,
0,357,51,1,0,0,0,358,359,5,14,0,0,359,360,3,120,60,0,360,361,5,37,0,0,361,
362,3,124,62,0,362,363,3,96,48,0,363,364,3,54,27,0,364,53,1,0,0,0,365,369,
5,39,0,0,366,367,5,38,0,0,367,369,3,96,48,0,368,365,1,0,0,0,368,366,1,0,
0,0,369,55,1,0,0,0,370,371,5,25,0,0,371,372,3,120,60,0,372,373,5,40,0,0,
373,374,3,124,62,0,374,57,1,0,0,0,375,376,5,26,0,0,376,377,3,120,60,0,377,
378,5,41,0,0,378,379,3,124,62,0,379,59,1,0,0,0,380,381,5,27,0,0,381,382,
3,120,60,0,382,383,5,41,0,0,383,384,3,124,62,0,384,61,1,0,0,0,385,386,5,
23,0,0,386,387,3,96,48,0,387,388,5,43,0,0,388,389,3,120,60,0,389,63,1,0,
0,0,390,391,5,24,0,0,391,392,3,96,48,0,392,65,1,0,0,0,393,394,5,18,0,0,394,
395,3,120,60,0,395,67,1,0,0,0,396,397,5,17,0,0,397,398,3,120,60,0,398,69,
1,0,0,0,399,400,5,28,0,0,400,401,3,120,60,0,401,402,5,42,0,0,402,403,3,96,
48,0,403,71,1,0,0,0,404,405,5,57,0,0,405,406,3,96,48,0,406,73,1,0,0,0,407,
408,5,58,0,0,408,409,3,96,48,0,409,75,1,0,0,0,410,411,5,29,0,0,411,412,3,
96,48,0,412,413,5,37,0,0,413,414,3,96,48,0,414,77,1,0,0,0,415,416,5,34,0,
0,416,417,3,96,48,0,417,79,1,0,0,0,418,419,5,30,0,0,419,420,3,96,48,0,420,
421,5,37,0,0,421,422,3,96,48,0,422,81,1,0,0,0,423,424,5,31,0,0,424,425,3,
96,48,0,425,83,1,0,0,0,426,428,5,32,0,0,427,429,3,96,48,0,428,427,1,0,0,
0,428,429,1,0,0,0,429,85,1,0,0,0,430,431,5,56,0,0,431,432,5,78,0,0,432,435,
5,95,0,0,433,434,5,84,0,0,434,436,3,96,48,0,435,433,1,0,0,0,435,436,1,0,
0,0,436,437,1,0,0,0,437,438,5,79,0,0,438,87,1,0,0,0,439,440,5,19,0,0,440,
441,3,120,60,0,441,89,1,0,0,0,442,443,5,20,0,0,443,444,3,120,60,0,444,91,
1,0,0,0,445,446,5,21,0,0,446,447,3,120,60,0,447,93,1,0,0,0,448,449,5,22,
0,0,449,450,3,120,60,0,450,95,1,0,0,0,451,457,3,98,49,0,452,453,3,114,57,
0,453,454,3,98,49,0,454,456,1,0,0,0,455,452,1,0,0,0,456,459,1,0,0,0,457,
455,1,0,0,0,457,458,1,0,0,0,458,97,1,0,0,0,459,457,1,0,0,0,460,474,3,112,
56,0,461,462,5,78,0,0,462,463,3,96,48,0,463,464,5,79,0,0,464,474,1,0,0,0,
465,466,3,104,52,0,466,467,3,98,49,0,467,474,1,0,0,0,468,474,3,118,59,0,
469,474,3,100,50,0,470,474,3,102,51,0,471,474,3,108,54,0,472,474,3,106,53,
0,473,460,1,0,0,0,473,461,1,0,0,0,473,465,1,0,0,0,473,468,1,0,0,0,473,469,
1,0,0,0,473,470,1,0,0,0,473,471,1,0,0,0,473,472,1,0,0,0,474,99,1,0,0,0,475,
479,5,67,0,0,476,480,3,128,64,0,477,480,3,126,63,0,478,480,3,118,59,0,479,
476,1,0,0,0,479,477,1,0,0,0,479,478,1,0,0,0,480,481,1,0,0,0,481,482,5,69,
0,0,482,496,1,0,0,0,483,487,5,82,0,0,484,488,3,128,64,0,485,488,3,126,63,
0,486,488,3,118,59,0,487,484,1,0,0,0,487,485,1,0,0,0,487,486,1,0,0,0,488,
489,1,0,0,0,489,490,5,83,0,0,490,496,1,0,0,0,491,494,3,128,64,0,492,494,
3,126,63,0,493,491,1,0,0,0,493,492,1,0,0,0,494,496,1,0,0,0,495,475,1,0,0,
0,495,483,1,0,0,0,495,493,1,0,0,0,496,101,1,0,0,0,497,513,5,48,0,0,498,513,
5,49,0,0,499,504,5,50,0,0,500,501,5,78,0,0,501,502,3,96,48,0,502,503,5,79,
0,0,503,505,1,0,0,0,504,500,1,0,0,0,504,505,1,0,0,0,505,510,1,0,0,0,506,
507,5,78,0,0,507,508,3,96,48,0,508,509,5,79,0,0,509,511,1,0,0,0,510,506,
1,0,0,0,510,511,1,0,0,0,511,513,1,0,0,0,512,497,1,0,0,0,512,498,1,0,0,0,
512,499,1,0,0,0,513,103,1,0,0,0,514,515,7,0,0,0,515,105,1,0,0,0,516,517,
3,122,61,0,517,518,5,78,0,0,518,519,3,116,58,0,519,520,5,79,0,0,520,107,
1,0,0,0,521,522,5,33,0,0,522,523,5,78,0,0,523,524,3,96,48,0,524,525,5,84,
0,0,525,526,3,96,48,0,526,527,5,79,0,0,527,109,1,0,0,0,528,529,5,84,0,0,
529,530,3,96,48,0,530,111,1,0,0,0,531,532,5,34,0,0,532,533,3,98,49,0,533,
534,5,78,0,0,534,536,3,96,48,0,535,537,3,110,55,0,536,535,1,0,0,0,536,537,
1,0,0,0,537,539,1,0,0,0,538,540,3,110,55,0,539,538,1,0,0,0,539,540,1,0,0,
0,540,542,1,0,0,0,541,543,3,110,55,0,542,541,1,0,0,0,542,543,1,0,0,0,543,
544,1,0,0,0,544,545,5,79,0,0,545,549,1,0,0,0,546,547,5,34,0,0,547,549,3,
98,49,0,548,531,1,0,0,0,548,546,1,0,0,0,549,113,1,0,0,0,550,551,7,1,0,0,
551,115,1,0,0,0,552,557,3,96,48,0,553,554,5,84,0,0,554,556,3,96,48,0,555,
553,1,0,0,0,556,559,1,0,0,0,557,555,1,0,0,0,557,558,1,0,0,0,558,561,1,0,
0,0,559,557,1,0,0,0,560,552,1,0,0,0,560,561,1,0,0,0,561,117,1,0,0,0,562,
563,5,94,0,0,563,119,1,0,0,0,564,565,5,94,0,0,565,121,1,0,0,0,566,567,5,
94,0,0,567,123,1,0,0,0,568,569,7,2,0,0,569,125,1,0,0,0,570,571,5,60,0,0,
571,574,5,92,0,0,572,574,5,92,0,0,573,570,1,0,0,0,573,572,1,0,0,0,574,127,
1,0,0,0,575,576,5,60,0,0,576,579,5,93,0,0,577,579,5,93,0,0,578,575,1,0,0,
0,578,577,1,0,0,0,579,129,1,0,0,0,39,135,149,153,155,161,169,180,188,198,
205,210,228,236,240,257,273,308,329,339,368,428,435,457,473,479,487,493,
495,504,510,512,536,539,542,548,557,560,573,578];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

class BosParser extends antlr4.Parser {

    static grammarFileName = "Bos.g4";
    static literalNames = [ null, "'x-axis'", "'y-axis'", "'z-axis'", "'#define'", 
                            "'#include'", "'#undef'", "'#ifdef'", "'#ifndef'", 
                            "'#endif'", "'#if'", "'#else'", "'move'", "'turn'", 
                            "'scale'", "'spin'", "'stop-spin'", "'show'", 
                            "'hide'", "'cache'", "'dont-cache'", "'dont-shadow'", 
                            "'dont-shade'", "'emit-sfx'", "'sleep'", "'wait-for-turn'", 
                            "'wait-for-move'", "'wait-for-scale'", "'explode'", 
                            "'set'", "'attach-unit'", "'drop-unit'", "'return'", 
                            "'rand'", null, "'start-script'", "'call-script'", 
                            "'to'", "'speed'", "'now'", "'around'", "'along'", 
                            "'type'", "'from'", "'if'", "'else'", "'while'", 
                            "'for'", "'TRUE'", "'FALSE'", "'UNKNOWN_UNIT_VALUE'", 
                            "'accelerate'", "'decelerate'", "'piece'", "'static-var'", 
                            "'var'", "'play-sound'", "'signal'", "'set-signal-mask'", 
                            "'+'", "'-'", "'*'", "'/'", "'%'", "'='", "'=='", 
                            "'!='", "'<'", "'<='", "'>'", "'>='", null, 
                            null, null, null, "'&'", "'|'", "'^'", "'('", 
                            "')'", "'{'", "'}'", "'['", "']'", "','", "';'" ];
    static symbolicNames = [ null, null, null, null, "D_DEFINE", "D_INCLUDE", 
                             "D_UNDEF", "D_IFDEF", "D_IFNDEF", "D_ENDIF", 
                             "D_IF", "D_ELSE", "MOVE", "TURN", "SCALE", 
                             "SPIN", "STOP_SPIN", "SHOW", "HIDE", "CACHE", 
                             "DONT_CACHE", "DONT_SHADOW", "DONT_SHADE", 
                             "EMIT_SFX", "SLEEP", "WAIT_FOR_TURN", "WAIT_FOR_MOVE", 
                             "WAIT_FOR_SCALE", "EXPLODE", "SET", "ATTACH_UNIT", 
                             "DROP_UNIT", "RETURN", "RAND", "GET", "START_SCRIPT", 
                             "CALL_SCRIPT", "TO", "SPEED", "NOW", "AROUND", 
                             "ALONG", "TYPE", "FROM", "IF", "ELSE", "WHILE", 
                             "FOR", "TRUE", "FALSE", "UNKNOWN_UNIT_VALUE", 
                             "ACCELERATE", "DECELERATE", "PIECE", "STATIC_VAR", 
                             "VAR", "PLAY_SOUND", "SIGNAL", "SET_SIGNAL_MASK", 
                             "PLUS", "MINUS", "MULTIPLY", "DIVIDE", "MODULO", 
                             "EQUAL", "DOUBLE_EQUAL", "NOT_EQUAL", "LESS_THAN", 
                             "LESS_EQUAL", "GREATER_THAN", "GREATER_EQUAL", 
                             "LOGICAL_AND", "LOGICAL_OR", "LOGICAL_NOT", 
                             "LOGICAL_XOR", "BITWISE_AND", "BITWISE_OR", 
                             "BITWISE_XOR", "LPAREN", "RPAREN", "LBRACE", 
                             "RBRACE", "LBRACKET", "RBRACKET", "COMMA", 
                             "SEMICOLON", "MULTI_LINE_MACRO", "DIRECTIVE", 
                             "WHITESPACE", "NEWLINE", "LINE_COMMENT", "BLOCK_COMMENT", 
                             "INTEGER_CONSTANT", "FLOAT_CONSTANT", "IDENTIFIER", 
                             "STRING" ];
    static ruleNames = [ "preprocessor", "file", "declaration", "pieceDec", 
                         "staticVarDec", "funcDec", "arguments", "statementBlock", 
                         "statement", "assignStatement", "definedVarStatement", 
                         "incrementStatement", "decrementStatement", "ifStatement", 
                         "whileStatement", "forStatement", "varStatement", 
                         "keywordStatement", "callStatement", "startStatement", 
                         "spinStatement", "optionalAcceleration", "stopSpinStatement", 
                         "optionalDeceleration", "turnStatement", "moveStatement", 
                         "scaleStatement", "speedNow", "waitForTurnStatement", 
                         "waitForMoveStatement", "waitForScaleStatement", 
                         "emitSfxStatement", "sleepStatement", "hideStatement", 
                         "showStatement", "explodeStatement", "signalStatement", 
                         "setSignalMaskStatement", "setStatement", "getStatement", 
                         "attachUnitStatement", "dropUnitStatement", "returnStatement", 
                         "playSoundStatement", "cacheStatement", "dontCacheStatement", 
                         "dontShadowStatement", "dontShadeStatement", "expression", 
                         "term", "constant", "globalConstant", "unaryOp", 
                         "funcCall", "randCall", "commaExpression", "getTerm", 
                         "op", "expressionList", "varName", "pieceName", 
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
	        this.state = 149;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 130;
	            this.match(BosParser.D_DEFINE);
	            this.state = 131;
	            this.varName();
	            this.state = 135;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            if(la_===1) {
	                this.state = 132;
	                this.match(BosParser.IDENTIFIER);

	            } else if(la_===2) {
	                this.state = 133;
	                this.constant();

	            } else if(la_===3) {
	                this.state = 134;
	                this.match(BosParser.STRING);

	            }
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 137;
	            this.match(BosParser.D_INCLUDE);
	            this.state = 138;
	            this.match(BosParser.STRING);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 139;
	            this.match(BosParser.D_UNDEF);
	            this.state = 140;
	            this.varName();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 141;
	            this.match(BosParser.D_IFDEF);
	            this.state = 142;
	            this.varName();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 143;
	            this.match(BosParser.D_IFNDEF);
	            this.state = 144;
	            this.varName();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 145;
	            this.match(BosParser.D_IF);
	            this.state = 146;
	            this.expression();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 147;
	            this.match(BosParser.D_ELSE);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 148;
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
	        this.state = 155;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4080) !== 0) || _la===53 || _la===54 || _la===94) {
	            this.state = 153;
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
	                this.state = 151;
	                this.preprocessor();
	                break;
	            case 53:
	            case 54:
	            case 94:
	                this.state = 152;
	                this.declaration();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 157;
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



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, BosParser.RULE_declaration);
	    try {
	        this.state = 161;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 53:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 158;
	            this.pieceDec();
	            break;
	        case 54:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 159;
	            this.staticVarDec();
	            break;
	        case 94:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 160;
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
	        this.state = 163;
	        this.match(BosParser.PIECE);
	        this.state = 164;
	        this.pieceName();
	        this.state = 169;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===84) {
	            this.state = 165;
	            this.match(BosParser.COMMA);
	            this.state = 166;
	            this.pieceName();
	            this.state = 171;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 172;
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
	        this.state = 174;
	        this.match(BosParser.STATIC_VAR);
	        this.state = 175;
	        this.varName();
	        this.state = 180;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===84) {
	            this.state = 176;
	            this.match(BosParser.COMMA);
	            this.state = 177;
	            this.varName();
	            this.state = 182;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 183;
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
	        this.state = 185;
	        this.funcName();
	        this.state = 186;
	        this.match(BosParser.LPAREN);
	        this.state = 188;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===94) {
	            this.state = 187;
	            this.arguments();
	        }

	        this.state = 190;
	        this.match(BosParser.RPAREN);
	        this.state = 191;
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
	        this.state = 193;
	        this.varName();
	        this.state = 198;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===84) {
	            this.state = 194;
	            this.match(BosParser.COMMA);
	            this.state = 195;
	            this.varName();
	            this.state = 200;
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
	        this.state = 210;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 80:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 201;
	            this.match(BosParser.LBRACE);
	            this.state = 205;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967280) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 528535581) !== 0) || _la===85 || _la===94) {
	                this.state = 202;
	                this.statement();
	                this.state = 207;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 208;
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
	        case 31:
	        case 32:
	        case 34:
	        case 35:
	        case 36:
	        case 44:
	        case 46:
	        case 47:
	        case 55:
	        case 56:
	        case 57:
	        case 58:
	        case 59:
	        case 60:
	        case 85:
	        case 94:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 209;
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
	        this.state = 228;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 212;
	            this.assignStatement();
	            this.state = 213;
	            this.match(BosParser.SEMICOLON);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 215;
	            this.preprocessor();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 216;
	            this.ifStatement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 217;
	            this.whileStatement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 218;
	            this.forStatement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 219;
	            this.keywordStatement();
	            this.state = 220;
	            this.match(BosParser.SEMICOLON);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 222;
	            this.varStatement();
	            this.state = 223;
	            this.match(BosParser.SEMICOLON);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 225;
	            this.definedVarStatement();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 226;
	            this.funcCall();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 227;
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
	        this.state = 236;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 94:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 230;
	            this.varName();
	            this.state = 231;
	            this.match(BosParser.EQUAL);
	            this.state = 232;
	            this.expression();
	            break;
	        case 59:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 234;
	            this.incrementStatement();
	            break;
	        case 60:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 235;
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



	definedVarStatement() {
	    let localctx = new DefinedVarStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, BosParser.RULE_definedVarStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this.varName();
	        this.state = 240;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        if(la_===1) {
	            this.state = 239;
	            this.match(BosParser.SEMICOLON);

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
	    this.enterRule(localctx, 22, BosParser.RULE_incrementStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242;
	        this.match(BosParser.PLUS);
	        this.state = 243;
	        this.match(BosParser.PLUS);
	        this.state = 244;
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
	    this.enterRule(localctx, 24, BosParser.RULE_decrementStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 246;
	        this.match(BosParser.MINUS);
	        this.state = 247;
	        this.match(BosParser.MINUS);
	        this.state = 248;
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
	    this.enterRule(localctx, 26, BosParser.RULE_ifStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 250;
	        this.match(BosParser.IF);
	        this.state = 251;
	        this.match(BosParser.LPAREN);
	        this.state = 252;
	        this.expression();
	        this.state = 253;
	        this.match(BosParser.RPAREN);
	        this.state = 254;
	        this.statementBlock();
	        this.state = 257;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        if(la_===1) {
	            this.state = 255;
	            this.match(BosParser.ELSE);
	            this.state = 256;
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
	    this.enterRule(localctx, 28, BosParser.RULE_whileStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 259;
	        this.match(BosParser.WHILE);
	        this.state = 260;
	        this.match(BosParser.LPAREN);
	        this.state = 261;
	        this.expression();
	        this.state = 262;
	        this.match(BosParser.RPAREN);
	        this.state = 263;
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
	    this.enterRule(localctx, 30, BosParser.RULE_forStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 265;
	        this.match(BosParser.FOR);
	        this.state = 266;
	        this.match(BosParser.LPAREN);
	        this.state = 267;
	        this.expression();
	        this.state = 268;
	        this.match(BosParser.SEMICOLON);
	        this.state = 269;
	        this.expression();
	        this.state = 270;
	        this.match(BosParser.SEMICOLON);
	        this.state = 271;
	        this.expression();
	        this.state = 273;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===85) {
	            this.state = 272;
	            this.match(BosParser.SEMICOLON);
	        }

	        this.state = 275;
	        this.match(BosParser.RPAREN);
	        this.state = 276;
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
	    this.enterRule(localctx, 32, BosParser.RULE_varStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 278;
	        this.match(BosParser.VAR);
	        this.state = 279;
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
	    this.enterRule(localctx, 34, BosParser.RULE_keywordStatement);
	    try {
	        this.state = 308;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 36:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 281;
	            this.callStatement();
	            break;
	        case 35:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 282;
	            this.startStatement();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 283;
	            this.spinStatement();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 284;
	            this.stopSpinStatement();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 285;
	            this.turnStatement();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 286;
	            this.moveStatement();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 287;
	            this.scaleStatement();
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 288;
	            this.waitForTurnStatement();
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 289;
	            this.waitForMoveStatement();
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 290;
	            this.waitForScaleStatement();
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 291;
	            this.emitSfxStatement();
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 292;
	            this.sleepStatement();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 293;
	            this.hideStatement();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 294;
	            this.showStatement();
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 295;
	            this.explodeStatement();
	            break;
	        case 57:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 296;
	            this.signalStatement();
	            break;
	        case 58:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 297;
	            this.setSignalMaskStatement();
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 298;
	            this.setStatement();
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 299;
	            this.getStatement();
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 300;
	            this.attachUnitStatement();
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 21);
	            this.state = 301;
	            this.dropUnitStatement();
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 22);
	            this.state = 302;
	            this.returnStatement();
	            break;
	        case 56:
	            this.enterOuterAlt(localctx, 23);
	            this.state = 303;
	            this.playSoundStatement();
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 24);
	            this.state = 304;
	            this.cacheStatement();
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 25);
	            this.state = 305;
	            this.dontCacheStatement();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 26);
	            this.state = 306;
	            this.dontShadowStatement();
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 27);
	            this.state = 307;
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
	    this.enterRule(localctx, 36, BosParser.RULE_callStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 310;
	        this.match(BosParser.CALL_SCRIPT);
	        this.state = 311;
	        this.funcName();
	        this.state = 312;
	        this.match(BosParser.LPAREN);
	        this.state = 313;
	        this.expressionList();
	        this.state = 314;
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
	    this.enterRule(localctx, 38, BosParser.RULE_startStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 316;
	        this.match(BosParser.START_SCRIPT);
	        this.state = 317;
	        this.funcName();
	        this.state = 318;
	        this.match(BosParser.LPAREN);
	        this.state = 319;
	        this.expressionList();
	        this.state = 320;
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
	    this.enterRule(localctx, 40, BosParser.RULE_spinStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 322;
	        this.match(BosParser.SPIN);
	        this.state = 323;
	        this.pieceName();
	        this.state = 324;
	        this.match(BosParser.AROUND);
	        this.state = 325;
	        this.axis();
	        this.state = 326;
	        this.match(BosParser.SPEED);
	        this.state = 327;
	        this.expression();
	        this.state = 329;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===51) {
	            this.state = 328;
	            this.optionalAcceleration();
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



	optionalAcceleration() {
	    let localctx = new OptionalAccelerationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, BosParser.RULE_optionalAcceleration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 331;
	        this.match(BosParser.ACCELERATE);
	        this.state = 332;
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



	stopSpinStatement() {
	    let localctx = new StopSpinStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, BosParser.RULE_stopSpinStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 334;
	        this.match(BosParser.STOP_SPIN);
	        this.state = 335;
	        this.pieceName();
	        this.state = 336;
	        this.match(BosParser.AROUND);
	        this.state = 337;
	        this.axis();
	        this.state = 339;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===52) {
	            this.state = 338;
	            this.optionalDeceleration();
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



	optionalDeceleration() {
	    let localctx = new OptionalDecelerationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, BosParser.RULE_optionalDeceleration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 341;
	        this.match(BosParser.DECELERATE);
	        this.state = 342;
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



	turnStatement() {
	    let localctx = new TurnStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, BosParser.RULE_turnStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 344;
	        this.match(BosParser.TURN);
	        this.state = 345;
	        this.pieceName();
	        this.state = 346;
	        this.match(BosParser.TO);
	        this.state = 347;
	        this.axis();
	        this.state = 348;
	        this.expression();
	        this.state = 349;
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
	    this.enterRule(localctx, 50, BosParser.RULE_moveStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 351;
	        this.match(BosParser.MOVE);
	        this.state = 352;
	        this.pieceName();
	        this.state = 353;
	        this.match(BosParser.TO);
	        this.state = 354;
	        this.axis();
	        this.state = 355;
	        this.expression();
	        this.state = 356;
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



	scaleStatement() {
	    let localctx = new ScaleStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, BosParser.RULE_scaleStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 358;
	        this.match(BosParser.SCALE);
	        this.state = 359;
	        this.pieceName();
	        this.state = 360;
	        this.match(BosParser.TO);
	        this.state = 361;
	        this.axis();
	        this.state = 362;
	        this.expression();
	        this.state = 363;
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
	    this.enterRule(localctx, 54, BosParser.RULE_speedNow);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 368;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 39:
	            this.state = 365;
	            this.match(BosParser.NOW);
	            break;
	        case 38:
	            this.state = 366;
	            this.match(BosParser.SPEED);
	            this.state = 367;
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
	    this.enterRule(localctx, 56, BosParser.RULE_waitForTurnStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 370;
	        this.match(BosParser.WAIT_FOR_TURN);
	        this.state = 371;
	        this.pieceName();
	        this.state = 372;
	        this.match(BosParser.AROUND);
	        this.state = 373;
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
	    this.enterRule(localctx, 58, BosParser.RULE_waitForMoveStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 375;
	        this.match(BosParser.WAIT_FOR_MOVE);
	        this.state = 376;
	        this.pieceName();
	        this.state = 377;
	        this.match(BosParser.ALONG);
	        this.state = 378;
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



	waitForScaleStatement() {
	    let localctx = new WaitForScaleStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, BosParser.RULE_waitForScaleStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 380;
	        this.match(BosParser.WAIT_FOR_SCALE);
	        this.state = 381;
	        this.pieceName();
	        this.state = 382;
	        this.match(BosParser.ALONG);
	        this.state = 383;
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
	    this.enterRule(localctx, 62, BosParser.RULE_emitSfxStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 385;
	        this.match(BosParser.EMIT_SFX);
	        this.state = 386;
	        this.expression();
	        this.state = 387;
	        this.match(BosParser.FROM);
	        this.state = 388;
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
	    this.enterRule(localctx, 64, BosParser.RULE_sleepStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 390;
	        this.match(BosParser.SLEEP);
	        this.state = 391;
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
	    this.enterRule(localctx, 66, BosParser.RULE_hideStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 393;
	        this.match(BosParser.HIDE);
	        this.state = 394;
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
	    this.enterRule(localctx, 68, BosParser.RULE_showStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 396;
	        this.match(BosParser.SHOW);
	        this.state = 397;
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
	    this.enterRule(localctx, 70, BosParser.RULE_explodeStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 399;
	        this.match(BosParser.EXPLODE);
	        this.state = 400;
	        this.pieceName();
	        this.state = 401;
	        this.match(BosParser.TYPE);
	        this.state = 402;
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
	    this.enterRule(localctx, 72, BosParser.RULE_signalStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 404;
	        this.match(BosParser.SIGNAL);
	        this.state = 405;
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
	    this.enterRule(localctx, 74, BosParser.RULE_setSignalMaskStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 407;
	        this.match(BosParser.SET_SIGNAL_MASK);
	        this.state = 408;
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
	    this.enterRule(localctx, 76, BosParser.RULE_setStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 410;
	        this.match(BosParser.SET);
	        this.state = 411;
	        this.expression();
	        this.state = 412;
	        this.match(BosParser.TO);
	        this.state = 413;
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
	    this.enterRule(localctx, 78, BosParser.RULE_getStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 415;
	        this.match(BosParser.GET);
	        this.state = 416;
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
	    this.enterRule(localctx, 80, BosParser.RULE_attachUnitStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 418;
	        this.match(BosParser.ATTACH_UNIT);
	        this.state = 419;
	        this.expression();
	        this.state = 420;
	        this.match(BosParser.TO);
	        this.state = 421;
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
	    this.enterRule(localctx, 82, BosParser.RULE_dropUnitStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 423;
	        this.match(BosParser.DROP_UNIT);
	        this.state = 424;
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
	    this.enterRule(localctx, 84, BosParser.RULE_returnStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 426;
	        this.match(BosParser.RETURN);
	        this.state = 428;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 134447107) !== 0) || ((((_la - 67)) & ~0x1f) === 0 && ((1 << (_la - 67)) & 234915905) !== 0)) {
	            this.state = 427;
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
	    this.enterRule(localctx, 86, BosParser.RULE_playSoundStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 430;
	        this.match(BosParser.PLAY_SOUND);
	        this.state = 431;
	        this.match(BosParser.LPAREN);
	        this.state = 432;
	        this.match(BosParser.STRING);
	        this.state = 435;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===84) {
	            this.state = 433;
	            this.match(BosParser.COMMA);
	            this.state = 434;
	            this.expression();
	        }

	        this.state = 437;
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
	    this.enterRule(localctx, 88, BosParser.RULE_cacheStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 439;
	        this.match(BosParser.CACHE);
	        this.state = 440;
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
	    this.enterRule(localctx, 90, BosParser.RULE_dontCacheStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 442;
	        this.match(BosParser.DONT_CACHE);
	        this.state = 443;
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
	    this.enterRule(localctx, 92, BosParser.RULE_dontShadowStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 445;
	        this.match(BosParser.DONT_SHADOW);
	        this.state = 446;
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
	    this.enterRule(localctx, 94, BosParser.RULE_dontShadeStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 448;
	        this.match(BosParser.DONT_SHADE);
	        this.state = 449;
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
	    this.enterRule(localctx, 96, BosParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 451;
	        this.term();
	        this.state = 457;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 452;
	                this.op();
	                this.state = 453;
	                this.term(); 
	            }
	            this.state = 459;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
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
	    this.enterRule(localctx, 98, BosParser.RULE_term);
	    try {
	        this.state = 473;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 460;
	            this.getTerm();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 461;
	            this.match(BosParser.LPAREN);
	            this.state = 462;
	            this.expression();
	            this.state = 463;
	            this.match(BosParser.RPAREN);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 465;
	            this.unaryOp();
	            this.state = 466;
	            this.term();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 468;
	            this.varName();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 469;
	            this.constant();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 470;
	            this.globalConstant();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 471;
	            this.randCall();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 472;
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
	    this.enterRule(localctx, 100, BosParser.RULE_constant);
	    try {
	        this.state = 495;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 67:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 475;
	            this.match(BosParser.LESS_THAN);
	            this.state = 479;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 476;
	                this.signedFloatConstant();
	                break;

	            case 2:
	                this.state = 477;
	                this.signedIntegerConstant();
	                break;

	            case 3:
	                this.state = 478;
	                this.varName();
	                break;

	            }
	            this.state = 481;
	            this.match(BosParser.GREATER_THAN);
	            break;
	        case 82:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 483;
	            this.match(BosParser.LBRACKET);
	            this.state = 487;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 484;
	                this.signedFloatConstant();
	                break;

	            case 2:
	                this.state = 485;
	                this.signedIntegerConstant();
	                break;

	            case 3:
	                this.state = 486;
	                this.varName();
	                break;

	            }
	            this.state = 489;
	            this.match(BosParser.RBRACKET);
	            break;
	        case 60:
	        case 92:
	        case 93:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 493;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 491;
	                this.signedFloatConstant();
	                break;

	            case 2:
	                this.state = 492;
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
	    this.enterRule(localctx, 102, BosParser.RULE_globalConstant);
	    try {
	        this.state = 512;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 48:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 497;
	            this.match(BosParser.TRUE);
	            break;
	        case 49:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 498;
	            this.match(BosParser.FALSE);
	            break;
	        case 50:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 499;
	            this.match(BosParser.UNKNOWN_UNIT_VALUE);
	            this.state = 504;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	            if(la_===1) {
	                this.state = 500;
	                this.match(BosParser.LPAREN);
	                this.state = 501;
	                this.expression();
	                this.state = 502;
	                this.match(BosParser.RPAREN);

	            }
	            this.state = 510;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	            if(la_===1) {
	                this.state = 506;
	                this.match(BosParser.LPAREN);
	                this.state = 507;
	                this.expression();
	                this.state = 508;
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
	    this.enterRule(localctx, 104, BosParser.RULE_unaryOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 514;
	        _la = this._input.LA(1);
	        if(!(_la===60 || _la===73)) {
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
	    this.enterRule(localctx, 106, BosParser.RULE_funcCall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 516;
	        this.funcName();
	        this.state = 517;
	        this.match(BosParser.LPAREN);
	        this.state = 518;
	        this.expressionList();
	        this.state = 519;
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
	    this.enterRule(localctx, 108, BosParser.RULE_randCall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 521;
	        this.match(BosParser.RAND);
	        this.state = 522;
	        this.match(BosParser.LPAREN);
	        this.state = 523;
	        this.expression();
	        this.state = 524;
	        this.match(BosParser.COMMA);
	        this.state = 525;
	        this.expression();
	        this.state = 526;
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
	    this.enterRule(localctx, 110, BosParser.RULE_commaExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 528;
	        this.match(BosParser.COMMA);
	        this.state = 529;
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
	    this.enterRule(localctx, 112, BosParser.RULE_getTerm);
	    var _la = 0;
	    try {
	        this.state = 548;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 531;
	            this.match(BosParser.GET);
	            this.state = 532;
	            this.term();
	            this.state = 533;
	            this.match(BosParser.LPAREN);
	            this.state = 534;
	            this.expression();
	            this.state = 536;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	            if(la_===1) {
	                this.state = 535;
	                this.commaExpression();

	            }
	            this.state = 539;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	            if(la_===1) {
	                this.state = 538;
	                this.commaExpression();

	            }
	            this.state = 542;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===84) {
	                this.state = 541;
	                this.commaExpression();
	            }

	            this.state = 544;
	            this.match(BosParser.RPAREN);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 546;
	            this.match(BosParser.GET);
	            this.state = 547;
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
	    this.enterRule(localctx, 114, BosParser.RULE_op);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 550;
	        _la = this._input.LA(1);
	        if(!(((((_la - 59)) & ~0x1f) === 0 && ((1 << (_la - 59)) & 507871) !== 0))) {
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
	    this.enterRule(localctx, 116, BosParser.RULE_expressionList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 560;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 134447107) !== 0) || ((((_la - 67)) & ~0x1f) === 0 && ((1 << (_la - 67)) & 234915905) !== 0)) {
	            this.state = 552;
	            this.expression();
	            this.state = 557;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===84) {
	                this.state = 553;
	                this.match(BosParser.COMMA);
	                this.state = 554;
	                this.expression();
	                this.state = 559;
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
	    this.enterRule(localctx, 118, BosParser.RULE_varName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 562;
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
	    this.enterRule(localctx, 120, BosParser.RULE_pieceName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 564;
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
	    this.enterRule(localctx, 122, BosParser.RULE_funcName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 566;
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
	    this.enterRule(localctx, 124, BosParser.RULE_axis);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 568;
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
	    this.enterRule(localctx, 126, BosParser.RULE_signedIntegerConstant);
	    try {
	        this.state = 573;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 60:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 570;
	            this.match(BosParser.MINUS);
	            this.state = 571;
	            this.match(BosParser.INTEGER_CONSTANT);
	            break;
	        case 92:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 572;
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
	    this.enterRule(localctx, 128, BosParser.RULE_signedFloatConstant);
	    try {
	        this.state = 578;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 60:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 575;
	            this.match(BosParser.MINUS);
	            this.state = 576;
	            this.match(BosParser.FLOAT_CONSTANT);
	            break;
	        case 93:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 577;
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
BosParser.SCALE = 14;
BosParser.SPIN = 15;
BosParser.STOP_SPIN = 16;
BosParser.SHOW = 17;
BosParser.HIDE = 18;
BosParser.CACHE = 19;
BosParser.DONT_CACHE = 20;
BosParser.DONT_SHADOW = 21;
BosParser.DONT_SHADE = 22;
BosParser.EMIT_SFX = 23;
BosParser.SLEEP = 24;
BosParser.WAIT_FOR_TURN = 25;
BosParser.WAIT_FOR_MOVE = 26;
BosParser.WAIT_FOR_SCALE = 27;
BosParser.EXPLODE = 28;
BosParser.SET = 29;
BosParser.ATTACH_UNIT = 30;
BosParser.DROP_UNIT = 31;
BosParser.RETURN = 32;
BosParser.RAND = 33;
BosParser.GET = 34;
BosParser.START_SCRIPT = 35;
BosParser.CALL_SCRIPT = 36;
BosParser.TO = 37;
BosParser.SPEED = 38;
BosParser.NOW = 39;
BosParser.AROUND = 40;
BosParser.ALONG = 41;
BosParser.TYPE = 42;
BosParser.FROM = 43;
BosParser.IF = 44;
BosParser.ELSE = 45;
BosParser.WHILE = 46;
BosParser.FOR = 47;
BosParser.TRUE = 48;
BosParser.FALSE = 49;
BosParser.UNKNOWN_UNIT_VALUE = 50;
BosParser.ACCELERATE = 51;
BosParser.DECELERATE = 52;
BosParser.PIECE = 53;
BosParser.STATIC_VAR = 54;
BosParser.VAR = 55;
BosParser.PLAY_SOUND = 56;
BosParser.SIGNAL = 57;
BosParser.SET_SIGNAL_MASK = 58;
BosParser.PLUS = 59;
BosParser.MINUS = 60;
BosParser.MULTIPLY = 61;
BosParser.DIVIDE = 62;
BosParser.MODULO = 63;
BosParser.EQUAL = 64;
BosParser.DOUBLE_EQUAL = 65;
BosParser.NOT_EQUAL = 66;
BosParser.LESS_THAN = 67;
BosParser.LESS_EQUAL = 68;
BosParser.GREATER_THAN = 69;
BosParser.GREATER_EQUAL = 70;
BosParser.LOGICAL_AND = 71;
BosParser.LOGICAL_OR = 72;
BosParser.LOGICAL_NOT = 73;
BosParser.LOGICAL_XOR = 74;
BosParser.BITWISE_AND = 75;
BosParser.BITWISE_OR = 76;
BosParser.BITWISE_XOR = 77;
BosParser.LPAREN = 78;
BosParser.RPAREN = 79;
BosParser.LBRACE = 80;
BosParser.RBRACE = 81;
BosParser.LBRACKET = 82;
BosParser.RBRACKET = 83;
BosParser.COMMA = 84;
BosParser.SEMICOLON = 85;
BosParser.MULTI_LINE_MACRO = 86;
BosParser.DIRECTIVE = 87;
BosParser.WHITESPACE = 88;
BosParser.NEWLINE = 89;
BosParser.LINE_COMMENT = 90;
BosParser.BLOCK_COMMENT = 91;
BosParser.INTEGER_CONSTANT = 92;
BosParser.FLOAT_CONSTANT = 93;
BosParser.IDENTIFIER = 94;
BosParser.STRING = 95;

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
BosParser.RULE_definedVarStatement = 10;
BosParser.RULE_incrementStatement = 11;
BosParser.RULE_decrementStatement = 12;
BosParser.RULE_ifStatement = 13;
BosParser.RULE_whileStatement = 14;
BosParser.RULE_forStatement = 15;
BosParser.RULE_varStatement = 16;
BosParser.RULE_keywordStatement = 17;
BosParser.RULE_callStatement = 18;
BosParser.RULE_startStatement = 19;
BosParser.RULE_spinStatement = 20;
BosParser.RULE_optionalAcceleration = 21;
BosParser.RULE_stopSpinStatement = 22;
BosParser.RULE_optionalDeceleration = 23;
BosParser.RULE_turnStatement = 24;
BosParser.RULE_moveStatement = 25;
BosParser.RULE_scaleStatement = 26;
BosParser.RULE_speedNow = 27;
BosParser.RULE_waitForTurnStatement = 28;
BosParser.RULE_waitForMoveStatement = 29;
BosParser.RULE_waitForScaleStatement = 30;
BosParser.RULE_emitSfxStatement = 31;
BosParser.RULE_sleepStatement = 32;
BosParser.RULE_hideStatement = 33;
BosParser.RULE_showStatement = 34;
BosParser.RULE_explodeStatement = 35;
BosParser.RULE_signalStatement = 36;
BosParser.RULE_setSignalMaskStatement = 37;
BosParser.RULE_setStatement = 38;
BosParser.RULE_getStatement = 39;
BosParser.RULE_attachUnitStatement = 40;
BosParser.RULE_dropUnitStatement = 41;
BosParser.RULE_returnStatement = 42;
BosParser.RULE_playSoundStatement = 43;
BosParser.RULE_cacheStatement = 44;
BosParser.RULE_dontCacheStatement = 45;
BosParser.RULE_dontShadowStatement = 46;
BosParser.RULE_dontShadeStatement = 47;
BosParser.RULE_expression = 48;
BosParser.RULE_term = 49;
BosParser.RULE_constant = 50;
BosParser.RULE_globalConstant = 51;
BosParser.RULE_unaryOp = 52;
BosParser.RULE_funcCall = 53;
BosParser.RULE_randCall = 54;
BosParser.RULE_commaExpression = 55;
BosParser.RULE_getTerm = 56;
BosParser.RULE_op = 57;
BosParser.RULE_expressionList = 58;
BosParser.RULE_varName = 59;
BosParser.RULE_pieceName = 60;
BosParser.RULE_funcName = 61;
BosParser.RULE_axis = 62;
BosParser.RULE_signedIntegerConstant = 63;
BosParser.RULE_signedFloatConstant = 64;

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

	definedVarStatement() {
	    return this.getTypedRuleContext(DefinedVarStatementContext,0);
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



class DefinedVarStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_definedVarStatement;
    }

	varName() {
	    return this.getTypedRuleContext(VarNameContext,0);
	};

	SEMICOLON() {
	    return this.getToken(BosParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.enterDefinedVarStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitDefinedVarStatement(this);
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

	scaleStatement() {
	    return this.getTypedRuleContext(ScaleStatementContext,0);
	};

	waitForTurnStatement() {
	    return this.getTypedRuleContext(WaitForTurnStatementContext,0);
	};

	waitForMoveStatement() {
	    return this.getTypedRuleContext(WaitForMoveStatementContext,0);
	};

	waitForScaleStatement() {
	    return this.getTypedRuleContext(WaitForScaleStatementContext,0);
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



class ScaleStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_scaleStatement;
    }

	SCALE() {
	    return this.getToken(BosParser.SCALE, 0);
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
	        listener.enterScaleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitScaleStatement(this);
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



class WaitForScaleStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BosParser.RULE_waitForScaleStatement;
    }

	WAIT_FOR_SCALE() {
	    return this.getToken(BosParser.WAIT_FOR_SCALE, 0);
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
	        listener.enterWaitForScaleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BosListener ) {
	        listener.exitWaitForScaleStatement(this);
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

	PLAY_SOUND() {
	    return this.getToken(BosParser.PLAY_SOUND, 0);
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

	varName() {
	    return this.getTypedRuleContext(VarNameContext,0);
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

	LOGICAL_NOT() {
	    return this.getToken(BosParser.LOGICAL_NOT, 0);
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

	BITWISE_XOR() {
	    return this.getToken(BosParser.BITWISE_XOR, 0);
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

	LOGICAL_XOR() {
	    return this.getToken(BosParser.LOGICAL_XOR, 0);
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
BosParser.DefinedVarStatementContext = DefinedVarStatementContext; 
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
BosParser.ScaleStatementContext = ScaleStatementContext; 
BosParser.SpeedNowContext = SpeedNowContext; 
BosParser.WaitForTurnStatementContext = WaitForTurnStatementContext; 
BosParser.WaitForMoveStatementContext = WaitForMoveStatementContext; 
BosParser.WaitForScaleStatementContext = WaitForScaleStatementContext; 
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
