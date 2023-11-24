var obj = JSON.parse($response.body);
obj['has_gold_subscription'] = true;
obj['pref_autoplay'] = false;
obj['has_subscribed_to_premium'] = true;
obj['has_visited_new_profile'] = true;
obj['pref_video_autoplay'] = false;
obj['features']['promoted_trend_blanks'] = false;
obj['is_mod'] = true;
obj['is_gold'] = true;
obj['has_ios_subscription'] = true;
obj['seen_premium_adblock_modal'] = true;
obj['can_edit_name'] = true;
obj['has_external_account'] = true;

const body = JSON.parse($response.body);
let modified = false;

if (body.data) {
  modified = true;

  if (body.data.subredditInfoByName && body.data.subredditInfoByName.elements && body.data.subredditInfoByName.elements.edges) {
    body.data.subredditInfoByName.elements.edges = body.data.subredditInfoByName.elements.edges.filter(i => i && i.node && (i.node.__typename !== "AdPost"));
  } else if (body.data.home && body.data.home.elements && body.data.home.elements.edges) {
    body.data.home.elements.edges = body.data.home.elements.edges.filter(i => i && i.node && (i.node.__typename !== "AdPost"));
  } else if (body.data.subredditsInfoByNames) {
    body.data.subredditsInfoByNames = body.data.subredditsInfoByNames.map(i => ({ ...i, isNsfw: false }));
  } else {
    modified = false;
  }
}

$done(modified ? { body: JSON.stringify(obj) } : {});
