const express = require("express")
const app = express();
var listener = app.listen(process.env.PORT || 2000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});



const { Client, Intents, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


client.on('ready', () => {
console.log(`${client.user.tag} Ready`)
});



client.on('messageCreate', message => {
  if (message.content === 'send') {
    const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
                    .setCustomId('wset0')
                    .setLabel('وسيط تجريبي')
                    .setEmoji('<:44:1115275629479333928>')
                    .setStyle('SECONDARY'),
    new MessageButton()
                    .setCustomId('wset1')
                    .setLabel('وسيط¹')
                    .setEmoji('<:44:1115275629479333928>')
                    .setStyle('SECONDARY'),
      new MessageButton()
                    .setCustomId('wset2')
                    .setLabel('وسيط²')
      .setEmoji('<:44:1115275629479333928>')
                    .setStyle('SECONDARY'),
      new MessageButton()
                    .setCustomId('wset3')
                    .setLabel('وسيط³')
      .setEmoji('<:44:1115275629479333928>')
                    .setStyle('SECONDARY'),
      new MessageButton()
                    .setCustomId('wset4')
                    .setLabel('وسيط⁴')
      .setEmoji('<:44:1115275629479333928>')
                    .setStyle('SECONDARY'),
    )

    const embed = new MessageEmbed()
    .setTitle('وسيط')
    .setDescription(`**- يرجى العلم قبل فتح التذكرة يجب التأكد من سـ3ـر العمليه لأن كل وسيط لهُ حد معين ليتوسط عليه ، والسيرفر خالي المسؤولية إذا حدثت خسائر إضافية بسبب فتح التذكرة الخاطئة .
    و حدود الوسطاء كـ الأتى :
    -
    وسيط تجريبي { فوق 0 إلى 250k }.
    وسيط ¹ { فوق 250k إلى 500k }.
    وسيط ² { فوق 500k إلى 1m }.
    وسيط ³ { فوق 1.2m إلى 1.7m}.
    وسيط ⁴ { فوق 1.8mإلى .2.5m }.

    -
    مع العلم أن هناك نسبه للوسيط وهيَ 1.5% أو 1 جنيه في الكاش ولا توجد نسبه لـ الوسطاء التجريبيون .
    -
    للتوسط فيما أعلى من 2.5m توجه إلى #〢وسيط・معتمد 
    -
    إذا كان لديك أي أساله أو أستفسارات توجه إلى #〢الدعم・الفني 
    -
    ونتمني لكم تجربة سعيدة لخدمتنا وبالتوفيق لكم وشكرََا .**`);

        message.channel.send({ embeds: [embed], components: [row] });
      }
    });


client.on('interactionCreate', async interaction => {
  if (!interaction.isButton()) return;

  if (interaction.customId === 'wset0') {
    const categoryId = 'ايدي روم كاتجوري وسيط تجريبي';

    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('closeTicket')
          .setLabel('قفل')
          .setStyle('DANGER'),
        new MessageButton()
          .setCustomId('claimTicket')
          .setLabel('استلام')
          .setStyle('SECONDARY')
      );

    const channel = await interaction.guild.channels.create('ticket', {
      type: 'GUILD_TEXT',
      parent: categoryId,
      permissionOverwrites: [
        {
          id: interaction.user.id,
          allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
        },
        {
          id: interaction.guild.roles.everyone,
          deny: ['VIEW_CHANNEL'],
        },
      ],
    });

    const embed = new MessageEmbed()
          .setTitle('**وسيط تجريبي**')
          .setDescription(`**يرجى عدم إزعاج الوسيط بالمنشن و إحترام الوسيط اذا تم التأخر عن ردك في التكت سوف يتم إغلاقها واذا تأخر الوسيط يرجى الانتظار لتراكم العمليات 
    للعلم الحد الأعلى لهذا التكت هو {من 0 الى 250 الف}**`)
          .setColor('#0099ff');

        await channel.send({ content: `هنا منشن رتبة وسيط تجريبي`, embeds: [embed], components: [row], ephemeral: true });

        await interaction.reply({ content: `لقد تم فتح تذكرة توجه الى روم ${channel}`, ephemeral: true });
      }
    });



