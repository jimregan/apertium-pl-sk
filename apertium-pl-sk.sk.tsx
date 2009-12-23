<?xml version="1.0" encoding="UTF-8"?>
<tagger name="slovakian">
<tagset>
  <def-label name="PR" closed="true">
    <tags-item tags="pr"/>
  </def-label> 
  <def-label name="PRE" closed="true">
    <tags-item lemma="pre" tags="pr"/>
  </def-label> 
  <def-label name="GENPR" closed="true">
    <tags-item lemma="do" tags="pr"/>
    <tags-item lemma="mimo" tags="pr"/>
    <tags-item lemma="z" tags="pr"/>
  </def-label> 
  <def-label name="DATPR" closed="true">
    <tags-item lemma="k" tags="pr"/>
  </def-label> 
  <def-label name="ACCPR" closed="true">
    <tags-item lemma="pre" tags="pr"/>
  </def-label> 
  <def-label name="LOCPR" closed="true">
    <tags-item lemma="v" tags="pr"/>
    <tags-item lemma="na" tags="pr"/>
    <tags-item lemma="o" tags="pr"/>
  </def-label> 
  <def-label name="INSPR" closed="true">
    <tags-item lemma="s" tags="pr"/>
  </def-label> 
  <def-label name="P3DETPOS" closed="true">
    <tags-item lemma="jej" tags="det.pos.adv"/>
    <tags-item lemma="jeho" tags="det.pos.adv"/>
    <tags-item lemma="ich" tags="det.pos.adv"/>
  </def-label> 

  <def-label name="PRPERS" closed="true">
    <tags-item lemma="prpers" tags="prn.*"/>
  </def-label> 

  <def-label name="P3PRNNONPR" closed="true">
    <tags-item lemma="prpers" tags="prn.emph.p3.m.sg.acc"/>
    <tags-item lemma="prpers" tags="prn.emph.p3.nt.sg.acc"/>
    <tags-item lemma="prpers" tags="prn.emph.p3.m.sg.gen"/>
    <tags-item lemma="prpers" tags="prn.emph.p3.nt.sg.gen"/>
    <tags-item lemma="prpers" tags="prn.emph.p3.ma.sg.acc"/>
    <tags-item lemma="prpers" tags="prn.emph.p3.ma.sg.gen"/>
    <tags-item lemma="prpers" tags="prn.emph.p3.mf.sg.acc"/>
    <tags-item lemma="prpers" tags="prn.emph.p3.mf.sg.gen"/>
    <tags-item lemma="prpers" tags="prn.emph.p3.f.sg.dat"/>
  </def-label> 
  <def-mult name="PRENEHOEMPHNT" closed="true">  
    <sequence>
      <label-item label="PRE"/>
      <tags-item tags="prn.emph.p3.nt.sg.acc"/>
    </sequence>
  </def-mult>
  <def-mult name="PRENEHOEMPHM" closed="true">  
    <sequence>
      <label-item label="PRE"/>
      <tags-item tags="prn.emph.p3.m.sg.acc"/>
    </sequence>
  </def-mult>
  <def-mult name="PRENEHONT" closed="true">  
    <sequence>
      <label-item label="PRE"/>
      <tags-item tags="prn.p3.nt.sg.acc"/>
    </sequence>
  </def-mult>
  <def-mult name="PRENEHOM" closed="true">  
    <sequence>
      <label-item label="PRE"/>
      <tags-item tags="prn.p3.m.sg.acc"/>
    </sequence>
  </def-mult>
</tagset>

<forbid>
  <label-sequence>
    <label-item label="PR"/>
    <label-item label="P3PRNNONPR"/>
  </label-sequence>
</forbid>

<enforce-rules>
  <enforce-after label="PR">
    <label-set>
      <label-item label="P3DETPOS"/>
    </label-set>
  </enforce-after>
</enforce-rules>

<preferences>
  <prefer tags="prn.emph.p3.nt.sg.gen"/>
  <prefer tags="prn.emph.p3.nt.sg.dat"/>
  <prefer tags="prn.emph.p3.nt.sg.acc"/>
  <prefer tags="prn.emph.p3.nt.sg.ins"/>
  <prefer tags="prn.emph.p3.nt.sg.loc"/>
  <prefer tags="prn.emph.p3.ma.pl.gen"/>
  <prefer tags="prn.emph.p3.ma.pl.dat"/>
  <prefer tags="prn.emph.p3.ma.pl.acc"/>
  <prefer tags="prn.emph.p3.ma.pl.ins"/>
  <prefer tags="prn.emph.p3.ma.pl.loc"/>
</preferences>
</tagger>
