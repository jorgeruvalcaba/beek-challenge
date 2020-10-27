const OPTIONS = {
  TITLE: "Título",
  LAST_PLAYED_AT: "Últimos escuchados",
  PURCHASED_AT: "Agregados recientemente",
};

const ORDER = {
  TITLE: function (a, b) {
    return a.title.localeCompare(b.title);
  },
  LAST_PLAYED_AT: function (a, b) {
    return new Date(b.lastPlayedDate) - new Date(a.lastPlayedDate);
  },
  PURCHASED_AT: function (a, b) {
    return new Date(b.purchasedDate) - new Date(a.purchasedDate);
  },
};

const DEFAULT_ORDER = "TITLE";

const DEFAULT_MODAL = false;

const COMPLETE = 100;

const SNAP_POINTS = [400];

const INITIAL_SNAP = 0;

const PROGRESS_BAR_MAX = 100;

const ZERO_PROGRESS = 0;

export {
  OPTIONS,
  ORDER,
  DEFAULT_ORDER,
  DEFAULT_MODAL,
  COMPLETE,
  SNAP_POINTS,
  INITIAL_SNAP,
  PROGRESS_BAR_MAX,
  ZERO_PROGRESS,
};
