// 到此的时候已经有几个字母是重复的了

// a b c d a b c e
// 0 0 0 0 0 1 2 3

// a a b a a a c
// 0 0 1 0 1 2 3

// a b a b a b c
// 0 0 0 1 2 3 4

// ------
// a b a b a b c
// 0 0 0 1 2 3 4
// ------
function kmp(source, pattern) {
  // 计算table
  let table = new Array(pattern.length).fill(0)
  {
    let i = 1 // 自重复串的开始位置
    let j = 0 // 已重复的字数
    while (i < pattern.length) {
      if (pattern[i] === pattern[j]) {
        ++i, ++j
        table[i] = j
      } else {
        if (j > 0) {
          j = table[j]
        } else {
          ++i
        }
      }
    }
  }
  //  匹配
  {
    let i = 0, j = 0 // i source的位置。j pattern的位置
    while (i < source.length) {
      if (pattern[j] === source[i]) {
        ++i, ++j
      } else {
        if (j > 0) {
          j = table[j]
        } else {
          ++i
        }
      }
      if (j === pattern.length) {
        return true
      }
    }
    return false
  }
}
console.log(kmp('hello', 'hello'))