var minimumTotal = function (triangle) {
  var dp = triangle;
  for (var i = dp.length - 2; i >= 0; i--) {
    for (var j = 0; j < dp[i].length; j++) {
      // console.log(triangle[i][j],dp[i][j])
      dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + dp[i][j];
      console.log(dp[i][j])
    }
  }
  return dp[0][0];
};

minimumTotal(
  [
    [2],
    [3, 4],
    [6, 5, 7],
    [4, 1, 8, 3]
  ]
)