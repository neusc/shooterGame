var canvas,
  ctx,
  width,
  height

function init () {

  canvas = document.getElementById('canvas')
  width = canvas.width
  height = canvas.height
  ctx = canvas.getContext('2d')

  // 监听键盘事件
  window.onkeydown = keyLogger.keyDownListener
  window.onkeyup = keyLogger.keyUpListener

  // 初始化发射器
  player.x = width / 2
  player.y = height / 2

  // 界面渲染主循环
  setInterval(function () {
    updateGame(0.01)
    renderGame()
  }, 10)

}

function updateGame (dt) {
  bullets.update(dt)
  targets.update(dt)
  player.update(dt)
}

function renderGame () {
  renderBackground()
  player.render(ctx)
  bullets.render(ctx)
  targets.render(ctx)
}

function renderBackground () {
  ctx.fillStyle = '#c6c6c6'
  ctx.fillRect(0, 0, width, height)
}

