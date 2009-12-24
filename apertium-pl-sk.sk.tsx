<?xml version="1.0" encoding="UTF-8"?>
<tagger name="slovakian">
<tagset>
  <def-label name="PR" closed="true">
    <tags-item tags="pr"/>
  </def-label> 
  <def-label name="PRE" closed="true">
    <tags-item lemma="pre" tags="pr"/>
  </def-label> 
  <def-label name="PO" closed="true">
    <tags-item lemma="po" tags="pr"/>
  </def-label> 
  <def-label name="GENPR" closed="true">
    <tags-item lemma="do" tags="pr"/>
    <tags-item lemma="od" tags="pr"/>
    <tags-item lemma="mimo" tags="pr"/>
    <tags-item lemma="z" tags="pr"/>
    <tags-item lemma="bez" tags="pr"/>
    <tags-item lemma="miesto" tags="pr"/>
    <tags-item lemma="okrem" tags="pr"/>
    <tags-item lemma="postred" tags="pr"/>
    <tags-item lemma="spod" tags="pr"/>
    <tags-item lemma="sponad" tags="pr"/>
    <tags-item lemma="spomedzi" tags="pr"/>
    <tags-item lemma="uprostred" tags="pr"/>
    <tags-item lemma="u" tags="pr"/>
    <tags-item lemma="vôkol" tags="pr"/>
    <tags-item lemma="za" tags="pr"/>
  </def-label> 
  <def-label name="DATPR" closed="true">
    <tags-item lemma="k" tags="pr"/>
    <tags-item lemma="napriek" tags="pr"/>
    <tags-item lemma="naproti" tags="pr"/>
    <tags-item lemma="proti" tags="pr"/>
    <tags-item lemma="kvôli" tags="pr"/>
    <tags-item lemma="voči" tags="pr"/>
  </def-label> 
  <def-label name="ACCPR" closed="true">
    <tags-item lemma="pre" tags="pr"/>
    <tags-item lemma="po" tags="pr"/>
    <tags-item lemma="pod" tags="pr"/>
    <tags-item lemma="popod" tags="pr"/>
    <tags-item lemma="o" tags="pr"/>
    <tags-item lemma="v" tags="pr"/>
    <tags-item lemma="na" tags="pr"/>
    <tags-item lemma="nad" tags="pr"/>
    <tags-item lemma="pred" tags="pr"/>
    <tags-item lemma="za" tags="pr"/>
    <tags-item lemma="cez" tags="pr"/>
    <tags-item lemma="medzi" tags="pr"/>
    <tags-item lemma="skrz" tags="pr"/>
  </def-label> 
  <def-label name="LOCPR" closed="true">
    <tags-item lemma="v" tags="pr"/>
    <tags-item lemma="na" tags="pr"/>
    <tags-item lemma="o" tags="pr"/>
    <tags-item lemma="pri" tags="pr"/>
    <tags-item lemma="popri" tags="pr"/>
  </def-label> 
  <def-label name="INSPR" closed="true">
    <tags-item lemma="s" tags="pr"/>
    <tags-item lemma="medzi" tags="pr"/>
    <tags-item lemma="nad" tags="pr"/>
    <tags-item lemma="pod" tags="pr"/>
    <tags-item lemma="pred" tags="pr"/>
    <tags-item lemma="za" tags="pr"/>
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

  <def-label name="ADJPO" closed="true">
    <tags-item tags="adj.po"/>
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
  <enforce-after label="PO">
    <label-set>
      <label-item label="ADJPO"/>
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
