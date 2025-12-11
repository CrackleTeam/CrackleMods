return {
    id: "popup",
    name: "Popups",
    description: "Create popups with blocks.",
    version: "1.0",
    author: "Bubgamer07",
    depends: [],
    doMenu: false,

    main(api) {
        SnapExtensions.primitives.set( // Define a function that can be used in the "extension" block
            'crk_pop_inform(title,msg)',
            function       (title,msg) {
                if ((typeof msg == 'object') && (msg instanceof List)) {
                    msg = msg.asArray().join('\n')
                }
                api.inform(msg.toString(), title.toString());
            }
        )
        SnapExtensions.primitives.set(
            'crk_pop_showmessage(msg)',
            function            (msg) {
                if ((typeof msg == 'object') && (msg instanceof List)) {
                    msg = msg.asArray().join('\n')
                }
                api.showMsg(msg.toString());
            }
        )
        api.ide.droppedText( // Import the blocks by "dropping" them into the IDE
            '<blocks app="Snap! 11.0.8, https://snap.berkeley.edu" version="2"><palette><category name="Popups" color="127,176,221,1"/></palette><block-definition s="inform %&apos;title&apos; $nl %&apos;message&apos;" type="command" category="Popups"><comment w="90" collapsed="false">Shows an informational dialog that can be dismissed by pressing the &quot;OK&quot; button.</comment><header></header><code></code><translations></translations><inputs><input type="%s" initial="1">Title</input><input type="%mlt" initial="1">Hello, World!</input></inputs><script><block s="doApplyExtension"><l>crk_pop_inform(title,msg)</l><list><block var="title"/><block var="message"/></list></block></script></block-definition><block-definition s="show message %&apos;message&apos;" type="command" category="Popups"><comment w="98" collapsed="false">Shows an informational message that disappears when clicking outside of it.</comment><header></header><code></code><translations></translations><inputs><input type="%mlt" initial="1">Hello, World!</input></inputs><script><block s="doApplyExtension"><l>crk_pop_showmessage(msg)</l><list><block var="message"/></list></block></script></block-definition></blocks>',
            "Popups"
        )
    },

    cleanupFuncs: [
        () => {
            SnapExtensions.primitives.delete('crk_pop_inform(title,msg)')
            SnapExtensions.primitives.delete('crk_pop_showmessage(msg)')
        }
    ],
}