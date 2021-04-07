const scenes = require('./scenes')

scenes.createScene("intro", 
`As your senses return to you there is the familiar sound and jostling of a wagon, the smell of horses - and tension in the air
"Hey you, you're finally awake.  You were trying to cross the border right? Walked right into that Imperial ambush, same as us."
Looking up you see the speaker sitting across from you is a hearty Nord named Ralof, wearing what you will later come to know as a Stormcloak tabbard over light armor.
A squabble ensues with another passenger in the wagon, who is a horse theif named Lokir from Rorikstead.  Lokir isn't happy about being trapped in a wagon with the Stormcloaks.
You go to stretch your tired arms, but you find your hands have been bound together.  Looking around you see all of you in the wagon are bound.  You realize that you are a prisoner.
Looking around more you see the wagon is in a caravan of three.  Armed escorts wearing Imperial armor are outriding.  You are being transported with other prisoners.
You discover that sitting next to you is none other than Ulfic Stormcloak, who is the head of the local uprising against the Imperials.  He is gagged as well as bound.  Apparently he had "shouted" someone to death at the start of his uprising, and the Imperials were not going to take the chance he uses this power to escape.
The caravan enters a small fortification called Helgen.  Imperial guards stand in the fortification's yard.  In the center of the yard, a headsman stands beside a heavy and worn tree stump.
"End of the line," Ralof observes.
Exiting the wagon, you find yourself facing and Imperial captain and a friendly guard named Hadvar.
"Wait. You there. Step forward. Who are you?" Hadvar asks with genuine curiousity.
Hadvar searches his list of known Stormcloak supporters.  You aren't on it.  
He glances at the headsman standing nearby and knowing that there will be no 'fair trials' today, he decides to advocate for your innocence.
"Captain. What should we do? This one is not on the list... "
The Captain scoffs. "Forget the list. They go to the block."
Hadvar pauses for a moment.  The nearby city gate stands wide open.`,
[
    { description: "Try to escape, charge through the crowd and run for it", scene: "another_runner"},
    { description: "Be well behaved and wait", scene: "to_the_block"}
])

scenes.createScene("another_runner", 
`"You're not going to kill me!" you cry and you shoulder through the unsuspecting guards.
Sprinting with your hands tied together is surprisingly difficult. Your gait is more of a paniked lumber.  The gate draws nearer as you run towards it, but it feels like an eternity is passing just trying to get to it.
"Archers!" the Captain barks.
You hear the thwip of bowstrings and feel two smacks at your back. They feel light, but somehow you are suddenly robbed of all strength in your legs and stumble forward.  You lie on the ground and reality starts to fade.
The last thing you hear is the Captain's voice growing distant.  
"Anyone else feel like running?"
All goes black.`)

scenes.createScene("to_the_block", 
`"You're not going to kill me!" cries the horse thief Lokir and he shoulders through the unsuspecting guards.
He sprints for the open gate, but he stumbles as he runs.
"Archers!" the Captain barks.
You hear the thwip of bowstrings and watch as Lokir's flight is cut short by a pair of Imperial marksmen.
"Anyone else feel like running?" the Captain shouts to the assembled prisoners.
Hadvar's glance returns to you with an uneasy resignation on his face, "You picked a bad time to return home kinsmen, follow the Captain prisoner."
A few steps into the yard you stand among Stormcloaks set to be executed.
Tullius, the Imperial general of Skyrim addresses Ulfric.
"Ulfric Stormcloak. Some here in Helgen call you a hero. But a hero doesn't use a power like The Voice to murder his king and usurp his throne."
Ulfric responds with a grunt through his gag.
"You started this war, plunged Skyrim into chaos, and now the Empire is going to put you down, and restore the peace."
A distant sound echoes through the valley, a sort of cross between the cry of an eagle and a fearsome roar of a bear.
"What was that?"  Hadvar asks, scanning the horizon with sharp eyes.
"It's nothing. Carry on. Give them their last rites"  Tullius orders.
A priest of Arkay steps forwards and begins speaking in ceremonial tones, their voice quickly drones out while you consider your options.`,
[
    { description: "Try to escape, Lokir was slow - but I am not.  Run for it", scene: "another_runner"},
    { description: "Surprise everyone and approach the block to be first.", scene: "first_up"},
    { description: "A lot can happen before your turn.  Just wait.", scene: "wait_your_turn"},
])

scenes.createScene("first_up", 
`"Shut up and lets get this over with!" you say as you approach the block.
The priestess of Arkay is taken aback by the interruption, but says "as you wish."
The Captain is confused but recovers quickly and pins you to the stump with a foot on your back.
The last thing you see is the headsman hoist the heavy axe and swing it down.`)    

scenes.createScene("wait_your_turn", 
`"Shut up and lets get this over with!" a Stormcloak member steps forward.
The priestess of Arkay is taken aback by the interruption, but says "as you wish."
The Captain is confused but recovers quickly and pins the Stormcloak to the stump with a foot on their back.
The headsman hoists the heavy axe and swings it. With a dull thud the Stormcloak soldier is ended.
"As fearless in death as he was in life," Ralof says solemnly.
"Next! You." The Captain points in your direction.
Another roar echoes through the valley.  This one sounds much closer than the last.  Imperials and prisoners alike scan the skies with their eyes looking for the source, but nothing appears.`,
[
    { description: "Try to escape, Lokir was slow - but I am not.  Run for it", scene: "another_runner"},
    { description: "Approach the block.", scene: "end_of_the_line"},
])

scenes.createScene("end_of_the_line", 
`You approach the block.  The captain pins you to the stump with their foot.  Your view is of the headsman readying their swing.
A shadow passes over the yard and huge roar sounds.  The ground suddenly shakes and the headsman loses balance, spoiling his swing and dropping the axe.  Turning around to face the source the headsman is suddenly knocked aside by an invisible force.
You have a clear view of the source of the sound.  A massive dragon is perched heavily on the tower.
The dragon bellows an ancient sound that turns the sky dark and fireballs begin raining into the yard.
Panic ensues as Imperials turn their attention to the new threat, and unarmed prisoners run for cover. You find yourself free of the block and see the Imperial Hadvar has drawn his sword and is bolting to a wall for cover. The Stormcloak Ralof is taking off across the yard to a nearby tower entrance.
`,
[
    { description: "Run for the tower with Ralof", scene: "cover_with_ralof"},
    { description: "Run to the wall with Hadvar", scene: "cover_with_hadvar"},
])

scenes.createScene("cover_with_ralof", 
`Entering the tower behind Ralof, you see Ulfric is already there and has somehow removed his gag. The ground shakes again as a battle rages in the yard.`)
    
scenes.createScene("cover_with_hadvar", 
`Hadvar presses himself against the wall as fire rains over it. "Still alive prisoner?  You better stay close to me if you want to stay that way."  The ground shakes again as a battle rages in the yard.`)