client.on('interactionCreate', async interaction => {
  if (!interaction.isButton()) return;

  if (interaction.customId === 'wset1') {
    const categoryId = 'ايدي روم كاتجوري وسيط 1';

    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('closeTicket')
          .setLabel('قفل')
          .setStyle('DANGER'),
        new MessageButton()
          .setCustomId('claimTicket')
          .setLabel('استلام')
          .setStyle('SECONDARY')
      );

const channel = await interaction.guild.channels.create('ticket', {
      type: 'GUILD_TEXT',
      parent: categoryId,
      permissionOverwrites: [
        {
          id: interaction.user.id,
          allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
        },
        {
          id: interaction.guild.roles.everyone,
          deny: ['VIEW_CHANNEL'],
        },
      ],
    });

    const embed = new MessageEmbed()
          .setTitle('**وسيط¹**')
          .setDescription(`**يرجى عدم إزعاج الوسيط بالمنشن و إحترام الوسيط اذا تم التأخر عن ردك في التكت سوف يتم إغلاقها واذا تأخر الوسيط يرجى الانتظار لتراكم العمليات 
    للعلم الحد الأعلى لهذا التكت هو {من 250الف الى 500الف }**`)
          .setColor('#0099ff');

        await channel.send({ content: `هنا منشن رتبة وسيط 1`, embeds: [embed], components: [row], ephemeral: true });

        await interaction.reply({ content: `لقد تم فتح تذكرة توجه الى روم ${channel}`, ephemeral: true });
      }
    });



client.on('interactionCreate', async interaction => {
  if (!interaction.isButton()) return;

  if (interaction.customId === 'wset2') {
    const categoryId = 'ايدي روم كاتجوري وسيط 2';

    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('closeTicket')
          .setLabel('قفل')
          .setStyle('DANGER'),
        new MessageButton()
          .setCustomId('claimTicket')
          .setLabel('استلام')
          .setStyle('SECONDARY')
      );

const channel = await interaction.guild.channels.create('ticket', {
      type: 'GUILD_TEXT',
      parent: categoryId,
      permissionOverwrites: [
        {
          id: interaction.user.id,
          allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
        },
        {
          id: interaction.guild.roles.everyone,
          deny: ['VIEW_CHANNEL'],
        },
      ],
    });


    const embed = new MessageEmbed()
          .setTitle('**وسيط²**')
          .setDescription(`**يرجى عدم إزعاج الوسيط بالمنشن و إحترام الوسيط اذا تم التأخر عن ردك في التكت سوف يتم إغلاقها واذا تأخر الوسيط يرجى الانتظار لتراكم العمليات 
    للعلم الحد الأعلى لهذا التكت هو {من 500 الف الى 1 مليون}**`)
          .setColor('#0099ff');

        await channel.send({ content: `هنا منشن رتبة وسيط 2`, embeds: [embed], components: [row], ephemeral: true });

        await interaction.reply({ content: `لقد تم فتح تذكرة توجه الى روم ${channel}`, ephemeral: true });
      }
    });



client.on('interactionCreate', async interaction => {
  if (!interaction.isButton()) return;

  if (interaction.customId === 'wset3') {
    const categoryId = 'ايدي روم كاتجوري وسيط 3';

    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('closeTicket')
          .setLabel('قفل')
          .setStyle('DANGER'),
        new MessageButton()
          .setCustomId('claimTicket')
          .setLabel('استلام')
          .setStyle('SECONDARY')
      );

const channel = await interaction.guild.channels.create('ticket', {
      type: 'GUILD_TEXT',
      parent: categoryId,
      permissionOverwrites: [
        {
          id: interaction.user.id,
          allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
        },
        {
          id: interaction.guild.roles.everyone,
          deny: ['VIEW_CHANNEL'],
        },
      ],
    });

    const embed = new MessageEmbed()
          .setTitle('**وسيط³**')
          .setDescription(`**يرجى عدم إزعاج الوسيط بالمنشن و إحترام الوسيط اذا تم التأخر عن ردك في التكت سوف يتم إغلاقها واذا تأخر الوسيط يرجى الانتظار لتراكم العمليات 
    للعلم الحد الأعلى لهذا التكت هو {من 1.2 مليون الى 1.7 مليون}**`)
          .setColor('#0099ff');

        await channel.send({ content: `هنا منشن رتبة وسيط 3`, embeds: [embed], components: [row], ephemeral: true });

        await interaction.reply({ content: `لقد تم فتح تذكرة توجه الى روم ${channel}`, ephemeral: true });
      }
    });


