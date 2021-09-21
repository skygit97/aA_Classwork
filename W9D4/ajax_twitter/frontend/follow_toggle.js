class FollowToggle {
  constructor(el, props) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id') || props.userId;
    this.followState = this.$el.data('initial-follow-state') || props.followState;
    
    this.render();
    this.$el.on('click', this.handleClick.bind(this));
  };

  handleClick(e) {
    e.preventDefault()
  }

  render() {
    switch (this.followState) {
      case 'unfollowed':
        return this.$el.html('Follow!');
      case 'followed': 
        return this.$el.html('Unfollow!');
    }
  }
};

module.exports = FollowToggle