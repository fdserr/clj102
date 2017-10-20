(ns figwheel.connect.build-devcards (:require [devcards.core :include-macros true] [clj102.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:devcards true, :open-urls ["http://localhost:3449/cards.html"], :build-id "devcards", :websocket-url "ws://localhost:3449/figwheel-ws"})
(devcards.core/start-devcard-ui!)
