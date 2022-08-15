function sendDiscordMessage(name, message) {
  var webhookURL = "https://discord.com/api/webhooks/1008706373342728274/ZXijZ_oH8waHZl0xcCF77H2JrCw-j5i-AwyzUxvbdABO7MvpkN4mg3_hXvSJpOJaI-0o";
  // Discord webhookに投げるメッセージの内容
  var options = {
    "content" : name+" 「"+message+"」"
  };
  // データを作って投げる
  var response = UrlFetchApp.fetch(
    webhookURL,
    {
      method: "POST",
      contentType: "application/json",
      payload: JSON.stringify(options),
      muteHttpExceptions: true,
    }
  );
  // こちらはステータスコードを返す必要はない
}
