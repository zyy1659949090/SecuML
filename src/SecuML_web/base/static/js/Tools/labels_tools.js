function otherLabel(label) {
    if (label == 'malicious') {
        return 'benign';
    } else {
        return 'malicious';
    }
}

function hasTrueLabels(experiment_id) {
  var query = buildQuery('hasTrueLabels', [experiment_id]);
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open('GET', query, false);
  xmlHttp.send(null);
  var has_true_labels = xmlHttp.responseText;
  return has_true_labels == 'True';
}
