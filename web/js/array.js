var uniquePathsWithObstacles = function(obstacleGrid) {
  // 行
  var n = obstacleGrid.length;
  // 列
  var m = obstacleGrid[0].length;
  // 初始化
  var dp = new Array(n);
  for(var i = 0;i<n;i++){
      dp[i] = new Array(m).fill(0);
  }
  return dp
}
console.log(uniquePathsWithObstacles([[1,1],[1,1]]))
