@bot.event
async def on_message(message):
    # Initial var 
    triggered = False
 
    for entry in curseWord:
        if str(message.content).lower().find(str(entry).strip().lower()) != -1:
            # Triggered event
            triggered = True
            # Cancel looking further because we already have all the evidence.
            break

    if triggered:
        await message.guild.kick(user=message.author,)
    else: 
        return

    try:
       await message.delete()
    except:
       pass
      
