const FollowToggle = require('./follow_toggle');

$(() => {
  $('button.follow-toggle').each((i, button) => new FollowToggle(button, {}));
});