client.on('interactionCreate', async interaction => {
  if (!interaction.isButton()) return;

  if (interaction.customId === 'wset4') {
    const categoryId = 'ايدي روم كاتجوري وسيط 4';

    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('closeTicket')
          .setLabel('قفل')
          .setStyle('DANGER'),
        new MessageButton()
          .setCustomId('claimTicket')
          .setLabel('استلام')
          .setStyle('SECONDARY')
      );

const channel = await interaction.guild.channels.create('ticket', {
      type: 'GUILD_TEXT',
      parent: categoryId,
      permissionOverwrites: [
        {
          id: interaction.user.id,
          allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
        },
        {
          id: interaction.guild.roles.everyone,
          deny: ['VIEW_CHANNEL'],
        },
      ],
    });

    const embed = new MessageEmbed()
          .setTitle('**وسيط⁴**')
          .setDescription(`**يرجى عدم إزعاج الوسيط بالمنشن و إحترام الوسيط اذا تم التأخر عن ردك في التكت سوف يتم إغلاقها واذا تأخر الوسيط يرجى الانتظار لتراكم العمليات 
    للعلم الحد الأعلى لهذا التكت هو {من 1.8 مليون مليون الى 2.5 مليون}**`)
          .setColor('#0099ff');

        await channel.send({ content: `هنا منشن رتبة وسيط 4`, embeds: [embed], components: [row], ephemeral: true });

        await interaction.reply({ content: `لقد تم فتح تذكرة توجه الى روم ${channel}`, ephemeral: true });
      }
    });



client.on('messageCreate', message => {
    if (message.content === 'sent') {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('wset')
                    .setLabel('وسيط معتمد')
                    .setEmoji('<:44:1115275629479333928>')
                    .setStyle('SECONDARY')
            );

        const embed = new MessageEmbed()
            .setTitle('**وسيط معتمد**')
            .setDescription(`**- يرجى العلم أن هذه التذكرة للمبالغ التي تتعدى الـ 2.5m فقط ، ويرجى عند فتح التذكرة التأكد من حدود الوسطاء نظرََا لتغير الحدود في المعتمد والسيرفر غير مسؤول إذا حدثت خسائر أضافية بسبب التوسط فوق حد الوسيط ويتحمل الطرفين الخسائر الأضافية ، ويرجى التأكد من id الوسيط وأن الوسيط لن يقوم بالتواصل أو طلب منك شئ بالخاص إلا في حالات معينة وحينها عليك التأكد جيدََا من الـ id ، ويرجى عدم الأزعاج بالمنشن لعدم أغلاق التذكرة وأنه أن لم يتم الرد على التذكرة الخاصة بك أو تم غلقها بأن سلـ3ـتك صعبة التوسط أو لا يوجد وسيط لسلـ3ـتك حاليََا ، ونتمنى لكم تجربة سعيدة لخدمتنا وبالتوفيق لكم وشكرََا.**`);

        message.channel.send({ embeds: [embed], components: [row] });
    }
});


client.on('interactionCreate', async interaction => {
  if (!interaction.isButton()) return;

  if (interaction.customId === 'wset') {
    const categoryId = 'ايدي روم كاتجوري وسيط معتمد';

    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('closeTicket')
          .setLabel('قفل')
          .setStyle('DANGER'),
        new MessageButton()
          .setCustomId('claimTicket')
          .setLabel('استلام')
          .setStyle('SECONDARY')
      );

const channel = await interaction.guild.channels.create('ticket', {
      type: 'GUILD_TEXT',
      parent: categoryId,
      permissionOverwrites: [
        {
          id: interaction.user.id,
          allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
        },
        {
          id: interaction.guild.roles.everyone,
          deny: ['VIEW_CHANNEL'],
        },
      ],
    });


    const embed = new MessageEmbed()
          .setTitle('**وسيط معتمد**')
          .setDescription(`**يرجى عدم إزعاج الوسيط بالمنشن و إحترام الوسيط اذا تم التأخر عن ردك في التكت سوف يتم إغلاقها واذا تأخر الوسيط يرجى الانتظار لتراكم العمليات 
    للعلم هذه تذكره للمبالغ فوق 2.5m**`)
          .setColor('#0099ff');

        await channel.send({ content: `هنا منشن رتبة وسيط معتمد`, embeds: [embed], components: [row], ephemeral: true });

        await interaction.reply({ content: `لقد تم فتح تذكرة توجه الى روم ${channel}`, ephemeral: true });
      }
    });


