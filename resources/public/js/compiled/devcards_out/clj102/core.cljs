(ns clj102.core
  (:require
   [sablono.core :as sab :include-macros true :refer [html]]
   [cljs.test :refer [is testing async]])
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)

(defcard
  ""
  (+ 100 (+ 10 (+ 1 1))))

(defcard
  ""
  (-> (+ 1 1)
      (+ 10)
      (+ 100)))

(defcard
  ""
  ((comp
     #(+ 100 %)
     #(+ 10 %)
     #(+ 1 %))
   1))

(defcard
  ""
  (into []
        (comp
         (map :name)
         (filter #(= "P" (first %))))
        [{:name "Paul"}
         {:name "Peter"}
         {:name "John"}]))

(defcard
  ""
  (into []
        (comp
         (map :city)
         (filter #(= "P" (first %))))
        [{:city "Paris"}
         {:city "Edinburgh"}
         {:ncityame "SG"}]))

(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (.render js/ReactDOM (sab/html [:div "This is working"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html
