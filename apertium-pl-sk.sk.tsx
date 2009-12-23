<?xml version="1.0" encoding="UTF-8"?>
<tagger name="slovakian">
<tagset>
  <def-label name="PR" closed="true">
    <tags-item tags="pr"/>
  </def-label> 
  <def-label name="PRE" closed="true">
    <tags-item lemma="pre" tags="pr"/>
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