client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;

    if (interaction.customId === 'closeTicket') {
        setTimeout(async () => {
            await interaction.channel.delete();
        }, 5000);

        await interaction.reply('**سوف يتم حذف التذكرة بعد 5 ثواني**');
    }
});




client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;

    if (interaction.customId === 'claimTicket') {
        const roleID = 'هنا حط ايدي رول الى تستخدم الامر بتكتات الوسطاء'
        const member = await interaction.guild.members.fetch(interaction.user.id);

        if (member.roles.cache.has(roleID)) {
            await interaction.reply(`تم استلام التذكرة من قبل ؛ ${interaction.user}`);
        } else {
            await interaction.reply('**عذرًا، ليس لديك الصلاحيات اللازمة لاستلام التذكرة.**');
        }
    }
});




client.on('messageCreate', message => {
    if (message.content === 'gg') {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('support')
                    .setLabel('support')
                    .setEmoji('<:support:1010452716998361139>')
                    .setStyle('SECONDARY')
            );

        const embed = new MessageEmbed()
            .setTitle('**الدعم الفني**')
            .setDescription(`**- يرجى العلم أن هذه التذكرة مخصصة للمساعدة بـ أشياء تخص السيرفر 
مثل الأتي :
-

 أسئلة عن شي يخص السيرفر 

  أخذت عقوبة عن طريق الخطأ في السيرفر 

 تبليغ عن مشاكل فنية بـ السيرفر 
 
-
فتح تكت لأشياء مثل المزح او الأستهبال عليها عقوبات .
-
لـ فتح تذكرة لدعم السيرفر اضغط support**`);

        message.channel.send({ embeds: [embed], components: [row] });
    }
});



client.on('interactionCreate', async interaction => {
  if (!interaction.isButton()) return;

  if (interaction.customId === 'support') {
    const categoryId = '';

    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('closeTicket')
          .setLabel('قفل')
          .setStyle('DANGER'),
        new MessageButton()
          .setCustomId('staff')
          .setLabel('استلام')
          .setStyle('SECONDARY')
      );

const channel = await interaction.guild.channels.create('ticket', {
      type: 'GUILD_TEXT',
      parent: categoryId,
      permissionOverwrites: [
        {
          id: interaction.user.id,
          allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
        },
        {
          id: interaction.guild.roles.everyone,
          deny: ['VIEW_CHANNEL'],
        },
      ],
    });


    const embed = new MessageEmbed()
          .setTitle('**الدعم الفني**')
          .setDescription(`**يرجي الأنتظار وعدم الإزعاج بالمنشن ، ف حالة أردت أن تغلق التكت أضغط على الـ قفل ، وشكراََ.**`)
          .setColor('#0099ff');

        await channel.send({ content: `هنا منشن رتبة الدعم الفني`, embeds: [embed], components: [row], ephemeral: true });

        await interaction.reply({ content: `لقد تم فتح تذكرة توجه الى روم ${channel}`, ephemeral: true });
      }
    });



client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;

    if (interaction.customId === 'staff') {
        const roleID = 'هنا حط ايدي رتبة الدعم الفني'; 
        const member = await interaction.guild.members.fetch(interaction.user.id);

        if (member.roles.cache.has(roleID)) {
            await interaction.reply(`تم استلام التذكرة من قبل ؛ ${interaction.user}`);
        } else {
            await interaction.reply('**عذرًا، ليس لديك الصلاحيات اللازمة لاستلام التذكرة.**');
        }
    }
});



client.login(process.env.token);
